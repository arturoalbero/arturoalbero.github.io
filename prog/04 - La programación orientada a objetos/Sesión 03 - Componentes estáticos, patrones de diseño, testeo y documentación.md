
# Sesión 03: Componentes estáticos, patrones de diseño, testeo y documentación

- [Sesión 03: Componentes estáticos, patrones de diseño, testeo y documentación](#sesión-03-componentes-estáticos-patrones-de-diseño-testeo-y-documentación)
  - [1. Métodos y atributos estáticos](#1-métodos-y-atributos-estáticos)
    - [Actividad 8: Uso de métodos y atributos estáticos](#actividad-8-uso-de-métodos-y-atributos-estáticos)
  - [2. El patrón de diseño Singleton](#2-el-patrón-de-diseño-singleton)
    - [Actividad 9: La clase biblioteca](#actividad-9-la-clase-biblioteca)
    - [Actividad 10: Pruebas unitarias con singleton](#actividad-10-pruebas-unitarias-con-singleton)
  - [3. Javadoc](#3-javadoc)
    - [Actividad 11: Documenta el proyecto Biblioteca](#actividad-11-documenta-el-proyecto-biblioteca)
  - [4. Diagramas en PlantUML y markdown](#4-diagramas-en-plantuml-y-markdown)
    - [Actividad 12: Diagramas en Markdown](#actividad-12-diagramas-en-markdown)

## 1. Métodos y atributos estáticos

Existe una palabra reservada que hemos estado utilizando hasta ahora sin saber muy bien qué era: `static`. Los métodos y atributos estáticos son aquellos que no pertenecen al objeto, sino a la clase.

Esto quiere decir que una vez que el programa es ejecutado, son siempre accesibles independientemente de si hay o no instancias de la clase que los contiene.

En las primeras etapas del curso hemos usado los elementos estáticos para simular el paradigma de programación procedural en Java, es decir, la resolución de problemas mediante funciones/procedimientos y no mediante objetos.

Si declaramos una atributo como estático, se convierte en una especie de variable con ámbito dentro de toda la clase y a la cual podemos acceder desde fuera dependiendo de su visibilidad. Lo mismo sucede con los métodos.

Una cosa que hay que tener en cuenta es que no se pueden usar atributos de la clase dentro de métodos estáticos (porque, en realidad, no tiene sentido ya que no hay instancia de la clase), pero sí podemos usar atributos estáticos dentro de métodos del objeto.

En cierto modo, podemos usar las clases como contenedores de métodos estáticos, que se comportan como librerías de funciones. Tal es el caso de la clase `Math`, que incluye métodos estáticos para operaciones matemáticas complejas.

De esta manera, podemos emplear los atributos y métodos estáticos como herramientas útiles para emplear dentro o fuera de la clase.

### Actividad 8: Uso de métodos y atributos estáticos

Crea una variable estática dentro de la clase libro que sirva para contar el número de libros (instancias) que hay. Empléala para darles a cada libro un identificador único. Para ello, añade un atributo privado `id` de tipo entero. El `id` no debe pasarse como atributo al constructor ni debe poder ser modificado con un setter.

Después, crea un método estático dentro de la clase Estantería que reciba como parámetro una estantería y devuelva un array de string. El contenido del array de string es cada uno de los parámetros, incluido el `id`, separado por el caracter `;`. Puedes rodear cada parámetro entre \` \` si dentro de alguno de los campos hubiera un `;`. Cada libro ocupa un espacio distinto del array. A este formato de texto se le conoce como CSV (Comma Separated Values) y es muy empleado en la codificación de datos.

---

## 2. El patrón de diseño Singleton

Uno de los usos más particulares de los atributos y métodos estáticos es mediante el patrón de diseño Singleton. Este patrón garantiza que solo haya una instancia de una clase haciendo que el constructor sea privado.

Para que funcione, dentro de la clase debemos añadir un atributo privado y estático de la propia clase, así como un getter para ese atributo. En el getter, si la instancia no está inicializada, se llama al constructor. Después, en cualquier caso, se devuelve la instancia.

De esta forma, si no hay instancia, se crea una y, si la hay, obtienes la que ya había.

```java
public class Singleton {
    // Instancia privada y estática de la clase
    private static Singleton instancia;

    // Constructor privado para evitar la instanciación desde fuera
    private Singleton() { }

    // Método público y estático que proporciona acceso a la única instancia
    public static Singleton getInstancia() {
        if (instancia == null) {
            instancia = new Singleton(); // Crear instancia si no existe
        }
        return instancia; // Retornar la instancia única
    }
}
```

Aunque el patrón singleton es muy útil para almacenar datos globales y de configuración, no está exento de problemas:

- **Dificultad para el testeo y el mantenimiento:** La naturaleza global de la instancia puede complicar las pruebas unitarias, ya que introduce un acoplamiento fuerte. El acoplamiento ocurre cuando un módulo o clase es altamente dependiente de otro, es decir, necesita conocer detalles específicos de la implementación del otro para funcionar y, por lo tanto, es más complejo de mantener.
- **Problemas de concurrencia:** En entornos multihilo, puede haber problemas si no se maneja adecuadamente el acceso a la instancia. Esto se soluciona con los mecanismos propios de la programación concurrente, pero añaden complejidad a la ejecución del programa.

### Actividad 9: La clase biblioteca

La clase `Biblioteca` contiene diez estanterías, numeradas del 1 al 10. Añade este atributo a la clase `Estanteria`. Solo existe una biblioteca. La biblioteca permite hacer las siguientes cosas:

- Añadir libros nuevos. Se añaden a la primera estantería disponible. Devuelve falso si la biblioteca está llena.
- Añadir libros nuevos a estanterías concretas. Devuelve falso si la estantería no tiene hueco.
- Eliminar un libro. Se le pasa el isbn del libro y, si está, devuelve verdadero y lo elimina. Si no está, devuelve falso.
- Cambiar un libro de estantería. Se le pasa el isbn del libro y el número de la estantería. Devuelve verdadero si se puede cambiar o si ya estuviera en la estantería. Devuelve falso si la estantería nueva está llena o si el libro no existe en la biblioteca.
- Mejora el método anterior con un enum que indique lo que ha pasado en cada caso.
- Intercambia dos libros de estantería. Recibe como parámetro el isbn de los dos libros y devuelve verdadero si el cambio es posible y falso si no lo es (por ejemplo, porque un libro no existe en la librería).
- Un método que, dado el isbn o el título de un libro, te devuelva la estantería en la que se encuentra.
- Un método que te devuelva el libro con más páginas.
- Un método que te devuelva la primera estantería con más libros.
- Un método que te devuelva la primera estantería con más páginas.
- Cambia el main para que realice las siguientes acciones:
  - Primero consigue el acceso a la biblioteca.
  - Después te pide introducir todos los libros secuencialmente.
  - Después te pide eliminar 5 libros. Detecta si hay algún problema.
  - Después te pide introducir 5 libros en distintas estanterías. Detecta si hay algún problema.
  - Después te pide cambiar 4 libros de estantería. Detecta si hay algún problema.
  - Después te pide intercambiar libros 2 veces. Detecta si hay algún problema.
  - Muestra la biblioteca entera en formato csv.
  - Finalmente, muestra el libro con más páginas y en qué estantería se encuentra; muestra la estantería con más libros y también la estantería con más páginas.

### Actividad 10: Pruebas unitarias con singleton

Para ejecutar pruebas unitarias con singleton, debemos "trampear" el singleton. Una técnica sencilla es crear un método para restablecer la instancia, para así poder controlar de forma precisa qué datos tiene la instancia en cada momento. Este método es tan sencillo como lo que sigue:

```java
public static void resetInstancia() {
        instancia = null;
    }
```

Con esto en mente, crea un conjunto de pruebas unitarias para todos los métodos de la clase `Biblioteca`.

---

## 3. Javadoc

Javadoc es una herramienta oficial de Java que se utiliza para generar documentación API en formato HTML directamente desde el código fuente. Esta documentación se basa en comentarios especiales que se escriben en el código, justo antes de las clases, métodos y otros elementos, y proporciona una manera fácil de crear y mantener documentación legible y coherente para los desarrolladores.

Javadoc utiliza comentarios específicos que comienzan con `/**` y terminan con `*/`, lo que los distingue de los comentarios regulares en Java (`//` y `/*` ... `*/`). Los comentarios Javadoc incluyen etiquetas especiales:

- `@author`: Especifica quién escribió la clase.
- `@version`: Es la versión actual de la clase, útil para llevar control de cambios.
- `@since`: Indica la fecha o versión en la que la clase fue introducida o modificada.
- `@param` para describir parámetros.
- `@return` para describir el valor de retorno.
- `@throws` para excepciones (si las hay).

```java
/**
 * Clase que representa una cuenta bancaria simple con operaciones 
 * básicas como depósito, retiro y consulta de saldo.
 * 
 * Esta clase es utilizada para gestionar cuentas bancarias individuales
 * en una aplicación de banca.
 * 
 * 
 * @author Juan Pérez
 * @version 1.0
 * @since 2024-10-24
 */
public class CuentaBancaria {

    private double saldo;

    /**
     * Constructor para crear una cuenta bancaria con un saldo inicial.
     * 
     * @param saldoInicial El saldo inicial de la cuenta.
     */
    public CuentaBancaria(double saldoInicial) {
        this.saldo = saldoInicial;
    }

    /**
     * Método para depositar dinero en la cuenta bancaria.
     * 
     * @param monto El monto a depositar.
     */
    public void depositar(double monto) {
        this.saldo += monto;
    }

    /**
     * Método para retirar dinero de la cuenta bancaria.
     * 
     * @param monto El monto a retirar.
     * @throws IllegalArgumentException si el monto es mayor que el saldo.
     */
    public void retirar(double monto) {
        if (monto > saldo) {
            throw new IllegalArgumentException("Fondos insuficientes");
        }
        this.saldo -= monto;
    }

    /**
     * Método que devuelve el saldo actual de la cuenta.
     * 
     * @return El saldo actual de la cuenta.
     */
    public double consultarSaldo() {
        return this.saldo;
    }
}
```

IntelliJ ofrece herramientas para generar tanto la documentación como la página web resultante de manera más o menos automatizada. Cuando colocas comentarios especiales de javadoc encima de un método, al pulsar intro después de `/**`, aparecerán los parámetros relevantes, así como el cierre del comentario. Una vez documentado el proyecto, seguimos los siguientes pasos en IntelliJ:

1. **Selecciona tu clase o paquete** en el explorador de proyectos, el que contiene el código que quieres documentar.
2. Ve a **Tools** → **Generate JavaDoc** (Herramientas → Generar JavaDoc).

3. Se abre una ventana donde puedes especificar opciones como:
   - El **directorio de salida** donde se guarda la documentación generada (generalmente un directorio como `docs` o `javadoc`).
   - Los **filtros** para elegir si quieres generar la documentación para todo el proyecto, solo algunas clases, etc.
   - La posibilidad de inclusión de **fuentes** o **archivos relacionados** en la documentación.

4. Haz clic en **OK**. IntelliJ ejecutará el proceso de generación de Javadoc.

Una vez completada la generación, se puede encontrar la documentación en el directorio especificado, normalmente en formato HTML. Busca el archivo `index.html`.

La documentación es especialmente importante cuando se trabaja en equipo o en proyectos grandes, pero es peligrosa si no se mantiene con regularidad, ya que los compiladores avisan de errores en el código, pero normalmente no en la documentación. Puedes emplear modelos de generación de texto a través de Inteligencia Artificial, como *Chatgpt*, para generar documentación de tus clases, aunque el resultado no siempre será adecuado. Sin embargo, sí puede ayudarte a la hora de comprobar que la clase hace, efectivamente, lo que la documentación dice que hace la clase y corregir errores menores y de formato.

### Actividad 11: Documenta el proyecto Biblioteca

Crea un proyecto llamado Biblioteca si no lo tenías hecho ya. El proyecto contendrá un paquete también llamado `biblioteca` y dentro de él estarán las clases `Libro`, `Estanteria` y `Biblioteca` definidas en las actividades anteriores. Fuera del paquete, en el raíz del código fuente, estará la clase  `Main`. Adapta el código para que se ejecute con normalidad. Incluye los test de la clase `Biblioteca`. Documéntalo todo en javadoc y genera la documentación. Con esto, ya tienes un proyecto sencillo de gestión de bibliotecas.

---

## 4. Diagramas en PlantUML y markdown

Estos apuntes están realizados en *VSCode*, empleando la extensión **"Markdown All in One"** y la extensión de *PlantUML* para generar los diagramas. Puedes consultar más sobre [*PlantUML* en este enlace](https://plantuml.com/es/). Para que los diagramas se impriman bien al pasarlos a html o pdf, es necesario añadir en el archivo settings.json las siguientes líneas:

```json
"markdown-pdf.plantumlOpenMarker": "```plantuml",
"markdown-pdf.plantumlCloseMarker": "```",
```

El archivo settings.json es accesible desde los comandos de *vscode*. Para entrar en ellos, pulsa F1 o escribe `>` dentro del buscador.

Al escribir diagramas se puede observar que la sintaxis no es muy diferente a hacerlos directamente sobre un lenguaje de programación convencional. Hay herramientas como Visual Paradigm que convierten el código en diagramas y también los diagramas en código.

### Actividad 12: Diagramas en Markdown

Consulta la documentación oficial de [*PlantUML*](https://plantuml.com/es/) y escribe todos los diagramas que has realizado hasta ahora en *vscode*. Puedes usar la extensión `.plantuml` y luego exportarlos como imagen, o bien integrarlos dentro de un archivo *markdown*.

---
