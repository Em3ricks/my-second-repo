# Webbutveckling III - Moment 4, ECMAScript och TypeScript

Efter en djupdykning i ECMAScript samt hur man skapar dessa friler från TypeScript
var det sista steget i Moment 4 att skapa bakåtkompabillitiet med hjälp av Babel.

Som med all installation av plugins använde jag mig av kommandolinjen i Visual Studio Code
för att installera de nödvändiga paketen på min dator med följande kommando:

**npm instsall -D babel-cli**

Efter installationen behöver jag installera ytterligare ett paket innehållande 
de inställningar som behövs för att konvertera min JavaScript till äldre versioner. 
Efter lite googlande hittade jag ett paket som gör mycket av jobbet åt mig och installerade
detta med följande kommando:

**npm install -D babel-preset-env**

Med korrekt inställningar måste jag skapa en konfigurationsfil för att välja vilket 
inställningar som ska användas när jag slutligen använder mitt Babel-kommando.
Denna fil kan genereras automatiskt men då den bara ska innehålla en inställning
skapar jag den för hand och döper den till **config.babelrc**.
Väl i denna fil väljer jag sedan paketet som jag beskrev i föregående steg, se bild:

![babel config](http://studenter.miun.se/~joem1800/webbutveckling%203/moment4/babel.jpg)

Sedan för att underlätta skapade jag mitt script för att kalla på funktionen i min package.json-fil
som redan var skapad för tidigare laborationer, se bild: 

![babel funktion](http://studenter.miun.se/~joem1800/webbutveckling%203/moment4/babel2.jpg)

Nu återstår bara att kalla på kommandot med **npm run build** vilket resulterar i konvertering av
min JavaScript där filerna hamnar i en ny mapp vid namn "build" i min publiceringskatalog. 

**RE**
För lite smidigare aktivering av funktionen (och för att faktiskt göra som uppgiftsbeskrivningen sa att man skulle)
infogade jag nu denna funktion i mitt gulp-script så att det körs löpande vid aktivering av mitt huvudkommando "gulp".

![babel funktion/gulpfilen](http://studenter.miun.se/~joem1800/webbutveckling%203/moment4/babel3.jpg)
