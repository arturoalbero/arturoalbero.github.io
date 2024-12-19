
# 06 - Práctica Obligatoria: Sistema de control de equipajes de un aeropuerto

## Especificación

Se requiere diseñar un sistema para **gestionar el control de equipaje** en un aeropuerto. En el aeropuerto interactúan **tres tipos de usuarios**: **guardias**, **personal del aeropuerto** y **pasajeros**. Los datos de identificación de cada usuario son los siguientes:

- Los **guardias** y el **personal del aeropuerto** se identifican por su **nombre** y **DNI**.  
- Los **pasajeros** se identifican por su **nombre**, **DNI** y el **número de vuelo** al que pertenecen.

El sistema debe controlar el flujo de equipaje bajo las siguientes **condiciones**:

1. Todo **equipaje** pasa por **áreas de control**. Estas áreas pueden estar en alguno de los siguientes estados: **operativas**, **bloqueadas** o **en mantenimiento**.
2. Los **guardias** pueden acceder a todas las áreas de control, independientemente de su estado.  
3. El **personal del aeropuerto** puede **bloquear** áreas de control (por mantenimiento, seguridad, etc.), y mientras estén bloqueadas, no se puede procesar ningún equipaje.  
4. Los **pasajeros** solo pueden acceder a áreas de control **operativas** y **asignadas a su vuelo**.  
5. Un equipaje solo puede ser procesado si el área de control está **operativa** y **no bloqueada**.
6. Algunas áreas de control son **prioritarias** y permiten el procesamiento de equipaje **especial**. Dichas áreas deben ser autorizadas por un **guardia** o **personal del aeropuerto**.

Procesar un equipaje significa pasarlo por el control. En caso de que salte la alarma, el guardia debe revisar de forma manual el equipaje para detectar qué elemento hacía saltar el control y volver a poner el equipaje para pasarlo de nuevo, hasta que no salte la alarma o el pasajero desista. Por su parte, mientras se está procesando el equipaje, el pasajero debe pasar por el control de metales. Si salta la alarma, debe quitarse la ropa que hacía saltar la alarma, ponerla en el control como si fuera equipaje y volver a comenzar el proceso hasta que todo sea correcto o desista.

## Instrucciones

Elabora un **documento de diseño completo** para la especificación anterior. El documento debe incluir lo siguiente:  

1. **SRS** (Especificación de Requerimientos del Software).  
2. **Diagrama de Casos de Uso**.  
3. **Diagrama de Clases UML**.  
4. **Diagramas de Estado** necesarios para representar el comportamiento del sistema.  
5. **Diagramas de Secuencia** que ilustren las interacciones principales entre los actores y el sistema.
6. **Diagrama de actividad** para el procesamiento del equipaje y del pasajero.

Elabora un proyecto Java en IntelliJ con las siguientes características:

1. Definición de las clases necesarias
2. Preparación de los prototipos de los métodos (sin implementar)
3. Documentación javadoc de todo el proyecto
4. Diseño de test para los métodos públicos (aunque no estén implementados)
5. (Opcional) Implementación de los métodos
6. (Opcional) Implementación del patrón de diseño Singleton

## Entrega

Se debe entregar un archivo comprimido con el siguiente formato: `[Nombre del alumno]_PracticaSegundoTrimestre.zip`.

Dentro del archivo, se deben incluir los siguientes tres archivos:

- El documento de diseño, en formato pdf.
  - Los diagramas pueden estar hechos a mano y adjuntos como foto. También se pueden emplear las herramientas `mermaid.js` y/o `plantuml` o cualquier otra que consideres oportuna.
- La documentación javadoc generada como página web comprimido en un archivo `documentacion.zip`.
- El proyecto IntelliJ comprimido en un archivo `proyecto.zip`.

Una entrega que no se ajuste al formato no será corregida.

## Rúbrica

|Apartado|Valor|
|----|----|
|SRS|1 punto|
|Diagrama de casos de uso|1 punto|
|Diagrama de clases|1 punto|
|Diagramas de estados|1 punto|
|Diagrama de secuencia|1 punto|
|Diagrama de actividad|1 punto|
|Empaquetado y definición de las clases en Java|1 punto|
|Diseño de los métodos|1 punto|
|Documentación javadoc|1 punto|
|Diseño e implementación de los test|1 punto|
|(Opcional) Implementación|0,5 puntos|
|(Opcional) Singleton|0,5 puntos|

