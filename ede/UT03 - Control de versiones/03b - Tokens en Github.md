# **Autenticació en Git amb Tokens Personals (PAT)**

A partir del 13 d'agost de 2021, GitHub ja no accepta contrasenyes de compte per a l'autenticació d'operacions Git. Cal utilitzar un **PAT (Token d'Accés Personal)**. Pots seguir el mètode següent per a afegir un PAT al teu sistema.

## Crear un Token d'Accés Personal en GitHub

1. Des del teu compte de GitHub, ves a **Settings** → **Developer Settings** → **Personal Access Token** → **Tokens (classic)** → **Generate New Token**.
2. Introdueix la teua contrasenya, ompli el formulari i fes clic a **Generate Token**.
3. Copia el Token generat, que tindrà un format similar a: `ghp_sFhFsSHhTzMDreGRLjmks4Tzuzgthdvfsrta`.

## Mètodes segons el teu sistema operatiu:

### Per a Windows:

1. Ves al **Gestor de Credencials** des del **Panell de Control** → **Credencials de Windows** → busca `git:https://github.com` → **Edita**.
2. Substitueix la contrasenya pel teu **GitHub Personal Access Token**.
3. Si no trobes `git:https://github.com`, fes clic a **Afegir una credencial genèrica**.
   - L'adreça d'Internet serà `git:https://github.com`.
   - Introdueix el teu nom d'usuari, i per a la contrasenya, utilitza el teu **Personal Access Token**.
4. Fes clic a **Ok** i ja estarà configurat.

### Per a macOS:

1. Fes clic a la icona de la lupa (Spotlight) en la part dreta de la barra de menú.
2. Escriu **Keychain Access** i prem la tecla Enter per a obrir l'aplicació.
3. Cerca `github.com` dins de **Keychain Access**.
4. Troba l'entrada de la contrasenya d'Internet per a `github.com` i edita o elimina l'entrada segons siga necessari.  
   Ja hauries acabat.

### Per a sistemes basats en Linux:

1. Necessites configurar el client local de GIT amb un nom d'usuari i adreça de correu electrònic:

    ```bash
    $ git config --global user.name "el_teu_nom_dusuari_github"
    $ git config --global user.email "el_teu_correo_github"
    $ git config -l
    ```

2. Una vegada GIT estiga configurat, pots començar a utilitzar-lo per accedir a GitHub. Exemple:

    ```bash
    $ git clone https://github.com/EL-TEU-NOM-DUSUARI/EL-TEU-REPOSITORI
    > Cloning into `EL-TEU-REPOSITORI`...
    Username: <introdueix el teu nom d'usuari>
    Password: <introdueix la teua contrasenya o token d'accés personal de GitHub>
    ```

3. Ara, pots guardar (cache) el token en el teu ordinador per a recordar-lo:

    ```bash
    $ git config --global credential.helper cache
    ```

4. Si necessites esborrar la memòria cau en algun moment:

    ```bash
    $ git config --global --unset credential.helper
    $ git config --system --unset credential.helper
    ```

5. Pots verificar amb l'opció `-v` quan facis un pull:

    ```bash
    $ git pull -v
    ```

6. Per a clonar en Debian o altres distribucions de Linux:

    ```bash
    git clone https://<el_teu_token_ací>@github.com/<usuari>/<repositori>.git
    ```

### Per a IDEs de JetBrains (IntelliJ, PhpStorm, WebStorm, etc.):

1. Consulta la pàgina d'ajuda de l'IDE que utilitzes per a més informació sobre com iniciar sessió amb un Token.
2. A continuació, tens un resum ràpid de com fer-ho en **IntelliJ**:
   - Obre els **ajustos** prement ⌘Cmd0/CtrlAlt0 (les tecles poden variar).
   - Selecciona **Version Control | GitHub**.
   - Fes clic al botó **Afegir**.
   - Tria l'opció **Iniciar Sessió amb Token**.
   - Introdueix el token generat en el camp de text corresponent.
   - Fes clic a **Afegir Compte**.

*Informació extraiguda de [stackoverflow](https://stackoverflow.com/questions/68775869/message-support-for-password-authentication-was-removed).*
