# Integració de Git i Github en Visual Studio Code, IntelliJ i Pycharm. Convertir VSCode en un editor de Markdown amb el poder de les extensions.

## 1. Què és Markdown i com s’utilitza?

Markdown és un llenguatge de marcatge lleuger que permet formatar text de manera senzilla i intuïtiva. És molt utilitzat per escriure documentació, blogs o qualsevol altre tipus de text que després es converteix en HTML, ja que facilita molt la seva llegibilitat. Un document Markdown és essencialment text pla que es pot llegir fàcilment i que després es pot exportar a altres formats com HTML o PDF.

### Sintaxi bàsica de Markdown

1. **Títols i subtítols**  
   Els títols en Markdown es creen utilitzant el símbol de coixinet `#`. Com més coixinets es col·loquen, més baix és el nivell del títol:
   - `# Títol 1`
   - `## Títol 2`
   - `### Títol 3`

2. **Text en negreta**  
   El text es pot fer negreta envoltant-lo amb dos asteriscs `**` o dos guions baixos `__`:
   - `**Aquest text és en negreta**`  
   - `__Aquest text també és en negreta__`

3. **Text en cursiva**  
   Per posar el text en cursiva, s'utilitzen un sol asterisc `*` o un sol guió baix `_`:
   - `*Text en cursiva*`
   - `_Text en cursiva_`

4. **Llistes**  
   Per crear una llista no ordenada (punts), s'utilitza un asterisc `*`, un signe més `+`, o un guió `-`:
   - `* Element 1`
   - `- Element 2`

   Per a llistes numerades:
   - `1. Primer element`
   - `2. Segon element`

5. **Enllaços**  
   Els enllaços es creen utilitzant la sintaxi `[text](url)`:
   - `[Google](https://www.google.com)`

6. **Imatges**  
   Les imatges es poden inserir de manera similar als enllaços, afegint un signe d'exclamació al començament `![alt text](url)`:
   - `![Logo](https://url-de-la-imatge.com/logo.png)`

7. **Codi**  
   Si vols mostrar un fragment de codi dins d'una línia de text, pots utilitzar les cometes invertides `` ` ``. Per a blocs de codi, es poden usar tres cometes invertides ```:
   - `inline code: \`echo "Hola"\``
   - Blocs de codi:
   - Pots especificar inclús el llenguatge de programació per a que resalte la sintaxis si vols (no funcionarà en tots els entorns).

     ```bash
     echo "Això és un bloc de codi"
     ```

8. **Cites**  
   Es poden afegir cites utilitzant `>` al començament de la línia:
   - `> Això és una cita`

## 2. Utilitzar Markdown a Visual Studio Code

### Instal·lació de Visual Studio Code

Primer de tot i si no ho has fet encara, cal instal·lar VSCode, que es pot descarregar des de la seua [pàgina oficial](https://code.visualstudio.com/). Un cop instal·lat, ja estarem llestos per personalitzar-lo i utilitzar-lo per editar Markdown.

#### Extensions necessàries

Per tal de millorar l'experiència treballant amb Markdown a VSCode, cal instal·lar algunes extensions molt útils:

1. **Markdown All in One**  
   Aquesta extensió proporciona eines útils per editar Markdown, com ara vista prèvia, tancament automàtic de llistes, i altres dreceres de teclat.  
   - Per instal·lar-la, ves a l'extensió dins de VSCode i busca "Markdown All in One".

2. **Markdownlint**  
   Afegeix un linter que verifica si el teu Markdown segueix bones pràctiques, ajudant-te a corregir errors comuns.
   - Cerca "Markdownlint" a l'extensió.

3. **Markdown PDF**  
   Aquesta extensió permet convertir fitxers `.md` a PDF, HTML o altres formats.
   - Cerca "Markdown PDF" i instal·la-la per poder exportar els teus documents.

#### Comandes útils dins de VSCode

1. **Vista prèvia de Markdown**  
   Per veure una vista prèvia del fitxer Markdown que estàs editant, pots obrir el fitxer `.md` i fer clic a `Ctrl+Shift+V` (Windows/Linux) o `Cmd+Shift+V` (Mac). També pots fer clic amb el botó dret sobre el fitxer i seleccionar "Open Preview".

2. **Exportar a HTML o PDF**  
   Un cop tens el document editat, pots exportar-lo a HTML o PDF utilitzant l'extensió Markdown PDF:
   - Per exportar-ho, obre la paleta de comandes (`Ctrl+Shift+P` o `Cmd+Shift+P`) i escriu "Markdown PDF: Export". Selecciona el format desitjat.
   - També pots escriure `>` en la barra de búsqueda. Té el mateix efecte i pot ser més fàcil de recordar.

### Integrar Git i GitHub en VSCode

Una de les eines més potents de VSCode és la integració amb Git, que et permet gestionar repositoris locals i remots (com GitHub) directament des de l'editor.

#### Crear un repositori Git

Per començar a treballar amb Git, primer necessites crear un repositori:

1. **Inicialitzar un repositori**  
   Obre la carpeta del teu projecte a VSCode i fes clic al panell de control de Git (icona de branques). Allà trobaràs l'opció "Initialize Repository". Això crearà un repositori Git a la teua carpeta de treball.

2. **Afegir fitxers al repositori**  
   Un cop creat, tots els fitxers no seguits apareixeran a la secció "Changes". Per afegir-los al teu commit, selecciona els fitxers i fes clic a la icona "+".

3. **Fer un commit**  
   Després d'afegir fitxers, pots crear un commit, que és un punt de restauració dins del teu projecte. Escriu un missatge descriptiu al camp de text i fes clic a la icona de confirmació.

#### Clonar un repositori de GitHub

Si ja tens un repositori a GitHub i vols treballar-hi a VSCode, segueix aquests passos:

1. **Clonar el repositori**  
   Ves a `Ctrl+Shift+P` o `Cmd+Shift+P` i escriu "Git: Clone". Introdueix l'URL del repositori GitHub i selecciona la carpeta on vols guardar-lo.

2. **Fer canvis i fer un commit**  
   Un cop clonat el repositori, pots fer canvis als fitxers com de costum. Després afegeix els fitxers canviats a Git, crea un commit i finalment envia-ho a GitHub.

#### Push i pull

1. **Fer push**  
   Per enviar els canvis al teu repositori remot (GitHub), fes clic a la icona de sincronització (a dalt a la barra de Git) o escriu "Git: Push" a la paleta de comandes.

2. **Fer pull**  
   Si altres col·laboradors han fet canvis al repositori remot, pots baixar aquests canvis fent un `pull`. Escriu "Git: Pull" a la paleta de comandes o fes clic a la icona de sincronització.

#### Altres comandes útils de Git

- **Git: Checkout to...** permet canviar de branca.
- **Git: Merge Branch...** permet fusionar branques.
- **Git: Create Branch...** crea una nova branca per treballar.

## 3. Integrar IntelliJ IDEA i PyCharm amb Git i GitHub

IntelliJ IDEA i PyCharm són dos entorns de desenvolupament integrats (IDE) molt potents de JetBrains, que suporten diversos llenguatges de programació. Tant si treballes en projectes Java (IntelliJ) com Python (PyCharm), pots integrar Git i GitHub de manera fàcil per gestionar el control de versions del teu codi.

### Configuració inicial de Git

Abans de començar, assegura’t que tens Git instal·lat al teu sistema. Si no el tens, pots descarregar-lo des de [la pàgina oficial de Git](https://git-scm.com/).

#### Configurar Git a IntelliJ IDEA o PyCharm

1. **Obrir les preferències de l’IDE**  
   Ves a `File` > `Settings` (o `Preferences` en macOS) i després cerca `Version Control` > `Git`.

2. **Comprovar la ruta de Git**  
   L'IDE intentarà detectar automàticament la ubicació del binari de Git al teu sistema. Si no ho fa correctament, especifica la ruta manualment. La ruta típica per a Git és:
   - Windows: `C:\Program Files\Git\bin\git.exe`
   - macOS i Linux: `/usr/bin/git` o `/usr/local/bin/git`

3. **Comprovar la configuració**  
   Fes clic al botó `Test` per verificar que Git està configurat correctament i funcionant. Si tot està bé, veuràs el missatge "Git executable is found".

### Crear un repositori Git en IntelliJ IDEA o PyCharm

#### Inicialitzar un repositori Git

1. **Obrir un projecte o crear-ne un de nou**  
   Obre el projecte existent o crea’n un de nou a IntelliJ o PyCharm.

2. **Inicialitzar un repositori Git**  
   Ves a `VCS` (Version Control System) al menú superior i selecciona `Enable Version Control Integration`. Apareixerà una finestra emergent on has de seleccionar `Git` com a sistema de control de versions.

3. **Afegir fitxers al repositori**  
   Un cop inicialitzat el repositori, podràs veure els fitxers no seguits al panell de "Version Control". Per afegir-los al seguiment de Git, selecciona’ls, fes clic amb el botó dret i selecciona `Git` > `Add`.

4. **Fer un commit**  
   Després d’afegir els fitxers, podràs fer un commit, que és un punt de restauració del projecte. Ves a `VCS` > `Commit` o fes clic a la icona de commit a la barra de control de versions. Escriu un missatge descriptiu i confirma el commit.

### Connectar amb GitHub

Per treballar amb GitHub, primer has de connectar el teu compte a l’IDE.

#### Configurar el compte de GitHub

1. **Accedir a GitHub des de l'IDE**  
   Ves a `File` > `Settings` (o `Preferences` en macOS) i busca `Version Control` > `GitHub`.

2. **Iniciar sessió a GitHub**  
   Fes clic a `Add Account`. Això obrirà una finestra on podràs iniciar sessió amb el teu compte de GitHub. Si ho prefereixes, també pots utilitzar un **token d’accés personal** (PAT) que pots generar al teu compte de GitHub.

### Crear un repositori GitHub des d’IntelliJ IDEA o PyCharm

1. **Crear el repositori remot**  
   Un cop tens Git integrat al teu projecte, pots pujar el teu projecte a GitHub directament des de l’IDE. Ves a `VCS` > `Import into Version Control` > `Share Project on GitHub`.

2. **Afegir una descripció**  
   Especifica el nom del repositori i la seva descripció (opcional). L’IDE crearà automàticament el repositori remot a GitHub i farà un `push` dels fitxers al repositori.

### Clonar un repositori GitHub a IntelliJ IDEA o PyCharm

Si ja tens un repositori a GitHub i vols clonar-lo per treballar-hi localment:

1. **Clonar el repositori**  
   Ves a `File` > `New` > `Project from Version Control`. Selecciona `Git` i introdueix l'URL del repositori GitHub que vols clonar.

2. **Seleccionar la ubicació**  
   Indica on vols guardar el projecte clonat al teu ordinador. Fes clic a `Clone` i l'IDE descarregarà el repositori a la ubicació seleccionada.

### Push i pull en GitHub

1. **Fer push dels canvis a GitHub**  
   Un cop has fet canvis i creat commits, pots enviar aquests canvis al teu repositori remot a GitHub fent clic a la icona `Push` a la barra de control de versions o anant a `VCS` > `Git` > `Push`. Això enviarà els teus commits al repositori remot.

2. **Fer pull dels canvis**  
   Si algú més ha fet canvis al repositori remot, pots fer un `pull` per actualitzar el teu repositori local. Ves a `VCS` > `Git` > `Pull` per descarregar els canvis.

### Altres funcionalitats de Git dins d’IntelliJ IDEA i PyCharm

- **Branques (branches)**: Pots crear noves branques per treballar en funcionalitats o correccions específiques sense afectar la branca principal (normalment `main` o `master`). Ves a `VCS` > `Git` > `Branches` > `New Branch` per crear-ne una de nova.
  
- **Merge**: Quan acabes de treballar en una branca, pots fusionar-la amb la branca principal. Selecciona la branca amb la qual vols treballar a `VCS` > `Git` > `Branches` i després selecciona `Merge` per fusionar les branques.

- **Resolució de conflictes**: Si hi ha conflictes entre diferents canvis (per exemple, si tu i un altre col·laborador heu fet canvis al mateix fitxer), l’IDE et mostrarà una interfície per resoldre els conflictes de manera visual.
