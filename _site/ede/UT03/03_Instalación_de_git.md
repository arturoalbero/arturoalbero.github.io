# **Instalació i ús de comandes en Git**

Com hem vist abans, Git és un sistema de control de versions distribuït (DVCS) creat per l'equip de Linux. Actualment, s'utilitza en molts servidors de control de versions, com GitHub, BitBucket o GitLab, per emmagatzemar projectes de manera remota. Però, si volem interactuar amb aquests projectes o repositoris remots des de la nostra màquina local, hem d’instal·lar Git localment i utilitzar les diferents comandes que proporciona. En aquest document aprendrem com instal·lar Git i com utilitzar algunes de les comandes bàsiques.

## Instalació de Git en la teua màquina

**1. Instal·lació i configuració de Git**  
La instal·lació de Git depén del sistema operatiu en què volem instal·lar-lo.

Per a sistemes Linux, només hem d’executar la comanda especificada per instal·lar Git. Per exemple, en sistemes Ubuntu hem d’executar aquesta comanda:  
`sudo apt-get install git`

Per a Windows i Mac, hem d’anar a la pàgina web de Git i descarregar la versió adequada. En el cas de Mac, també es pot instal·lar Git a través de la instal·lació d’XCode.

**1.1. Configuració de Git**  
Abans d'utilitzar les comandes Git, hauríem de configurar algunes variables predeterminades en el nostre sistema, per tal de connectar-nos fàcilment als servidors i emmagatzemar les nostres credencials per a connexions posteriors. Utilitzarem la comanda `git config` per a emmagatzemar aquestes variables, i les podem guardar a tres nivells diferents:

- **Sistema**: utilitzant el paràmetre `--system`, la configuració s'aplica a tots els usuaris del sistema.
- **Usuari**: utilitzant el paràmetre `--global`, la configuració s'aplica només a l'usuari actual del sistema. Aquesta és l’opció que utilitzarem en aquesta secció.
- **Repositori**: cada repositori tindrà els seus propis paràmetres de configuració de Git.

Primer de tot, definim el nostre nom complet amb aquesta comanda (substitueix "John Doe" pel teu nom real):  
`git config --global user.name "John Doe"`

A continuació, especifiquem el correu electrònic amb el qual vam crear el compte de GitHub:  
`git config --global user.email yourEmail@server.com`

Després, podem especificar l'editor predeterminat de Git. Aquest pas no és necessari, però si Git necessita obrir un fitxer de text per mostrar informació, aquest serà l'editor que utilitzarem. Per exemple, podem utilitzar el Bloc de notes en Windows d’aquesta manera:  
`git config --global core.editor notepad`

Finalment, hem d'especificar com Git emmagatzemarà les nostres credencials, de manera que no hagem d’introduir-les cada vegada que ens connectem als repositoris. L'ajudant que utilitzem per a guardar les credencials depén del sistema operatiu en què estem utilitzant Git, però la comanda general és aquesta:  
`git config --global credential.helper <helper>`

on `<helper>` depén del sistema operatiu:

- Per a Windows utilitzem `wincred`
- Per a Linux utilitzem `cache`
- Per a Mac OSX utilitzem `osxkeychain`

Així que, si volem configurar l'ajudant de credencials en Windows, per exemple, escrivim una cosa així:  
`git config --global credential.helper wincred`

D’aquesta manera, ja estem preparats per utilitzar Git, fins i tot des de diferents entorns de desenvolupament, com veurem en altres seccions. Podem comprovar la configuració actual utilitzant la comanda `git config --list`. També podem comprovar la versió de Git que tenim instal·lada actualment amb la comanda `git version`.

**2. Comandes locals bàsiques útils**  
Vegem ara algunes comandes que podem utilitzar per a treballar amb projectes locals (sense connectar-nos a cap repositori o servidor remot). Aquestes comandes són útils tant per a projectes locals com per a projectes remots que hàgem descarregat prèviament, si volem treballar localment amb ells durant un temps.

**2.1. Crear un repositori local**  
Si volem inicialitzar o crear un nou repositori local, primer hem de crear la carpeta on es guardarà aquest projecte. Després, podem inicialitzar-la com a repositori Git amb aquesta comanda (des de dins de la carpeta del projecte):  
`git init`

Això inicialitzarà aquesta carpeta com a carpeta Git, creant una subcarpeta oculta anomenada `.git`, on s'emmagatzemarà la base de dades del repositori. No ens hem de preocupar per aquesta subcarpeta.

Cada fitxer dins d'aquest repositori estarà en un dels tres estats mencionats en seccions anteriors (committed, staged o modified), i podem canviar l'estat de cada fitxer escrivint algunes de les comandes que veurem ara. També podem comprovar l'estat del repositori en qualsevol moment amb la comanda `git status` (l’hem d'executar des de la carpeta arrel del repositori). Ens informarà si tot està compromés, o si hi ha algun fitxer amb canvis sense guardar.

**Exercici 1:** 
1. Instala git en el teu ordinador, en la màquina virtual facilitada en classe o en una màquina virtual. En aquest últim cas, pots descarregar una imatge de Linux com per exemple [Lubuntu](https://lubuntu.me/) i utilitzar [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (o qualsevol altre). Per a poder utilitzar una màquina virtual en el teu ordinador, **has de permetre-ho en la configuració de la BIOS** (permetre virtualització).
2. Configura git amb el teu compte creat en l'apartat anterior. 
3. Crea una carpeta anomenada **GitExercises** en el teu sistema. Emmagatzemarem alguns repositoris dins d'ella. Per començar, crea dins d’aquesta carpeta una subcarpeta nova anomenada **MyFirstLocalRepo**, entra dins d’aquesta carpeta i executa la comanda `git init` per inicialitzar aquesta carpeta com a repositori Git.

**2.2. Afegir o editar fitxers en el repositori**  
Si afegim algun fitxer nou a la carpeta del repositori (per exemple, un fitxer anomenat `file.txt`) i executem la comanda `git status`, Git mostrarà que hi ha alguns fitxers que han de ser afegits al repositori.
**Aquests fitxers es troben en estat "modificat".** Si utilitzem la comanda `git add`, el(s) fitxer(s) es marcaran com a "preparats" (staged). Si només volem afegir un únic fitxer, especificarem aquest nou fitxer com a paràmetre:  
`git add file.txt`

No obstant això, poden haver-hi molts canvis en el nostre repositori. Si volem afegir-los tots alhora, utilitzem `.` com a paràmetre:  
`git add .`

Després de cada nou canvi que fem en el repositori (ja siga afegint, editant o eliminant fitxers), hem de repetir aquesta comanda per preparar els canvis. Una vegada els canvis estiguen preparats, aquest és el resultat de la comanda `git status`:

Com pots veure en la imatge anterior, podem utilitzar la comanda `git rm` per desmarcar aquest fitxer, si volem:  
`git rm --cached file.txt`

**2.3. Desar o commetre canvis**  
Després d'afegir o preparar els canvis, hem de fer un últim pas per actualitzar la base de dades del repositori. Aquesta operació és el "commit", i la podem fer mitjançant la comanda `git commit`. Podem executar-la després d'una o diverses operacions de `git add` que hagen preparat un o més fitxers.

Aquesta és l'estructura general de la comanda `git commit`:  
`git commit -m "El meu primer commit"`

El paràmetre `-m` ens permet especificar un missatge de commit. Aquest missatge és obligatori per a desar el commit, de manera que, si volem recuperar-lo més endavant, podem identificar aquest missatge en la llista de commits. Després de commetre els canvis, si executem `git status`, hauríem de veure que no hi ha res per commetre:

```
On branch master
nothing to commit, working tree clean
```

Alternativament, també podem utilitzar el paràmetre `-a` per afegir o preparar automàticament els canvis abans de commetre’ls. Aquesta comanda combina un `git add .` i una comanda `git commit`:  
`git commit -a -m "El teu missatge de commit"`

**Mostrar l'historial de commits**

Si volem veure l'historial de commits del nostre repositori, podem escriure aquesta comanda:  
`git log`

Cada commit té una etiqueta que consisteix en una seqüència de dígits i lletres. En l'exemple anterior, el nostre commit s'ha etiquetat com a `08f4ed1751…`. Aquesta etiqueta serà útil per a comprovar el commit més endavant, encara que no cal recordar tots aquests caràcters, només el prefix inicial.

**Mostrar els canvis**

També podem veure els canvis entre dues versions consecutives del repositori. Hi ha moltes maneres de fer-ho:

- `git show`: mostra els canvis realitzats en l'últim commit.
- `git show cb1fd6f8`: mostra els canvis fets en el commit etiquetat amb el prefix `cb1fd6f8` (com es pot veure, no necessitem escriure tota l'etiqueta).
- `git diff`: mostra els canvis realitzats en l'última versió que encara no s'ha commés.
- 

**Exercici 2:**

Fes els següents canvis en el repositori **MyFirstLocalRepo** que has creat en l'exercici anterior:

1. Crea un fitxer nou anomenat `file.txt` amb el text "El meu primer fitxer de text". Guarda els canvis en aquest fitxer.
2. Executa la comanda `git add .` per preparar aquest fitxer.
3. Executa la comanda `git commit` amb el missatge "El meu primer commit" per desar els canvis a la base de dades.
4. Edita el fitxer `file.txt` i afegeix una segona línia amb el teu nom.
5. Executa la comanda `git commit -a -m` per preparar i commetre automàticament els canvis amb el missatge "El meu segon commit".
6. Executa la comanda `git log` per veure l'historial de commits. Hauries de veure una cosa semblant a aquesta:

```
commit 08f4ed1751… 
Author: John Doe <john@example.com>
Date: Wed Apr 14 15:00 2023
    El meu primer commit
commit cb1fd6f8… 
Author: John Doe <john@example.com>
Date: Wed Apr 14 16:00 2023
    El meu segon commit
```

7. Executa la comanda `git show` per veure els canvis fets en l'últim commit. Hauries de veure alguna cosa semblant a això:

Els nous canvis es mostren en verd si han sigut afegits (en aquest cas, el teu nom al final del contingut del fitxer), o en roig si han sigut eliminats.

## **Etiquetar commits**

Podem afegir manualment etiquetes a un commit determinat, de manera que el podem trobar fàcilment més endavant quan vulguem mostrar els seus canvis. Utilitzem la comanda `git tag` seguida del nom de l'etiqueta:  
`git tag v1.0`

Això s'aplica a l'últim commit enviat. A continuació, podem mostrar els canvis d'aquest commit amb aquesta comanda:  
`git show v1.0`

Si volem etiquetar un commit que no és l'últim, llavors hem d'especificar l'etiqueta anterior d'aquest commit (o el seu prefix inicial), després de la nova etiqueta que volem assignar-li:  
`git tag v1.0 cb1fd6f8`

**2.4. Desfer canvis**  
I si volem tornar a un commit anterior i desfer els canvis fets en l'últim(s) commit(s)? Podem utilitzar la comanda `git reset`. Aquesta comanda es pot utilitzar de moltes maneres, però ací explicarem una d'elles: hem d'identificar l'etiqueta del commit que volem establir com l'actual i després escriure aquesta comanda:  
`git reset --hard 0305afd`

on `0305afd` és el prefix de l'etiqueta del commit que volem establir com el nostre estat actual actiu.

**2.5. El fitxer .gitignore**  
En cada repositori Git, podem afegir manualment un fitxer anomenat `.gitignore`. És només un fitxer de text que conté una llista de fitxers i carpetes que han de ser ignorats quan pugem nous canvis. Per exemple, si estem treballant en un projecte C#, no necessitem pujar fitxers `.exe` al repositori, ja que podem recompilar el projecte de nou. Així que podem editar aquest fitxer i especificar-ho així:

```
*.exe
```

Això saltarà tots els fitxers `.exe` de la carpeta principal del projecte. De la mateixa manera, podem afegir tants fitxers i carpetes com necessitem en aquest fitxer. Per exemple:

```
node_modules/
*.exe
*.tmp
```

Això omet la carpeta `node_modules` i tots els fitxers `.exe` o `.tmp` en la carpeta arrel. Ací pots trobar fitxers `.gitignore` típics per a molts tipus diferents de projectes, com projectes Node, Laravel, etc.

**NOTA**: El fitxer `.gitignore` **NO** exclou fitxers que ja han sigut commesos prèviament. Per exemple, si li diem a aquest fitxer que ignore fitxers `.exe` però prèviament hem commés un fitxer `.exe` al repositori, aquest fitxer no s'eliminarà del mateix.

### 3. Treballant amb repositoris remots

Ara que hem après com afegir i editar contingut en un repositori local, vegem com connectar-nos a un repositori remot de GitHub per descarregar o pujar els canvis. Primerament, si volem treballar amb repositoris remots emmagatzemats en GitHub, necessitarem crear aquest repositori remot en GitHub.

#### 3.1. Clonar repositoris

Una vegada tinguem el nostre repositori creat en GitHub, necessitarem copiar-lo a la nostra màquina local. Aquesta operació es coneix com una operació de **clonació**, i la fem amb la comanda `git clone`, especificant la URL del repositori, la qual es pot recuperar del botó *Clone or download* en el mateix repositori.

**Exemple de pàgina principal del repositori:**

Si tinguérem un repositori a GitHub, la comanda adequada per clonar-lo seria així:

```bash
git clone https://github.com/johndoe/test
```

Aquesta comanda crearà una carpeta anomenada **test** en el directori des del qual estem executant aquesta comanda, així que assegura’t d'executar-la dins de la carpeta on vulgues col·locar el teu projecte.

#### 3.2. Actualitzar els canvis remots en local

Una vegada tinguem el repositori clonat localment, si estem treballant en equip o gestionant el mateix repositori des de diferents ordinadors, potser necessitarem descarregar els últims canvis d'aquest repositori per actualitzar la nostra còpia local. Aquest pas és essencial per assegurar-nos que tenim els continguts actualitzats abans de fer nous canvis.

Per fer això, simplement utilitzem la comanda `git pull` des de la carpeta del repositori:

```bash
git pull
```

Això descarrega automàticament els últims canvis i actualitza els fitxers afectats.

#### 3.3. Pujar els canvis locals al repositori remot

Si tenim el nostre repositori local actualitzat i fem nous canvis a qualsevol fitxer, podem pujar aquests canvis al repositori remot. Els passos necessaris són els següents:

1. Fes canvis en el(s) fitxer(s) desitjat(s).
2. Marca els fitxers com preparats amb la comanda `git add .` que ja hem vist abans.
3. Fes un **commit** dels canvis localment amb la comanda `git commit` que també hem vist abans.
4. Puja aquest commit (o els últims commits, si n’hi ha més d’un) amb la comanda `git push`.

```bash
git push
```

**Exercici 3:**

1. Clona el repositori de GitHub **MyFirstRepo** que hauràs creat en el document anterior. Clona'l dins de la mateixa carpeta principal on estàs creant la resta de repositoris locals d'aquest document. Veureu una nova carpeta anomenada **MyFirstRepo** que conté tots els elements del vostre repositori remot.
   
2. Aplica aquests canvis:
   - Afegeix un nou fitxer anomenat `shopping_list.txt` amb una llista d'articles que vulgues comprar.
   - Puja aquest fitxer al repositori remot (recorda, primer afegeix els canvis, després fes el commit i finalment fes el push).
   
3. Vés a GitHub i comprova que el nou fitxer s'ha pujat correctament.
   
4. Vés a una carpeta diferent de l'ordinador i clona una còpia nova del mateix repositori.
   
5. Des d'aquesta segona carpeta, afegeix un nou fitxer anomenat `to_do.txt` i afegeix algunes tasques pendents per a les properes setmanes.

6. Pujar els canvis al repositori remot.

7. Torna a la teua carpeta original **MyFirstRepo** i fes una comanda `git pull`. Comprova si el nou fitxer **to_do.txt** s'ha descarregat en aquesta còpia local.

## Taula resum de comandes bàsiques

| Comanda                   | Utilitat                                                                 |
|----------------------------|--------------------------------------------------------------------------|
| `git init`                 | Inicialitza un nou repositori Git en la carpeta actual.                   |
| `git status`               | Mostra l'estat del repositori i els fitxers modificats o no commesos.     |
| `git add <fitxer>`         | Afegeix un fitxer específic a l'àrea d'stage per al següent commit.       |
| `git add .`                | Afegeix tots els fitxers modificats a l'àrea d'stage.                     |
| `git commit -m "<missatge>"`| Realitza un commit dels canvis amb un missatge descriptiu.               |
| `git commit -a -m "<missatge>"`| Afegeix i commet automàticament els canvis sense necessitat de `git add`. |
| `git log`                  | Mostra l'historial de commits del repositori.                             |
| `git show`                 | Mostra els canvis realitzats en l'últim commit o en un commit específic.  |
| `git diff`                 | Compara els canvis entre les versions no commeses del repositori.         |
| `git rm --cached <fitxer>` | Elimina un fitxer de l'àrea d'stage sense esborrar-lo del sistema.        |
| `git reset --hard <commit>`| Restaura l'estat del repositori a un commit anterior.                     |
| `git tag <etiqueta>`       | Afegeix una etiqueta a un commit específic.                               |
| `git clone <URL>`          | Clona un repositori remot en la màquina local.                            |
| `git pull`                 | Actualitza la còpia local amb els canvis del repositori remot.            |
| `git push`                 | Puja els canvis locals al repositori remot.                               |
| `git config --global user.name "<nom>"` | Configura el nom d'usuari per als commits.               |
| `git config --global user.email "<email>"`| Configura el correu electrònic per als commits.         |
| `git config --list`        | Mostra la configuració actual de Git.                                     |
| `git version`              | Mostra la versió de Git instal·lada.                                      |

# Ús de branques en Git

En aquesta segona part, ens centrarem en el treball amb branques (**branches**) de Git, una de les funcionalitats més poderoses d’aquest sistema de control de versions. Les branques permeten treballar en funcions o millores de manera independent sense afectar la branca principal del projecte (normalment anomenada `main` o `master`). Així, podem desenvolupar, provar i modificar noves funcionalitats sense interferir en la versió estable del projecte.

### 1. Què és una branca en Git?

Una branca en Git és essencialment una seqüència de commits que comença a partir d'un punt específic en la història del repositori. La branca principal del projecte és generalment `main` o `master`, però podem crear tantes branques com necessitem per desenvolupar noves característiques o corregir errors de manera paral·lela. 

Quan treballem amb branques, podem fer canvis en una branca sense que afecten les altres, i posteriorment podem combinar les branques per integrar aquests canvis en el projecte principal.

### 2. Crear i canviar de branques

#### 2.1. Crear una nova branca

Per crear una nova branca, utilitzem la comanda `git branch`, seguida del nom de la nova branca. Aquesta nova branca es crearà a partir de l'estat actual del repositori, és a dir, del commit on estem en aquest moment.

```bash
git branch nom-branca
```

Per exemple, si vols crear una branca per desenvolupar una nova funcionalitat anomenada "nova-funcio", pots fer-ho així:

```bash
git branch nova-funcio
```

#### 2.2. Canviar de branca

Una vegada creada la nova branca, si volem treballar en ella, hem de canviar-hi. Per això, utilitzem la comanda `git checkout` seguida del nom de la branca a la qual volem canviar:

```bash
git checkout nova-funcio
```

A partir d’aquest moment, qualsevol canvi que fem s’aplicarà a aquesta branca, sense afectar la branca principal (`main` o `master`).

**Nota:** A partir de Git 2.23, també podem utilitzar `git switch` per canviar de branca, una alternativa més clara a `git checkout`:

```bash
git switch nova-funcio
```

#### 2.3. Crear i canviar de branca en un sol pas

És possible crear una branca i canviar-hi en un sol pas amb aquesta comanda:

```bash
git checkout -b nom-branca
```

Per exemple:

```bash
git checkout -b nova-funcio
```

Aquesta comanda crea la branca `nova-funcio` i automàticament ens hi canvia.

### 3. Treballar en una branca

Una vegada estiguem treballant en una nova branca, podem fer modificacions, afegir fitxers i realitzar commits de la mateixa manera que ho faríem en la branca principal. Aquests canvis quedaran aïllats dins de la branca i no afectaran cap altra branca fins que decidim combinar-les.

#### 3.1. Veure les branques disponibles

Podem veure totes les branques existents en el nostre repositori utilitzant aquesta comanda:

```bash
git branch
```

La branca en la qual estem treballant actualment estarà marcada amb un asterisc `*`.

### 4. Fusionar branques (merge)

Una vegada hàgem acabat el desenvolupament o la correcció d'errors en la nostra branca, és moment de fusionar els canvis amb la branca principal. Aquest procés s’anomena **fusió** o **merge**. 

Abans de realitzar la fusió, és recomanable assegurar-se que estem en la branca on volem aplicar els canvis (normalment `main` o `master`). Per a això, canviem a la branca amb:

```bash
git checkout main
```

Una vegada estem en la branca principal, podem utilitzar la comanda `git merge` per fusionar els canvis de la branca secundària en la qual hem estat treballant (per exemple, `nova-funcio`):

```bash
git merge nova-funcio
```

Si no hi ha conflictes entre els canvis, Git combinarà automàticament les dues branques. Si hi ha conflictes (per exemple, si s'han modificat les mateixes línies de codi en ambdues branques), Git ens avisarà i haurem de resoldre'ls manualment.

### 5. Resoldre conflictes de fusió

Quan apareixen conflictes durant una fusió, Git marca les línies de codi en els fitxers afectats que tenen conflictes. Hauríem de revisar aquestes línies manualment, escollir quina versió volem mantenir, i després marcar els conflictes com resolts amb `git add`. Finalment, fem un commit per completar la fusió:

```bash
git add <fitxer>
git commit
```

### 6. Esborrar branques

Després de fusionar els canvis d'una branca secundària a la branca principal, és una bona pràctica eliminar aquesta branca per mantindre el repositori net. Podem fer-ho amb la comanda `git branch -d`:

```bash
git branch -d nova-funcio
```

Si la branca no ha sigut fusionada, Git no permetrà esborrar-la. Si estem segurs que volem eliminar-la encara que no haja sigut fusionada, podem forçar l'eliminació amb `git branch -D`:

```bash
git branch -D nova-funcio
```

### 7. Treball amb branques remotes

Quan treballem amb repositoris remots (com GitHub o GitLab), les branques locals no es pugen automàticament al servidor remot. Per pujar una nova branca, hem d’utilitzar la comanda `git push` especificant el nom de la branca:

```bash
git push origin nova-funcio
```

Una vegada la branca estiga pujada al repositori remot, altres col·laboradors podran accedir-hi.
### Exercici 4: Treballant amb branques en Git

En aquest exercici, aprendràs a treballar amb branques per desenvolupar noves funcionalitats o fer correccions sense afectar el codi de la branca principal. Seguiràs el procés complet de creació de branques, fusió de canvis i resolució de conflictes, tot en un escenari pràctic. 

#### Escenari:
Afegeix al repositori abans creat, MyFirstRepo, un fitxer anomenat `index.html` a la branca principal (`main`). El teu objectiu és afegir dues noves funcionalitats de manera independent, treballant en branques separades i, després, fusionar-les amb la branca principal. Documental els passos amb captures de pantalla i comparteix la memòria de l'exercisi.
Pots emprar el següent codi com a base del fixer:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arxiu</title>
</head>
<body>
    
</body>
</html>
```
 

#### Passos a seguir:

1. **Clona el repositori i situa't en la branca principal:**


2. **Crea una nova branca per afegir un títol a la pàgina web:**

   - Crea la branca `afegir-titol` i canvia a aquesta branca:
     ```bash
     git checkout -b afegir-titol
     ```

   - Obri el fitxer `index.html` i afegeix un títol dins de l’etiqueta `<body>`:
     ```html
     <h1>Benvinguts a la meua pàgina web</h1>
     ```

   - Desa els canvis i fes un commit:
     ```bash
     git add index.html
     git commit -m "Afegit títol a la pàgina web"
     ```

3. **Crea una altra branca per afegir un paràgraf d’introducció:**

   - Canvia a la branca principal (`main`) i després crea una nova branca `afegir-introduccio`:
     ```bash
     git checkout main
     git checkout -b afegir-introduccio
     ```

   - Modifica el fitxer `index.html` i afegeix un paràgraf d’introducció sota el títol:
     ```html
     <p>Aquesta és una pàgina web d’exemple creada per aprendre Git.</p>
     ```

   - Desa els canvis i fes un commit:
     ```bash
     git add index.html
     git commit -m "Afegit paràgraf d'introducció"
     ```

4. **Fusiona les branques amb la branca principal:**

   - Torna a la branca principal:
     ```bash
     git checkout main
     ```

   - Fusiona la branca `afegir-titol` amb la branca principal:
     ```bash
     git merge afegir-titol
     ```

   - A continuació, fusiona la branca `afegir-introduccio` amb la branca principal:
     ```bash
     git merge afegir-introduccio
     ```

5. **Resol un conflicte de fusió (opcional):**

   Si hi haguera conflictes durant la fusió (per exemple, si el títol i el paràgraf hagueren estat afegits en les mateixes línies del fitxer `index.html`), resol-los de la següent manera:

   - Obri el fitxer conflictiu (`index.html`) i modifica les línies marcades per Git per mantenir les dues funcionalitats (el títol i el paràgraf).
   - Després, marca els conflictes com resolts:
     ```bash
     git add index.html
     ```

   - Fes un commit per completar la fusió:
     ```bash
     git commit -m "Resolts conflictes i fusionades branques"
     ```

6. **Esborra les branques:**

   Després de fusionar les branques, pots esborrar-les per mantindre el repositori net:
   ```bash
   git branch -d afegir-titol
   git branch -d afegir-introduccio
   ```

### Taula resum de comandes de branques en Git

| Comanda                                | Utilitat                                                             |
|-----------------------------------------|----------------------------------------------------------------------|
| `git branch`                            | Llista totes les branques del repositori.                             |
| `git branch <nom-branca>`               | Crea una nova branca amb el nom especificat.                          |
| `git checkout <nom-branca>`             | Canvia a la branca especificada.                                      |
| `git checkout -b <nom-branca>`          | Crea una nova branca i canvia-hi en un sol pas.                       |
| `git switch <nom-branca>`               | Canvia a la branca especificada (alternativa a `git checkout`).       |
| `git merge <nom-branca>`                | Fusiona la branca especificada amb la branca actual.                  |
| `git branch -d <nom-branca>`            | Esborra una branca local després de fusionar-la.                      |
| `git branch -D <nom-branca>`            | Força l’eliminació d’una branca no fusionada.                         |
| `git push origin <nom-branca>`          | Pujar una nova branca al repositori remot.                            |
| `git pull origin <nom-branca>`          | Descarrega i integra els canvis d'una branca remota en la branca local.|
| `git stash`                             | Guarda els canvis no commesos temporalment per canviar de branca.     |
| `git stash apply`                       | Recupera els canvis guardats anteriorment amb `git stash`.            |