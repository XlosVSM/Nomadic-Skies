// Lists for items
const sandpaperTypes = [
    "arid",
    "blue",
    "brown",
    "coral",
    "foamy",
    "green",
    "mars",
    "mineral",
    "moon",
    "pink",
    "quartzite",
    "red_arid",
    "soulless",
    "venus",
    "violet",
    "windswept"
];

const recyclables = [
    "irons_spellbooks:affinity_ring",
    "irons_spellbooks:cast_time_ring",
    "irons_spellbooks:concentration_amulet",
    "irons_spellbooks:conjurers_talisman",
    "irons_spellbooks:cooldown_ring",
    "irons_spellbooks:emerald_stoneplate_ring",
    "irons_spellbooks:fireward_ring",
    "irons_spellbooks:frostward_ring",
    "irons_spellbooks:heavy_chain_necklace",
    "irons_spellbooks:poisonward_ring"
];

const pasteTypes = [
    'blaze_powder',
    'redstone',
    'sugar'
];

const keptAPArrows = [
    "blaze",
    "frost"
];

const removedAPArrows = [
    "challenge",
    "diamond",
    "prismarine",
    "quartz",
    "slime",
    "training"
];

const removedMBAAArrows = [
    "bamboo",
    "blaze_rod",
    "cactus",
    "coal",
    "dragon_breath",
    "dripstone",
    "copper",
    "echo",
    "egg",
    "ender_pearl",
    "fire_charge",
    "flint_and_steel",
    "glow_ink_sac",
    "gold",
    "ice",
    "ink_sac",
    "iron",
    "ladder",
    "lapis",
    "lightning_rod",
    "nether_quartz",
    "nether_star",
    "paper",
    "redstone",
    "shear",
    "shulker_shell",
    "smoking",
    "snowball",
    "tnt",
    "water_bottle"
]

const arrowFixes = [
    [
        "archers_paradox:explosive",
        "minecraft:tnt"
    ],
    [
        "archers_paradox:ender",
        "minecraft:ender_pearl"
    ],
    [
        "archers_paradox:phantasmal",
        "minecraft:sculk"
    ],
    [
        "archers_paradox:shulker",
        "minecraft:compass"
    ],
    [
        "archers_paradox:blaze",
        "minecraft:fire_charge"
    ],
    [
        "archers_paradox:frost",
        "minecraft:packed_ice"
    ],
    [
        "archers_paradox:lightning",
        "minecraft:lightning_rod"
    ],
    [
        "archers_paradox:verdant",
        "minecraft:bone_meal"
    ],
    [
        "archers_paradox:spore",
        "#forge:mushrooms"
    ],
    [
        "more_bows_and_arrows:amethyst",
        "minecraft:amethyst_shard"
    ],
    [
        "more_bows_and_arrows:bone",
        "minecraft:bone"
    ],
    [
        "more_bows_and_arrows:diamond",
        "minecraft:diamond"
    ],
    [
        "more_bows_and_arrows:emerald",
        "minecraft:emerald"
    ],
    [
        "more_bows_and_arrows:firework",
        "minecraft:firework_rocket"
    ],
    [
        "more_bows_and_arrows:netherite",
        "minecraft:netherite_ingot"
    ],
    [
        "more_bows_and_arrows:obsidian",
        "minecraft:obsidian"
    ],
    [
        "more_bows_and_arrows:slimeball",
        "minecraft:slime_ball"
    ]
]

ServerEvents.recipes(
    event => {
        // Updated compass progression
        event.remove({output: 'explorerscompass:explorerscompass'});

        event.shaped(
            'explorerscompass:explorerscompass',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:ender_eye',
                B: 'minecraft:obsidian',
                C: 'naturescompass:naturescompass'
            }
        )

        // Recycling Iron's Spellbooks items
        recyclables.forEach(
            recyclable => {
                event.recipes.farmersdelight.cooking(
                    recyclable,
                    "irons_spellbooks:arcane_salvage", // output
                    10, // exp
                    400, // cookTime
                    // "minecraft:bowl", // container
                );
            }
        )

        // Removing duplicate arcane essence recipe
        event.remove({output: 'irons_spellbooks:arcane_essence'});
        
        event.shapeless('irons_spellbooks:arcane_essence', 'arcaneessenceblock:essence_sack');
        
        // Added Create: Wizardry's recipes
        event.recipes.farmersdelight.cutting(
            "minecraft:sculk",
            "#forge:tools/knives",
            [
                Item.of("minecraft:echo_shard").withChance(0.25)
            ]
        );

        event.recipes.farmersdelight.cooking(
            [
                "minecraft:lapis_lazuli",
                "minecraft:lapis_lazuli",
                "minecraft:amethyst_shard",
                "minecraft:amethyst_shard",
                "minecraft:emerald"
            ],
            Item.of("irons_spellbooks:arcane_essence", 7), // output
            10, // exp
            200 // cookTime
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:blaze_powder",
                "minecraft:blaze_powder",
                "minecraft:netherite_scrap",
            ],
            Item.of("irons_spellbooks:cinder_essence", 7), // output
            50, // exp
            1000 // cookTime
        );

        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:ink_sac",
                "minecraft:ink_sac",
                "minecraft:ink_sac"
            ],
            Item.of("irons_spellbooks:common_ink", 3), // output
            10, // exp
            200, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:glow_ink_sac",
                "irons_spellbooks:common_ink",
                "irons_spellbooks:common_ink"
            ],
            Item.of("irons_spellbooks:uncommon_ink", 3), // output
            20, // exp
            400, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "minecraft:lapis_lazuli",
                "irons_spellbooks:uncommon_ink",
                "irons_spellbooks:uncommon_ink"
            ],
            Item.of("irons_spellbooks:rare_ink", 3), // output
            30, // exp
            600, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:blood_vial",
                "irons_spellbooks:rare_ink",
                "irons_spellbooks:rare_ink"
            ],
            Item.of("irons_spellbooks:epic_ink", 3), // output
            40, // exp
            800, // cookTime
            "minecraft:glass_bottle", // container
        );
        event.recipes.farmersdelight.cooking(
            [
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:arcane_essence",
                "irons_spellbooks:lightning_bottle",
                "irons_spellbooks:epic_ink",
                "irons_spellbooks:epic_ink"
            ],
            Item.of("irons_spellbooks:legendary_ink", 3), // output
            100, // exp
            2400, // cookTime
            "minecraft:glass_bottle", // container
        );

        // Removing duplicate arrows
        removedAPArrows.forEach(
            arrow => {
                event.remove({output: `archers_paradox:${arrow}_arrow`});
            }
        )

        removedMBAAArrows.forEach(
            arrow => {
                event.remove({output: `more_bows_and_arrows:${arrow}_arrow`});
            }
        )

        // Added a recipe for the ruined book
        event.shaped(
            'irons_spellbooks:ruined_book',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:amethyst_shard',
                B: 'minecraft:sculk',
                C: 'minecraft:book'
            }
        );

        // Removing unused Alex's Mobs items
        event.remove({output: 'alexsmobs:echolocator'});
        event.remove({output: 'alexsmobs:endolocator'});
        event.remove({output: 'alexsmobs:pupfish_locator'});
        event.remove({output: 'alexsmobs:shark_tooth_arrow'});
        event.remove({output: 'alexsmobs:shield_of_the_deep'});

        // Updating Tool Upgrades' paste recipe
        pasteTypes.forEach(
            pasteType => {
                event.remove({output: `toolupgrades:paste_${pasteType}`});

                event.shaped(
                    `toolupgrades:paste_${pasteType}`,
                    [
                        'ABA',
                        'BCB',
                        'ABA'
                    ],
                    {
                        A: `minecraft:${pasteType}`,
                        B: 'minecraft:amethyst_shard',
                        C: '#forge:water_bottles'
                    }
                )
            }
        )

        event.remove({output: 'toolupgrades:paste_bone'});
        event.remove({output: 'toolupgrades:paste_clay'});
        event.remove({output: 'toolupgrades:paste_glowstone'});
        event.remove({output: 'toolupgrades:paste_gun_powder'});
        event.remove({output: 'toolupgrades:paste_ink'});
        event.remove({output: 'toolupgrades:paste_lapis'});
        event.remove({output: 'toolupgrades:paste_slime'});

        event.shaped(
            'toolupgrades:paste_bone',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:bone_meal',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_clay',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:clay_ball',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_glowstone',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:glowstone_dust',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_gun_powder',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:gunpowder',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_ink',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:ink_sac',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_lapis',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: 'minecraft:lapis_lazuli',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )
        event.shaped(
            'toolupgrades:paste_slime',
            [
                'ABA',
                'BCB',
                'ABA'
            ],
            {
                A: '#forge:slimeballs',
                B: 'minecraft:amethyst_shard',
                C: '#forge:water_bottles'
            }
        )

        // Removing unused sandpaper
        sandpaperTypes.forEach(
            sandpaperType => {
                event.remove({output: `createsandpapers:${sandpaperType}_sand_paper`});
            }
        )

        // Make wool able to be turned into feathers
        event.recipes.farmersdelight.cutting(
            '#minecraft:wool',
            '#forge:tools/knives',
            [
                Item.of('minecraft:feather', 2)
            ]
        );

        // Update new arrow recipes
        arrowFixes.forEach(
            ([arrow, keyItem]) => {
                event.remove({output: `${arrow}_arrow`});

                event.shaped(
                    Item.of(`${arrow}_arrow`, 8),
                    [
                        'AAA',
                        'ABA',
                        'AAA'
                    ],
                    {
                        A: 'minecraft:arrow',
                        B: keyItem
                    }
                );
            }
        )

        event.remove({output: 'more_bows_and_arrows:flint_arrow'});

        event.shaped(
            Item.of('more_bows_and_arrows:flint_arrow', 4),
            [
                ' A ',
                ' A ',
                ' A '
            ],
            {
                A: 'minecraft:flint'
            }
        );
    }
)

ServerEvents.tags(
    'item',
    event => {
        // Removing unused Alex's Mobs items
        event.remove('alexsmobs:animal_dictionary_ingredient', 'alexsmobs:cachalot_whale_tooth');

        // Removing unused sandpaper
        sandpaperTypes.forEach(
            sandpaperType => {
                event.remove('create:sandpaper', `createsandpapers:${sandpaperType}_sand_paper`);
            }
        )
    }
);

MoreJSEvents.villagerTrades(
    event => {
        // Updates levitation stone trading requirements
        event.removeModdedTrades(
            'minecraft:cartographer',
            5
        );

        event.addTrade(
            'minecraft:cartographer',
            5,
            [
                'explorerscompass:explorerscompass',
                Item.of('minecraft:amethyst_shard', 15)
            ],
            'castle_in_the_sky:levitation_stone'
        );

        // Removing duplicate arrows
        event.removeModdedTrades(
            'minecraft:fletcher',
            1
        );
        event.removeModdedTrades(
            'minecraft:fletcher',
            2
        );
        event.removeModdedTrades(
            'minecraft:fletcher',
            3
        );
        event.removeModdedTrades(
            'minecraft:fletcher',
            4
        );

        keptAPArrows.forEach(
            arrow => {
                event.addTrade(
                    'minecraft:fletcher',
                    3,
                    [
                        Item.of('minecraft:emerald', 3),
                        Item.of('minecraft:arrow', 4)
                    ],
                    `archers_paradox:${arrow}_arrow`
                );
            }
        )
    }
)
