---
title: Programación en tiempo real
description: Programación en tiempo real. Interrupciones. Sincronización y comunicación entre tareas. Lenguajes.
---
## **1. Programación en Tiempo Real**

La programación en tiempo real se caracteriza por garantizar respuestas dentro de márgenes temporales estrictos y predecibles. A diferencia de los sistemas convencionales, donde la corrección lógica es suficiente, en estos sistemas el **tiempo de respuesta es un requisito fundamental**.

### **1.1. Sistemas en Tiempo Real (STR)**

Los sistemas de tiempo real se clasifican según su criticidad:

- **Sistemas de tiempo real duro (Hard Real-Time)**:  
  El incumplimiento de los plazos tiene consecuencias graves.  
  **Ejemplos**:  
  - Sistemas de control de vuelo en aeronaves (ej: Airbus A380).  
  - Dispositivos médicos como marcapasos y respiradores artificiales.  
  - Frenos ABS en automóviles, donde un retraso superior a 10 ms puede ser peligroso.  

- **Sistemas de tiempo real blando (Soft Real-Time)**:  
  Los retrasos son tolerables, aunque afectan la calidad del servicio.  
  **Ejemplos**:  
  - Sistemas de transmisión multimedia (ej: Netflix, Zoom).  
  - Redes de telecomunicaciones VoIP, donde una latencia excesiva degrada la comunicación.  

Además, los sistemas en tiempo real tienen las siguientes características clave:
- **Determinismo temporal**: Las operaciones deben completarse en un tiempo acotado.  
- **Priorización de tareas**: Las tareas críticas tienen máxima prioridad.  
- **Tolerancia a fallos**: Mecanismos de recuperación ante errores.  

##### **1.2. Lenguajes de Programación para STR**

Los lenguajes utilizados en sistemas de tiempo real deben ofrecer control preciso sobre el hardware y un comportamiento predecible.  

- **Ada**: Diseñado específicamente para sistemas críticos. Usado en defensa, aeroespacial y transporte.  
  ```ada
  -- Ejemplo en Ada: Tarea periódica para lectura de sensores
  task Sensor_Reader is
      entry Start;
  end Sensor_Reader;

  task body Sensor_Reader is
  begin
      accept Start;
      loop
          Read_Sensor_Data;
          delay until Clock + Milliseconds(100); -- Ejecución cada 100 ms
      end loop;
  end Sensor_Reader;
  ```  

- **C/C++**: Ampliamente utilizado en sistemas embebidos y de bajo nivel.  
  ```c
  // Ejemplo en C: Control de un motor con temporizador
  #include <avr/io.h>
  #include <avr/interrupt.h>

  ISR(TIMER1_COMPA_vect) {
      PORTB ^= (1 << PB0); // Conmuta señal cada interrupción
  }

  int main() {
      // Configuración del timer
      TCCR1B |= (1 << WGM12) | (1 << CS12); // Modo CTC, preescalador 256
      OCR1A = 15624; // 1 segundo a 16 MHz
      TIMSK1 |= (1 << OCIE1A); // Habilita interrupción
      sei(); // Habilita interrupciones globales

      while (1) {} // Bucle principal
  }
  ```  

- **Rust**: Combina seguridad de memoria con rendimiento, ideal para sistemas modernos.  
  ```rust
  // Ejemplo en Rust: Control concurrente con Mutex
  use std::sync::{Arc, Mutex};
  use std::thread;

  let counter = Arc::new(Mutex::new(0));
  let mut handles = vec![];

  for _ in 0..10 {
      let counter = Arc::clone(&counter);
      let handle = thread::spawn(move || {
          let mut num = counter.lock().unwrap();
          *num += 1;
      });
      handles.push(handle);
  }
  ```  


## **2. Interrupciones**
Las interrupciones son señales que permiten a un sistema responder inmediatamente a eventos externos o internos.  

### **Tipos de Interrupciones**  
- **Por hardware**: Generadas por dispositivos externos (ej: pulsación de tecla, señal de sensor).  
- **Por software**: Provocadas por el programa (ej: llamadas al sistema).  

**Ejemplo en ensamblador (x86)**:  
```asm
section .text
global _start
_start:
    mov al, 0x21        ; Código de interrupción
    int 0x80            ; Llama a la interrupción
```  

**Importancia**:  
- Permiten manejar eventos urgentes sin necesidad de sondeo continuo (*polling*).  
- Clave en sistemas embebidos y de control industrial.  

## **3. Sincronización y Comunicación entre Tareas**

En entornos concurrentes, la coordinación entre tareas es esencial para evitar condiciones de carrera y garantizar consistencia.  

### **3.1. Hilos y Procesos**

- **Proceso**: Instancia independiente con su propio espacio de memoria.  
- **Hilo**: Unidad de ejecución dentro de un proceso (comparte memoria con otros hilos).  

**Ejemplo en Java**:  
```java
public class Main {
    public static void main(String[] args) {
        Thread hilo = new Thread(() -> {
            System.out.println("Hilo secundario en ejecución");
        });
        hilo.start(); // Inicia el hilo
    }
}
```  

### **3.2. Mecanismos de Exclusión Mutua**

- **Semáforos**: Controlan el acceso a recursos compartidos.  
  ```python
  from threading import Semaphore
  sem = Semaphore(3)  # Permite 3 accesos simultáneos
  sem.acquire()       # Bloquea si no hay recursos disponibles
  # Sección crítica
  sem.release()
  ```  

- **Mutex**: Garantiza que solo un hilo acceda a un recurso.  
  ```cpp
  std::mutex mtx;
  mtx.lock();
  // Sección crítica
  mtx.unlock();
  ```  

- **Monitores**: Encapsulan la sincronización en estructuras de alto nivel.  
  ```java
  public class Contador {
      private int valor = 0;
      public synchronized void incrementar() { valor++; }
  }
  ```  

### **3.3. Mecanismos de Sincronización**

- **Barreras cíclicas**: Coordinan el avance de múltiples hilos.  
  ```java
  CyclicBarrier barrera = new CyclicBarrier(3); // Espera 3 hilos
  barrera.await(); // Bloquea hasta que todos lleguen
  ```  

- **Paso de mensajes**: Alternativa a la memoria compartida.  
  ```python
  from multiprocessing import Queue
  q = Queue()
  q.put("Mensaje")  # Envía datos
  print(q.get())    # Recibe datos
  ```  

### **3.4. Comunicación Asíncrona**

La comunicación asíncrona permite la ejecución de tareas concurrentes sin bloqueos, eliminando la necesidad de sincronización inmediata entre procesos. Este paradigma resulta particularmente adecuado para sistemas que demandan:

- Baja latencia (ej: interfaces de usuario responsivas)
- Alta disponibilidad (ej: servicios web 24/7)
- Optimización de recursos (ej: manejo de miles de conexiones simultáneas)

Un caso paradigmático se encuentra en las aplicaciones web modernas, donde JavaScript ha adoptado la asincronía como modelo central, implementado a través de:

- El event loop para gestión de operaciones
- Promesas para manejo de flujos asíncronos
- Async/await para escritura de código secuencial

- **Callbacks**: Funciones que se ejecutan al completar una tarea, haciendo uso de la gestión de operaciones del event loop.  
  ```javascript
  fs.readFile("archivo.txt", (err, data) => {
      if (err) throw err;
      console.log(data);
  });
  ```  

- **Promesas/Futuros**: Representan resultados pendientes. Las operaciones se ejecutan cuando esos resultados están disponibles.

  ```javascript
  fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => console.log(data));
  ```  

- **Async/Await**: Con async marcamos una función como asíncrona y con await, cuando lanzamos una función asíncrona, podemos hacer que el programa espere a su finalización y se comporte, por lo tanto, de manera síncrona (cosa que puede ser útil si la información sí es crítica).  
  ```python
  async def obtener_datos():
      datos = await api.consultar()
      print(datos)
  ```   

### **Conclusión**  
La programación en tiempo real requiere un equilibrio único entre **precisión**, **eficiencia** y **fiabilidad**. Desde lenguajes especializados como Ada hasta técnicas modernas de sincronización, cada componente juega un papel crucial en sistemas donde el tiempo no es solo un factor, sino **el factor decisivo**.  

