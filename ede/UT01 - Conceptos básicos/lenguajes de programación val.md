### Llenguatges de Programació: C, C++, C#, Java i Python  

Per a probar els elements dels llenguatges C, C++, C#, Java i Python utilitzarem un entorn de desenvolupament en línia, [MyCompiler.io](https://www.mycompiler.io/es). L'entorn ens permet escriure, compilar i interpretar el nostre codi sense necessitat d'instalar res.

#### Elements Bàsics d'un Llenguatge de Programació
Per a començar, en C i C++ cal escriure les instruccions en una funció main, mentres que en C# i en Java han de estar dins d'una clase i un mètod main, que ha de ser pública (per a que tot el mon puga accedir) i estàtica (veurem aquest concepte mès endavant). Python, al ser un llenguatge de scripting, no necessita aquesta encapsulació. Si entreu en MyCompiler.io i probeu el codi de prova de cada llenguatge, comprobareu aquestes encapsulacions.

A mès de les encapsulacions, tambè heu d'incloure les llibreries a emprar. En C i C++ s'utilitza `#include`, en java `import` i en c# `using`. A continuació, uns exemples en C i C#. Podeus comprobar la resta en myCompiler:
```c
#include <stdio.h>

int main() {
    printf("Hello world!\n");
    return 0;
}
```
```c#
using System;

namespace MyCompiler {
    class Program {
        public static void Main(string[] args) {
            Console.WriteLine("Hello world!");
        }
    }
}
```

##### Variables
Una **variable** és un espai en la memòria d'un programa on podem emmagatzemar i manipular dades. Cada llenguatge de programació gestiona les variables de manera diferent quant a la declaració i el tipus de dades que emmagatzemen. Aquests tipus de dades poden ser enters, decimals, caràcters, cadenes, entre altres.

Per exemple, en C o C++ necessitem declarar el tipus de la variable abans d'usar-la:

```c
int numero = 5;
char lletra = 'A';
```

En llenguatges com Python, no cal declarar el tipus, ja que el llenguatge assigna el tipus automàticament:

```python
numero = 5
lletra = 'A'
```

##### Tipus de Dades i Tipatge
Els llenguatges de programació també difereixen en la manera en què gestionen els tipus de dades. Això ens porta a dos conceptes importants:

- **Tipatge estàtic vs. tipatge dinàmic**: En llenguatges com C, C++ i Java, el tipus d'una variable ha de ser declarat explícitament, la qual cosa es denomina **tipatge estàtic**. En canvi, en Python, el tipus d'una variable s'assigna en temps d'execució, la qual cosa es diu **tipatge dinàmic**.
  
- **Tipatge fort vs. tipatge feble**: Un llenguatge amb **tipatge fort** (com Java o Python) restringeix més les operacions entre tipus diferents, mentre que un llenguatge amb **tipatge feble** (com C) pot permetre certes conversions automàtiques entre tipus.

##### Operadors
Els **operadors** permeten realitzar operacions sobre les variables, com sumar, restar, comparar o assignar valors. Els operadors bàsics inclouen:

- **Aritmètics**: Suma (`+`), resta (`-`), multiplicació (`*`), divisió (`/`)
- **D'assignació**: Igualtat (`=`), suma i assignació (`+=`), etc.
- **Relacionals**: Major que (`>`), menor que (`<`), igual a (`==`), etc.
- **Lògics**: I (`&&` o `and`), O (`||` o `or`), negació (`!` o `not`)

Exemple d'ús d'operadors en C++:

```cpp
int a = 10;
int b = 20;
int suma = a + b; // Operador aritmètic
bool resultat = (a == b); // Operador relacional
```

##### Entrada i Eixida per Consola
L'**entrada i eixida de dades** és un aspecte fonamental en qualsevol llenguatge de programació. Ens permet interactuar amb l'usuari o amb altres sistemes mitjançant l'ús de la consola.

- **Eixida per consola**: Imprimir dades en la consola és comú en tots els llenguatges. En C o C++, usem `printf` o `cout` respectivament, mentre que en Java usem `System.out.println`, i en Python usem `print`.
  
Exemples d'eixida en diferents llenguatges:

```c
// En C
printf("Hola Món\n");

// En C++
std::cout << "Hola Món" << std::endl;

// En Python
print("Hola Món")
```

- **Entrada per consola**: Per a rebre dades de l'usuari, podem utilitzar funcions com `scanf` en C, `cin` en C++ o `input` en Python.

Exemple d'entrada:

```c
// En C
int edat;
scanf("%d", &edat);

// En Python
edat = input("Introdueix la teua edat: ")
```

#### Compiladors, Intèrprets i Màquines Virtuals

Els llenguatges de programació es poden classificar segons com executen el seu codi:

- **Compiladors**: Transformen el codi font en **codi objecte** (binari o executable) abans d'executar-lo. Exemples de llenguatges compilats inclouen C i C++. Ací, el compilador tradueix tot el codi abans d'executar-lo.
  
- **Intèrprets**: Els llenguatges interpretats executen el codi línia per línia sense compilar-lo prèviament. Python és un exemple de llenguatge interpretat.

- **Màquines virtuals**: En llenguatges com Java i C#, el codi es compila en un **codi intermedi** anomenat **bytecode**, que és executat per una màquina virtual (JVM en Java, CLR en C#). Això permet que el codi siga més portàtil entre diferents sistemes operatius.

#### Exemples d'Execució en MyCompiler.io

Utilitzarem [MyCompiler.io](https://www.mycompiler.io/es) per escriure i provar els exemples en els diferents llenguatges. Aquest entorn permet escriure codi i executar-lo en diferents llenguatges sense necessitat d'instal·lar un entorn de desenvolupament local. El compilador o intèrpret associat a cada llenguatge s'encarregarà d'executar el codi en la web.

#### Exercicis Proposats
A continuació, et proposem alguns exercicis bàsics que hauràs d'implementar en els llenguatges que estem treballant (C, C++, C#, Java i Python). Aquests exercicis et permetran familiaritzar-te amb la sintaxi bàsica, les variables, els operadors i les entrades i eixides per consola:

1. **Imprimir un missatge en consola**: Escriu un programa que imprima "Hola, Món" en consola.
   
2. **Suma de dos números**: Escriu un programa que sol·licite a l'usuari dos números enters, els sume i imprima el resultat.

3. **Àrea d'un rectangle**: Escriu un programa que sol·licite a l'usuari l'ample i l'altura d'un rectangle i n'imprima l'àrea.

4. **Conversió de temperatura**: Escriu un programa que convertisca una temperatura de graus Celsius a Fahrenheit.

5. **Càlcul d'edat**: Escriu un programa que sol·licite a l'usuari el seu any de naixement i calcule la seua edat actual.

Recorda realitzar cadascun d'aquests exercicis en els llenguatges que estem utilitzant (C, C++, C#, Java i Python), i observa com canvien la sintaxi i les eines utilitzades en cada un.

### Evolució i Comparació dels Llenguatges de Programació: C, C++, Java, C# i Python

La història dels llenguatges de programació és un reflex de com la tecnologia ha anat evolucionant per adaptar-se a noves necessitats, millorar el rendiment i la productivitat dels programadors, i respondre als reptes tecnològics del moment. A continuació, oferim una anàlisi detallada de l’evolució de cinc llenguatges fonamentals: **C, C++, Java, C# i Python**, amb un esquema visual que ajudarà a comprendre millor els moments clau de la seua evolució.

---

#### **C (1972)**
- **Creació**: Desenvolupat per **Dennis Ritchie** als Laboratoris Bell en **1972**.
- **Objectiu inicial**: Proporcionar un llenguatge amb el qual poder escriure sistemes operatius. **Unix** es va reescriure en C poc després, convertint-lo en un dels llenguatges més utilitzats en el desenvolupament de sistemes.
- **Característiques clau**: Eficiència, control de memòria i permet algunes operacions pròximes al maquinari. Per aixó, alguns diuen que és un llenguatge de "mig nivell".
- **Evolució**:
  - **ANSI C (1989)**: Es va normalitzar com a **C89** o **ANSI C**, establint un estàndard que millorava la portabilitat.
  - **C99 (1999)**: Introdueix millores com tipus de dades més flexibles (per exemple, `long long int`), inicialització d'arrays, i una millor compatibilitat amb l'entorn matemàtic.
  - **C11 (2011)**: Afegix funcions com la multitasca nativa (threads) i millores en la gestió de memòria.

#### **C++ (1983)**
- **Creació**: Desenvolupat per **Bjarne Stroustrup** en **1983** com una extensió de C.
- **Objectiu inicial**: Afegir la **programació orientada a objectes (OOP)** a C, permetent un millor disseny de programes grans.
- **Característiques clau**: Compatibilitat amb C, programació orientada a objectes, major abstracció amb **classes** i **mètodes**.
- **Evolució**:
  - **C++98 (1998)**: Primer estàndard oficial, que va establir les bases del llenguatge modern.
  - **C++11 (2011)**: Va afegir característiques avançades com les **expressions lambda**, **move semantics**, inicialització uniforme, i el tipus `auto` per a inferència automàtica de tipus. Això va millorar el rendiment i va reduir errors de programació.
  - **C++17 (2017)**: Afegix noves capacitats com **std::optional** (gestió de valors nuls) i millores de rendiment en funcions i templates.
  - **C++20 (2020)**: Introdueix característiques molt potents com **coroutines** (per a millor gestió de tasques asíncrones) i **concepts**, que milloren la claredat i l'eficiència en l'ús de **templates**.

#### **Java (1995)**
- **Creació**: Creat per **James Gosling** i l'equip de **Sun Microsystems** en **1995**.
- **Objectiu inicial**: Ser un llenguatge multiplataforma, segur i senzill per a aplicacions de xarxa.
- **Característiques clau**: Multiplataforma gràcies a la **Java Virtual Machine (JVM)**, orientació a objectes, gestió automàtica de la memòria mitjançant **garbage collection**.
- **Evolució**:
  - **Java 2 (1998)**: Introducció de l'API **Swing** per a interfícies gràfiques i millores en l'optimització del bytecode.
  - **Java 5 (2004)**: Apareixen les **generics**, que permeten escriure classes i mètodes més flexibles i segurs en termes de tipus, a més de **anotacions** i **autoboxing/unboxing**.
  - **Java 8 (2014)**: Incorpora **streams** i **expressions lambda**, facilitant la programació funcional i millorant l’eficiència en el maneig de col·leccions de dades.
  - **Java 14 (2020)**: Introdueix els **records**, una manera més simple de declarar classes de dades immutables, útils en contextos com microserveis o aplicacions modernes.
  - **Java 17 (2021)**: Actualització a **long-term support (LTS)**, que inclou millores en el rendiment i seguretat, amb funcionalitats com **sealed classes**, per controlar l’herència en les jerarquies de classes.

#### **C# (2000)**
- **Creació**: Desenvolupat per **Microsoft** en **2000** com a part del framework .NET, liderat per **Anders Hejlsberg**.
- **Objectiu inicial**: Ser un llenguatge modern, orientat a objectes i amb forta integració amb les aplicacions de Windows i el sistema .NET.
- **Característiques clau**: Simplicitat, orientació a objectes, compatibilitat amb el framework .NET.
- **Evolució**:
  - **C# 2.0 (2005)**: Introducció de **generics**, semblant a Java, per permetre la programació amb tipus genèrics, fent el llenguatge més flexible.
  - **C# 3.0 (2007)**: Introducció de **LINQ (Language Integrated Query)**, una eina potent per treballar amb col·leccions i dades estructurades dins del llenguatge.
  - **C# 7.0 (2017)**: Apareixen característiques com **tuples** millorades i **local functions**, facilitant la programació funcional.
  - **C# 9.0 (2020)**: Incorpora **records** i **pattern matching** millorat, igual que Java, per a simplificar el disseny de dades i els patrons.

#### **Python (1991)**
- **Creació**: Creat per **Guido van Rossum** en **1991**.
- **Objectiu inicial**: Ser un llenguatge senzill, llegible i potent per a la programació general, amb una sintaxi clara.
- **Característiques clau**: Facilitat d'ús, dinamisme, orientació a objectes i funcional, gran comunitat i ecosistema de biblioteques.
- **Evolució**:
  - **Python 2.0 (2000)**: Introducció del **garbage collection** i millores en la compatibilitat amb Unicode.
  - **Python 3.0 (2008)**: Una revisió major per millorar la consistència i llegibilitat del llenguatge, però amb canvis incompatibles amb Python 2.
  - **Python 3.5 (2015)**: Introducció de la **sintaxi d'asincronisme** amb `async` i `await`, millorant el maneig d'operacions asíncrones i xarxes.
  - **Python 3.9 (2020)**: Afegix **operadors de fusió de diccionaris** i millores en el **tipat estàtic** mitjançant la biblioteca `typing`, ajudant a mantenir el codi més segur i robust.

---
Podeu consultar la popularitat dels llenguatges de programació en diferents pàgines. Una d'elles es [the TIOBE index](https://www.tiobe.com/tiobe-index/). Es poden observar dades curioses, com per exemple l'evolució de la popularitat del llenguatge Python, actualment el més popular, que encara que és més antic que JAVA, va despegar molt més tard.
