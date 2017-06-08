var bodyParser = require('body-parser');
var url = require('url');

var sampleData =
[
    {
        "id": "58f875f89ea4127f3bcda2b5",
        "index": 0,
        "isActive": true,
        "balance": "$2,382.63",
        "age": 37,
        "name": "Shepard",
        "surname": "Reyes",
        "address": "S. GEORGIA AND S. SANDWICH ISLS.",
        "email": "undefined.undefined@undefined.co.uk",
        "phone": "+421 (812) 413-2935"
    },
    {
        "id": "58f875f8d52a07fcf6bcbd00",
        "index": 1,
        "isActive": false,
        "balance": "$1,711.72",
        "age": 20,
        "name": "Merrill",
        "surname": "Campos",
        "address": "ST. PIERRE AND MIQUELON",
        "email": "undefined.undefined@undefined.tv",
        "phone": "+421 (912) 518-3510"
    },
    {
        "id": "58f875f84f8f9880f2a0f86b",
        "index": 2,
        "isActive": false,
        "balance": "$3,108.37",
        "age": 23,
        "name": "Cotton",
        "surname": "Fry",
        "address": "US MINOR OUTLYING ISLANDS",
        "email": "undefined.undefined@undefined.ca",
        "phone": "+421 (988) 491-2831"
    },
    {
        "id": "58f875f8f8d7f6b39ae2330e",
        "index": 3,
        "isActive": true,
        "balance": "$1,465.11",
        "age": 20,
        "name": "Huffman",
        "surname": "Mcgowan",
        "address": "JORDAN",
        "email": "undefined.undefined@undefined.com",
        "phone": "+421 (914) 537-2551"
    },
    {
        "id": "58f875f863873e62ad42eba2",
        "index": 4,
        "isActive": false,
        "balance": "$1,976.55",
        "age": 23,
        "name": "Elisabeth",
        "surname": "Douglas",
        "address": "CHINA",
        "email": "undefined.undefined@undefined.org",
        "phone": "+421 (821) 440-2007"
    },
    {
        "id": "58f875f8d02c9d505da161a2",
        "index": 5,
        "isActive": true,
        "balance": "$3,285.29",
        "age": 32,
        "name": "Valenzuela",
        "surname": "Hurley",
        "address": "ARGENTINA",
        "email": "undefined.undefined@undefined.io",
        "phone": "+421 (854) 416-2598"
    },
    {
        "id": "58f875f8cce4751911b58f22",
        "index": 6,
        "isActive": true,
        "balance": "$1,159.23",
        "age": 39,
        "name": "Nelda",
        "surname": "Hogan",
        "address": "COCOS (KEELING ISLANDS)",
        "email": "undefined.undefined@undefined.info",
        "phone": "+421 (838) 561-2483"
    },
    {
        "id": "58f875f87a98990d925f0474",
        "index": 7,
        "isActive": false,
        "balance": "$3,241.48",
        "age": 35,
        "name": "Alice",
        "surname": "Rose",
        "address": "INDONESIA",
        "email": "undefined.undefined@undefined.us",
        "phone": "+421 (852) 412-3606"
    },
    {
        "id": "58f875f8612ddb0d0708d132",
        "index": 8,
        "isActive": true,
        "balance": "$1,255.01",
        "age": 24,
        "name": "Francis",
        "surname": "Wong",
        "address": "GUADELOUPE",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (870) 580-2911"
    },
    {
        "id": "58f875f864bdc2b43223da8a",
        "index": 9,
        "isActive": false,
        "balance": "$2,989.46",
        "age": 37,
        "name": "Savage",
        "surname": "Mack",
        "address": "ETHIOPIA",
        "email": "undefined.undefined@undefined.me",
        "phone": "+421 (895) 600-3375"
    },
    {
        "id": "58f875f81b4d07c5c7e20c84",
        "index": 10,
        "isActive": false,
        "balance": "$1,778.29",
        "age": 27,
        "name": "Mindy",
        "surname": "Montoya",
        "address": "VIRGIN ISLANDS (BRITISH)",
        "email": "undefined.undefined@undefined.net",
        "phone": "+421 (979) 429-2204"
    },
    {
        "id": "58f875f8552456d4345382b6",
        "index": 11,
        "isActive": false,
        "balance": "$2,911.02",
        "age": 36,
        "name": "Monroe",
        "surname": "Kramer",
        "address": "BOUVET ISLAND",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (811) 519-2845"
    },
    {
        "id": "58f875f8157929d72c603757",
        "index": 12,
        "isActive": true,
        "balance": "$3,599.70",
        "age": 38,
        "name": "Donovan",
        "surname": "Hunt",
        "address": "GEORGIA",
        "email": "undefined.undefined@undefined.co.uk",
        "phone": "+421 (806) 568-2947"
    },
    {
        "id": "58f875f8c06c0027cfabff57",
        "index": 13,
        "isActive": true,
        "balance": "$1,579.72",
        "age": 24,
        "name": "Boyer",
        "surname": "Ware",
        "address": "CAMBODIA",
        "email": "undefined.undefined@undefined.tv",
        "phone": "+421 (851) 544-2634"
    },
    {
        "id": "58f875f88a462402625e6318",
        "index": 14,
        "isActive": false,
        "balance": "$1,873.51",
        "age": 33,
        "name": "Rogers",
        "surname": "Lopez",
        "address": "SEYCHELLES",
        "email": "undefined.undefined@undefined.ca",
        "phone": "+421 (853) 545-3450"
    },
    {
        "id": "58f875f88b68fd03e39e3645",
        "index": 15,
        "isActive": false,
        "balance": "$3,401.11",
        "age": 39,
        "name": "Walton",
        "surname": "Benson",
        "address": "TOKELAU",
        "email": "undefined.undefined@undefined.com",
        "phone": "+421 (929) 462-2024"
    },
    {
        "id": "58f875f86c930413499b4144",
        "index": 16,
        "isActive": false,
        "balance": "$2,783.32",
        "age": 25,
        "name": "Bowen",
        "surname": "French",
        "address": "TOGO",
        "email": "undefined.undefined@undefined.org",
        "phone": "+421 (968) 498-3465"
    },
    {
        "id": "58f875f810b2f0885fbc3142",
        "index": 17,
        "isActive": true,
        "balance": "$2,581.73",
        "age": 29,
        "name": "Corine",
        "surname": "Dillard",
        "address": "FAROE ISLANDS",
        "email": "undefined.undefined@undefined.io",
        "phone": "+421 (990) 527-3790"
    },
    {
        "id": "58f875f83a38dba3c26741f5",
        "index": 18,
        "isActive": false,
        "balance": "$3,417.50",
        "age": 20,
        "name": "Barbara",
        "surname": "Potter",
        "address": "PALAU",
        "email": "undefined.undefined@undefined.info",
        "phone": "+421 (946) 501-2316"
    },
    {
        "id": "58f875f831fd89d526560f75",
        "index": 19,
        "isActive": false,
        "balance": "$3,609.39",
        "age": 32,
        "name": "Stella",
        "surname": "Vazquez",
        "address": "ST. HELENA",
        "email": "undefined.undefined@undefined.us",
        "phone": "+421 (887) 422-2376"
    },
    {
        "id": "58f875f8dfa040f095a05d89",
        "index": 20,
        "isActive": false,
        "balance": "$1,985.47",
        "age": 32,
        "name": "Bowman",
        "surname": "Contreras",
        "address": "IRELAND",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (820) 589-2183"
    },
    {
        "id": "58f875f8714f3bf6468b40e2",
        "index": 21,
        "isActive": false,
        "balance": "$1,431.46",
        "age": 40,
        "name": "Flynn",
        "surname": "Meyer",
        "address": "CHRISTMAS ISLAND",
        "email": "undefined.undefined@undefined.me",
        "phone": "+421 (847) 401-2114"
    },
    {
        "id": "58f875f8d4464086f7854de5",
        "index": 22,
        "isActive": false,
        "balance": "$2,929.49",
        "age": 31,
        "name": "Blair",
        "surname": "Pena",
        "address": "ANGOLA",
        "email": "undefined.undefined@undefined.net",
        "phone": "+421 (902) 591-2866"
    },
    {
        "id": "58f875f894bb0f6f90129720",
        "index": 23,
        "isActive": false,
        "balance": "$2,783.35",
        "age": 25,
        "name": "Meredith",
        "surname": "Mcmahon",
        "address": "PARAGUAY",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (999) 554-2294"
    },
    {
        "id": "58f875f8b1f52f371ccf9a9c",
        "index": 24,
        "isActive": true,
        "balance": "$3,507.93",
        "age": 38,
        "name": "Jacobs",
        "surname": "Freeman",
        "address": "BOSNIA AND HERZEGOVINA",
        "email": "undefined.undefined@undefined.co.uk",
        "phone": "+421 (915) 402-3889"
    },
    {
        "id": "58f875f82285731fbf7c342e",
        "index": 25,
        "isActive": false,
        "balance": "$2,496.65",
        "age": 38,
        "name": "Hillary",
        "surname": "Hanson",
        "address": "GHANA",
        "email": "undefined.undefined@undefined.tv",
        "phone": "+421 (996) 489-2364"
    },
    {
        "id": "58f875f8b64c587a5a179a2e",
        "index": 26,
        "isActive": true,
        "balance": "$2,282.08",
        "age": 24,
        "name": "Weber",
        "surname": "Rios",
        "address": "MAURITANIA",
        "email": "undefined.undefined@undefined.ca",
        "phone": "+421 (968) 497-3280"
    },
    {
        "id": "58f875f8abc8dc3047b9d04f",
        "index": 27,
        "isActive": false,
        "balance": "$3,345.41",
        "age": 39,
        "name": "Vega",
        "surname": "Day",
        "address": "ARMENIA",
        "email": "undefined.undefined@undefined.com",
        "phone": "+421 (983) 439-3094"
    },
    {
        "id": "58f875f8fd386845803e493c",
        "index": 28,
        "isActive": false,
        "balance": "$3,446.36",
        "age": 33,
        "name": "Noble",
        "surname": "Daugherty",
        "address": "MAURITIUS",
        "email": "undefined.undefined@undefined.org",
        "phone": "+421 (829) 403-3452"
    },
    {
        "id": "58f875f8806b9a0b69526ea9",
        "index": 29,
        "isActive": true,
        "balance": "$1,611.77",
        "age": 27,
        "name": "Sherrie",
        "surname": "Frank",
        "address": "BURKINA FASO",
        "email": "undefined.undefined@undefined.io",
        "phone": "+421 (937) 545-2767"
    },
    {
        "id": "58f875f8ae3ad90cdd4aed38",
        "index": 30,
        "isActive": false,
        "balance": "$1,214.58",
        "age": 38,
        "name": "Sherman",
        "surname": "Hensley",
        "address": "VENEZUELA",
        "email": "undefined.undefined@undefined.info",
        "phone": "+421 (897) 426-2776"
    },
    {
        "id": "58f875f8ebd53d963c038808",
        "index": 31,
        "isActive": false,
        "balance": "$3,741.14",
        "age": 21,
        "name": "Bonner",
        "surname": "Henderson",
        "address": "ANTIGUA AND BARBUDA",
        "email": "undefined.undefined@undefined.us",
        "phone": "+421 (960) 502-3672"
    },
    {
        "id": "58f875f8182eb999bb66e169",
        "index": 32,
        "isActive": false,
        "balance": "$2,206.20",
        "age": 37,
        "name": "Kathie",
        "surname": "Hobbs",
        "address": "NAURU",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (810) 494-3494"
    },
    {
        "id": "58f875f8ded244b623defc19",
        "index": 33,
        "isActive": false,
        "balance": "$3,352.41",
        "age": 31,
        "name": "Bridget",
        "surname": "Stephenson",
        "address": "SOUTH AFRICA",
        "email": "undefined.undefined@undefined.me",
        "phone": "+421 (810) 589-2712"
    },
    {
        "id": "58f875f8166ebaaff4b415dd",
        "index": 34,
        "isActive": true,
        "balance": "$1,470.42",
        "age": 27,
        "name": "Frances",
        "surname": "Carrillo",
        "address": "BOTSWANA",
        "email": "undefined.undefined@undefined.net",
        "phone": "+421 (911) 553-2160"
    },
    {
        "id": "58f875f84bd27f72d13c8a39",
        "index": 35,
        "isActive": true,
        "balance": "$3,288.12",
        "age": 40,
        "name": "Collins",
        "surname": "Mendez",
        "address": "BANGLADESH",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (969) 600-3173"
    },
    {
        "id": "58f875f8c5c140824f38128a",
        "index": 36,
        "isActive": true,
        "balance": "$2,641.27",
        "age": 22,
        "name": "Rodriquez",
        "surname": "Collins",
        "address": "MEXICO",
        "email": "undefined.undefined@undefined.co.uk",
        "phone": "+421 (935) 539-3253"
    },
    {
        "id": "58f875f83cdc29c6ceac0390",
        "index": 37,
        "isActive": true,
        "balance": "$1,845.42",
        "age": 30,
        "name": "Samantha",
        "surname": "Tanner",
        "address": "FIJI",
        "email": "undefined.undefined@undefined.tv",
        "phone": "+421 (841) 559-2446"
    },
    {
        "id": "58f875f8b316597aeefb597c",
        "index": 38,
        "isActive": false,
        "balance": "$1,096.76",
        "age": 25,
        "name": "Betty",
        "surname": "Mcintyre",
        "address": "SAN MARINO",
        "email": "undefined.undefined@undefined.ca",
        "phone": "+421 (851) 425-3815"
    },
    {
        "id": "58f875f8cd8b2bdf9a9e51a2",
        "index": 39,
        "isActive": false,
        "balance": "$2,674.63",
        "age": 21,
        "name": "Everett",
        "surname": "Norton",
        "address": "MALAWI",
        "email": "undefined.undefined@undefined.com",
        "phone": "+421 (895) 589-2927"
    },
    {
        "id": "58f875f8dac9d503b1aad634",
        "index": 40,
        "isActive": true,
        "balance": "$1,048.18",
        "age": 30,
        "name": "Anita",
        "surname": "Mcneil",
        "address": "TANZANIA",
        "email": "undefined.undefined@undefined.org",
        "phone": "+421 (913) 528-2086"
    },
    {
        "id": "58f875f873c40e0546039476",
        "index": 41,
        "isActive": false,
        "balance": "$2,501.88",
        "age": 40,
        "name": "Lottie",
        "surname": "Joseph",
        "address": "SAINT LUCIA",
        "email": "undefined.undefined@undefined.io",
        "phone": "+421 (847) 446-3471"
    },
    {
        "id": "58f875f8690b74ac5a325721",
        "index": 42,
        "isActive": false,
        "balance": "$1,212.21",
        "age": 30,
        "name": "Cynthia",
        "surname": "Bauer",
        "address": "MONTSERRAT",
        "email": "undefined.undefined@undefined.info",
        "phone": "+421 (886) 518-2934"
    },
    {
        "id": "58f875f8ae537f003e8543cf",
        "index": 43,
        "isActive": true,
        "balance": "$2,613.50",
        "age": 38,
        "name": "Kay",
        "surname": "Mcfadden",
        "address": "GUINEA",
        "email": "undefined.undefined@undefined.us",
        "phone": "+421 (837) 420-2987"
    },
    {
        "id": "58f875f8a5c81a3d2a653c17",
        "index": 44,
        "isActive": false,
        "balance": "$2,689.03",
        "age": 36,
        "name": "Fisher",
        "surname": "Benjamin",
        "address": "UNITED STATES",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (996) 537-2526"
    },
    {
        "id": "58f875f8833baad7b115517e",
        "index": 45,
        "isActive": true,
        "balance": "$2,080.41",
        "age": 21,
        "name": "Lillian",
        "surname": "Kemp",
        "address": "AZERBAIJAN",
        "email": "undefined.undefined@undefined.me",
        "phone": "+421 (914) 481-2172"
    },
    {
        "id": "58f875f8d99a0e0968a1ab21",
        "index": 46,
        "isActive": false,
        "balance": "$2,262.44",
        "age": 30,
        "name": "Holcomb",
        "surname": "Heath",
        "address": "MARTINIQUE",
        "email": "undefined.undefined@undefined.net",
        "phone": "+421 (821) 582-3525"
    },
    {
        "id": "58f875f8036c2e69d0fa12f6",
        "index": 47,
        "isActive": true,
        "balance": "$1,768.29",
        "age": 34,
        "name": "Alexander",
        "surname": "Holder",
        "address": "UZBEKISTAN",
        "email": "undefined.undefined@undefined.biz",
        "phone": "+421 (849) 477-2202"
    }
]

module.exports = function(app)
{
    var user = null;

    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/api/authentication', function (req, res, next)
    {
        console.time(`GET ${req.originalUrl}`);

        res.setHeader('Content-Type', 'text/html');

        if(req.body.j_username != 'admin' || req.body.j_password != 'admin')
        {
            res.statusCode = 401;
        }
        else
        {
            user = true;
        }

        res.end(null);

        console.timeEnd(`GET ${req.originalUrl}`);
    });

    app.use('/api/logout', function (req, res, next)
    {
        console.time(`GET ${req.originalUrl}`);

        user = null;

        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 204;

        res.end(null);

        console.timeEnd(`GET ${req.originalUrl}`);
    });

    app.use('/api/myaccount', function (req, res, next)
    {
        console.time(`GET ${req.originalUrl}`);

        var data =
        {
            login: 'mock-user',
            privileges:
            [
                'userGroup-menu',
                'logoutAction-menu',
                'samplesGroup-menu',
                'gridSample-page',
                'bootstrapSample-page',
                'commonSample-page',
                'notificationsSample-page',
                'authorizationSample-page',
                'home-page'
            ]
        };

        if(!user)
        {
            res.statusCode = 401;
        }

        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(data));

        console.timeEnd(`GET ${req.originalUrl}`);
    });

    app.use('/api/config/release', function (req, res, next)
    {
        console.time(`GET ${req.originalUrl}`);

        var data =
        {
            release: "1.0.0-server.0",
            title: "CONNECT-MOCK"
        };

        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(data));

        console.time(`GET ${req.originalUrl}`);
    });

    app.use('/api/grid-data', function (req, res, next) 
    {
        console.time(`GET ${req.originalUrl}`);

        var data = sampleData;
        var query = url.parse(req.url, true).query;

        let items = data.length;
        let last = true;

        if(query.size && query.page)
        {
            let size = parseInt(query.size);
            let page = parseInt(query.page);

            data = data.slice(page * size, (page * size) + size);
            last = items <= (page * size) + size;
        }
        
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(
        {
            content: data,
            last: last,
            totalElements: sampleData.length
        }));

        console.timeEnd(`GET ${req.originalUrl}`);
    });

    app.use('/api/data', function (req, res, next)
    {
        console.time(`GET ${req.originalUrl}`);

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({greeting: 'Hello', name: 'World'}));

        console.timeEnd(`GET ${req.originalUrl}`);
    });
};
