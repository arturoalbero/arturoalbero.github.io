# Metodologies de programari  
## Metodologies tradicionals  

Com que el desenvolupament de productes de programari no és una tasca senzilla, hi ha diverses metodologies que podem seguir per a aquest desenvolupament. Una metodologia és un conjunt de tècniques i mètodes que ens ajuden a afrontar cada etapa d'un cicle de vida. D'aquesta manera, podem:

- Optimitzar el procés i el producte final
- Utilitzar protocols guiats per a la planificació i el desenvolupament
- Establir què fer, com fer-ho i quan, al llarg de tot el projecte

### **1. Elements d'una metodologia**  
Una metodologia es compon de:

- Etapes: un conjunt d'activitats que cal realitzar per a obtenir un producte intermedi o acabar un pas del procés.
- Productes: el conjunt d'entrades i eixides requerides o produïdes per una etapa determinada.
- Procediments i eines: elements que ens ajuden a fer cada tasca. Exemples: editors de codi, programari de planificació…
- Criteris d'avaluació per al procés i el producte final, per a determinar si s'han aconseguit tots els objectius.

### **2. Metodologies tradicionals**  
Algunes metodologies són tradicionals i es concentren a controlar cada part del procés en tot moment. Estableixen les activitats a realitzar, els lliurables que s'han de produir en cada etapa, i les eines i estàndards que s'empraran. Per a alguns projectes, aquestes metodologies poden ser massa rígides i difícils d'adaptar.

La majoria d'aquestes metodologies es basen en alguns dels models de cicle de vida esmentats anteriorment, especialment els models iteratius i en espiral. Ambdós apliquen diverses iteracions sobre les etapes del desenvolupament del programari, generant alguns productes intermedis durant el procés.

Vegem algunes de les metodologies tradicionals més populars.

#### **2.1. Exemple: RUP**  
El Procés Unificat Racional (RUP) és un marc iteratiu creat per Rational Software Corporation, que forma part de la companyia IBM. Però, en lloc de ser un marc rígid com s'esperaria d'una metodologia tradicional, RUP no és inflexible. Es pot adaptar a diferents projectes, triant els elements més adequats per a cadascun.

La metodologia RUP es basa en el model de cicle de vida en espiral i tracta de millorar els inconvenients del model en cascada. A més, també intenta incloure el paradigma orientat a objectes mitjançant UML (Unified Modeling Language). En parlarem més endavant.

**Mòduls**  
RUP està estructurat en alguns elements anomenats mòduls. Aquests mòduls són:

- Rols: defineixen un conjunt de competències, habilitats i responsabilitats, de manera que les persones amb un rol específic han de tindre-les totes.
- Productes de treball: són el resultat d'una tasca, incloent documents i models secundaris que es poden produir.
- Tasques: unitats de treball assignades a un rol específic que produeixen un producte de treball determinat.

Aquests tres mòduls defineixen qui fa la feina (rol), què fa (producte de treball) i com ho fa (tasca).

**Etapes**  
Segons la metodologia RUP, el cicle de vida d'un producte consta de quatre etapes:

- *Iniciació*, on definim l'abast del projecte. Creem un model per al negoci (recopilant documentació sobre l'empresa, identificant les seues febleses i fortaleses, la seua capacitat per a generar beneficis...) i després una anàlisi de requisits per al projecte que es desenvoluparà.
- *Elaboració*, on s'analitza més profundament el projecte i es defineix la seua arquitectura principal. Creem un disseny i una implementació inicial, que es consideren una base. Aquesta etapa, juntament amb la d'iniciació, estan centrades en comprendre el problema a resoldre, evitant els riscos més perillosos.
- *Construcció*, on finalment es dissenya i implementa l'aplicació. Poden ser necessàries moltes iteracions del model en espiral, amb molts prototips intermedis, per a aconseguir l'objectiu.
- *Transició*, on es prepara el producte final per a la seua entrega definitiva al client.

Podem pensar que aquesta metodologia és molt semblant al model en cascada, però una de les fortaleses de RUP rau en les iteracions que es poden realitzar en qualsevol etapa. A més, cada etapa té un objectiu final a aconseguir.

---

**Exercici 1:**  
Busca en Internet tots els possibles diagrames que podem utilitzar en UML (Unified Modeling Language), que és una part essencial de la metodologia RUP. Aquests diagrames poden ser de dos tipus: diagrames estructurals o diagrames de comportament. Identifica almenys tres diagrames de cada tipus.

---

#### **2.2. Exemple: MSF**  
El Microsoft Solutions Framework (MSF) és una metodologia personalitzable que aplica un enfocament tradicional per a desenvolupar un producte de programari. Com pots imaginar, va ser creada per Microsoft, i es pot aplicar no sols al desenvolupament de programari, sinó també a altres àmbits informàtics, com la planificació de xarxes o infraestructures.

**Etapes**  
Com hem vist amb RUP, MSF també es basa en el model en espiral. El procés consisteix en cinc etapes iteratives. Al final de cada una, hem d'haver aconseguit un objectiu determinat i completat un conjunt de lliurables.

- *Visió*: avaluem el model de negoci, els beneficis que podem obtenir, les restriccions, els abasts... També hem d'obtenir una especificació de requisits, una avaluació inicial dels riscos i una visió general sobre l'empresa per a la qual desenvoluparem el producte de programari. Pot equivaldre a l'etapa d'iniciació de RUP.
- *Planificació*: en aquesta etapa es planifica el desenvolupament del projecte i la seua arquitectura, de manera que hem de seguir un calendari. Així, generem una llista de tasques a completar, persones involucrades en cada tasca, responsabilitats, costos... intentant evitar els riscos potencials més perillosos.
- *Desenvolupament*: comencem a implementar l'aplicació a partir de les funcionalitats més bàsiques. Lliurem alguns prototips per a ser provats i avaluats pel client.
- *Estabilització*: es perfecciona el producte perquè el client el puga provar completament. També es documenten les proves abans que el client accepte el producte final.
- *Implantació i suport*: l'aplicació s'instal·la en l'empresa del client, i es pot oferir un suport addicional depenent del que es va especificar inicialment.

Els principals avantatges d'aquesta metodologia són la seua adaptabilitat a diferents projectes (com RUP), i la col·laboració amb el client. Els principals desavantatges són l'excessiva documentació que s'ha de crear i la dependència dels productes de Microsoft.
  
# **Metodologies de programari**  
## **Metodologies àgils**

Atés que desenvolupar productes de programari no és una tasca fàcil, existeixen diferents metodologies que podem seguir per a aquest desenvolupament. Una metodologia és un conjunt de tècniques i mètodes que ens ajuden a afrontar cada fase d'un cicle de vida. Així, podem:

- Optimitzar el procés i el producte final
- Utilitzar protocols guiats per a la planificació i el desenvolupament
- Establir què fer, com fer-ho i quan fer-ho, al llarg de tot el projecte.

Les metodologies tradicionals són molt útils per a projectes grans (en termes de temps i pressupost), però presenten alguns inconvenients per a projectes no tan grans, amb terminis curts o amb requisits incerts. Per exemple, produeixen massa documentació i estan massa planificades.

Per a afrontar aquests altres projectes, molts equips han provat metodologies àgils, que són especialment adequades per a projectes menuts, a desenvolupar en poc de temps, amb equips de menys de 10 persones. Amb aquestes metodologies, es promou el treball en equip, la responsabilitat pròpia, les necessitats del client i els objectius de la seua empresa. La comunicació cara a cara entre els membres de l'equip, i amb el client, és molt regular. Així, els membres de l'equip comparteixen els seus avanços i problemes, i tenen un feedback ràpid del client.

Per a complir el seu objectiu, el desenvolupament àgil fa increments menuts en el projecte, amb una mínima planificació. Cada increment realitza una iteració completa sobre les fases del programari (requisits, disseny, implementació, proves...) en un període curt de temps (normalment 1-4 setmanes), la qual cosa es coneix com a "timebox". D'aquesta manera, minimitzem el risc general i el projecte pot adaptar-se a molts canvis al llarg del seu desenvolupament. La documentació només es genera quan realment es necessita, i l'objectiu és aconseguir un prototip funcional després de cada iteració, encara que amb funcionalitats molt reduïdes.

### 1. El manifest àgil
El manifest àgil és una especificació creada en 2001 que recull els principis principals que una metodologia ha de tindre per tal que l'equip puga construir un projecte de programari ràpidament i afrontar els canvis que puga tindre en el futur.

Alguns dels principis més importants són:

- Les persones són el factor principal d'èxit d'un projecte. És millor crear un bon equip i deixar-lo configurar el seu entorn de treball, que crear l'entorn i forçar l'equip a acostumar-se a ell.
- No s'ha de produir cap documentació a menys que siga necessària per a prendre una decisió immediatament.
- Ha d'haver-hi una interacció constant entre el client i l'equip de treball.
- La capacitat d'afrontar els canvis que el projecte puga tindre durant el desenvolupament és més important que seguir una planificació rígida des del principi.
- La prioritat principal és satisfer el client mitjançant el lliurament continu de programari funcional.
- La conversa cara a cara és el mètode més eficient per a transmetre informació en un equip de treball.
- Simplicitat.

### 2. Algunes pràctiques habituals
A més dels principis recollits en el manifest àgil, algunes metodologies àgils utilitzen certes pràctiques. Vegem-ne algunes.

**Programació per parelles (PP)**

La programació per parelles és una tècnica que ofereix molts avantatges. Dos programadors treballen junts en el mateix ordinador. Un d'ells està escrivint codi (conductor) i l'altre està revisant el que s'està escrivint (observador). Tots dos intercanvien els seus rols amb freqüència (cada 30 minuts, per exemple). L'observador és l'encarregat de guiar el treball del conductor i proporcionar idees per a resoldre problemes futurs.

Els principals avantatges d'aquesta tècnica són:

- Es produeixen programes més curts, amb menys errors i millor dissenyats (ja que el codi ha de ser llegible per a tots dos membres de l'equip).
- És útil per a aprendre, si un dels membres és molt experimentat i l'altre és nouvingut, o si tots dos tenen coneixements diferents que poden transferir-se l'un a l'altre.
- Si un dels membres abandona l'equip, n'hi ha un altre que pot prendre el seu lloc recolzat per l'antic membre, de manera que els terminis no han de modificar-se necessàriament.
- Hi ha menys interrupcions durant el procés, ja que tots dos membres intercanvien les seues tasques i poden treballar de manera més contínua.

Tanmateix, també té alguns inconvenients:

- Alguns enginyers prefereixen treballar pel seu compte.
- Un novell pot sentir-se intimidat si treballa amb algú més experimentat que ell, i viceversa (els treballadors experimentats poden avorrir-se ajudant un novell).
- És més costós (s'han de pagar dos salaris per a una sola tasca).
- Poden haver-hi hàbits de treball molestos en l'equip.

#### **Desenvolupament guiat per proves (TDD)**

Aquesta és una tècnica que utilitza iteracions curtes basades en casos de prova escrits prèviament. Així, cada iteració produeix el codi necessari per a passar aquestes proves, i una vegada passades, integrem aquest codi amb l'anterior i l'optimitzem. El procés és el següent:

1. Afegim una nova prova al conjunt actual.
2. Escriguem el codi per a passar aquesta última prova.
3. Tornem a executar el conjunt de proves i verifiquem que totes es passen.
4. Refactoritzem el codi final per a optimitzar-lo.
5. Tornem al pas 1.

És important disposar d'un conjunt de proves unitàries que puguen llançar-se automàticament, de manera que es puguen afegir més proves de tant en tant i es puguen tornar a llançar en qualsevol moment. Més endavant en aquest mòdul, veurem algunes tècniques per a definir casos de prova i conjunts de proves.

L'objectiu principal és definir les proves que el sistema ha de superar abans d'escriure el codi corresponent, de manera que ens assegurem que l'aplicació es pot comprovar, i definim proves per a cada característica. D'aquesta manera, evitem escriure codi innecessari (això és, codi que no està lligat a cap prova).

### **3. Exemple: Scrum**  
Scrum és una metodologia àgil que es pot utilitzar en projectes complexos. Utilitza processos iteratius i incrementals, i es pot aplicar tant a productes de programari com a altres àmbits. El seu nom prové de la “melé” que fan els jugadors de rugbi.

**Rols**

Els rols principals en Scrum són:

- **ScrumMaster**: és un paper equivalent al del gestor de projectes, encara que aquest rol no existeix implícitament en Scrum, ja que l’equip de treball s’autogestiona. La seua tasca principal és assegurar-se que el mètode Scrum s'utilitza correctament i que no hi ha influències externes que el puguen pertorbar.
- **ProductOwner**: representa el client, encara que no ha de formar part necessàriament de l'empresa del client. Fins i tot pot ser algú de l'equip de treball.
- **Equip de desenvolupadors**.

**Procés**

Per començar, l’equip de treball ha de recopilar els requisits d'usuari del client (tant de directius com d'empleats que aniran a utilitzar l'aplicació). Les funcionalitats de l’aplicació es recopilen mitjançant les *user stories*, que bàsicament són un conjunt de targetes de paper on el client descriu les característiques del sistema. Cada història ha de ser comprensible i concreta, perquè l'equip puga implementar-la en poques setmanes. Es demana a cada usuari de l'empresa client que escriga què espera de l'aplicació. El conjunt complet d’històries es recull en una col·lecció anomenada *backlog*. D’aquest *backlog*, algunes històries acabaran formant part de l’aplicació (la resta seran descartades).

A partir d’ací, comencem el procés de desenvolupament, basat en iteracions anomenades *sprints*. Cada iteració dura de 2 a 4 setmanes, i produeix un prototip o una versió operativa del producte. En aquest increment, s’afegeixen a l’aplicació alguns requisits extrets del *backlog*. El conjunt de requisits que s’han d’afegir en cada iteració es decideix en una reunió de planificació, on el *ProductOwner* tria alguns elements per a afegir, i l’equip decideix quins es poden incloure en la següent iteració. Durant la iteració, el *backlog* queda congelat, és a dir, no es pot canviar cap requisit anterior fins que comence la següent iteració.

A més de la reunió a l’inici de la iteració, també hi ha reunions diàries en Scrum, on es discuteix l’estat del projecte, què s'ha fet i què es farà pròximament. També hi ha una reunió final al final de la iteració per a revisar la versió o prototip obtingut.

**Estimació de temps**

Cada *user story* en el *backlog* té assignat un temps, normalment en hores, dies o fins i tot setmanes. Per tant, el temps total estimat d’un *sprint* és la suma de totes les *user stories* triades per a aquest *sprint*.

Per a determinar si el temps total estimat difereix molt del temps real, podem utilitzar algunes eines addicionals com els *burndown charts*, que ens ajuden gràficament a determinar quines mesures podem prendre per a reduir aquesta diferència.

![alt text](image-4.png)

**Exercici 1:**

En aquest vídeo tens un resum de la metodologia Scrum. Després de vore'l, intenta respondre a aquestes preguntes:

- Què és un *sprint* en Scrum?
- Qui s'encarrega de prioritzar les tasques que s'han de fer en cada *sprint*?
- Com es pot calcular la data final de lliurament d'un *sprint*?

### **4. Exemple: Kanban**

Kanban és una altra metodologia àgil, que és molt fàcil d'aplicar. El seu nom és una combinació de dues paraules japoneses: *kan* (“visual”) i *ban* (“targeta”), així que podem deduir que el component principal d’aquesta metodologia consisteix a utilitzar targetes que representen les diferents tasques que hem de completar en el procés de desenvolupament.

Els orígens de la metodologia Kanban es remunten a més de 60 anys. A finals dels anys 1940, Toyota va començar a optimitzar els seus processos d'enginyeria, basant-se en el mateix model que utilitzen els supermercats per a optimitzar els seus estocs. Com que els nivells d'inventari haurien d'ajustar-se als patrons de consum, l'excés d'estoc es pot (i ha de) controlar. D’aquesta manera, Toyota podia alinear els seus nivells d'inventari amb el consum real de materials. Els treballadors passaven una targeta entre els equips quan un contenidor de materials s'havia buidat, indicant la quantitat exacta de material necessària. El magatzem tindria un nou contenidor de material preparat per a ser lliurat a la fàbrica, i després enviarien un nou *kanban* al proveïdor per a proporcionar un nou contenidor.

Aplicat als processos de desenvolupament de programari, Kanban permet als equips ajustar la quantitat de treball en procés (*WIP*) a la capacitat de l'equip. Això proporciona als equips opcions de planificació més flexibles, un lliurament més ràpid i un enfocament més clar.

**Procés:**

El terme general per a referir-se a la metodologia Kanban és *flow*, ja que el treball flueix contínuament pel sistema en lloc d'estar organitzat en *timeboxes*, com fa Scrum amb els seus *sprints*.

Kanban utilitza mecanismes visuals, com ara els *Kanban boards*, perquè els membres de l’equip puguen veure l'estat de cada part del treball en qualsevol moment. Aquests taulers poden ser tant físics com virtuals.

![alt text](image-5.png)

**La funció principal del tauler Kanban** és garantir que el treball de l’equip estiga visualitzat i que tots els bloquejos i dependències es detecten immediatament. El tauler més bàsic té tres seccions (Per fer, En procés i Fet), però podem afegir tantes columnes i estats com necessitem per al nostre cas particular.

Qualsevol secció o columna d'un tauler Kanban pot omplir-se amb targetes Kanban. Aquestes targetes reflecteixen informació crítica sobre una tasca de treball concreta, proporcionant a tot l’equip informació sobre qui és el responsable d'aquesta tasca, una breu descripció del treball a fer i una estimació de quant de temps durarà.

**Principis:**

Alguns dels principals principis de la metodologia Kanban són:

- **Treball limitat en procés**, o "deixar de començar i començar a acabar", això vol dir que l’equip no hauria de començar una altra tasca fins que l’actual s’haja acabat.
- **Qualitat garantida**: tot ha d’anar bé a la primera oportunitat, no hi ha marge d’error. D’aquesta manera, la velocitat no és tan important com la qualitat, perquè corregir errors pot ser costós.
- **Reducció de desaprofitaments**: hem de fer només allò que necessitem, i fer-ho bé.
- **Flexibilitat**: el següent pas es decideix des del *backlog*, triant la pròxima tasca a completar. Així podem prioritzar la tasca triada segons les necessitats de cada moment concret.

**Kanban vs Scrum**

Kanban té algunes similituds amb la metodologia Scrum, ja que ambdues són metodologies àgils: totes dues requereixen equips col·laboratius i autogestionats, i totes dues se centren en l'alliberament freqüent de programari. No obstant això, hi ha algunes diferències importants entre elles:

| **Kanban**                    | **Scrum**                      |
|-------------------------------|--------------------------------|
| No hi ha rols prescrits        | ScrumMaster, ProductOwner…     |
| Lliuraments continus           | *Sprints* delimitats en temps  |
| Es poden fer canvis en qualsevol moment | No es permeten canvis durant el *sprint* |

Ambdues metodologies es poden aplicar alhora. Scrum és més adequat per a donar retroalimentació a l’equip i en la planificació a curt termini, mentre que Kanban es pot utilitzar per al treball diari o en entorns amb un alt grau de variabilitat en les prioritats.

---

**Exercici 2:**

En aquest vídeo tens un exemple de la metodologia Kanban. Intenta respondre a aquestes preguntes després de vore’l:

- Quina és la funció principal dels límits de treball en procés (*WIP limits*)? Què passa quan intentem moure una tasca a una columna que ja ha superat aquest límit?
- Com es poden combinar Kanban i Scrum? Quin és l'objectiu principal d'afegir Scrum a Kanban?