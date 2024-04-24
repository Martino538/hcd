![title](https://github.com/Martino538/hcd/assets/32341318/5ba899ca-0671-464d-b9af-91d9288eea40)

# Proces verslag

### Het Idee
Dit project is specifiek gericht op één persoon, maar zou potentieel bruikbaar kunnen zijn voor meedere personen. In dit geval maak ik een applicatie voor iemand die blind is. Hij/Zij wilde graag inzien welke kleding hij/zij in hem/haar kast heeft liggen. Hiernaast zou het fijn zijn om hulp te krijgen bij het kiezen van een outfit. Deze applicatie bied hulp voor beide problemen. Benieuwd hoe mijn resultaat tot stand is gekomen? Hieronder vermeld ik het proces!

Tijdens dit project zal ik ook rekening houden met de design principles: 

**Study situation**
Ik heb gerichte vragen gesteld en mij helemaal verdiept in de wensen van mijn doelgroep (in dit geval 1 persoon). Na het vaststellen van de behoeftes heb ik meerdere iteratieslagen gemaakt, waarbij ik deze getest heb met de doelgroep. Omdat mijn doelgroep blind is maken ze gebruik van een screenreader. Bij het gebruik van een screenreader moet je veel swipen. Ik heb geprobeerd te voorkomen dat mijn doelgroep bijzonder veel moet swipen om tot een resultaat te komen.

**Ignore conventions**
Tijdens het bedenken van een ontwerp heb ik geen rekening gehouden met standaard conventies of design principes. Ik had mijzelf voorgesteld om een zo minimalistisch mogelijk ontwerp te maken, waarbij echt alleen de must have functionaliteiten in te zien zijn. Hiernaast wilde ik ook een balans vinden tussen het aantal acties die je kan verrichten op een pagina, zonder te diep in de applicatie te moeten navigeren om te vinden wat je zoekt. Zo heb ik ook bepaalde tekst bovenin de pagina gepositioneerd, zodat dit als eerste werd voorgelezen i.p.v. een knop. Ik heb dus vooral praktisch gedacht waarvan ik d.m.v. testen heb vastgesteld dat de huidige opzet werkt.

**Prioritise identity**
Doordat ik de situatie van mijn doelgroep goed heb besturdeerd heb ik ook een goede identiteit weten te vormen naar mijn doelgroep. Het is zogezegd 'Met de hand gemaakt' en speciaal gericht op mijn doelgroep, op basis van wat ik gezien en gehoord heb van de doelgroep. Een voorbeeld hiervan is dat mijn doelgroep geen voorbedachte functies op basis van meningen/aannames wilt. Hierdoor is er veel vrijheid in het samenstellen van een outfit. Ook wilde ze graag zelf een omschrijving bij kledingstukken kunnen invoeren. 

**Add nonsense**
Ik heb geprobeerd wat extra's toe te voegen die tegelijkertijd van waarde zijn voor de applicatie. De applicatie bevat meerdere geluiden na het uitvoeren van een bepaalde actie. Denk hierbij aan het opslaan van een nieuw kledingstuk, opslaan/verwijderen van een (opgeslagen) outfit.

### Introductie project (03-03-2024)
Vandaag was de introductie van de opdracht. We zijn als groepje bij elkaar gekomen om een aantal vragen op te stellen voor het interview. Deze vragen staan hieronder vermeld:

[Document met vragen](https://docs.google.com/document/d/19J_38NkLhnx6Z5d7lens3TmKvPoLd499wUBorTF2mHA/edit#heading=h.vlf4z66f62dc)

Hierna hebben we het interview met Petra gehad. In het begin was het een beetje grip vinden in het stellen van de vragen. Vooraf was ik een klein beetje zenuwachtig, omdat Petra toch een handicap heeft. Echter verliep het gesprek vrij soepel en waren de zenuwen niet nodig. Als ze in een groep aanwezig is voelt het net alsof ze geen handicap heeft. Na het interview hebben we als groep alle aantekeningen gedeeld in het document met de vragen.

Wat ik vandaag geleerd heb is hoe blinde mensen daadwerkelijk gebruik maken van een website. Ook realiseer ik me nu hoe belangrijk naamgeving en een omschrijving van elementen kan zijn. Iets is al snel onduidelijk.

### Voortgangsgesprek 1 (04-04-2024 & 05-04-2024)
Beide dagen was ik erg ziek en kon ik niet aan de opdracht werken of feedback krijgen.

### Ontwerp applicatie (10-04-2024)
Vandaag heb ik mij gebogen over een design voor mijn project. Hieronder is het ontwerp te zien:
Scherm 1:</br>
<img width="448" alt="Scherm­afbeelding 2024-04-11 om 22 56 33" src="https://github.com/Martino538/hcd-project/assets/32341318/f2872357-527d-4275-ae73-26a73c921490"></br>

Scherm 2:</br>
<img width="412" alt="Scherm­afbeelding 2024-04-11 om 22 56 38" src="https://github.com/Martino538/hcd-project/assets/32341318/4c57495f-8c2b-412c-a65a-03d30a6b4a01"></br>

Scherm 3:</br>
<img width="412" alt="Scherm­afbeelding 2024-04-11 om 22 56 42" src="https://github.com/Martino538/hcd-project/assets/32341318/68ff9da6-9491-4591-8bb7-a49fc2150a10">

Bij nader inzien heb ik het ontwerp aangepast. Ik wilde graag met een json werken en had er moeite mee om dit makkelijk via client-side op te lossen. Daarom ben ik overgestapt naar EJS, maar voor volgende week wil ik dit eigenlijk weer ombouwen naar client-side, omdat ik hierdoor makkelijker toegang heb tot client-side javascript. Ondanks dat ik nu weet hoe ik in mijn applicatie met json kan werken, vind ik het nog erg lastig om mijn huidige ontwerp te realiseren. Ik heb het daarom wat simpeler aangepakt en het resultaat is hieronder te zien:
Scherm 1:</br>
<img width="1295" alt="Scherm­afbeelding 2024-04-12 om 10 26 59" src="https://github.com/Martino538/hcd-project/assets/32341318/23dfa657-7a35-44f1-8f0c-0ea3dd193686"></br>

Scherm 2:</br>
<img width="1321" alt="Scherm­afbeelding 2024-04-12 om 10 27 05" src="https://github.com/Martino538/hcd-project/assets/32341318/37cb6c4b-b9d8-41de-a94f-91fd0b00c08e"></br>

Dit ontwerp ga ik morgen laten testen door Petra. Mijn waarnemingen ga ik noteren.

### Testen ronde 1 (11-04-2024)
Het testen zelf ging een beetje chaotisch door het gebruik van de screenreader. In het vervolg wil ik dit zo maken dat ze zelf makkelijk door de applicatie heen kan gaan, want nu moest ik haar een beetje helpen. Ze vond het fijn dat de resultaten in boxen worden getoond, zodat ze hier makkelijk doorheen kan lopen. Hierdoor hoeft ze niet steeds alle informatie van de resultaten aan te horen. 

Wat ik nog eventueel kan toevoegen is een optie om de kledingstijl aan te geven in het formulier. Verder waren er niet veel opmerkingen en kan ik het concept nog verder uitwerken. Wellicht kom ik in de toekomst nog dingen tegen die handig kunnen zijn. 

### Voortgangsgesprek 2 (12-04-2024)
Tijdens het feedbackgesprek heb ik mijn prototype laten zien. Als feedback heb ik gekregen dat ik mij moet richten op het gebruik van de screenreader. Op dit moment is het een beetje chaotisch en oogt het gebruik veel te ingewikkeld. Volgende week ga ik hiermee aan de slag en ga ik de applicatie verder uitwerken.

### Testen ronde 2 (17-04-2024)
Vandaag kwam Petra langs om mijn applicatie te testen. Helaas liep dit niet helemaal volgens plan. Ik zat namelijk midden in een verbouwing van mijn applicatie. Alleen het deel wat ik vorige week al had getest was af + een overzicht van alle items. De rest van de functionaliteiten werkte nog niet. Het overzicht was nieuw en af, maar in mijn ogen was dit niet de moeite waard om te testen. 

Om deze reden heb ik petra voorgelegd wat mijn idee was en heb ik haar niet het prototype laten testen. Mijn idee was om een overzicht te genereren, een outfit kunnen samenstellen met alle kledingstukken en de mogelijkheid om deze eventueel op te kunnen slaan. Petra was wel erg enthousiast hierover.

Omdat ik zelf geen test heb uitgevoerd op mijn prototype heb ik wel opgelet wat de anderen als feedback kregen. Zo wilde ze graag zo min mogelijk op mening gebasseerde functionaliteiten in de applicatie. Het aanbieden van een casual of zakelijke outfit heb ik dus bewust weggelaten, omdat ik dan op voorhand heb bepaald welke kleding onder deze categoriën vallen. Hiernaast is het ook belangrijk dat alle onnodige elementen worden weggelaten, zodat er weinig tot geen verwarring kan ontstaan.

Door deze waarnemingen weet ik nu wel wat Petra belangrijk vond en kan ik deze belemmeringen in mijn eigen applicatie voorkomen.

Volgende week wil ik de laatste test ronde gebruiken om zoveel mogelijk vragen te stellen. Hierdoor krijg ik veel nieuwe inzichten en weet ik ook hoe bruikbaar mijn applicatie voor haar is. Het is dan welliswaar de laatste test ronde, maar dan weet ik wel enige pijnpunten die ik, als ik meer tijd had verder kan uitwerken.

Voor nu ga ik aan de slag met de volgende functionaliteiten, zodat ik deze tijdens de laatste test ronde kan laten testen:
- Implementeren van een opslaan functie
- Het bieden van een 'Randomiser'. Deze functie bied de mogelijkheid om een willekeurige outfit te genereren. Als Petra dan helemaal geen inspiratie heeft voor een outfit, kan dit haar wellicht helpen.

Ook had Vasillis mij meegegeven dat ik altijd iets moet testen. Het maakt niet uit of het veel is, maar een klein dingetje kan al de moeite waard zijn om te testen. Mijn kledingoverzicht had ik wel aan haar kunnen laten zien en kijken of dit overzicht wel duidelijk voor haar werkt. Ik heb nu geleerd dat hoe klein de voortgang ook is, dat wat je maakt kan je laten testen. Dit ga ik in de toekomst zeker meenemen.

### Werken aan de applicatie (18-04-2024)
Vandaag heb ik vooral het ontwerp aangepast. Gister heb ik helaas mijn applicatie niet kunnen laten testen, maar op basis van mijn waarnemingen bij anderen en functionaliteiten die ik nog wil implementeren moet ik het ontwerp aanpassen. De structuur van mijn applicatie is nu als volgt:

```
|--- Hoofdmenu
    |--- Overzicht kledingkast
    |--- Kledingstuk toevoegen
    |--- Stel outfit samen
        |--- Hoofddeksel
        |--- Bovenkleding
        |--- Onderkleding
        |--- Schoenen
        |--- Accessoires
    |--- Genereer willekeurige outfit
    |--- Opgeslagen outfits
```

Op de opgeslagen en willekeurige outfits na, heb ik het ontwerp uitgewerkt. De applicatie ziet er als volgt uit:
<img width="838" alt="Scherm­afbeelding 2024-04-24 om 10 53 18" src="https://github.com/Martino538/hcd/assets/32341318/be9f940e-753a-478a-a78f-256443c9cc69">

### Voortgangsgesprek 3 (19-04-2024)
Vandaag heb ik Vasillis mijn werk laten zien. Hij was erg tevreden met wat ik nu had staan en welke ideeën ik nog wil gaan doorvoeren. Vooral over de randomiser was hij erg te spreken, omdat dit vrij uniek is. Al met al kwam het er op neer dat ik lekker door moest werken en mijn applicatie moest gaan laten testen.

### Werken aan de applicatie (23-04-2024)
Vandaag ben ik gaan werken aan het implementeren van een 'randomiser' functie. Eerst dacht ik dat het onzettend ingewikkeld zou zijn, maar verassend genoeg was dit makkelijker te maken als gedacht. Het lijkt veel code om dit voor elkaar te krijgen, maar de code is makkelijk te begrijpen. Hieronder is de code en het eindresultaat zichtbaar:</br>
<img width="574" alt="Scherm­afbeelding 2024-04-24 om 10 54 59" src="https://github.com/Martino538/hcd/assets/32341318/77e2c95d-1f09-4ae6-bff8-c8fb8e963d0e">
<img width="412" alt="Scherm­afbeelding 2024-04-24 om 10 55 17" src="https://github.com/Martino538/hcd/assets/32341318/8d5b3e33-88da-49b0-802e-7816dfc1b403">

Daarnaast heb ik de gebruiker ook de mogelijkheid gegeven om een outfit samen te stellen, waarbij je een overzicht krijgt van alle geselecteerde kledingsstukken, een selectie kunt opslaan en kunt inzien wat je hebt opgeslagen. Dit waren lastige functionaliteiten waar ik veel tijd in heb gestopt. Ik heb hier wel veel van kunnen leren, want ik weet nu wel goed hoe de localstorage werkt. Natuurlijk moesten we tijdens het vak browser tech ook met localstorage werken, maar bij dit project is het iets geavanceerder, omdat ik nu objecten moet opslaan en uitlezen. Hieronder is het resultaat van de opgeslagen outfit zichtbaar:

<img width="491" alt="Scherm­afbeelding 2024-04-24 om 11 32 48" src="https://github.com/Martino538/hcd/assets/32341318/9f301cff-c659-4462-ba5a-65082b2f9391">


Als laatste heb ik nog wat nonsense aan de applicatie toegevoegd. Als er een bepaalde actie zoals het opslaan van een outfit wordt uitgevoerd, dan is er een geluidje te horen. Hierdoor kan Petra nog makkelijker herkennen wat voor actie ze aan het doen is.

### Testen ronde 3 (24-04-2024)
Vandaag heb ik mijn applicatie laten testen door Petra. Vooraf had ik zelf eerst goed geoefend met de screenreader en leek het erop dat alles gebruiksvriendelijk is. Hieronder staan mijn waarnemingen:

Petra is door mijn applicatie gelopen en ze vond het erg goed! Vrijwel alle functionaliteiten waren vanzelfsprekend en ik hoefde niks toe te lichten. De navigatiestructuur vond ze prettig werken en ze vond het erg fijn dat er overal een 'terug' knop zat die makkelijk te bereiken was. De willekeurig gegenereerde outfit en het opslaan vond ze een hele leuk toevoeging en de geluiden vond ze erg prettig. Petra had nog 2 suggesties. Ze vind dat als je 1 kledingstuk hebt je geen volledige outfits hebt. Je kan dus pas opslaan als alle kledingstukken zijn ingevuld. Ook zou ze het fijn vinden als een willekeurig gegenereerde outfit gebasseerd wordt op het weer. Ik heb meteen in mijn applicatie doorgevoerd dat je eerst alle kledingstukken moet invullen voordat je een outfit kunt opslaan.

### De toekomst van dit project
Als ik een week langer de tijd had voor dit project had ik graag doorgevoerd dat je meerdere outfits kunt opslaan. Momenteel kan je namelijk maar 1 outfit opslaan en wordt de 'oude' steeds overschreven. Ook had ik de feedback van Petra meegenomen om outfits te genereren op basis van het weer.

### Korte reflectie
Aan het begin van deze opdracht was ik totaal niet gemotiveerd. Mijn interesse aan deze kant van development was ver te zoeken en ik had geen inspiratie bij het maken van een ontwerp of het uitdenken van een potentieel scenario. Gaande weg kwam ik steeds beter in een flow en zag ik licht aan de horizon. Het was veel werk, maar vooral erg leerzaam. Het doet mij goed om iemand hulp te kunnen bieden waar hij/zij problemen mee heeft. Al met al een geslaagd en leerzaam project!
