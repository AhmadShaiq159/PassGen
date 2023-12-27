// ---------------------------strongPasswords-------------------------

// Upper Case Alphabet
let uPCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Lower Case Alphabet
let lPCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Numbers
let numbers = ['0', '2', '3', '4', '5', '6', '7', '8', '9'];

// specialCharacters
let specialCharacters = [
    // Punctuation
    ',', '.', '!', '?', ':', ';', '-', '—', '(', ')', '{', '}', '[', ']', '"', "'", `'`,
    // Symbols
    '+', '-', '*', '/', '%', '=', '<', '>', '&', '|', '^', '@', '$', '#', '~',
    // Currency Symbols
    '$', '€', '£', '¥', '¢', '₹', '₽',
    // Mathematical Symbols
    'π', '∞', '√', '≈', '≠', '≤', '≥', '±',
    // Other Common Symbols
    '©', '®', '™', '°', '•', '…', '•', '°', '§', '¶', '÷', 'µ', '†', '‡',
];


// ----------------------------weakPasswords-------------------------
let weakPasswords = [
    "password", "123456", "qwerty", "12345678", "abc123", "iloveyou",
    "princess", "admin", "welcome", "login", "monkey", "dragon",
    "baseball", "football", "jesus", "letmein", "master", "michael",
    "ninjaTech", "mustang", "password1", "starwars", "trustno1",
    // ... more weak passwords here ...

    // Male names:
    "AhmadShaiq", "AliMurad", "MuhammadShah", "OmarSadique", "YousefKamal", "AbdullahKhan",
    "SamirAli", "BilalJawed", "YusufKarim", "HassanAli", "IbrahimKhan", "KhalidUddin",
    "MansourShah", "RashidAfghan", "SuleimanKhan", "TariqAli", "ZaidUddin", "JamalKhan",
    "FaisalBaig", "RamiAli", "SamiShah", "NabilKhan", "KarimYousuf", "AdnanRajpoot",
    "HabibShah", "MahmoudYousuf", "MustafaBola", "MurtazaBola", "SalehShah", "ZakirWali", "BashirAhmad",
    "KhawarGulMurad", "SherazGulmosh", "JunaidGhazi", "StefanJohn", "DanishSherbaz", "BasharatBasha", "ShaizadAlam",

    // Female names:
    "FatimaNoori", "AishaPatel", "MaryamAli", "SalmaShah", "NoorAzimi", "YasminBaig",
    "ZainabShah", "LaylaKhan", "AminaAfghan", "SaraAli", "KhadijahRajpoot", "RahimaShah",
    "SophiaBaig", "AaliyahKapoor", "ImanShah", "ZahraAli", "SanaKhan", "AmalRajpoot",
    "HanaShah", "NadiaAli", "SafiyaKhan", "LinaShah", "MalakAli", "JanaAzimi",
    "AyaShah", "LailaKhan", "HalaAzimi", "MariamShah", "ReemShah", "WafaBaig",
    // ... more common names ...

    // Number sequences:
    "111111", "123123", "1234567890", "11111111", "1234567", "654321",
    "000000", "123321", "678910", "135796", "246809", "987654321",
    // ... more number sequences ...

    // Keyboard patterns:
    "qwerty", "asdfgh", "zxcvbn", "qazwsx", "edcrfv", "tgbyhnu",
    "poiuyt", "lkjhgf", "mnbvcx", "1qaz2wsx", "3edc4rfv", "5tgb6yhn",
    "7ujm8ik", "9ol0p7",
    // ... more keyboard patterns ...

    // Personal information:
    "BlossomingBanana",  // Random name
    "1987-06-23",         // Random birthday (YYYY-MM-DD format)
    "1425 Willow Way",    // Random address
    "Silverdale",         // Random city
    "555-123-4567",       // Random phone number
    "sunnydaisy@random.com", // Random email
    "Fluffykins",         // Random pet name
    "RobinShah",              // Random child name
    "2015-10-12",         // Random anniversary (YYYY-MM-DD format)
    "Mango Sticky Rice",  // Random favorite food
    // ... more personal information ...
];


// ---------------------------funnyPasswords-------------------------
let funnyPasswords = [
    "CoffeeIsMyPassword",
    "IDontKnowWhatImDoing",
    "Password123Please",
    "PurpleMonkeyDishwasher",
    "TacoCat",
    "NachoCheese4Life",
    "ICantRememberPasswords",
    "DontHackMePlease",
    "MyCatAteMyKeyboard",
    "LetMeInItsColdOutside",
    "MayTheForceBeWithYou",
    "ThisIsNotThePasswordYoureLookingFor",
    "CorrectHorseBatteryStaple",
    "TrustMeImANinja",
    "NinjasDontNeedPasswords",
    "ButIfTheyDidItWouldBeThis",
    "ImBatman",
    "WhySoSerious",
    "NetflixAndChill",
    "PizzaIsLife",
    "ChocolateIsMyKryptonite",
    "IDontLikePasswords",
    "CanIJustUseMyFingerprint",
    "FaceIDForTheWin",
    "ThisIsTheLastPasswordIllEverUse",
    "SeriouslyImDoneWithPasswords",
    "JustLetMeInAlready",
    "ImGettingTooOldForThis",
    "INeedAVacation",
    "WheresTheBeach",
    "BringMeSomeTacos",
    "AndASangria",
    "MakeItADouble",
    "ImNotGonnaRememberThis",
    "OhWell",
    "HereGoesNothing",
    "WishMeLuck",
    "INeedAllTheLuckICanGet",
    "ThisIsProbablyABadIdea",
    "ButItsTooLateNow",
    "ImCommitted",
    "ForBetterOrWorse",
    "HeresHopingForTheBest",
    "FingersCrossed",
    "KnockOnWood",
    "DontJinxIt",
    "JustKidding",
    "YoullNeverKnow",
    "ItsASecret",
    "TopSecret",
    "ClassifiedInformation",
    "EyesOnly",
    "ForYourEyesOnly",
    "MissionImpossible",
    "SelfDestructingMessage",
    "ThisMessageWillSelfDestructIn5Seconds",
    "JustKiddingAgain",
    "IGotYou",
    "YouDidntSeeThatComing",
    "DidYouReallyThinkItWouldExplode",
    "ThatWouldBeCrazy",
    "OkayImDoneNow",
    "SeriouslyThisTime",
    "AuRevoir",
    "Sayonara",
    "Zàijiàn",
    "DoSvidaniya",
    "AufWiedersehen",
    "TotZiens",
    "AtéLogo",
    "JāBulvāmies",
    "Näkemiin",
    "Paalam",
    "Hoşçakal",
    "Sbohem",
    "Viszontlátásra",
    "DoeiDoei",
    "ByeByeBye",
    "ImReallyLeavingNow",
    "ForRealThisTime",
    "NoMoreJokes",
    "IPromise",
    "PinkyPromise",
    "CrossMyHeartAndHopeToDie",
    "StickANeedleInMyEye",
    "OkayImDone",
    "Seriously",
    "Goodbye",
];


// ------------------------password Catogary class------------------
class passwordCatogary {
    // storng Password method 
    storngPassword() {
        // removing previous color class 
        if (input.classList.contains("text-success") || caption.classList.contains("text-success")) {
            caption.classList.remove("text-success");
            input.classList.remove("text-success");
        }
        else if (input.classList.contains("text-primary") || caption.classList.contains("text-primary")) {
            caption.classList.remove("text-primary");
            input.classList.remove("text-primary");
        }

        // adding new color class 
        caption.innerHTML = "Strong Passwords";
        caption.classList.add("text-danger");

        // get and generate random
        let i = 0;
        let value = "";
        while (i <= 5) {
            let a = Math.floor(Math.random() * uPCase.length);
            let b = Math.floor(Math.random() * lPCase.length);
            let c = Math.floor(Math.random() * specialCharacters.length);
            value += lPCase[a] + uPCase[b] + specialCharacters[c];
            input.value = value;
            i++;
        }

        // adding color class in input 
        input.classList.add("text-danger");
    }

    // weak Password method 
    weakPassword() {
        // removing previous color class 
        if (input.classList.contains("text-danger") || caption.classList.contains("text-danger")) {
            caption.classList.remove("text-danger");
            input.classList.remove("text-danger");
        }
        else if (input.classList.contains("text-primary") || caption.classList.contains("text-primary")) {
            caption.classList.remove("text-primary");
            input.classList.remove("text-primary");
        }

        // adding new color class 
        caption.innerHTML = "Weak Passwords";
        caption.classList.add("text-success");

        // get and generate random
        let random = Math.floor(Math.random() * weakPasswords.length);

        // adding color class and random generated password in input 
        input.value = weakPasswords[random];
        input.classList.add("text-success");
    }

    // funny Password method 
    funnyPassword() {
        // removing previous color class 
        if (input.classList.contains("text-danger") || caption.classList.contains("text-danger")) {
            caption.classList.remove("text-danger");
            input.classList.remove("text-danger");
        }
        else if (input.classList.contains("text-success") || caption.classList.contains("text-success")) {
            caption.classList.remove("text-success");
            input.classList.remove("text-success");
        }

        // adding new color class 
        caption.innerHTML = "Funny Passwords";
        caption.classList.add("text-primary");

        // get and generate random
        let random = Math.floor(Math.random() * funnyPasswords.length);

        // adding color class and random generated password in input 
        input.value = funnyPasswords[random];
        input.classList.add("text-primary");
    }
}

let getPassClass = new passwordCatogary();


// ---------------------------copy function----------------------------- 
let copyFunc = () => {
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
}