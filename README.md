# Portfolio Ann
 Projekt titel: 
 Anns portfolio

Projektbeskrivning: 
Inlämningsuppgift för kursen Frontendramverk (FE23). Jag har skapat 3 vyer; About, Project och Contact. 

- `npm install`: Installera nödvändiga paket för att köra projektet.
- `npm run dev`: Starta en utvecklingsserver för att visa webbsidan i webbläsaren.

Tekniker: 
React, Redux, Vite, React Router, UseSelector, UseEffect och UseState. 

React Router används för att hantera navigeringen på webbsidan. Det gör att användare kan gå mellan olika sidor (som 'About', 'Projects', och 'Contact') utan att sidan behöver laddas om helt.  ----> App.jsx

Redux används för att hålla koll på webbsidans data centralt (i themeSlice och store). Knappen (i ToggleButton) 
kan ändra och visa denna data.  ---->ToggleButton.jsx, Store.jsx, ThemeSlice.js

Två hooks vi inte gått igenom: 
UseSelector hook används för att hämta theme-state från Redux vilket styr ljust eller mörkt tema. Jag valde att använda useSelector för att UseSelector gör det möjligt att enkelt hämta och reagera på ändringar i temat från Redux storen, 
utan att orsaka onödiga omrenderingar. Detta gör att webbsidan blir snabbare och smidigare för användaren, eftersom den kan ändra utseende direkt utan att bli långsammare. ----> ThemeWrapper.jsx

UseEffect används för att köra ett api anrop när sidan laddas. Jag valde att använda UseEffect här eftersom useEffect behövs för att kunna hämta data som behövs för att visa en lista över GitHub-projekt. Genom att använda useEffect med en tom array ([]) för API-anropet säkerställs det att det bara händer en gång när komponenten startar. Detta gör webbsidan snabbare och förhindrar att samma data hämtas om och om igen. ----> GitHubAnn.jsx

Återanvändbar komponent: Till exempel Subheader som tar emot en prop som heter text, som kan ändras och specificeras beroende vilken text 
som ska visas på vyn/sidan. ----> Subheader.jsx

Funktionsöversikt:
ThemeSlice med Redux Toolkit håller koll på om temat är mörkt eller ljust. 
Initiala tillståndet är att temat inte är mörkt. Funktionen toggleTheme byter temat mellan mörkt och ljust varje gång den används. 

ThemeWrapper använder useSelector för att hämta darkMode från Redux, och beroende på detta värde ställer den in klassen på div-elementet 
för att visa antingen ett mörkt eller ljust tema för innehållet.

I ContactForm används useState-hook för att hantera statet för varje fält i formuläret: name, email, och message. Varje gång en användare skriver något i något av fälten uppdateras motsvarande state med det nya värdet genom onChange-händelsehanteraren.

GitHubAnn använder useState för att hålla koll på projektdata som hämtas från GitHub, och useEffect används för att faktiskt utföra hämtningen av datan från GitHub när komponenten laddas. Fetch används för att göra anrop till GitHub API, datan sparas i projects-statet med setProjects. Då  kan komponenten uppdateras och visa den senaste informationen om projekten.

