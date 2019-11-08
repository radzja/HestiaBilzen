# Les 4

## Integration testing:

* Bottom Up
* Top Down: Doubles (fakes) to simulate underlying parts
* Big Bang: Alle testen in één keer
    ** Niet systematisch doenbaar
    ** Makkelijk: geen drivers, geen doubles
    ** Lukt wel voor kleine systemen of bij kleine aanpassingen aan bestaand iets

### Sommige onderdelen liggen niet in jou handen (mailserver, ...):

Testen wel mogelijk met een double die mailserver simuleert

### Voorbeeld: Integration testing

* Gebruik een echt klantenbestand
* Fake mailserver (ligt niet in jou handen)
* Happy path test (test die zeker zou moeten lukken)
* Create user met duplicaat mail adres (test faalt)
