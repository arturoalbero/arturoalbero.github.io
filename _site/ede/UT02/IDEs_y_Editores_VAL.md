Aquí tienes la traducción al valenciano:

# Entorns de Desenvolupament Integrats (IDEs) i altres editors

## Tipus d'Editors de Codi

Els editors de codi es divideixen en dues categories principals: **editors de text** i **IDEs**. Els editors de text són més lleugers i senzills, però no integren de forma nativa totes les eines necessàries per a l'execució de codi. Els IDEs, en canvi, integren en un sol programa tant l'editor de text com les eines de compilació i depuració de programes. No obstant això, són més pesats i menys versàtils precisament per aquest motiu. A continuació, anem a repassar una sèrie d'editors i IDEs:

### Editors de Text

1. **Notepad++**
   - **Característiques**: Lleuger, suport per a múltiples llenguatges, ressaltat de sintaxi, i una interfície simple.
   - **Limitacions**: Funcionalitats bàsiques; manca d'eines avançades com depuració.
   - **Llicència**: Gratuït i de codi obert.

2. **Visual Studio Code**
   - **Característiques**: Extensible mitjançant plugins, integració amb Git, terminal integrat i suport per a múltiples llenguatges. Amb les extensions adequades, es comporta quasi com si fora un IDE. Tant és així que en Mac OSX l'IDE Visual Studio for Mac ha estat discontinuat a favor d'este editor, amb l'extensió C# Dev Kit.
   - **Limitacions**: Requereix configuració addicional per a funcions avançades.
   - **Llicència**: Gratuït.

3. **Sublime Text**
   - **Característiques**: Ràpid, interfície minimalista, suport per a múltiples llenguatges.
   - **Limitacions**: Versió de pagament després d'un període d'avaluació; algunes característiques són limitades.
   - **Llicència**: Gratuït en versió d'avaluació; de pagament per a ús continuat.

### IDEs

1. **IntelliJ IDEA**
   - **Característiques**: IDE potent per a Java, amb suport per a Kotlin, Groovy i altres llenguatges. Ofereix integració amb sistemes de control de versions, eines de refactorització i una interfície intuïtiva.
   - **Limitacions**: Requereix hardware mitjanament potent.
   - **Llicència**: Community Edition és gratuït i de codi obert; Ultimate Edition és de pagament, amb llicència educativa disponible.

2. **Eclipse**
   - **Característiques**: IDE versàtil principalment per a Java, amb suport per a plugins que permeten el desenvolupament en altres llenguatges. Ofereix eines de depuració i una gran comunitat.
   - **Limitacions**: La interfície és antiquada i pot no ser tan eficient com es desitjaria.
   - **Llicència**: Gratuït i de codi obert.

3. **NetBeans**
   - **Característiques**: IDE oficial per a Java SE, però també admet PHP i C/C++. És fàcil d'usar i configurar.
   - **Limitacions**: Menys extensible que altres IDEs; a vegades més lent en comparació amb IntelliJ.
   - **Llicència**: Gratuït i de codi obert.

4. **Visual Studio**
   - **Característiques**: IDE complet per a C#, .NET i desenvolupament web, eines de depuració avançades, integració amb Azure. Molt usat també per a C++.
   - **Limitacions**: Només disponible en Windows.
   - **Llicència**: Community Edition és gratuït; Professional i Enterprise són de pagament, amb llicències educatives disponibles.

5. **Godot** (Editor de Jocs)
   - **Característiques**: Eines per a desenvolupament de jocs 2D i 3D, scripting en GDScript, interfície amigable.
   - **Limitacions**: Menys suport per a llenguatges convencionals; no és un IDE generalista encara que es poden realitzar aplicacions amb ell.
   - **Llicència**: Gratuït i de codi obert.

6. **Unreal Engine** (Editor de Jocs)
   - **Característiques**: Motor per a desenvolupament de jocs 3D, eines visuals de creació de contingut i programació amb Blueprints. També serveix per a crear contingut audiovisual en 3D i ha estat utilitzat en sèries com *The Mandalorian*.
   - **Limitacions**: Requereix hardware potent; corba d'aprenentatge pronunciada.
   - **Llicència**: Gratuït, amb royalties aplicables als ingressos per jocs. Es poden comprar llicències alternatives.

## Eines que Composen un IDE

Els IDEs estan compostos per diverses eines que faciliten el desenvolupament de programari. A continuació es presenten exemples d'eines comunes:

1. **Editor de Codi**: On s'escriu el codi font. Exemples inclouen l'editor d'IntelliJ i l'editor de Visual Studio.

2. **Compilador/Intèrpret**: Converteix el codi font en un format executable. Per exemple, el compilador de Java en IntelliJ o el compilador de C# en Visual Studio.

3. **Eines de Depuració**: Permeten trobar i corregir errors en el codi. Tant IntelliJ com Visual Studio compten amb potents eines de depuració integrades.

4. **Gestió de Projectes**: Facilita l'organització d'arxius i recursos. Els IDEs permeten gestionar múltiples projectes des d'una única interfície.

## Característiques Comunes en els IDEs

### IntelliSense

- **Descripció**: Autocompleció de codi i suggeriments contextuals.
- **Exemple**: En **Visual Studio Code**, en escriure una funció en JavaScript, l'IDE suggereix automàticament els paràmetres i funcions disponibles. En **IntelliJ**, la funcionalitat és similar per a Java i altres llenguatges, millorant la productivitat del desenvolupador.
- En Visual Studio Code, IntelliSense s'instal·la per separat per a cada llenguatge de programació.

### Multicursor

- **Descripció**: Permet editar múltiples línies de codi simultàniament.
- **Exemple**: En **Visual Studio Code**, pots col·locar cursos en diferents línies i editar alhora, la qual cosa accelera canvis repetitius. IntelliJ també ofereix aquesta funcionalitat, facilitant l'edició de múltiples instàncies d'una variable o funció.

### Execució Pas a Pas

- **Descripció**: Eines de depuració que permeten seguir el flux del programa línia per línia.
- **Exemple**: En **IntelliJ**, pots establir punts de ruptura i seguir l'execució del teu codi per a identificar errors. **Visual Studio** ofereix una funcionalitat similar, permetent als desenvolupadors depurar aplicacions complexes.

## IDEs Especialitzats per Llenguatge

Els IDEs i editors es especialitzen en diferents llenguatges de programació. A continuació es presenten alguns exemples destacats:

1. **Java**:
   - **IntelliJ IDEA**: Community Edition és gratuït; Ultimate Edition de pagament amb versió educativa.
   - **Eclipse**: Gratuït i de codi obert.

2. **C++**:
   - **Visual Studio**: Community Edition és gratuït; versions Professional i Enterprise són de pagament amb llicències educatives.
   - **Code::Blocks**: Gratuït i de codi obert.

3. **C#**:
   - **Visual Studio**: Community Edition és gratuït; versions de pagament amb llicències educatives.
   - **Visual Studio Code + C# Dev Kit**: Gratuït; ideal per a desenvolupament d'aplicacions C# multiplataforma.

4. **Python**:
   - **PyCharm**: Community Edition és gratuït; Professional Edition de pagament amb llicència educativa.
   - **Visual Studio Code**: Gratuït; suport per a Python mitjançant extensions.

5. **JavaScript**:
   - **Visual Studio Code**: Gratuït; molt popular per a desenvolupament web.
   - **WebStorm**: De pagament, amb llicència educativa disponible.

6. **SQL**:
   - **DataGrip**: De pagament, amb llicència educativa.
   - **DBeaver**: Gratuït i de codi obert.

---

## Llicències Educatives de JetBrains

Per a obtindre la **llicència gratuïta per a estudiants de JetBrains**, segueix aquests passos:

1. Visita el [lloc web de JetBrains](https://www.jetbrains.com/student/).
2. Selecciona el producte que desitges utilitzar (IntelliJ, PyCharm, etc.).
3. Registra't amb el teu compte de correu electrònic institucional (per exemple, **@alu.edu.gva.es**).
4. Completa el formulari de sol·licitud i segueix les instruccions per a activar la teua llicència.

Pots usar la teua identitat digital (@alu.edu.gva.es) per a crear un compte en JetBrains i sol·licitar la llicència educativa. Aquesta llicència és renovable mentre dure la teua educació.
Tingues en compte que la teua identitat digital no serà accessible quan acabes la teua etapa a l'institut, però pots transferir o afegir més correus electrònics al teu compte per a poder seguir accedint a JetBrains.
Quan acaba el teu període educatiu, disposes d'un descompte del 40% per a comprar una llicència anual, tant del pack complet d'IDEs de JetBrains com dels IDEs específics que més utilitzes. Aquesta llicència ja no té les limitacions de les llicències educatives i la pots utilitzar per al teu dia a dia.
Amb la llicència anual, JetBrains ofereix una [llicència de reserva perpètua](https://sales.jetbrains.com/hc/es/articles/207240845--Qu%C3%A9-es-una-licencia-de-reserva-perpetua). Aquesta llicència et permet utilitzar de per vida la versió de l'IDE més actual en el moment de la compra.

---

## Serveis Educatius d'Altres Plataformes

A més de JetBrains, els estudiants poden accedir a altres serveis gratuïts o amb llicència educativa:

- **Microsoft Azure**: Accés gratuït a serveis en el núvol, ideal per a aprendre sobre desenvolupament i administració de sistemes.
- **GitHub**: Llicències educatives que ofereixen eines premium de desenvolupament col·laboratiu.
- **AWS Educate**: Accés a recursos i eines d'Amazon Web Services per a aprendre sobre computació en el núvol.
- **Google Cloud Services**: Ofereix crèdits gratuïts per a estudiants que desitgen experimentar amb serveis de Google.

---

## Resum Esquemàtic

### IDEs Gratuïts

- **Notepad++**
- **Visual Studio Code**
- **Eclipse**
- **NetBeans**
- **Godot**
- **Unity (Personal Edition)**
- **GameMaker (versió gratuïta)**
- **DataGrip (prova gratuïta)**

### IDEs de Pagament

- **IntelliJ IDEA Ultimate**
- **Visual Studio Professional i Enterprise**
- **PyCharm Professional**
- **WebStorm**
- **DataGrip (sense llicència educativa)**

### IDEs amb Llicències Educatives Gratuïtes

- **IDEs de JetBrains amb el seu programa educatiu**
- **Visual Studio (Professional i Enterprise)**