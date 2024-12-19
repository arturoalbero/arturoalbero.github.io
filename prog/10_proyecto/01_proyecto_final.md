# Desarrollo de un proyecto de gestión en Java

## 1. Características del proyecto

- Proyecto **programado en Java**. Debe contar con una interfaz gráfica, manipulación de ficheros y comunicación con una base de datos.
- El proyecto debe consistir en una **aplicación de gestión**, como la práctica de la gestión de turnos de un hospital hecha en la sesión 08.05, ampliada con conexiones a bases de datos. Hay otras opciones disponibles, pero son menos recomendables.

## 2. Desglose de la entrega

A continuación un desglose de la entrega. Todos los puntos son obligatorios y **la falta de alguno de ellos implicará tener un 0 en el total proyecto** (aunque sea la memoria, que vale 0.5). Asimismo, **aprobar el proyecto es necesario para aprobar el curso**.

### 2.1 Documento de diseño del proyecto (1.5 puntos)

Un documento en el que se planifique el proyecto. Se tiene que especificar de antemano qué se quiere realizar, qué tecnologías se quieren emplear y cómo se va a estructurar.

Se deben incluir diagramas de actividad para indicar cómo funcionará el programa y diagramas de clases para determinar la estructura del modelo de datos.

### 2.2 Implementación del proyecto (8 puntos)

- División entre Modelo - Vista - Controlador. ***1 punto***.
  - División clara y apropiada entre las diferentes partes del proyecto
- Programación en Java del modelo, el controlador y la vista. ***2 puntos***.
  - Uso adecuado de las clases, interfaces y/o enums
  - Programación adecuada
- Interfaz diseñada usando Swing. ***2 puntos***.
  - Diseño y usabilidad.
  - Funcionalidad adecuada.
  - Validaciones de datos introducidos por el usuario.
  - Uso de hilos para que no se bloquee la interfaz en operaciones pesadas.
- Interacción con ficheros. ***1 punto***.
  - Lectura de ficheros
  - Escritura y/o modificación de ficheros
- Interacción con base de datos (relacional, NoSQL o BDOO). ***1 punto***.
  - Uso correcto de las operaciones relacionadas con el DML
  - Uso correcto de las operaciones relacionadas con el DDL
- Distribución del proyecto en formato JAR. ***1 punto***.
  - El programa funciona correctamente en otros ordenadores

### 2.3 Memoria del proyecto (0.5 puntos)

Un documento en el que se comente cómo ha resultado el proyecto:

- Posibles cambios entre la planificación y el resultado final:
  - Mejoras
  - Limitaciones y motivación de dichas limitaciones
- Posibilidades de mejora del proyecto
- Conclusión sobre los resultados del proyecto, evaluando tanto el propio programa como el aprendizaje obtenido al realizarlo

## 3. FAQ (Preguntas frecuentes)

### 3.1 ¿Puedo usar otra librería que no sea Swing para mi interfaz?

Puedes realizar la interfaz en cualquier librería que use Java para funcionar, siempre que se cumplan los requisitos especificados. Una opción adecuada puede ser JavaFX. Sin embargo, usar una librería que no está integrada en el JDK hará que la creación del JAR sea más complicada, y requerirá un conocimiento mayor de cómo funcionan los **módulos** en Java, apartado que no se trabaja durante este curso.

### 3.2 ¿Puedo hacer un juego en lugar de una aplicación de gestión?

Puedes hacer un juego, pero la dificultad será mucho mayor. Tienes algunas opciones como el propio [JavaFX](https://code.tutsplus.com/es/introduccion-a-javafx-para-el-desarrollo-de-juegos--cms-23835t) o [LibGDX](https://libgdx.com/).

Conviene señalar que realizar un juego será una tarea mucho más complicada que hacer la aplicación de gestión y deberás cumplimentar todos los puntos expuestos (manejo de ficheros y bases de datos).

La programación de juegos no necesariamente sigue el marco MVC y la interfaz gráfica se maneja de forma diferente, por lo que esa parte se evaluaría según criterios equivalentes, pero adaptados al proyecto.

Eso sí, lo más probable es que el trabajo resulte de peor calidad, lo que conllevará inevitablemente a una menor calificación. Hazlo solo si te quieres plantear un desafío, vas muy bien en el curso y dispones de mucho tiempo libre extra. En cualquier caso, consulta con el profesor para validar el proyecto.

### 3.3 ¿Puedo hacer una aplicación que no sea de gestión?

Puedes hacer una aplicación que no sea de gestión, pero tiene que poner en práctica todo lo visto durante el curso. Esto quiere decir que se le tienen que poder aplicar los criterios expuestos en el punto 2.2. Consulta con el profesor para validar el proyecto.
