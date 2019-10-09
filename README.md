# my-second-repo
För att utveckla med TypeScript har jag använta Visual Studio Code vilken är samma programvara jag nyttjat för samtliga föregående projekt. Men innan jag kan börja använda programmet måste jag först installera det i min arbetsmiljö och detta görs med följande kommando:

”npm install typescript –save-dev”

Sedan använder jag följande kommando för att initiera konfigurationen för TypeScript-kompilering:

”npx tsc –init”

Detta kommer resultera i en att en konfigurationsfil skapas där jag kan välja mot vilken version av ECMAScript som TypeScripten ska konverteras till där standardvärdet var satt till ES5.  
Sen är det bara att mata in följande kommando:

”npx tsc”

Och voilá, så har man helt plötsligt en ny JavaScript-fil i sin katalog där de funktioner man skapat i TypeScript blivit konverterade mot en senare version av ECMAScript.
