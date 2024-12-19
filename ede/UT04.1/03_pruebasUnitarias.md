
<style>

body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
} 
p{
    text-indent: 1rem;
    text-align: justify;
}
h1{
    font-size: 2rem;
    font-weight: bold;
}
h2{
    font-size: 1.5rem;
    font-weight: bold;
}
h3{
    font-size: 1.25rem;
    font-style: italic;
    font-weight: bold;
}
img{
    display: block;
    margin: 0 auto;
}
</style>

- [(CAS) Introducción a las pruebas unitarias](#cas-introducción-a-las-pruebas-unitarias)
  - [¿Qué son los **Test de Unidad**?](#qué-son-los-test-de-unidad)
    - [Beneficios de los Test de Unidad](#beneficios-de-los-test-de-unidad)
      - [Ejemplo sencillo de test de unidad](#ejemplo-sencillo-de-test-de-unidad)
    - [Implementación de Test de Unidad en Java usando IntelliJ y JUnit](#implementación-de-test-de-unidad-en-java-usando-intellij-y-junit)
      - [**Paso 1: Configurar el proyecto en IntelliJ con JUnit**](#paso-1-configurar-el-proyecto-en-intellij-con-junit)
      - [**Paso 2: Escribir un Test de Unidad en Java usando JUnit**](#paso-2-escribir-un-test-de-unidad-en-java-usando-junit)
      - [**Paso 3: Ejecutar el Test en IntelliJ**](#paso-3-ejecutar-el-test-en-intellij)
    - [Agregando más tests](#agregando-más-tests)
  - [Diseño de Test de unidad](#diseño-de-test-de-unidad)
    - [Actividad 1: Números primos](#actividad-1-números-primos)
    - [Actividad 2: Sumador de palabras](#actividad-2-sumador-de-palabras)
- [(VAL)Introducció a les proves unitàries](#valintroducció-a-les-proves-unitàries)
  - [Què són els **Tests d'Unitat**?](#què-són-els-tests-dunitat)
    - [Beneficis dels Tests d'Unitat](#beneficis-dels-tests-dunitat)
      - [Exemple senzill de test d'unitat](#exemple-senzill-de-test-dunitat)
    - [Implementació de Test d'Unitat en Java amb IntelliJ i JUnit](#implementació-de-test-dunitat-en-java-amb-intellij-i-junit)
      - [**Pas 1: Configurar el projecte en IntelliJ amb JUnit**](#pas-1-configurar-el-projecte-en-intellij-amb-junit)
      - [**Pas 2: Escriure un Test d'Unitat en Java amb JUnit**](#pas-2-escriure-un-test-dunitat-en-java-amb-junit)
      - [**Pas 3: Executar el Test en IntelliJ**](#pas-3-executar-el-test-en-intellij)
    - [Afegint més tests](#afegint-més-tests)
  - [Disseny de Test d'unitat](#disseny-de-test-dunitat)
    - [Activitat 1: Nombres primers](#activitat-1-nombres-primers)
    - [Activitat 2: Sumador de paraules](#activitat-2-sumador-de-paraules)


<div style="page-break-after: always;"></div>

# (CAS) Introducción a las pruebas unitarias

## ¿Qué son los **Test de Unidad**?

Los **tests de unidad** son pequeñas pruebas automatizadas que se escriben para verificar que una porción específica de código (una "unidad", generalmente una función o método) funcione correctamente. Su propósito es comprobar que una unidad de código aislada haga lo que se espera que haga sin depender de otras partes del sistema.

### Beneficios de los Test de Unidad

1. **Mejora la calidad del código**: Detectan errores en las primeras etapas del desarrollo.
2. **Facilitan el mantenimiento**: Al cambiar el código, los tests ayudan a asegurarse de que no se rompa el comportamiento existente.
3. **Permiten refactorizar con confianza**: Si los tests pasan después de refactorizar, es probable que el código siga funcionando.

---

#### Ejemplo sencillo de test de unidad

Supongamos que tenemos una clase **Calculadora** en Java, con un método que suma dos números:

```java
public class Calculadora {
    public static int sumar(Integer a, Integer b) {
        return a + b;
    }
}
```

Queremos escribir un test de unidad para verificar que el método `sumar()` funciona correctamente.

---

### Implementación de Test de Unidad en Java usando IntelliJ y JUnit

#### **Paso 1: Configurar el proyecto en IntelliJ con JUnit**

1. **Crear un nuevo proyecto en IntelliJ** utilizando Maven.

2. **Agregar dependencia de JUnit (si no está configurado automáticamente)**:
   Asegúrate de que el archivo `pom.xml` tenga la siguiente dependencia para JUnit:

   ```xml
   <dependencies>
       <dependency>
           <groupId>org.junit.jupiter</groupId>
           <artifactId>junit-jupiter-api</artifactId>
           <version>5.7.0</version>
           <scope>test</scope>
       </dependency>
       <dependency>
           <groupId>org.junit.jupiter</groupId>
           <artifactId>junit-jupiter-engine</artifactId>
           <version>5.7.0</version>
           <scope>test</scope>
       </dependency>
   </dependencies>
   ```

3. **Crear la clase de test**:
   - En el árbol de directorios de IntelliJ, crea un nuevo paquete llamado `test` (en `src/test/java`).
   - Crea una nueva clase de prueba (ej. `CalculadoraTest`) en ese paquete.

---

#### **Paso 2: Escribir un Test de Unidad en Java usando JUnit**

Vamos a escribir un test para la clase `Calculadora`:

1. Crea la clase `CalculadoraTest` y usa las anotaciones de **JUnit** para definir tus pruebas:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculadoraTest {

    @Test
    public void testSumar() {
        int resultado = Calculadora.sumar(2, 3);
        assertEquals(5, resultado, "La suma de 2 y 3 debe ser 5");
    }
}
```

- **@Test**: Esta anotación indica que el método `testSumar` es una prueba que se debe ejecutar.
- **assertEquals(esperado, actual)**: Verifica si el valor que devuelve el método (en este caso `5`) es igual al valor esperado (también `5`). Si no coincide, el test fallará.

---

#### **Paso 3: Ejecutar el Test en IntelliJ**

1. Haz clic derecho sobre la clase de prueba `CalculadoraTest` y selecciona "Run 'CalculadoraTest'".
2. Si todo está bien, IntelliJ te mostrará que el test ha pasado exitosamente.

---

### Agregando más tests

Para asegurarnos de que la clase **Calculadora** se comporta correctamente en diferentes escenarios, podemos agregar más tests. Por ejemplo, un test para sumar números negativos:

```java
@Test
public void testSumarNumerosNegativos() {
    int resultado = Calculadora.sumar(-1, -5);
    assertEquals(-6, resultado, "La suma de -1 y -5 debe ser -6");
}
```

Cada vez que agregues un test, simplemente ejecútalo de nuevo para verificar que todos los casos pasen.

---

## Diseño de Test de unidad

Cuando creamos los test de unidad, debemos diseñarlos para comprobar valores tanto acertados, como errados o fuera de ámbito. Es tan importante comprobar que hace bien una operación como que el programa sabe enfrentarse a entradas no esperadas. En general, cuando diseñamos un test, creamos una tabla como la que sigue:

|Identificador|Nombre|Entrada de datos|Resultado esperado|Resultado obtenido|
|-------------|------|----------------|------------------|---|
|U1|testSumarNumerosNegativos|Calculadora.sumar(-1, -5)|-6|?|
|U2|testSumarConStrings|Calculadora.sumar(-1, "paco")|`error`|?|

Una buena estrategia es:

- Buscar casos comunes.
- Si procede, buscar casos en el límite de operaciones.
- Comprobar cómo reacciona un método ante entradas inesperadas.

### Actividad 1: Números primos

Diseña test de unidad para el siguiente método, tanto en una tabla como en JUNIT.

```java
public class Calculadora {
    public static boolean esPrimo(int numero) {
        if (numero <= 1) return false; 
        for (int i = 2; i * i <= numero; i++) {
            if (numero % i == 0) return false; 
        }
        return true; 
    }
}
```

### Actividad 2: Sumador de palabras

Diseña test de unidad para el siguiente método, tanto en una tabla como en JUNIT. El método coge dos palabras y suma el valor de todos los caracteres. El valor de un caracter es su número en ASCII.

```java
public class Calculadora {
    public static int sumaPalabras(String palabra1, String palabra2) {
        int suma = 0;
        for (char c : palabra1.toCharArray()) {
            suma += (int) c;
        }
        for (char c : palabra2.toCharArray()) {
            suma += (int) c;
        }
        return suma;
    }
}
```

<div style="page-break-after: always;"></div>

# (VAL)Introducció a les proves unitàries

## Què són els **Tests d'Unitat**?

Els **tests d'unitat** són petites proves automatitzades que s'escriuen per a verificar que una porció específica de codi (una "unitat", generalment una funció o mètode) funcione correctament. El seu propòsit és comprovar que una unitat de codi aïllada fa el que s'espera que faça sense dependre d'altres parts del sistema.

### Beneficis dels Tests d'Unitat

1. **Millora la qualitat del codi**: Detecten errors en les primeres etapes del desenvolupament.
2. **Faciliten el manteniment**: En modificar el codi, els tests ajuden a assegurar que no es trenque el comportament existent.
3. **Permeten refactoritzar amb confiança**: Si els tests passen després de refactoritzar, és probable que el codi continue funcionant.

---

#### Exemple senzill de test d'unitat

Suposem que tenim una classe **Calculadora** en Java, amb un mètode que suma dos números:

```java
public class Calculadora {
    public static int sumar(Integer a, Integer b) {
        return a + b;
    }
}
```

Volem escriure un test d'unitat per a verificar que el mètode `sumar()` funciona correctament.

---

### Implementació de Test d'Unitat en Java amb IntelliJ i JUnit

#### **Pas 1: Configurar el projecte en IntelliJ amb JUnit**

1. **Crear un nou projecte en IntelliJ** utilitzant Maven.

2. **Afegir dependència de JUnit (si no està configurat automàticament)**:
   Assegura't que l'arxiu `pom.xml` tinga la següent dependència per a JUnit:

   ```xml
   <dependencies>
       <dependency>
           <groupId>org.junit.jupiter</groupId>
           <artifactId>junit-jupiter-api</artifactId>
           <version>5.7.0</version>
           <scope>test</scope>
       </dependency>
       <dependency>
           <groupId>org.junit.jupiter</groupId>
           <artifactId>junit-jupiter-engine</artifactId>
           <version>5.7.0</version>
           <scope>test</scope>
       </dependency>
   </dependencies>
   ```

3. **Crear la classe de test**:
   - En l'arbre de directoris d'IntelliJ, crea un nou paquet anomenat `test` (en `src/test/java`).
   - Crea una nova classe de prova (p. ex. `CalculadoraTest`) en aquest paquet.

---

#### **Pas 2: Escriure un Test d'Unitat en Java amb JUnit**

Anem a escriure un test per a la classe `Calculadora`:

1. Crea la classe `CalculadoraTest` i usa les anotacions de **JUnit** per a definir les teues proves:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculadoraTest {

    @Test
    public void testSumar() {
        int resultat = Calculadora.sumar(2, 3);
        assertEquals(5, resultat, "La suma de 2 i 3 ha de ser 5");
    }
}
```

- **@Test**: Aquesta anotació indica que el mètode `testSumar` és una prova que s'ha d'executar.
- **assertEquals(esperat, actual)**: Verifica si el valor que retorna el mètode (en aquest cas `5`) és igual al valor esperat (també `5`). Si no coincideix, el test fallarà.

---

#### **Pas 3: Executar el Test en IntelliJ**

1. Fes clic dret sobre la classe de prova `CalculadoraTest` i selecciona "Run 'CalculadoraTest'".
2. Si tot està correcte, IntelliJ et mostrarà que el test ha passat amb èxit.

---

### Afegint més tests

Per a assegurar-nos que la classe **Calculadora** es comporta correctament en diferents escenaris, podem afegir més tests. Per exemple, un test per a sumar nombres negatius:

```java
@Test
public void testSumarNumerosNegatius() {
    int resultat = Calculadora.sumar(-1, -5);
    assertEquals(-6, resultat, "La suma de -1 i -5 ha de ser -6");
}
```

Cada vegada que afegeixes un test, simplement executa'l de nou per a verificar que tots els casos passen.

---

## Disseny de Test d'unitat

Quan creem els tests d'unitat, hem de dissenyar-los per a comprovar valors tant encertats com erronis o fora d'àmbit. És tan important comprovar que fa bé una operació com que el programa sap enfrontar-se a entrades inesperades. En general, quan dissenyem un test, creem una taula com la que segueix:

|Identificador|Nom|Entrada de dades|Resultat esperat|Resultat obtingut|
|-------------|------|----------------|------------------|---|
|U1|testSumarNumerosNegatius|Calculadora.sumar(-1, -5)|-6|?|
|U2|testSumarAmbStrings|Calculadora.sumar(-1, "paco")|`error`|?|

Una bona estratègia és:

- Buscar casos comuns.
- Si és procedent, buscar casos en el límit de les operacions.
- Comprovar com reacciona un mètode davant d'entrades inesperades.

### Activitat 1: Nombres primers

Dissenya tests d'unitat per al següent mètode, tant en una taula com en JUnit.

```java
public class Calculadora {
    public static boolean esPrimer(int numero) {
        if (numero <= 1) return false; 
        for (int i = 2; i * i <= numero; i++) {
            if (numero % i == 0) return false; 
        }
        return true; 
    }
}
```

### Activitat 2: Sumador de paraules

Dissenya tests d'unitat per al següent mètode, tant en una taula com en JUnit. El mètode agafa dues paraules i suma el valor de tots els caràcters. El valor d'un caràcter és el seu número en ASCII.

```java
public class Calculadora {
    public static int sumaParaules(String paraula1, String paraula2) {
        int suma = 0;
        for (char c : paraula1.toCharArray()) {
            suma += (int) c;
        }
        for (char c : paraula2.toCharArray()) {
            suma += (int) c;
        }
        return suma;
    }
}
```
