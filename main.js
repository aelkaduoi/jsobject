const marktplaats = [
    {
        titel:"Renault Trafic Bestelbus 2.0DCi 145PK Dynamic Edition ",
        description:"Wordt u de nieuwe eigenaar van deze Renault Trafic? 24 foto's en bekijkdeze Trafic in 3D!Leaseprice: 286.92,- p/m",
        price:19900,
        kilometer: 98307,
        manufactureYear:2020,

    },
    


    {
        titel:"Mercedes CLS 63 AMG 514 PK V8 F1 7G-Tronic Pano 2007 Zwart",
        description:"Mercedes Benz CLS 63 AMG 514 PK V8 F1 Pano 2007 Zwart Memory Stoelen, Distronic, Navi, Dak, Xenon, V8 514 PK, Start/Stop systeem, stoelverwarming, stoel ventilatie, Parkeersensoren, LUCHTVERING ",
        price:18950,
        kilometer:155623,
        manufactureYear:2007,
    },

    {
        titel:"Peugeot 107 1.0 12V XS 5DR 2010 Wit",
        description:" Beste marktplaats-bezoeker, Hierbij bied ik mijn peugeot 107 te koop aan. Dit betreft een zuinige betrouwbare auto. Het gaat hier om een goed onderhouden en goed rijdende 107. Super zuinig en zonder mankementen. ",
        price:3450,
        kilometer:146440,
        manufactureYear:2010,
    },

    {
        titel:"Bmw M4 cabrio Individual Dealer Onderhouden 740PK",
        description:"Unieke en in absolute topstaat verkerende,BMW M4 cabrio.De M4 is uitgevoerd in de prachtige kleur Champagne Quartz Metallic en is voorzien van alle denkbare opties.M4 is nu gewrapt in de kleur psychedelic waardoor in die zon alle kleuren krijgt.",
        price:53900,
        distance:109500,
        manufactureYear:2015,

    },

    {
        title:"Ford Ranger 2.0 Raptor | Nieuwstaat | Direct leverbaar",
        description:"Bijna nieuwe (net 7 maand oud) Ford Ranger Raptor van 1e eigenaar op grijs kenteken.Auto is uiteraard gewoon in Nieuwstaat en heeft",
        price:46950,
        kilometer:10420,
        manufactureYear:2021,

    },

  
];


const dirk = [
    {
        title: 'Kanzi appelen',
        weight: '1.5 Kg',
        actie: 'per zak 2.69',
        price: 2.69

    },
    {
        title: 'Grote Spaanse mandarijnen',
        weight: '1.5 Kg',
        actie: 'per net 2.69',
        price: 2.69

    },
    {
        title: '1 de Beste bami-nasi of macaroni-spaghetti groente',
        weight: 'Schaal 400 gram',
        sale: 'per schaal 0.99',
        price: 0.99

    },
    {
        title: 'Ons Biomerk Hollandse aardappelen',
        weight: '4 Kg',
        actie: 'per zak 2.99',
        price: 2.99

    },
    {
        title: 'Kiwi green',
        weight: '1 Kg',
        actie: 'per bak 1.99',
        price: 1.99

    },
  
];

const tweakers = [
    {
        title: 'Gigabyte GeForce RTX 3070 Ti GAMING OC 8G',
        price: 799,
        Specificaties: "Max. 1,83GHz • GDDR6X • 2x DP, 2x HDMI",
        lengte: 320,
        breedte: 129

    },
    {
        title: 'MSI GeForce RTX 3060 Ti Gaming X 8G LHR',
        price: 599,
        Specificaties: 'Max. 1,77GHz • GDDR6 • 3x DP, HDMI',
        lengte: 278,
        breedte: 131

    },
    {
        title: 'ASUS TUF Gaming GeForce RTX 3080 V2 OC Edition met LHR',
        price: 999,
        Specificaties: 'Max. 1,815GHz • GDDR6X • 3x DP, 2x HDMI',
        lengte: 299.9,
        breedte: 126.9

    },
    {
        title: 'Powercolor Red Devil AMD Radeon RX 6700XT',
        price: 699,
        Specificaties: 'Max. 2,622GHz • GDDR6 • 3x DP, HDMI',
        lengte: 320,
        breedte: 130

    },
    {
        title: 'Gigabyte GeForce RTX 3080 Gaming OC 10G (rev. 2.0, LHR)',
        price: 999,
        Specificaties: 'Max. 1,8GHz • GDDR6X • 3x DP, 2x HDMI',
        lengte: 320,
        breedte: 129

    },
  
];
const opdracht5 = document.querySelector('.opdracht4');

opdracht5.innerHTML += "<h4>Opdracht 5</h4>";




console.log("------Opdracht 4------");


for (let i = 0; i < marktplaats.length; i++) {
    console.log(marktplaats[i]);
    
    opdracht5.innerHTML += marktplaats[i].titel + "<br>";
}

console.log("------Opdracht 6------");

opdracht5.innerHTML += "<br> <br> <h4> Opdracht 7</h4>";


for (let i = 0; i < dirk.length; i++) {
    console.log(dirk[i]);

    opdracht5.innerHTML += dirk[i].title + "<br>";
    
}

console.log("------Opdracht 8------");

opdracht5.innerHTML += "<br> <br> <h4>Opdracht 9</h4>";


for (let i = 0; i < tweakers.length; i++) {
    console.log(tweakers[i]);

    opdracht5.innerHTML += tweakers[i].title + "<br>";
    
}



