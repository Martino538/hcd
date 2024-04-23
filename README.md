# Proces verslag
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
- Ervoor zorgen dat zowel localstorage data wordt gemengt met de dataset en deze op het scherm tonen.

Ook had Vasillis mij meegegeven dat ik altijd iets moet testen. Het maakt niet uit of het veel is, maar een klein dingetje kan al de moeite waard zijn om te testen. Mijn kledingoverzicht had ik wel aan haar kunnen laten zien en kijken of dit overzicht wel duidelijk voor haar werkt. Ik heb nu geleerd dat hoe klein de voortgang ook is, dat wat je maakt kan je laten testen. Dit ga ik in de toekomst zeker meenemen.

### Voortgangsgesprek 3 (12-04-2024)
Vandaag heb ik Vasillis mijn werk laten zien. Hij was erg tevreden met wat ik nu had staan en welke ideeën ik nog wil gaan doorvoeren. Vooral over de randomiser was hij erg te spreken, omdat dit vrij uniek is. Al met al kwam het er op neer dat ik lekker door moest werken en mijn applicatie moest gaan laten testen.
