// Game Info
setGameInfo({
    name: "GrindCraft: Bread Expansion",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/system/pack.png",                    // Link or path to an icon image for your game!
    ID: "GrindcraftBreadCo",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    "Oak log": {image: "images/Oak Log.png", },
    "Stick": {image: "images/Stick.png",},
    "Planks": {image: "images/Planks.png",},
    "Wooden sword": {image: "images/Oak Sword.png",},
    "Goop": {image: "images/Goop.png",},
    "Whisp": {image: "images/Whisp.png",},
    "Passport": {image: "images/Passport.png",},
    "Wooden cup": {image: "images/Cup.png",},
    "Water": {image: "images/Water.png",},
    "String": {image: "images/String.png",},
    "Fishing Rod": {image: "images/Fishing Rod.png",},
    "Krashanka Fish": {image: "images/Krashanka Fish.png",},

    
    "Goop Contract": {image: "images/Contracts/GoopContract.png",},
});

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "Whispering Kingdom",
    image: "images/areas/WhisperingKingdom.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
        name: "Contract Office",
        unlocked: false,
        auto: [],                         // List of items that will auto-grind this grind
        background: "images/grinds/ContractOffice.png",
        resources: [
            {
                id: "Contract",
                image: "images/Contracts/EmptyContract.png",
                time: [["Passport", 20],],
                probability: 100,
                customResources: {
                    random: [
                        {
                            name:"Goop Contract",
                            amount: 1,
                            probability: 50,
                        },
                    ]
                },
            },
        ]
    },
        {
            name: "Outside",
            unlocked: true,
            auto: [],                         // List of items that will auto-grind this grind
            background: "images/grinds/WhispOutside.png",
            resources: [
                {
                    id: "Stick",
                    time: [["", 0.2]],
                    probability: 50,
                },
                {
                    id: "Oak log",
                    time: [["", 0.6]],
                    probability: 50,
                },
                {
                    id: "Water",
                    time: [["Wooden cup", 0.5]],
                    probability: 20,
                },
                {
                    id: "Goop Monster",
                    image: "images/Icons/Goop Monster.png",
                    time: [["Wooden sword", 1, ]],
                    probability: 20,
                    customResources: {
                        random: [
                            {
                                name:"Goop",
                                amount: 2,
                                probability: 40,
                            },
                            {
                                name:"Goop",
                                amount: 3,
                                probability: 30,
                            },
                            {
                                name:"Whisp",
                                amount: 1,
                                probability: 10,
                            },
                        ]
                    },
                },
            ]
        },
        {
            name: "Town Square",
            unlocked: false,
            auto: [],                         // List of items that will auto-grind this grind
            background: "images/grinds/WhispTown.png",
            resources: [
                {
                    id: "Beg",
                    image: "images/Icons/Beg.png",
                    time: [["Wooden cup", 5], ["", 10],],
                    probability: 90,
                    customResources: {
                        random: [
                            {
                                name:"Whisp",
                                amount: 1,
                                probability: 40,
                            },
                            {
                                name:"Whisp",
                                amount: 2,
                                probability: 30,
                            },
                            {
                                name:"Whisp",
                                amount: 3,
                                probability: 30,
                            },
                        ]
                    },
                },
            ]
        },
        {
            name: "Port",
            unlocked: false,
            auto: [],                         // List of items that will auto-grind this grind
            background: "images/grinds/WhispPort.png",
            resources: [
                {
                    id: "Krashanka Fish",
                    time: [["Fishing Rod", 0.5]],
                    probability: 50,
                },
            ]
        },
    ],

    crafts: [
        {
            name: "Whisp",
            displayName: "Contract: Goop",
            displayImage: "images/Contracts/GoopContract.png",
            desc: "2 Whisps - Collect 20 Goop",
            type: "craft",
            amount: 2,
            showNumber: false,
            cost: [["Goop Contract", 1], ["Goop", 20]],
        },
        {
            name: "Oak log",
            desc: "Used to craft planks",
            type: "display",
            cost: [["Oak log", 0]],
        },
        {
            name: "Stick",
            desc: "Used to craft planks",
            type: "display",
            cost: [["Stick", 0]],
        },
        {
            name: "Planks",
            desc: "Used to make a crafting table",
            type: "craft",    
            amount: 4,                                                     // Used if you get more than one of the item
            cost: [["Oak log", 1]],
        },
        {
            name: "Wooden sword",
            desc: "Used to Defend Yourself",
            type: "craft",                                                   // Used if you get more than one of the item
            cost: [["Stick", 3],["Planks", 3] ],
        },
        {
            name: "Goop",
            desc: "Remnants of a decaying Disease. A good substitute for Glue.",
            type: "display",                                                   // Used if you get more than one of the item
            cost: [["Goop", 0]],
        },
        {
            name: "Whisp",
            desc: "Required to Trade for Goods",
            type: "display",
            cost: [["Whisp", 0]],
        },
        {
            name: "Passport",
            desc: "Required to Get inside The Whispered Kingdom",
            type: "craft",
            unlockGrinds: ["Town Square", "Contract Office"],
            cost: [["Whisp", 5]],
            message: "Welcome back to Whispering Kingdom, Spyros..."
        },
        {
            name: "Wooden cup",
            desc: "Decreases begging Time",
            type: "craft",
            cost: [["Goop", 8], ["Planks", 1], ["Stick", 3], ["Passport", 0]],
        },
        {
            name: "Water",
            desc: "Yummy...?",
            type: "display",
            cost: [["Water", 0]],
        },
        {
            name: "String",
            desc: "",
            type: "display",
            unlockGrinds: ["Port"],
            cost: [["String", 0]],
        },
        {
            name: "Fishing Rod",
            desc: "Used to fish in bodies of water.",
            type: "craft",
            cost: [["Stick", 2], ["String", 3]],
        },
        {
            name: "Krashanka Fish",
            desc: "Quite uncommon in this area specifically. Quite a nice Catch!",
            type: "display",
            cost: [["Krashanka Fish", 0]],
        },
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}