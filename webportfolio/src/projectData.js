import blog from'./assets/blog.png'
import catchFilip from './assets/catchfilip3.png'
import vader from './assets/vader.png'
import cryptoClicker from './assets/cryptoclicker.png'
import salescopy from './assets/salescopy.png'
import musicplayer from './assets/musicplayer.png'

export default [
    {
        id: 6,
        title: 'Music Player',
        description: 'Musikspelare där du kan välja och lyssna på musik. Med ett användarnamn och lösenord går det också att ladda upp låtar till en databas som sedan visas i spellistan. Spellistan består av låtar som jag har varit med och skapat.',
        img: musicplayer,
        url: 'https://yellow-beach-02c09b903.5.azurestaticapps.net/',
    
        verktyg: [],
        order: 0,
        github: 'https://github.com/Louinielsendev/music-player'
        
    },
    {
        id: 5,
        title: 'Salescopy.se',
        description: 'Skapa Effektiva Annonser Snabbt och Enkelt med Salescopy.se Få dina annonser att sticka ut från mängden med vår avancerade plattform för att skapa annonstexter! Applikationen använder api från OpenAI som med hjälp av en produktbeskrivning generarar en passande annonstext för produkten.',
        img: salescopy,
        url: 'https://salescopy.vercel.app/',
    
        verktyg: [],
        order: 1,
        github: 'https://github.com/Louinielsendev/salescopy'
        
    },
    {
        id: 4,
        title: 'Crypto Clicker (PWA)',
        description: 'Spelet är enkelt där användaren kan trycka på ett virtuellt mynt för att generera fler mynt. Målet är att samla så många mynt som möjligt för att köpa olika skins och uppgraderingar som kan hjälpa användaren att generera fler mynt snabbare. Spelet har ett crypto-tema, så mynten som genereras och används för att köpa uppgraderingar representeras av digitala valutor som Bitcoin eller Ethereum. För Att spara användaren används localstorage och phpmyadmin, där ett id för varje webbläsare sparas i databasen.',
        img: cryptoClicker,
        url: 'https://melab.lnu.se/~ll223vk/cryptoClicker/',
    
        verktyg: [],
        order: 0,
        github: 'https://github.com/Louinielsendev/cryptoClicker'
        
    },
    {
        id: 2,
        title: 'Väder-app',
        description: 'En Webbapplikation som visar väderinformation för platser i Sverige för både nuvarande och kommande 10 dagar. Användaren kan söka efter en ort genom att ange ortens namn i en sökruta. När användaren väljer en ort, hämtar applikationen väderinformation från SMHI:s API och visar den på skärmen. Applikationen är användarvänlig, responsiv och lätt att använda',
        img: vader,
        url: 'https://glittery-sherbet-6df2ab.netlify.app/',
    
        verktyg: [],
        order: 1,
        github: 'https://github.com/Louinielsendev/v-der/'
        
    },
    {
        id: 1,
        title: 'Catch Filip',
        description: 'Catch Filip är ett roligt och snabbt spel där spelaren tar på sig rollen som en huvudjägare och målet är att fånga så många av Filips huvud som möjligt. Huvudena faller i olika hastigheter, vilket gör att spelaren måste vara snabb och uppmärksam för att fånga dem alla. Spelet blir mer utmanande ju längre spelaren spelar, ju längre spelet går, ju snabbare skapas nya huvden som spelaren måste fånga. (Använd A och D för att styra korgen)',
        img: catchFilip,
        url: 'https://catchfilip.netlify.app/',
        verktyg: [],
        order: 0,
        github: 'https://github.com/Louinielsendev/Catch-filip/'
    },
    
    {
        id: 3,
        title: '8-bit Blog',
        description: 'Blogg där användare kan logga in och skriva inlägg som sedan publiceras på Bloggens förstasida. Från förstasidan är det också möjligt att navigera till enskilda inlägg',
        img: blog,
        url: 'https://melab.lnu.se/~ll223vk/Blogg/index.php',

        verktyg: [],
        order: 1,
        github: 'https://github.com/Louinielsendev/Blogg/',
        
    }



]