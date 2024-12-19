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

- [Programación Orienada a Objetos](#programación-orienada-a-objetos)
  - [Ejercicios de ampliación](#ejercicios-de-ampliación)
    - [Ejercicio 1: Gestor de Liga de Fútbol](#ejercicio-1-gestor-de-liga-de-fútbol)
    - [Ejercicio 2: Gestor de Aeropuertos](#ejercicio-2-gestor-de-aeropuertos)
    - [Ejercicio 3: Sistema de Gestión de Turnos en un Hospital](#ejercicio-3-sistema-de-gestión-de-turnos-en-un-hospital)
    - [Ejercicio 4: Sistema de Gestión de Alquiler de Coches](#ejercicio-4-sistema-de-gestión-de-alquiler-de-coches)
    - [Rúbrica para los ejercicios](#rúbrica-para-los-ejercicios)
- [Programació Orientada a Objectes (VAL)](#programació-orientada-a-objectes-val)
  - [Exercicis d’ampliació](#exercicis-dampliació)
    - [Exercici 1: Gestor de Lliga de Futbol](#exercici-1-gestor-de-lliga-de-futbol)
    - [Exercici 2: Gestor d’Aeroports](#exercici-2-gestor-daeroports)
    - [Exercici 3: Sistema de Gestió de Torn en un Hospital](#exercici-3-sistema-de-gestió-de-torn-en-un-hospital)
    - [Exercici 4: Sistema de Gestió de Lloguer de Cotxes](#exercici-4-sistema-de-gestió-de-lloguer-de-cotxes)
    - [Rúbrica per als exercicis](#rúbrica-per-als-exercicis)


<div style="page-break-after: always;"></div>

# Programación Orienada a Objetos

## Ejercicios de ampliación

Dada las siguientes especificaciones de texto, de cada una debes crear un proyecto informático completo. Empieza con el diagrama de clases y luego programa en Java el proyecto. Cuando esté terminado, testea la clase principal y añade la documentación necesaria en javadoc.

### Ejercicio 1: Gestor de Liga de Fútbol

Se ha encargado desarrollar un gestor para una liga de fútbol. La liga debe estar identificada por un nombre y una temporada, definida por el año de inicio y el de finalización. La liga estará compuesta por un máximo de 22 equipos.

Cada equipo debe incluir información como su nombre, el número de partidos ganados, empatados y perdidos. A partir de estos datos, se podrá calcular la puntuación total de cada equipo según el sistema estándar de puntos (3 puntos por victoria, 1 por empate, 0 por derrota). Además, cada equipo debe tener entre 18 y 24 futbolistas.

Cada futbolista debe tener datos que lo identifiquen: nombre, nacionalidad, un número de identificación único, su posición en el campo (portero, defensa, centrocampista o delantero), el número de goles marcados y el número de partidos jugados.

Se requiere que solo exista una instancia de la liga (patrón singleton). Debes implementar la funcionalidad para añadir y eliminar equipos, así como para añadir y eliminar futbolistas de los equipos. Además, se debe poder acceder a la información completa de cada jugador, equipo o la liga misma.

El sistema debe proporcionar las siguientes funcionalidades:

- Mostrar los equipos en posiciones de descenso (los 4 últimos).
- Mostrar los equipos en posiciones de clasificación para competiciones europeas (los 4 primeros).
- Calcular los goles a favor de cada equipo.
- Identificar al máximo goleador ("pichichi") de la liga.

---

### Ejercicio 2: Gestor de Aeropuertos

Se te ha pedido desarrollar un sistema para gestionar la operativa de un aeropuerto internacional. El aeropuerto debe estar identificado por un nombre, un código IATA de tres letras, y la ciudad donde se encuentra.

Cada aeropuerto gestiona varios vuelos. Un vuelo está identificado por un número único, la aerolínea operadora, el destino y el origen. También debe incluir la hora de salida, la hora de llegada estimada y el estado del vuelo (en hora, retrasado, cancelado).

Cada vuelo tiene una tripulación asignada, formada por al menos un piloto y dos auxiliares de vuelo. Los tripulantes deben incluir información como su nombre, nacionalidad, y su número de identificación único.

Se debe poder:

- Añadir y eliminar vuelos.
- Asignar o eliminar tripulantes de los vuelos.
- Consultar el estado de cualquier vuelo en cualquier momento.
- Filtrar los vuelos por su destino, origen o estado.
- Calcular el tiempo estimado de llegada para los vuelos en base a su hora de salida.

El sistema debe permitir acceder a la información completa de cada vuelo y cada tripulante.

---

### Ejercicio 3: Sistema de Gestión de Turnos en un Hospital

Un hospital te ha solicitado desarrollar un sistema para gestionar los turnos de trabajo de su personal. El hospital está compuesto por diferentes departamentos (p. ej., Urgencias, Pediatría, Cardiología), y cada uno tiene un nombre que lo identifica.

El personal del hospital incluye doctores, enfermeros y auxiliares. Cada empleado está identificado por su nombre, número de identificación, su cargo, y su especialidad (en el caso de los doctores). Cada empleado está asignado a un departamento específico.

El sistema debe gestionar los turnos de trabajo de cada empleado. Un turno tiene una fecha, una hora de inicio y una hora de fin. Cada empleado puede estar asignado a múltiples turnos, pero no puede tener más de un turno asignado en el mismo horario.

El sistema debe permitir:

- Asignar turnos a empleados y eliminarlos si es necesario.
- Consultar los turnos asignados a un empleado o a un departamento completo.
- Filtrar turnos por fecha o por departamento.
- Identificar empleados con exceso de horas de trabajo (más de 40 horas semanales).
- Consultar la disponibilidad de un empleado en un horario determinado.

Se debe acceder fácilmente a la información completa de cada empleado, sus turnos y los departamentos del hospital.

---

### Ejercicio 4: Sistema de Gestión de Alquiler de Coches

Se te ha encargado desarrollar un sistema de gestión para una empresa de alquiler de coches. La empresa tiene un nombre y varias sucursales distribuidas en distintas ciudades. Cada sucursal está identificada por su ciudad y dirección.

Cada sucursal cuenta con una flota de vehículos de diferentes tipos (por ejemplo, sedán, SUV, furgoneta). Cada vehículo está identificado por una matrícula, modelo, marca, año de fabricación, y el número de asientos. Además, cada coche puede estar disponible o alquilado.

El sistema debe permitir:

- Registrar la información de nuevos vehículos en una sucursal.
- Alquilar un coche a un cliente. Para ello, se debe registrar el nombre del cliente, su identificación y el coche que ha alquilado.
- Devolver coches alquilados.
- Consultar la disponibilidad de vehículos en cada sucursal.
- Filtrar los vehículos por tipo, marca o número de asientos.

Además, el sistema debe llevar un control de la cantidad de vehículos disponibles y en uso por cada sucursal, y debe permitir acceder a la información de cada coche, sucursal y cliente.

### Rúbrica para los ejercicios

Los ejercicios de la práctica en la parte del tema 4 estarán basados en estos ejercicios de ampliación y seguirán la siguiente rúbrica. Podéis emplearla para orientaros en cuánta importancia tiene cada aspecto de cara a la corrección:

| Concepto | Ponderación |
|----------|-------------|
| Diagrama de clases. Definiciones de clases|15% |
| Diagrama de clases. Relaciones de asociación, agregación y composición|15%|
| Diagrama de clases. Relaciones de herencia, dependencia y empaquetado|15%|
| Diseño de las pruebas en texto|5%|
| Java. Traslado del diagrama a lenguaje de programación |10%|
| Java. Implementación de los métodos |10%|
| Java. Implementación de las pruebas |10%|
| Java. Implementación de un Main para acceder a la aplicación |5%|
| Javadoc. Documentación en javadoc y generación de la documentación |15%|

---

<div style="page-break-after: always;"></div>

# Programació Orientada a Objectes (VAL)

## Exercicis d’ampliació

A partir de les següents especificacions de text, per a cada una has de crear un projecte informàtic complet. Comença amb el diagrama de classes i després programa en Java el projecte. Quan estiga acabat, testa la classe principal i afegeix la documentació necessària en javadoc.

### Exercici 1: Gestor de Lliga de Futbol

S’ha encarregat desenvolupar un gestor per a una lliga de futbol. La lliga ha d’estar identificada per un nom i una temporada, definida per l’any d’inici i el de finalització. La lliga estarà composta per un màxim de 22 equips.

Cada equip ha d’incloure informació com el seu nom, el nombre de partits guanyats, empatats i perduts. A partir d’aquestes dades, es podrà calcular la puntuació total de cada equip segons el sistema estàndard de punts (3 punts per victòria, 1 per empat, 0 per derrota). A més, cada equip ha de tindre entre 18 i 24 futbolistes.

Cada futbolista ha de tindre dades que l’identifiquen: nom, nacionalitat, un número d’identificació únic, la seua posició en el camp (porter, defensa, migcampista o davanter), el nombre de gols marcats i el nombre de partits jugats.

Es requereix que només existisca una instància de la lliga (patró singleton). Has d’implementar la funcionalitat per a afegir i eliminar equips, així com per a afegir i eliminar futbolistes dels equips. A més, s’ha de poder accedir a la informació completa de cada jugador, equip o de la lliga mateixa.

El sistema ha de proporcionar les següents funcionalitats:

- Mostrar els equips en posicions de descens (els últims 4).
- Mostrar els equips en posicions de classificació per a competicions europees (els primers 4).
- Calcular els gols a favor de cada equip.
- Identificar el màxim golejador ("pichichi") de la lliga.

---

### Exercici 2: Gestor d’Aeroports

Se t’ha demanat desenvolupar un sistema per a gestionar l’operativa d’un aeroport internacional. L’aeroport ha d’estar identificat per un nom, un codi IATA de tres lletres, i la ciutat on es troba.

Cada aeroport gestiona diversos vols. Un vol està identificat per un número únic, la línia aèria operadora, la destinació i l’origen. També ha d’incloure l’hora d’eixida, l’hora d’arribada estimada i l’estat del vol (a temps, endarrerit, cancel·lat).

Cada vol té una tripulació assignada, formada per almenys un pilot i dos auxiliars de vol. Els tripulants han d’incloure informació com el seu nom, nacionalitat, i el seu número d’identificació únic.

Es podrà:

- Afegir i eliminar vols.
- Assignar o eliminar tripulants dels vols.
- Consultar l’estat de qualsevol vol en qualsevol moment.
- Filtrar els vols per destinació, origen o estat.
- Calcular el temps estimat d’arribada per als vols basant-se en la seua hora d’eixida.

El sistema ha de permetre accedir a la informació completa de cada vol i cada tripulant.

---

### Exercici 3: Sistema de Gestió de Torn en un Hospital

Un hospital t’ha sol·licitat desenvolupar un sistema per a gestionar els torns de treball del seu personal. L’hospital està compost per diferents departaments (p. ex., Urgències, Pediatria, Cardiologia), i cada un té un nom que l’identifica.

El personal de l’hospital inclou doctors, infermers i auxiliars. Cada empleat està identificat pel seu nom, número d’identificació, el seu càrrec, i la seua especialitat (en el cas dels doctors). Cada empleat està assignat a un departament específic.

El sistema ha de gestionar els torns de treball de cada empleat. Un torn té una data, una hora d’inici i una hora de finalització. Cada empleat pot estar assignat a múltiples torns, però no pot tindre més d’un torn assignat en el mateix horari.

El sistema ha de permetre:

- Assignar torns a empleats i eliminar-los si és necessari.
- Consultar els torns assignats a un empleat o a un departament complet.
- Filtrar torns per data o per departament.
- Identificar empleats amb excés d’hores de treball (més de 40 hores setmanals).
- Consultar la disponibilitat d’un empleat en un horari determinat.

S’ha d’accedir fàcilment a la informació completa de cada empleat, els seus torns i els departaments de l’hospital.

---

### Exercici 4: Sistema de Gestió de Lloguer de Cotxes

Se t’ha encarregat desenvolupar un sistema de gestió per a una empresa de lloguer de cotxes. L’empresa té un nom i diverses sucursals distribuïdes en diferents ciutats. Cada sucursal està identificada per la seua ciutat i adreça.

Cada sucursal compta amb una flota de vehicles de diferents tipus (per exemple, sedán, SUV, furgoneta). Cada vehicle està identificat per una matrícula, model, marca, any de fabricació, i el nombre de seients. A més, cada cotxe pot estar disponible o llogat.

El sistema ha de permetre:

- Registrar la informació de nous vehicles en una sucursal.
- Llogar un cotxe a un client. Per a això, s’ha de registrar el nom del client, la seua identificació i el cotxe que ha llogat.
- Tornar cotxes llogats.
- Consultar la disponibilitat de vehicles en cada sucursal.
- Filtrar els vehicles per tipus, marca o nombre de seients.

A més, el sistema ha de portar un control de la quantitat de vehicles disponibles i en ús per cada sucursal, i ha de permetre accedir a la informació de cada cotxe, sucursal i client.

### Rúbrica per als exercicis

Els exercicis de la pràctica en la part del tema 4 estaran basats en aquests exercicis d’ampliació i seguiran la següent rúbrica. Podeu emprar-la per a orientar-vos en quina importància té cada aspecte de cara a la correcció:

| Concepte | Ponderació |
|----------|-------------|
| Diagrama de classes. Definicions de classes|15% |
| Diagrama de classes. Relacions d’associació, agregació i composició|15%|
| Diagrama de classes. Relacions d’herència, dependència i empaquetatge|15%|
| Disseny de les proves en text|5%|
| Java. Trasllat del diagrama a llenguatge de programació |10%|
| Java. Implementació dels mètodes |10%|
| Java. Implementació de les proves |10%|
| Java. Implementació d’un Main per accedir a l’aplicació |5%|
| Javadoc. Documentació en javadoc i generació de la documentació |15%|