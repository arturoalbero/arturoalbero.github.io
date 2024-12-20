**Gestió bàsica de GitHub**

GitHub és una eina en línia que ens permet gestionar projectes utilitzant el control de versions a través de Git. Així, podem fer ús d'un DVCS, que és Git, i la gestió del codi font. A més, GitHub proporciona algunes funcionalitats addicionals, com el control d'accés, el treball col·laboratiu, la integració contínua, l'allotjament de pàgines web estàtiques, etc.

Hi ha algunes alternatives a GitHub, com BitBucket o GitLab, però actualment GitHub és la més popular.

1. **Registrar-se i primers passos**  
Per a utilitzar aquesta plataforma, hem d'anar al lloc web oficial i registrar-nos utilitzant el botó "Sign Up" a la cantonada superior dreta. Una vegada registrats, podem veure la nostra pàgina principal. Podem distingir algunes àrees importants en aquesta pàgina principal:

- A l'esquerra, podem veure la llista dels nostres repositoris. Al principi, aquesta llista estarà buida. Ara veurem què és un repositori i com crear-ne un.
- Al centre hi ha una llista de la teua activitat recent. Cada canvi que has fet als teus repositoris es publicarà ací.
- A la barra superior hi ha alguns enllaços i menús que poden ser útils:
  - La icona a la part superior esquerra t’enviarà a aquesta pàgina d'inici.
  - L'enllaç amb el símbol "+" et permet afegir nous elements al teu compte: repositoris, organitzacions…
  - L'última icona a la secció superior dreta és el teu perfil, des d'on pots gestionar la teua informació personal, repositoris, organitzacions creades, configuració personal, etc.

2. **Repositoris**  
Un VCS s'utilitza normalment per emmagatzemar projectes que poden ser desenvolupats per moltes persones. Tant si desenvolupem el projecte pel nostre compte com amb altres persones, pot ser necessari tindre una còpia remota del projecte, de manera que puguem restaurar-lo si hi ha algun problema amb la còpia local. Per a fer això, necessitem un repositori on s'emmagatzemarà la nostra còpia remota.

Podem crear el nostre repositori a GitHub, Bitbucket o altres plataformes. En aquest cas, utilitzarem GitHub, que és el més popular. A més, ens permet crear repositoris tant públics com privats. Els repositoris públics poden ser vistos per qualsevol, però només les persones autoritzades poden fer canvis tant en els repositoris públics com en els privats.

Si volem crear un repositori a GitHub (sempre que ja ens hàgem registrat), hem de fer clic al botó "New" a la cantonada superior esquerra (o a través de l'enllaç "+" a la cantonada superior dreta, triant "New repository" després), i especificar el nom del repositori i algunes de les seues configuracions generals: si volem que siga públic o privat, i si volem afegir un fitxer README inicial (recomanat).

**Crear repositori**  
Si fem clic sobre el nom del repositori al panell de l'esquerra de la vista principal, podem accedir a aquest repositori. Des d'aquesta pàgina podem, per exemple, clonar o descarregar el repositori, o veure l'historial de commits.

**Pàgina principal del repositori**  
Si fem clic a l'enllaç "Settings", podem canviar algunes configuracions. Des d'aquesta pàgina, podem afegir col·laboradors des del menú "Collaborators" a l'esquerra (és a dir, altres usuaris de GitHub) al nostre projecte, perquè també puguen fer-hi canvis. També podem esborrar el repositori o canviar la seua visibilitat (públic/privat).

**Configuració del repositori**  
2.1. **Afegir continguts manualment**  
Des de l'eina de GitHub, podem afegir o editar els fitxers del nostre projecte (encara que aquesta no és la manera recomanada). Per exemple, si hem creat el projecte amb un fitxer README.md, podem fer clic sobre aquest fitxer per a obrir-lo. Després, podem fer clic en l'eina del llapis per a editar-ne el contingut.

**Editar README**  
També podem afegir nous fitxers al repositori des de la seua pàgina principal, fent clic al botó "Add file".

**Afegir fitxers al repositori**  
A continuació, hem d'especificar el nom del nou fitxer, juntament amb les carpetes i subcarpetes on es col·locarà (podem especificar tantes carpetes i subcarpetes com vulguem, separades per /, i es crearan automàticament).

**Afegir fitxers al repositori**

**Exercici 1**:

Registra’t a GitHub si encara no tens un compte. Després, crea un nou repositori públic anomenat MyFirstRepo, amb un fitxer README. A continuació, fes els següents passos:

1. Edita el fitxer README.md i afegeix aquest text: "This is my first repo".
2. Afegeix un nou fitxer anomenat notes.md i afegeix alguna informació sobre tu: aficions, interessos…
3. Recorda guardar els canvis després d'editar aquests fitxers.
