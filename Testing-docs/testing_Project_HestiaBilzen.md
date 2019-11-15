# Inhoud

1.Introductie        3

1.1.        Korte beschrijving van het project        3

1.2.        Doelpubliek        4

1.3.        Samenwerking        5

2.Unit testen Login Formulier        6

2.1.        Isolated test:        6

2.2.        Shallow Test        6

2.3.        Integrated Test        6

2.4.        Werkwijze        6

2.4.1.        Input        6

2.4.2.        Output        7

2.4.3.        Gevonden fouten        7

2.4.4.        Waarom hebben we volgende units niet getest        7

3.Coverage test        8

4.Integratie testen        8

4.1.        Keuze gemaakt voor Big Bang        8

4.2.        Top Down        10

4.3.        Bottem Up        10

4.4.        Volgende Integraties hebben we niet getest        11

4.5.        Gebruik van drivers of doubles        11

4.5.1.        Input        11

4.5.2.        Output        11

4.5.3.        Gevonden fouten        11

5.Niet-Functionele testen        11

5.1.        Testen        11

5.1.1.        Performance/loadtesten        11

5.1.2.        Stress testen        11

5.1.3.        Soak testen        11

5.1.4.        Failover testen        11

5.1.5.        Usability testen        11

5.1.6.        Security testen        13

6.Acceptance testen        13

6.1.        Alpha &amp; Beta Testing        13

6.2.        Contract Acceptance Testing        13

6.3.        Regulation Acceptance Testing        14

6.4.        Operational Acceptance Testing        14

6.5.        Black Box Testing        14

1. Introductie
1.1. Korte beschrijving van het project

Het is een website die ik eerder gemaakt heb voor de handbalclub Hestia Bilzen in MODX. Het was een uitgelezen kans om de website opnieuw te maken in Angular. Door informatie in te winnen bij de eindgebruikers heb ik de usability van de website kunnen verbeteren.
Heel kort schetsen waarom de website werd ontwikkeld. Ten eerste om informatie te delen, voor de sponsors en om te contacteren.
Bij het interview kwam telkens hetzelfde item terug namelijk de Kalender. Zoals je later zal zien op de &quot;heatmap&quot; is de Kalender de meest bezochte pagina.
Op de kalender staan de thuiswedstrijden en uitwedstrijden met datum en aanvangsuur per jeugdreeks. Na een periode testen van de website door de leden, hebben we feedback gekregen om een toepassing te maken. Het zou gemakkelijker zijn om bij een thuiswedstrijd naam van de sporthal te zien waar de wedstrijd doorgaat met wegomschrijving.
Nu moesten de leden telkens googelen naar het adres van de sporthal en dan via een routeplanner de route opvragen.

Hoe hebben we dit aangepakt?
Op de Homepagina voorzien we de komende wedstijden van de week in de linkse kolom en wanneer de bezoeker op de rij van de wedstrijd klik verschijnt er in de rechterkolom een routekaart afbeelding met de sporthal en adresgegevens. Klik de bezoeker op de routekaart krijgt hij de routebeschrijving naar die sporthal.

**1. Homepagina**

1.2. Doelpubliek

Handballiefhebbers, leden van Hestia Bilzen, bezoekers.

1.3. Samenwerking

Codering en testing door Stephen Hermans en Frank Martens
Usability informatie gevraagd aan leden / gebruikers van de website en via de tool van HotJar

**Wireframing van het project**

2. Unit testen Login Formulier

2.1. Isolated test:

Zorg ervoor dat het onderdeel met succes is gemaakt (Boilerplate Test Case)

Controleer of de beginstatus van het onderdeel correct is

Verzonden moet waar zijn en authError moet onwaar zijn wanneer de functie Verzenden wordt aangeroepen.

Controleer of de formulierveldwaarde correct is bijgewerkt

Formulier moet ongeldig zijn wanneer leeg veld is ingevoerd

- --Moet ik nog aanvullen met code

1.
  1. 2.2.Shallow Test

The main test I focus in Shallow Test is template rendering. For e.g, I would ensure the button.click() will trigger the onSubmit function call and make sure error message is displayed when input field is invalid.

There are 6 test cases:

1.) Ensure username, password field and login button are rendered.

2.) Render Username error message when username is blank.

3.) Render Password error message when password is blank.

4.) Render both username &amp; password error message when username &amp; password is blank.

5.) Display red outline for username input field when username is blank.

6.) Display red outline for password input field when password is blank.

- --Moet ik nog aanvullen met code



1.
  1. 2.3.Integrated Test

After ensuring

The component logic passed in Isolated test

The logic and template rendering passed in Shallow Test

I&#39;ll test the LoginService and Router to ensure the whole component and dependencies ( LoginService &amp; Router) behave correctly.

There are 2 test cases:

1.) Ensure LoginService login is called when login button.onClick()

- --2.) Ensure navigate to HomeComponent when login successfully
Moet ik nog aanvullen met code

1.
  1. 2.4.Werkwijze
    1. 2.4.1.Input

1.
  1.
    1. 2.4.2.Output

1.
  1.
    1. 2.4.3.Gevonden fouten

1.
  1.
    1. 2.4.4.Waarom hebben we volgende units niet getest

**voordelen:**
Foutlokalisatie is eenvoudiger.

Er wordt geen tijd verspild met wachten tot alle modules zijn ontwikkeld in tegenstelling tot de Big-bang-aanpak

**nadelen:**
Kritieke modules (op het hoogste niveau van software-architectuur) die de applicatiestroom regelen, worden als laatste getest en kunnen gevoelig zijn voor defecten.

Een vroeg prototype is niet mogelijk

1.
  1. 4.4.Gebruik van drivers of doubles

We hebben géén gebruik gemaakt van drivers of doubles omdat we de Big Bang wilden toepassen, door gebruik te maken van de E2E test met Protractor maar wegens tijdgebrek is dit niet uitgevoerd.


Stub : wordt aangeroepen door de module die wordt getest.
Driver : roept de te testen module op.

1. 5.Niet-Functionele testen
  1. 5.1.Testen
    1. 5.1.1.Performance/loadtesten

Voor het project Hestia Bilzen heeft dit geen invloed is een lokale website met beperkte functionaliteit.

De software wordt getest onder een bepaalde belasting (load), waarbij wordt gekeken of de prestaties van de software binnen bepaalde normen blijven.

1.
  1.
    1. 5.1.2.Stress testen

Voor het project Hestia Bilzen heeft dit geen invloed is een lokale website met beperkte
functionaliteit.

Hierbij wordt een hogere (extreme) belasting van de applicatie getest om te kijken hoe de software hierop reageert en wat er maximaal voor belasting mogelijk is. Bij performance testing wordt dus getest met de maximale belasting die gevraagd wordt, terwijl stress testen meer dan de maximale belasting test en kijkt wat er gebeurt.

1.
  1.
    1. 5.1.3.Soak testen

Voor het project Hestia Bilzen heeft dit geen invloed is een lokale website met beperkte functionaliteit.

Hierbij wordt de software over langere periode getest met een bepaalde workload. Hoe gedraagt het systeem zich in de praktijk tijdens langdurig en intensief gebruik.

1.
  1.
    1. 5.1.4.Failover testen

Voor het project Hestia Bilzen heeft dit geen invloed is een lokale website met beperkte functionaliteit.

Software heeft vaak redundante systemen die ingeschakeld worden wanneer er een fout optreed of het systeem overbelast raakt. Failover testen hoe deze systemen werken en hoe de basis applicatie zich hersteld, nadat het weer in functie is.

1.
  1.
    1. 5.1.5.Usability testen

Dit hebben we wel getest. Voor we begonnen aan het project hebben we eerst informatie ingewonnen van een aantal gebruikers van de bestaande website.
We hebben ook de Tool &quot;HotJar&quot; gebruikt om beter inzicht te krijgen waar klikken de gebruikers op en hoe zijn de muisbewegingen m.a.w. moeten er elementen van plaats veranderen om beter gezien te worden, etc.

Hoe gemakkelijk is de software in gebruik? Hoe wordt er om gegaan met specifieke gebruik situaties en hoe makkelijk is de software in het gebruik? Het gaat hier voornamelijk om de UI test.

**Tool HotJar: Heatmap Homepagina**

Daaruit kunnen we besluiten dat de voornaamst bezochte Kalenderpagina is



**Tool HotJar: Recording Kalenderpagina**

Hier kan je analyseren welke gebruiker, welke pagina&#39;s hij bezocht heeft en hoelang.





Je kan perfect de muisbewegingen zien waar de gebruikers op klikken, langer bij stilstaan door de bewegen over het scherm te bekijken.



Er is ook een feedbackbutton voorzien om te weten wat de ervaring van de gebruiker is zodat we de website kunnen verbeteren.

1.
  1.
    1. 5.1.6.Security testen

Wegens tijdsgebrek niet kunnen testen.

Hoe gemakkelijk is de software in gebruik? Hoe wordt er om gegaan met specifieke gebruik situaties en hoe makkelijk is de software in het gebruik? Het gaat hier voornamelijk om de UI test.

1. 6.Acceptance testen

Niet van toepassing op Hestia Bilzen. Omdat dit een website is om informatie te delen en weinig functionele programmacode bevat. 

1.
  1. 6.1.Alpha &amp; Beta Testing

Alfa-testen vindt normaal gesproken plaats in de ontwikkelomgeving en wordt meestal gedaan door interne medewerkers. Lang voordat het product zelfs wordt vrijgegeven aan externe testers of klanten. Ook potentiële gebruikersgroepen kunnen Alpha Tests uitvoeren, maar het belangrijkste is dat dit plaatsvindt in de ontwikkelomgeving.

Op basis van de feedback - verzameld van de alfatesters - lossen ontwikkelingsteams vervolgens bepaalde problemen op en verbeteren de bruikbaarheid van het product.

Bètatests , ook wel &#39;veldtests&#39; genoemd, vinden plaats in de omgeving van de klant en omvatten een aantal uitgebreide tests door een groep klanten die het systeem in hun omgeving gebruiken. Deze bètatesters geven vervolgens feedback, wat op zijn beurt leidt tot verbeteringen van het product.

Alfa- en bètatests worden uitgevoerd voordat de software wordt vrijgegeven voor alle klanten.

1.
  1. 6.2.Contract Acceptance Testing

Contractacceptatietesten betekent dat een ontwikkelde software wordt getest aan de hand van bepaalde criteria en specificaties die vooraf zijn vastgelegd en in een contract zijn overeengekomen. Het projectteam definieert de relevante criteria en specificaties voor acceptatie op hetzelfde moment dat het team het contract zelf overeenkomt.

1.
  1. 6.3.Regulation Acceptance Testing

ook bekend als Compliance Acceptance Testing, onderzoekt of de software voldoet aan de voorschriften. Dit omvat overheids- en wettelijke voorschriften.

1.
  1. 6.4.Operational Acceptance Testing

Deze testcases, ook bekend als Operational Readiness Testing of Production Acceptance Testing , zorgen ervoor dat er workflows zijn om de software of het systeem te kunnen gebruiken.

Dit moet workflows voor back-upplannen, training van gebruikers en verschillende onderhoudsprocessen en beveiligingscontroles omvatten.

1.
  1. 6.5.Black Box Testing

Black Box Testing wordt vaak gecategoriseerd als functionele testen, maar kan tot op zekere hoogte worden gezien als een type gebruikersacceptatietest.

Het is een methode voor het testen van software die bepaalde functionaliteiten analyseert zonder testers de interne codestructuur te laten zien. Black Box Testing is onderdeel van User Acceptance Testing, omdat Black Box Tests dezelfde principes delen als UAT.


Tijdens Black Box Tests is de gebruiker zich niet bewust van enige codebasis, maar alleen van de vereisten waaraan de software moet voldoen.

Testers hebben geen specifieke kennis nodig van de toepassing of van de functies ervan. De tester die Black Box Tests uitvoert, weet alleen wat de software zou moeten doen. Ze weten niet hoe het moet.

Veel QA- en ontwikkelingsteams gebruiken Black Box Testing vrij vaak voor hun UAT-inspanningen.
