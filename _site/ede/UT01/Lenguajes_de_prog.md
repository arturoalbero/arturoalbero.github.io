### Introducción a los Lenguajes de Programación  
En la asignatura de "Entornos de desarrollo" vamos a introducirnos en los conceptos fundamentales de los lenguajes de programación, haciendo énfasis en elementos comunes que nos permitirán comprender y programar en diversos lenguajes como C, C++, C#, Java y Python. Utilizaremos el entorno en línea [MyCompiler.io](https://www.mycompiler.io/es) para escribir, compilar e interpretar nuestro código, permitiéndonos explorar las características esenciales de cada lenguaje.

#### Elementos Básicos de un Lenguaje de Programación

##### Variables
Una **variable** es un espacio en la memoria de un programa donde podemos almacenar y manipular datos. Cada lenguaje de programación maneja las variables de manera diferente en cuanto a la declaración y el tipo de datos que almacenan. Estos tipos de datos pueden ser enteros, decimales, caracteres, cadenas, entre otros.

Por ejemplo, en C o C++ necesitamos declarar el tipo de la variable antes de usarla:

```c
int numero = 5;
char letra = 'A';
```

En lenguajes como Python, no es necesario declarar el tipo, ya que el lenguaje asigna el tipo automáticamente:

```python
numero = 5
letra = 'A'
```

##### Tipos de Datos y Tipado
Los lenguajes de programación también difieren en la manera en que manejan los tipos de datos. Esto nos lleva a dos conceptos importantes:

- **Tipado estático vs. tipado dinámico**: En lenguajes como C, C++ y Java, el tipo de una variable debe ser declarado explícitamente, lo que se denomina **tipado estático**. En cambio, en Python, el tipo de una variable se asigna en tiempo de ejecución, lo que se llama **tipado dinámico**.
  
- **Tipado fuerte vs. tipado débil**: Un lenguaje con **tipado fuerte** (como Java o Python) restringe más las operaciones entre tipos diferentes, mientras que un lenguaje con **tipado débil** (como C) puede permitir ciertas conversiones automáticas entre tipos.

##### Operadores
Los **operadores** permiten realizar operaciones sobre las variables, como sumar, restar, comparar o asignar valores. Los operadores básicos incluyen:

- **Aritméticos**: Suma (`+`), resta (`-`), multiplicación (`*`), división (`/`)
- **De asignación**: Igualdad (`=`), suma y asignación (`+=`), etc.
- **Relacionales**: Mayor que (`>`), menor que (`<`), igual a (`==`), etc.
- **Lógicos**: Y (`&&` o `and`), O (`||` o `or`), negación (`!` o `not`)

Ejemplo de uso de operadores en C++:

```cpp
int a = 10;
int b = 20;
int suma = a + b; // Operador aritmético
bool resultado = (a == b); // Operador relacional
```

##### Entrada y Salida por Consola
La **entrada y salida de datos** es un aspecto fundamental en cualquier lenguaje de programación. Nos permite interactuar con el usuario o con otros sistemas mediante el uso de la consola.

- **Salida por consola**: Imprimir datos en la consola es común en todos los lenguajes. En C o C++, usamos `printf` o `cout` respectivamente, mientras que en Java usamos `System.out.println`, y en Python usamos `print`.
  
Ejemplos de salida en distintos lenguajes:

```c
// En C
printf("Hola Mundo\n");

// En C++
std::cout << "Hola Mundo" << std::endl;

// En Python
print("Hola Mundo")
```

- **Entrada por consola**: Para recibir datos del usuario, podemos usar funciones como `scanf` en C, `cin` en C++ o `input` en Python.

Ejemplo de entrada:

```c
// En C
int edad;
scanf("%d", &edad);

// En Python
edad = input("Introduce tu edad: ")
```

#### Compiladores, Intérpretes y Máquinas Virtuales

Los lenguajes de programación se pueden clasificar según cómo ejecutan su código:

- **Compiladores**: Transforman el código fuente en **código objeto** (binario o ejecutable) antes de ejecutarlo. Ejemplos de lenguajes compilados incluyen C y C++. Aquí, el compilador traduce todo el código antes de ejecutarlo.
  
- **Intérpretes**: Los lenguajes interpretados ejecutan el código línea por línea sin compilarlo previamente. Python es un ejemplo de lenguaje interpretado.

- **Máquinas virtuales**: En lenguajes como Java y C#, el código se compila en un **código intermedio** llamado **bytecode**, que es ejecutado por una máquina virtual (JVM en Java, CLR en C#). Esto permite que el código sea más portátil entre diferentes sistemas operativos.

#### Ejemplos de Ejecución en MyCompiler.io

Utilizaremos [MyCompiler.io](https://www.mycompiler.io/es) para escribir y probar los ejemplos en los distintos lenguajes. Este entorno permite escribir código y ejecutarlo en diferentes lenguajes sin necesidad de instalar un entorno de desarrollo local. El compilador o intérprete asociado con cada lenguaje se encargará de ejecutar el código en la web.

#### Ejercicios Propuestos
A continuación, te proponemos algunos ejercicios básicos que deberás implementar en los lenguajes que estamos trabajando (C, C++, C#, Java y Python). Estos ejercicios te permitirán familiarizarte con la sintaxis básica, las variables, los operadores y las entradas y salidas por consola:

1. **Imprimir un mensaje en consola**: Escribe un programa que imprima "Hola, Mundo" en consola.
   
2. **Suma de dos números**: Escribe un programa que solicite al usuario dos números enteros, los sume e imprima el resultado.

3. **Área de un rectángulo**: Escribe un programa que solicite al usuario el ancho y la altura de un rectángulo e imprima su área.

4. **Conversión de temperatura**: Escribe un programa que convierta una temperatura de grados Celsius a Fahrenheit.

5. **Cálculo de edad**: Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual.

Recuerda realizar cada uno de estos ejercicios en los lenguajes que estamos utilizando (C, C++, C#, Java y Python), y observa cómo cambian la sintaxis y las herramientas utilizadas en cada uno.
