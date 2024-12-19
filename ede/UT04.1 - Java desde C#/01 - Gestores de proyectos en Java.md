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

- [(CAS) Proyectos en Java. Gestores de proyectos. Maven y Gradle](#cas-proyectos-en-java-gestores-de-proyectos-maven-y-gradle)
  - [1. **Gestor de dependencias de IntelliJ**](#1-gestor-de-dependencias-de-intellij)
    - [Ventajas del gestor de IntelliJ](#ventajas-del-gestor-de-intellij)
    - [Desventajas del gestor de IntelliJ](#desventajas-del-gestor-de-intellij)
    - [¿Cuándo usaremos el gestor de IntelliJ?](#cuándo-usaremos-el-gestor-de-intellij)
    - [Actividad 1](#actividad-1)
  - [2. **Maven**](#2-maven)
    - [Ventajas de Maven](#ventajas-de-maven)
    - [Desventajas de Maven](#desventajas-de-maven)
    - [¿Cuándo usaremos Maven?](#cuándo-usaremos-maven)
    - [Configuración de un proyecto con Maven](#configuración-de-un-proyecto-con-maven)
    - [Actividad 2](#actividad-2)
  - [3. **Gradle**](#3-gradle)
    - [Ventajas de Gradle](#ventajas-de-gradle)
    - [Desventajasde Gradle](#desventajasde-gradle)
    - [¿Cuándo usamos Gradle?](#cuándo-usamos-gradle)
    - [Configuración de un proyecto con Gradle](#configuración-de-un-proyecto-con-gradle)
    - [Actividad 3](#actividad-3)
- [(VAL) Projectes en Java. Gestors de projectes. Maven i Gradle](#val-projectes-en-java-gestors-de-projectes-maven-i-gradle)
  - [1. **Gestor de dependències d'IntelliJ**](#1-gestor-de-dependències-dintellij)
    - [Avantatges del gestor d'IntelliJ](#avantatges-del-gestor-dintellij)
    - [Desavantatges del gestor d'IntelliJ](#desavantatges-del-gestor-dintellij)
    - [Quan usarem el gestor d'IntelliJ?](#quan-usarem-el-gestor-dintellij)
    - [Activitat 1](#activitat-1)
  - [2. **Maven**](#2-maven-1)
    - [Avantatges de Maven](#avantatges-de-maven)
    - [Desavantatges de Maven](#desavantatges-de-maven)
    - [Quan usarem Maven?](#quan-usarem-maven)
    - [Configuració d'un projecte amb Maven](#configuració-dun-projecte-amb-maven)
    - [Activitat 2](#activitat-2)
  - [3. **Gradle**](#3-gradle-1)
    - [Avantatges de Gradle](#avantatges-de-gradle)
    - [Desavantatges de Gradle](#desavantatges-de-gradle)
    - [Quan usem Gradle?](#quan-usem-gradle)
    - [Configuració d'un projecte amb Gradle](#configuració-dun-projecte-amb-gradle)
    - [Activitat 3](#activitat-3)

<div style="page-break-after: always;"></div>

# (CAS) Proyectos en Java. Gestores de proyectos. Maven y Gradle

En IntelliJ tienes varias opciones para gestionar las dependencias de tus proyectos Java, como el gestor de dependencias propio de IntelliJ, **Maven** o **Gradle**. Aquí te doy una visión rápida de cada uno, con recomendaciones sobre cuál podría ser la mejor opción según tu caso.

## 1. **Gestor de dependencias de IntelliJ**

El gestor de dependencias integrado en IntelliJ se encarga de gestionar bibliotecas manualmente a través de configuraciones locales en el proyecto. Aunque puede ser útil para proyectos pequeños o sencillos, tiene limitaciones importantes:

### Ventajas del gestor de IntelliJ

- Fácil de usar para proyectos muy pequeños o para aquellos que no requieren muchas dependencias externas.
- Permite agregar librerías manualmente (en formato `.jar`) sin necesidad de un gestor externo.

### Desventajas del gestor de IntelliJ

- **No es escalable**: Si el proyecto crece y tiene muchas dependencias, manejar esto manualmente puede ser muy complicado y propenso a errores.
- **No maneja automáticamente las dependencias transitorias**: Si tu biblioteca necesita otras bibliotecas, tendrás que gestionarlas tú manualmente.
- **No es compatible con automatización o integración continua**: No se integra fácilmente con herramientas de automatización de construcción como Jenkins o CI/CD.
- **Menor soporte para plugins o configuraciones avanzadas**.

### ¿Cuándo usaremos el gestor de IntelliJ?

Usar el gestor de dependencias propio de IntelliJ solo es recomendable para proyectos **muy pequeños** o **prototipos** que no requieran integración continua, automatización, o un sistema de construcción más avanzado.

### Actividad 1

Crea un proyecto en Java usando el gestor de dependencias propio de IntelliJ y un programa que, al ejecutarlo, escriba por consola "Hola Mundo".

---
<div style="page-break-after: always;"></div>

## 2. **Maven**

**Maven** es un gestor de proyectos y dependencias ampliamente utilizado en proyectos Java. Define la estructura del proyecto y gestiona las dependencias a través de un archivo XML llamado `pom.xml`.

### Ventajas de Maven

- **Estandarización**: Tiene una estructura estándar de proyectos Java, lo que facilita la colaboración entre equipos.
- **Automatización de dependencias**: Puedes agregar dependencias fácilmente, y Maven descargará automáticamente las bibliotecas necesarias y sus dependencias transitorias desde repositorios centralizados.
- **Integración continua**: Está bien soportado en herramientas de integración continua (CI) como Jenkins, GitLab CI, GitHub Actions, etc.
- **Popularidad y soporte**: Hay una enorme comunidad y mucha documentación disponible.

### Desventajas de Maven

- **XML**: Algunos desarrolladores consideran que editar archivos `pom.xml` es tedioso y difícil de leer cuando el archivo crece.
- **Rendimiento**: Comparado con Gradle, Maven puede ser un poco más lento, especialmente en proyectos grandes.

### ¿Cuándo usaremos Maven?

**Maven** es una excelente opción si trabajas en **proyectos medianos o grandes** o si tu equipo ya está familiarizado con él. También es ideal para proyectos con equipos distribuidos, ya que su estructura estándar y amplio uso en la industria lo hacen fácil de adoptar.

### Configuración de un proyecto con Maven

1. **Crear un proyecto con Maven**:
   - Al crear un nuevo proyecto en IntelliJ, selecciona **Maven** como opción de proyecto.
   - IntelliJ generará automáticamente un archivo `pom.xml` donde podrás agregar tus dependencias.

2. **Agregar dependencias en Maven**:
   - Abre el archivo `pom.xml` y añade las dependencias dentro de la sección `<dependencies>`:

   ```xml
   <dependencies>
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.13.1</version>
           <scope>test</scope>
       </dependency>
   </dependencies>
   ```

3. **Ejecutar Maven**:
   - Puedes ejecutar comandos de Maven directamente en IntelliJ desde el panel de Maven (en la barra lateral derecha).
   - Comandos comunes incluyen `clean`, `install`, y `package`.

### Actividad 2

Crea un proyecto en Java usando Maven y un programa que, al ejecutarlo, escriba por consola "Hola Mundo, vivo en Maven".

---
<div style="page-break-after: always;"></div>

## 3. **Gradle**

**Gradle** es un gestor de construcción más moderno y flexible que Maven. En lugar de usar XML, Gradle utiliza archivos de configuración en **Groovy** o **Kotlin** para definir dependencias y tareas, lo que lo hace más legible y potente.

### Ventajas de Gradle

- **Flexibilidad**: Gradle es más flexible que Maven, permitiendo configuraciones avanzadas sin tantas restricciones.
- **Rendimiento**: Gradle es generalmente más rápido que Maven debido a su sistema de ejecución incremental y su caché local.
- **Soporte para múltiples lenguajes**: Aunque es muy popular en proyectos Java, Gradle también es común en proyectos Android, Kotlin, y otros lenguajes como Scala o Groovy.
- **DSL legible**: Al usar un DSL en Groovy o Kotlin, los archivos de configuración (`build.gradle`) son más compactos y fáciles de leer que los archivos XML de Maven.

### Desventajasde Gradle

- **Curva de aprendizaje**: Aunque más potente, puede ser más difícil de aprender al principio si vienes de Maven, sobre todo si necesitas personalizar tareas específicas.
- **Menos estándar**: Aunque cada vez es más común, no todos los proyectos Java adoptan Gradle. Por lo tanto, puede no ser la mejor opción si tu equipo ya está familiarizado con Maven.

### ¿Cuándo usamos Gradle?

**Gradle** es ideal para **proyectos grandes**, especialmente si necesitas flexibilidad o si trabajas en proyectos **multilenguaje** o **Android**. También es una excelente opción si te importa el rendimiento y la eficiencia en la construcción.

### Configuración de un proyecto con Gradle

1. **Crear un proyecto con Gradle**:

   - Al crear un nuevo proyecto, selecciona **Gradle** como el sistema de construcción.
   - Se generará un archivo `build.gradle` que puedes usar para gestionar las dependencias.

2. **Agregar dependencias en Gradle**:
   - Abre el archivo `build.gradle` y agrega las dependencias en la sección `dependencies`:

   ```groovy
   dependencies {
       testImplementation 'junit:junit:4.13.1'
   }
   ```

3. **Ejecutar Gradle**:
   - Al igual que con Maven, puedes ejecutar tareas de Gradle directamente desde IntelliJ usando el panel de Gradle. Tareas comunes incluyen `build`, `test`, y `clean`.

---

### Actividad 3

Crea un proyecto en Java usando Gradle y un programa que, al ejecutarlo, escriba por consola "Hola Mundo, vivo en Gradle".

---

Durante el curso emplearemos Maven, por su mayor implantación en la actualidad.

---
<div style="page-break-after: always;"></div>

# (VAL) Projectes en Java. Gestors de projectes. Maven i Gradle

En IntelliJ tens diverses opcions per gestionar les dependències dels teus projectes Java, com el gestor de dependències propi d'IntelliJ, **Maven** o **Gradle**. A continuació, et done una visió ràpida de cada un, amb recomanacions sobre quina podria ser la millor opció segons el teu cas.

## 1. **Gestor de dependències d'IntelliJ**

El gestor de dependències integrat en IntelliJ s'encarrega de gestionar biblioteques manualment a través de configuracions locals en el projecte. Encara que pot ser útil per a projectes xicotets o senzills, té limitacions importants:

### Avantatges del gestor d'IntelliJ

- Fàcil d'usar per a projectes molt xicotets o per a aquells que no necessiten moltes dependències externes.
- Permet afegir biblioteques manualment (en format `.jar`) sense necessitat d'un gestor extern.

### Desavantatges del gestor d'IntelliJ

- **No és escalable**: Si el projecte creix i té moltes dependències, gestionar-ho manualment pot ser molt complicat i propens a errors.
- **No maneja automàticament les dependències transitòries**: Si la teua biblioteca necessita altres biblioteques, hauràs de gestionar-les tu mateix manualment.
- **No és compatible amb automatització o integració contínua**: No s'integra fàcilment amb eines d'automatització de construcció com Jenkins o CI/CD.
- **Menor suport per a plugins o configuracions avançades**.

### Quan usarem el gestor d'IntelliJ?

Usar el gestor de dependències propi d'IntelliJ és recomanable només per a projectes **molt xicotets** o **prototips** que no requereixen integració contínua, automatització, o un sistema de construcció més avançat.

### Activitat 1

Crea un projecte en Java usant el gestor de dependències propi d'IntelliJ i un programa que, en executar-lo, escriga per consola "Hola Món".

---
<div style="page-break-after: always;"></div>

## 2. **Maven**

**Maven** és un gestor de projectes i dependències àmpliament utilitzat en projectes Java. Defineix l'estructura del projecte i gestiona les dependències a través d'un arxiu XML anomenat `pom.xml`.

### Avantatges de Maven

- **Estandardització**: Té una estructura estàndard de projectes Java, la qual cosa facilita la col·laboració entre equips.
- **Automatització de dependències**: Pots afegir dependències fàcilment, i Maven descarregarà automàticament les biblioteques necessàries i les seues dependències transitòries des de repositoris centralitzats.
- **Integració contínua**: Té bon suport en eines d'integració contínua (CI) com Jenkins, GitLab CI, GitHub Actions, etc.
- **Popularitat i suport**: Té una enorme comunitat i molta documentació disponible.

### Desavantatges de Maven

- **XML**: Alguns desenvolupadors consideren que editar arxius `pom.xml` és tediós i difícil de llegir quan l'arxiu creix.
- **Rendiment**: Comparat amb Gradle, Maven pot ser un poc més lent, especialment en projectes grans.

### Quan usarem Maven?

**Maven** és una excel·lent opció si treballes en **projectes mitjans o grans** o si el teu equip ja està familiaritzat amb ell. També és ideal per a projectes amb equips distribuïts, ja que la seua estructura estàndard i ampli ús en la indústria el fan fàcil d'adoptar.

### Configuració d'un projecte amb Maven

1. **Crear un projecte amb Maven**:
   - En crear un nou projecte en IntelliJ, selecciona **Maven** com a opció de projecte.
   - IntelliJ generarà automàticament un arxiu `pom.xml` on podràs afegir les teues dependències.

2. **Afegir dependències en Maven**:
   - Obri l'arxiu `pom.xml` i afegeix les dependències dins de la secció `<dependencies>`:

   ```xml
   <dependencies>
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.13.1</version>
           <scope>test</scope>
       </dependency>
   </dependencies>
   ```

3. **Executar Maven**:
   - Pots executar comandaments de Maven directament en IntelliJ des del panell de Maven (en la barra lateral dreta).
   - Comandaments comuns inclouen `clean`, `install`, i `package`.

### Activitat 2

Crea un projecte en Java usant Maven i un programa que, en executar-lo, escriga per consola "Hola Món, visc en Maven".

---
<div style="page-break-after: always;"></div>

## 3. **Gradle**

**Gradle** és un gestor de construcció més modern i flexible que Maven. En lloc d'usar XML, Gradle utilitza arxius de configuració en **Groovy** o **Kotlin** per definir dependències i tasques, la qual cosa el fa més llegible i potent.

### Avantatges de Gradle

- **Flexibilitat**: Gradle és més flexible que Maven, permetent configuracions avançades sense tantes restriccions.
- **Rendiment**: Gradle és generalment més ràpid que Maven gràcies al seu sistema d'execució incremental i la seua memòria cau local.
- **Suport per a múltiples llenguatges**: Encara que és molt popular en projectes Java, Gradle també és comú en projectes Android, Kotlin, i altres llenguatges com Scala o Groovy.
- **DSL llegible**: En usar un DSL en Groovy o Kotlin, els arxius de configuració (`build.gradle`) són més compactes i fàcils de llegir que els arxius XML de Maven.

### Desavantatges de Gradle

- **Corba d'aprenentatge**: Encara que més potent, pot ser més difícil d'aprendre al principi si véns de Maven, especialment si necessites personalitzar tasques específiques.
- **Menys estàndard**: Encara que cada vegada és més comú, no tots els projectes Java adopten Gradle. Per tant, pot no ser la millor opció si el teu equip ja està familiaritzat amb Maven.

### Quan usem Gradle?

**Gradle** és ideal per a **projectes grans**, especialment si necessites flexibilitat o si treballes en projectes **multillenguatge** o **Android**. També és una excel·lent opció si t'importa el rendiment i l'eficiència en la construcció.

### Configuració d'un projecte amb Gradle

1. **Crear un projecte amb Gradle**:
   - En crear un nou projecte, selecciona **Gradle** com el sistema de construcció.
   - Es generarà un arxiu `build.gradle` que pots usar per gestionar les dependències.

2. **Afegir dependències en Gradle**:
   - Obri l'arxiu `build.gradle` i afegeix les dependències en la secció `dependencies`:

   ```groovy
   dependencies {
       testImplementation 'junit:junit:4.13.1'
   }
   ```

3. **Executar Gradle**:
   - Igual que amb Maven, pots executar tasques de Gradle directament des d'IntelliJ usant el panell de Gradle. Tasques comunes inclouen `build`, `test`, i `clean`.

---

### Activitat 3

Crea un projecte en Java usant Gradle i un programa que, en executar-lo, escriga per consola "Hola Món, visc en Gradle".

---

Durant el curs emprerem Maven, per la seua major implantació en l'actualitat.
