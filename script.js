// ---------- Default Trait Setup (with WEIRD toggle) ----------
const DEFAULT_TRAITS = [
  { key: "Character", placeholder: "e.g., Whale", include: true, weird: false },
  { key: "Body Type", placeholder: "e.g., Normal, Slim, Heavy", include: true, weird: false },
  { key: "Skin Color", placeholder: "e.g., Black, Blue, Tan", include: true, weird: false },
  { key: "Headwear", placeholder: "e.g., Chef hat, Beanie, Crown", include: true, weird: false },
  { key: "Mask", placeholder: "e.g., Oni mask, Gas mask, Kitsune, Menpo", include: true, weird: false },
  { key: "Hair", placeholder: "e.g., Black short hair, Bald", include: true, weird: false },
  { key: "Outfit", placeholder: "e.g., Chef outfit, Hoodie", include: true, weird: false },
  { key: "Back", placeholder: "e.g., Backpack, Cape, Wings", include: true, weird: false },
  { key: "Eyes", placeholder: "e.g., Angry, Calm, Laser", include: true, weird: false },
  { key: "Mouth", placeholder: "e.g., Smiling, Rose in mouth, Pipe, Leaf", include: true, weird: false },
  { key: "Accessories", placeholder: "e.g., Earring, Glasses", include: true, weird: false },
  { key: "Pose", placeholder: "e.g., Front view portrait", include: true, weird: false },
  { key: "Background Color", placeholder: "e.g., Gray, Gradient purple", include: true, weird: false }
];

// Base suggestions (expanded lightly)
const SUGGESTIONS = {
  Character: [
    "Whale","Shark","Cat","Alien","Robot","Dragon","Bear","Fox","Wolf","Tiger","Panda","Penguin","Octopus","Knight","Wizard","Ninja","Pirate",
    "Monkey","Doge","Ape","Bunny","Zombie","Vampire","Elf","Dwarf","Ghost","Skeleton","Golem","Gryphon","Phoenix","Unicorn","Mermaid",
    "Goblin","Orc","Fairy","Cyborg","Astronaut","Cowboy","Samurai","Otter","Elephant","Giraffe","Koala","Raccoon","Pigeon","Frog","Koifish",
    "Peasant","Squire","Bard","Monk","Crusader","Archer","Jester","Herald","Blacksmith","Alchemist","Plague Doctor","King","Queen","Prince","Princess",
    "Noble","Merchant","Innkeeper","Templar","Paladin","Ranger","Minotaur","Centaur","Harpy","Time traveler","Street samurai","Space marine","Mech pilot"
  ],
  "Body Type": [
    "Slime","Normal","Skeleton","Zombie","Alien","Ghost","Void","Diamond","Mutant","Demon","Angelic","Android","Mecha","Hologram","Fire","Ice","Clay","Toxic","Water","Lightning","Crystal","Shadow","Light","Plasma"
  ],
  "Skin Color": [
    // 🟤 Basic / Common tones
    "Light Beige", "Tan", "Olive", "Caramel", "Mocha", "Espresso",
    "Ebony", "Pale White", "Warm Brown", "Cool Gray", "Peach",
    "Rose", "Amber", "Sand", "Copper Brown", "Ivory", "Bronze",
    "Slate", "Charcoal", "Clay", "Black", "White", "Blue", "Teal",

    // 🌈 Rare / Fantasy tones
    "Gold", "Silver", "Platinum", "Rose Gold", "Ruby", "Emerald",
    "Sapphire", "Jade", "Amethyst", "Obsidian", "Pearl",
    "Neon", "Pastel Pink", "Pastel Mint", "Pastel Peach",
    "Pastel Lavender", "Iridescent", "Rainbow Gradient",
    "Gradient Sunset", "Translucent", "Crimson",
    "Galaxy Pattern", "Frosted Ice"
  ],
  Headwear: [
    // 👒 Classic / Everyday
    "Chef Hat", "Beanie", "Crown", "Headband", "Top Hat", "Visor", "Bandana",
    "Baseball Cap", "Fedora", "Helmet", "Sombrero", "Goggles", "Halo", "Horns",
    "Laurel Wreath", "Bucket Hat", "Beret", "Cowboy Hat", "Ushanka", "Newsboy Cap",
    "Snapback", "Trilby", "Sun Hat", "Headscarf", "Wide-Brim Hat", "None",

    // ⚔️ Medieval / Historical
    "Coif", "Sallet Helmet", "Bascinet", "Barbute", "Kettle Hat",
    "Hennin", "Wimple", "Circlet", "Feathered Cap", "Knight Visor", "Horned Helm",
    "Royal Coronet", "Crusader Helm", "Plumed Helmet", "Samurai Kabuto",

    // 🌆 Futuristic / Sci-Fi
    "Cyber Visor", "Neon Helmet", "VR Headset", "Energy Crown", "Mecha Helmet",
    "Tech Halo", "Holographic Band", "Space Pilot Helmet", "AI Interface Cap",
    "Nano Hood", "Astral Mask", "Stealth Hood",

    // 🌸 Fantasy / Magic
    "Witch Hat", "Wizard Hat", "Druid Hood", "Elven Circlet", "Crystal Crown",
    "Dragon Horns", "Angel Halo", "Demon Horns", "Fairy Garland", "Mystic Hood",
    "Phoenix Crown", "Serpent Band", "Moon Tiara",

    // 🌍 Cultural / Unique
    "Turban", "Hijab", "Pagri", "Tam O'Shanter", "Keffiyeh", "Flower Crown",
    "Straw Hat", "Tribal Headdress", "Samurai Headband", "Viking Helm",
    "Festival Mask", "Monk Hood", "Ranger Hood", "War Bonnet",

    // 🎭 Modern & Streetwear
    "Gas Mask", "Ski Mask", "Bucket Cap", "Earphones", "Headphones",
    "Biker Helmet", "Racing Helmet", "Snap Visor", "Puffer Hood", "Street Cap"
  ],
  Mask: [
    // ☣️ Modern / Tactical
    "Gas Mask", "Respirator", "Full-Face Respirator", "Rebreather", "Hazmat Mask",
    "Balaclava", "Ski Mask", "Tactical Mask", "Ballistic Mask", "SWAT Mask",
    "Paintball Mask", "Airsoft Mask", "Hockey Mask", "Goalie Mask", "Jason Mask",
    "Bandana Face Mask", "Shemagh Wrap", "Ninja Mask",

    // ⚔️ Historical / Traditional
    "Plague Doctor Mask", "Samurai Menpo", "Kabuto Face Guard", "Kendo Men",
    "Oni Mask", "Hannya Mask", "Kitsune Mask", "Tengu Mask", "Noh Mask",
    "Yokai Mask", "Kabuki Mask", "Shogun Mask", "Ronin Mask", "Katana Visor",

    // 💀 Horror / Dark Fantasy
    "Demon Mask", "Half Skull Mask", "Skull Mask", "Zombie Mask", "Vampire Mask",
    "Bone Carved Mask", "Bloodstained Mask", "Cursed Mask", "Shadow Mask",
    "Reaper Hood", "Specter Veil", "Phantom Mask",

    // 🌌 Futuristic / Sci-Fi
    "Cyber Mask", "Mecha Visor", "Neon Mask", "LED Display Mask", "Holographic Mask",
    "Stealth Mask", "Tech Filter Mask", "Augmented Reality Mask", "Android Mask",
    "Exo Helmet", "Oxygen Pod Mask", "Digital Grid Mask",

    // 🌿 Tribal / Cultural / Artistic
    "Wooden Tribal Mask", "African Tribal Mask", "Mayan Mask", "Aztec Mask",
    "Ceremonial Mask", "Festival Mask", "Spirit Mask", "Animal Spirit Mask",
    "Feathered Mask", "Crystal Mask", "Moon Mask", "Sun Mask",

    // 🌈 Special / Unique
    "Glow Mask", "Transparent Mask", "Iridescent Mask", "Metallic Mask",
    "Porcelain Mask", "Golden Mask", "Silver Mask", "Glass Mask",
    "Frozen Mask", "Molten Mask", "Pixelated Mask", "Graffiti Mask",

    // 🚫 None
    "None"
  ],
  Hair: [
    // 🧍‍♂️ Basic / Classic Styles
    "Black Short Hair", "White Long Hair", "Brown Curly Hair", "Buzz Cut", "Ponytail",
    "Afro", "Undercut", "Braids", "Long Wavy Blonde", "Short Curly Red", "Side Shave",
    "Curtain Bangs", "Wolf Cut", "Pixie Cut", "Messy Bun", "Bob Cut", "Straight Bangs",
    "Shoulder-Length Hair", "Taper Fade", "Layered Hair", "Bald",

    // 🌈 Colored / Dyed Styles
    "Pink Mohawk", "Spiky Blue Hair", "Green Tips", "Ombre Hair", "Silver Slicked Back",
    "Pastel Purple Hair", "Mint Green Hair", "Coral Pink Hair", "Lavender Waves",
    "Crimson Streaks", "Golden Blonde", "Ash Gray Hair", "Rose Gold Hair", "Ocean Blue Hair",
    "Fire Gradient Hair", "Neon Pink Hair", "Teal Ombre", "Sunset Fade Hair", "Rainbow Hair",

    // ✨ Fantasy / Mythical
    "Glowing White Hair", "Crystal Hair", "Fiery Hair", "Ice Blue Hair", "Shadow Black Hair",
    "Celestial Gradient Hair", "Galaxy Hair", "Ethereal Flowing Hair", "Moonlight Silver Hair",
    "Demon Horn Hair", "Angelic Glow Hair", "Mystic Purple Hair", "Spirit Flame Hair",
    "Translucent Hair", "Elemental Hair", "Runic Glow Hair", "Holographic Hair",

    // 🤖 Futuristic / Cyberpunk
    "Cyber Mohawk", "LED Streak Hair", "Chrome Hair", "Digital Blue Hair", "Circuit Fade",
    "Augmented Hairline", "Neon Undercut", "Holo Tips", "Data Stream Hair", "AI Core Hair",
    "Glitch Effect Hair", "Techno Braids", "Synthetic Fiber Hair",

    // 🌍 Cultural / Themed
    "Samurai Topknot", "Geisha Bun", "Viking Braids", "Celtic Knot Hair", "Native Feather Braid",
    "Tribal Locks", "Rasta Dreads", "K-Pop Style Hair", "Anime Twin Tails", "Retro 80s Perm",
    "90s Fluffy Bangs", "Classic Slick Back", "Victorian Curls", "Rockstar Shag",

    // 💫 Special / Unique
    "Space Buns", "Cloud Hair", "Firefly Glow Hair", "Liquid Metal Hair", "Frosted Ends",
    "Graffiti Hair", "Crystal Shards Hair", "Magenta Flow", "Volcanic Ash Hair",
    "Mirror Finish Hair", "Glass Fiber Hair", "Static Hair", "Starlight Hair"
  ],
  Outfit: [
    // 👕 Everyday / Modern
    "Casual Tee and Jeans", "Hoodie", "Streetwear", "Black Suit", "Business Suit",
    "Tuxedo", "Tracksuit", "Leather Jacket", "Denim Jacket", "Bomber Jacket",
    "Puffer Jacket", "Trench Coat", "Overcoat", "Raincoat", "Overalls",
    "Varsity Jacket", "Polo Shirt", "Flannel Shirt", "Windbreaker", "Casual Dress",
    "Tank Top", "Crop Top", "Cargo Pants Outfit", "Techwear Outfit",

    // ⚙️ Tactical / Utility
    "Tactical Vest", "Military Uniform", "Combat Armor", "Pilot Suit",
    "Hazmat Suit", "Lab Coat", "Engineer Jumpsuit", "Police Uniform",
    "Firefighter Gear", "Survival Outfit", "Paramedic Suit", "Explorer Outfit",
    "Desert Combat Suit", "Arctic Survival Suit",

    // ⚔️ Historical / Medieval
    "Samurai Armor", "Knight Armor", "Chainmail Hauberk", "Medieval Tunic",
    "Ninja Gi", "Pirate Coat", "Wizard Robe", "Peasant Outfit",
    "Royal Attire", "Crusader Armor", "Viking Tunic", "Squire Outfit",
    "Battle Robes", "Sellsword Gear", "Castle Guard Uniform",

    // 🌸 Cultural / Traditional
    "Kimono", "Hanbok", "Cheongsam", "Barong Tagalog", "Kurta",
    "Sari", "Tribal Attire", "Festival Costume", "Kilt", "Poncho",
    "Sombrero Outfit", "Desert Robe", "Nomad Outfit", "Ceremonial Garb",
    "Safari Outfit", "Shaman Robe",

    // 🚀 Sci-Fi / Futuristic
    "Spacesuit", "Astronaut Suit", "Cyber Armor", "Exo Suit", "Mecha Pilot Suit",
    "Holo Jacket", "Neon Techwear", "Android Frame Outfit", "Galactic Explorer Suit",
    "Stealth Operative Suit", "Energy Core Armor", "Holographic Uniform",
    "Quantum Suit", "Plasma Armor", "AI Agent Outfit", "Steampunk Attire",

    // 🧙 Fantasy / Mythic
    "Wizard Robe", "Battle Mage Armor", "Rogue Cloak", "Paladin Plate Armor",
    "Necromancer Robes", "Assassin Outfit", "Elf Ranger Suit", "Druid Garb",
    "Dark Knight Armor", "Celestial Robes", "Royal Mage Suit",
    "Crimson War Robe", "Angel Armor", "Demon Armor", "Spirit Cloak",
    "Vampire Noble Suit", "Shadow Assassin Suit", "Phoenix Cloak",

    // 🎭 Special / Unique
    "Chef Outfit", "Sports Jersey", "Pilot Uniform", "Steampunk Suit",
    "Festival Outfit", "Robot Maintenance Suit", "Mechanic Coveralls",
    "Racing Suit", "Astral Cloak", "Cosmic Suit", "Hacker Hoodie",
    "Neon Jumpsuit", "Cyber Samurai Armor", "Virtual Reality Suit",
    "Royal Space Attire", "Graffiti Jacket", "Crystal Armor",
    "Junk Hunter Outfit", "Apocalypse Survivor Gear", "Wasteland Wanderer Coat"
  ],
  Back: [
    // 🎒 Practical / Everyday
    "Backpack", "Backpack with Gadgets", "Messenger Bag", "Satchel",
    "Duffel Bag", "Sling Bag", "Utility Pack", "Rucksack",
    "Hiking Bag", "Camera Bag", "Tool Belt", "Survival Pack",
    "Sleeping Bag Roll", "Bedroll", "Scavenger Bag",

    // ⚔️ Combat / Adventure
    "Quiver", "Shield", "Katana Sheath", "Dual Sword Sheaths", "Spear Holster",
    "Crossbow", "Battle Axe Strap", "Hammer Holster", "Tactical Pack",
    "Ammo Belt", "Grenade Pack", "Sniper Case", "Rifle Sling", "Energy Blade Sheath",

    // 🧙 Fantasy / Mythic
    "Cape", "Royal Cloak", "Magic Staff", "Wizard Tome", "Crystal Wings",
    "Fire Wings", "Ice Wings", "Angel Wings", "Demon Wings",
    "Spirit Wings", "Shadow Cape", "Phoenix Wings", "Dragon Wings",
    "Mystic Orb Pack", "Floating Spellbook", "Rune Stone Pack",

    // 🚀 Futuristic / Sci-Fi
    "Jetpack", "Hoverboard", "Cyber Wings", "Energy Shield",
    "Power Core Backpack", "Nano Reactor", "Mech Backpack",
    "Holographic Cape", "Drone Pack", "Neon Jetpack",
    "Antigravity Board", "Tech Blades", "Holo Generator",
    "Gravity Stabilizer", "Exo Wing Frame",

    // 🧢 Street / Modern
    "Skateboard", "Guitar", "Electric Guitar", "Bass Guitar",
    "Boombox", "Graffiti Tank", "Spray Can Pack", "Banner Flag",
    "Flag Cape", "Streamer Backpack", "Headphones Rig",
    "Parrot", "Pet Drone", "Mini Companion Bot",

    // 🏹 Survival / Apocalyptic
    "Gas Tank", "Tool Kit", "Oxygen Tank", "Radio Antenna Pack",
    "Rope Bundle", "Scavenger Pack", "Wasteland Banner",
    "Rusty Shield", "Junk Metal Plate", "Makeshift Jetpack",
    "Power Cell Unit", "Hazmat Tank", "Canteen Harness",

    // ✨ Special / Unique
    "Back Bling", "Floating Crystals", "Holo Wings", "Digital Cape",
    "Galaxy Cloak", "Cosmic Jetpack", "Aurora Wings", "Energy Cables",
    "Neon Core Pack", "Light Beam Wings", "None"
  ],
  Eyes: [
   // 😐 Expressions / Emotion
    "Calm", "Angry", "Sad", "Happy", "Surprised", "Serious", "Sleepy",
    "Wink", "Closed", "Focused", "Determined", "Confused", "Smirk", "Shy",
    "Squinting", "Wide Open", "Side Glance", "Upward Gaze", "Tired Eyes",

    // ✨ Special Pupils / Designs
    "Bitcoin Pupils", "Dollar Pupils", "Diamond Pupils", "Starry Eyes", "Heart Pupils",
    "X-Eyes", "Cat Pupils", "Snake Pupils", "Dragon Pupils", "Galaxy Eyes",
    "Crystal Pupils", "Neon Pupils", "Fire Pupils", "Frost Pupils",
    "Cosmic Pupils", "Clock Pupils", "Yin-Yang Pupils", "Binary Pupils",
    "Infinity Pupils", "Pixel Eyes", "Holographic Pupils",

    // ⚡ Glowing / Elemental
    "Glowing", "Glowing Blue", "Glowing Red", "Glowing Green",
    "Glowing Yellow", "Glowing Purple", "Iridescent Eyes", "Radiant Eyes",
    "Lightning Eyes", "Fire Eyes", "Ice Eyes", "Wind Eyes",
    "Water Eyes", "Earth Eyes", "Solar Eyes", "Lunar Eyes",
    "Aura Eyes", "Ethereal Eyes", "Divine Eyes", "Cursed Eyes",

    // 🤖 Cyber / Futuristic
    "Laser Eyes", "Cybernetic Eyes", "Augmented Eyes", "Neon Eyes",
    "Tech Scanner", "Digital Display Eyes", "HUD Eyes", "Data Stream Eyes",
    "Infrared Eyes", "Holographic Eyes", "AI Sensor Eyes", "Drone Optic Eyes",
    "Circuit Eyes", "Matrix Eyes", "VR Eyes", "Glitch Eyes",

    // 🧙 Fantasy / Mythic
    "Heterochromia", "Serpent Eyes", "Phoenix Eyes", "Angel Eyes",
    "Demon Eyes", "Vampire Eyes", "Spirit Eyes", "Shadow Eyes",
    "Celestial Eyes", "Void Eyes", "Runic Eyes", "Time Eyes",
    "Possessed Eyes", "Ancient Eyes", "Dark Matter Eyes", "Astral Eyes",
    "Moonlight Eyes", "Sunfire Eyes", "Crystal Eyes",

    // 💀 Battle / Damage
    "1 Eye Scar", "Blind Eye", "Bandaged Eye", "Eye Patch",
    "Mechanical Eye", "Cracked Lens", "Bloody Eye", "Bruised Eye",
    "Cyber Eye Implant", "Tattooed Eye", "Scarred Gaze", "None"
  ],
  Mouth: [
    // 😀 Basic Expressions
    "Neutral", "Smiling", "Grin", "Open Smile", "Big Smile", "Small Smile",
    "Frown", "Pout", "Open", "Slight Open", "Smirk", "Tongue Out",
    "Gritted Teeth", "Serious", "Closed Lip", "Sneer", "Side Grin", "Silly Grin",
    "Shout", "Laughing", "Yawning", "Talking", "Whistling", "Lip Bite",

    // 😈 Unique / Themed
    "Cigar", "Pipe", "Toothpick", "Bubble Gum Bubble", "Rose in Mouth",
    "Leaf in Mouth", "Wheat Stem", "Straw in Mouth", "Cigarette",
    "Lollipop", "Candy Stick", "Matchstick", "Stick in Mouth", "Microphone",
    "Mask", "Bandana Mask", "Cloth Wrap", "Faceplate", "Oxygen Mask",

    // 🦷 Special / Stylized
    "Gold Grill", "Silver Grill", "Diamond Grill", "Tooth Gem",
    "Missing Tooth", "Broken Tooth", "Sharp Teeth", "Fanged Grin",
    "Bloody Fangs", "Monster Jaw", "Vampire Bite", "Zombie Jaw",
    "Skeleton Smile", "Mechanical Mouth", "Metal Jaw", "Cyber Mouth",
    "Digital Mouth", "Pixel Mouth", "Holo Mouth",

    // 🔥 Fantasy / Mythic
    "Dragon Mouth", "Demon Grin", "Angelic Smile", "Spirit Breath",
    "Fire Breath", "Ice Breath", "Poison Breath", "Shadow Mist",
    "Ghostly Smile", "Celestial Grin", "Dark Aura Mouth", "Cursed Grin",
    "Rune Mouth", "Ethereal Mouth", "Possessed Jaw", "Beast Roar",

    // 🤖 Futuristic / Apocalyptic
    "Gas Mask Mouth", "Metal Plate Mouth", "Voice Modulator",
    "Rebreather Tube", "Tech Implant Mouth", "Augmented Jaw",
    "Mechanical Filter", "Digital Synth Mouth", "Neon Mouth",
    "Hacker Mask", "Vapor Tube Mouth", "Radiation Filter",

    // 💀 Battle / Damage
    "Scarred Mouth", "Stitched Mouth", "Bandaged Mouth", "Blood Stain",
    "Cracked Jaw", "Bruised Lip", "Torn Mask", "Cyber Scar Mouth",
    "Wounded Mouth", "Bite Mark", "None"
  ],
  Accessories: [
    // 💎 Basic / Everyday
    "Earring", "Necklace", "Bracelet", "Bracelets", "Ring", "Watch",
    "Chain", "Nose Ring", "Piercings", "Anklet", "Scarf", "Necktie",
    "Bowtie", "Pins", "Armband", "Headphones", "Gloves", "Bandages",
    "Tattoo", "Arm Tattoo", "Neck Tattoo", "Shoulder Tattoo",

    // 🕶️ Style / Fashion
    "Glasses", "Sunglasses", "Aviators", "Round Glasses", "Square Glasses",
    "Retro Glasses", "Cyber Visor", "Monocle", "Eye Patch", "Goggles",
    "VR Headset", "Headband with Charm", "Hair Clip", "Earpiece", "Pierced Ear Chain",

    // ⚙️ Tech / Futuristic
    "Tech Visor", "Neon Earpiece", "Data Chip Necklace", "Power Glove",
    "Augmented Arm", "Digital Bracelet", "Laser Watch", "Cyber Chain",
    "Neon Glasses", "Nano Tattoo", "Holo Bracelet", "AI Interface Band",
    "Energy Ring", "HUD Lens", "Hacker Device", "Shoulder Drone",

    // ⚔️ Combat / Apocalyptic
    "Ammo Belt", "Grenade Pin", "Dog Tags", "Bandolier", "Tactical Pouch",
    "Bullet Necklace", "Gas Mask Strap", "Wrist Wraps", "Fingerless Gloves",
    "Survival Compass", "Radio Earpiece", "Scavenger Bracelet",
    "Rusty Chain", "Utility Strap", "Shoulder Pad", "Wasteland Gear",

    // 🧙 Fantasy / Mythic
    "Magic Amulet", "Crystal Necklace", "Elven Earring", "Demon Ring",
    "Fairy Wings Brooch", "Ancient Talisman", "Spirit Bracelet",
    "Enchanted Chain", "Phoenix Pendant", "Dragon Scale Charm",
    "Mystic Rune Tattoo", "Vampire Brooch", "Moon Pendant",
    "Holy Cross Necklace", "Dark Sigil", "Energy Crystal Ring",

    // 🌍 Cultural / Unique
    "Beaded Necklace", "Shell Pendant", "Tribal Tattoo", "Prayer Beads",
    "Cultural Scarf", "Silk Ribbon", "Festival Band", "Flower Lei",
    "Henna Tattoo", "Traditional Charm", "Gold Bangle", "Feather Pendant",

    // 🌈 Special / Unique
    "Holo Necklace", "Crystal Earrings", "LED Chain", "Floating Halo Ring",
    "Neon Cables", "Digital Pendant", "Glowing Bracelet",
    "Quantum Chain", "Glass Charm", "Meteorite Ring", "Galaxy Pendant",
    "Asteroid Shard Necklace", "Starlight Accessory", "None"
  ],
  Pose: [
    "Front view portrait",
    "Portrait slightly facing left",
    "Portrait slightly facing right",
    "Side view (profile) left",
    "Side view (profile) right",
    "3/4 view left (common in anime style)",
    "3/4 view right",
    "Looking upward (heroic look)",
    "Looking downward (mysterious pose)",
    "Over-the-shoulder look",
    "(Customized)"
  ],
  "Background Color": [
    "Gray","Gradient purple","Pastel blue","Neon green","Warm orange","Deep navy","Lavender","Teal gradient","Sunset gradient","Nebula","Pastel mint","Pastel peach","Dark gradient","City skyline","Retro sun","Aurora","Galaxy","Smoke"
  ],
  additionaltraits: [
    "neon rim light","cyberpunk glow","vaporwave palette","holographic sheen","toon-shaded","pixel highlights","gold foil sparkle","misty fog","studio softbox lighting","bokeh background","specular highlights",
    "ambient occlusion","global illumination","film grain","tilt-shift","depth of field","anamorphic bokeh","lens flare","cinematic color grading","HDR","8k resolution"
  ]
};

// Weird suggestions per trait (triggered when WEIRD is checked)
const WEIRD_SUGGESTIONS = {
  Character: [
    "Glitch entity","Headless knight","Shadow with eyes","Mannequin come alive","Pixelated ghost","Melted wax figure","Marionette puppet","Hollow suit","Faceless noble","Eyeball beast"
  ],
  "Body Type": [
    "Liquid slime with bones","Crystalline fractal body","Glitched segmented body","Smoke silhouette","Inflatable vinyl body","Porcelain cracked body","Vines and thorns body"
  ],
  "Skin Color": [
    "Oil-slick rainbow","Static TV noise","Moldy moss","Cracked lava","Transparent jelly","Galaxy void","Rust patina"
  ],
  Headwear: [
    "Crown of living snakes","Floating halo of eyes","Paper bag head","Bird nest hat","Teacup hat","Miniature house","Upside-down cap"
  ],
  Mask: [
    "Porcelain doll mask","Gas mask with flowers","CRT TV screen mask","Mirror shard mask","Mosaic faceplate","Tape-wrapped face"
  ],
  Hair: [
    "Hair made of flames","Noodle hair","Glitch pixel hair","Cloud puff hair","Vine and flower hair","Tentacle hair","Wireframe hair"
  ],
  Outfit: [
    "Mismatched armor pieces","Inside-out tuxedo","Patchwork quilt coat","Hazmat ballgown","Origami paper suit","Transparent raincoat of confetti","Caution tape outfit"
  ],
  Back: [
    "Mechanical spine","Jar of eyeballs","Cuckoo clock","Floating radio","Backpack of whispering books","Paper wings","Neon cable bundle"
  ],
  Eyes: [
    "Cyclops","Crying blood","Button eyes","Empty sockets with light","Spiral hypnosis eyes","Upside-down eyes","Stitched eyelids (closed)","Starry void eyes","Glitch scanline eyes"
  ],
  Mouth: [
    "Zipper mouth","Stitched mouth","Too-wide jagged smile","Black void mouth","Detachable mouth","Incense smoke mouth","Clockwork teeth"
  ],
  Accessories: [
    "Floating magnets halo","Key to nowhere","Glove with eyes","Umbrella indoors","Broken pocketwatch","Rune stones","Tangled earphones","Compass that spins"
  ],
  "Background Color": [
    "Glitch grid","Static noise","Endless hallway","Escher stairs","Rotating halo pattern","Ink spill gradient","Old CRT scanlines","Fractal swirl"
  ],
  additionaltraits: [
    // 🎨 Basic / Minimalist
    "Gray", "White", "Black", "Beige", "Cream", "Off White",
    "Pastel Blue", "Pastel Mint", "Pastel Peach", "Pastel Pink",
    "Pastel Yellow", "Soft Violet", "Sky Blue", "Warm Orange", "Cool Gray",
    "Dark Gray", "Deep Navy", "Lavender", "Teal Gradient", "Gradient Purple",

    // 🌇 Retro / Aesthetic
    "Retro Sun", "Sunset Gradient", "City Skyline", "Neon Grid",
    "Vaporwave Gradient", "Pink and Cyan Fade", "80s City Glow",
    "Synthwave Horizon", "Neon Street", "Arcade Lights",
    "Purple Neon Alley", "Futuristic Tunnel",

    // ☣️ Apocalyptic / Wasteland
    "Dust Storm", "Radiation Glow", "Cracked Earth", "Burnt Orange",
    "Toxic Green Mist", "Abandoned City", "Smog Sky", "Ruined City",
    "Ash Cloud", "Industrial Fog", "Smoke", "Rusty Metal",
    "Faded Billboard", "Wasteland Dusk",

    // ⚡ Futuristic / Sci-Fi
    "Neon Green", "Cyber Blue", "Holographic Gradient", "Digital Grid",
    "Energy Field", "Laser Purple", "Electric Yellow", "Data Stream",
    "AI Core Light", "Matrix Rain", "Tech Circuit Glow", "Chrome Gradient",
    "Neon Pulse", "Binary Fade", "Quantum Light",

    // 🧙 Fantasy / Cosmic
    "Galaxy", "Nebula", "Aurora", "Starlit Sky", "Magic Mist",
    "Celestial Glow", "Lunar Eclipse", "Solar Flare", "Mystic Fog",
    "Crystal Cave", "Dreamscape", "Ethereal Mist", "Spirit Realm",
    "Void Energy", "Astral Burst",

    // 🌿 Nature / Elemental
    "Forest Canopy", "Ocean Depths", "Sandy Dunes", "Mountain Dawn",
    "Volcanic Glow", "Tropical Sunset", "Icy Peaks", "Rainforest Mist",
    "River Reflection", "Desert Storm", "Windy Plains", "Frozen Lake",

    // 🌀 Special / Rare
    "Glitch Background", "Fractal Waves", "Holo Spectrum",
    "Glass Shatter", "Radiant Aura", "Particle Swirl", "Rainbow Fog",
    "Prismatic Gradient", "Energy Surge", "Quantum Storm",
    "Dimensional Rift", "Black Hole", "Supernova",
    "Eclipse Gradient", "Cosmic Dust", "Infinite Loop"
  ]
};

// Prefer plain backgrounds for randomization
const PLAIN_BACKGROUNDS = [
  "plain pastel light blue","plain baby blue","plain powder blue","plain pastel mint","plain mint green","plain pistachio","plain sage",
  "plain seafoam","plain pastel turquoise","plain pastel cyan","plain pastel pink","plain blush pink","plain rose","plain mauve","plain lavender",
  "plain lilac","plain periwinkle","plain orchid","plain pastel peach","plain apricot","plain salmon","plain coral","plain butter yellow","plain lemon",
  "plain pale gold","plain champagne","plain cream","plain ivory","plain off-white","plain beige","plain sand","plain tan","plain khaki","plain taupe",
  "plain pistachio green","plain pastel lime","plain pale green","plain dusty rose","plain terracotta light","plain pastel orange","plain pastel violet",
  "plain pastel magenta","plain pastel red","plain mint cream","plain honeydew","plain seashell","plain linen"
];

// ---------- Helpers ----------
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));

const TRAIT_USAGE = {};
const normNameKey = (name) => String(name || "").toLowerCase();
const normValueKey = (value) => String(value || "").toLowerCase().trim();

const storage = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
};

function uniqueArray(arr) {
  const seen = new Set();
  const out = [];
  for (const v of arr || []) {
    const k = normValueKey(v);
    if (!seen.has(k)) { seen.add(k); out.push(v); }
  }
  return out;
}
function getCombinedSuggestions(name) {
  const k = (name in SUGGESTIONS) ? name : ((name || "").toLowerCase() in SUGGESTIONS ? (name || "").toLowerCase() : null);
  return uniqueArray(k ? SUGGESTIONS[k] : []);
}
function getWeirdSuggestions(name) {
  const k = (name in WEIRD_SUGGESTIONS) ? name : ((name || "").toLowerCase() in WEIRD_SUGGESTIONS ? (name || "").toLowerCase() : null);
  return uniqueArray(k ? WEIRD_SUGGESTIONS[k] : []);
}
function recordTraitUsage(name, value) {
  const nk = normNameKey(name), vk = normValueKey(value);
  if (!nk || !vk) return;
  TRAIT_USAGE[nk] = TRAIT_USAGE[nk] || {};
  TRAIT_USAGE[nk][vk] = (TRAIT_USAGE[nk][vk] || 0) + 1;
}
function pickWeighted(opts, weights) {
  const t = (weights || []).reduce((a,b) => a + b, 0) || 0;
  let r = Math.random() * (t || 1);
  for (let i = 0; i < opts.length; i++) {
    r -= weights[i];
    if (r <= 0) return opts[i];
  }
  return opts[opts.length - 1];
}
function pickDiverse(name, opts) {
  const usage = TRAIT_USAGE[normNameKey(name)] || {};
  const weights = (opts || []).map(v => 1 / (1 + (usage[normValueKey(v)] || 0)));
  return pickWeighted(opts, weights);
}
function sampleFromPool(name, pool, k = 6) {
  const opts = Array.isArray(pool) ? pool.slice() : [];
  const out = [];
  const used = new Set();
  while (out.length < Math.min(k, opts.length)) {
    const c = pickDiverse(name, opts);
    const key = normValueKey(c);
    if (!used.has(key)) { used.add(key); out.push(c); }
  }
  return out;
}

// ---------- Theme filtering helpers ----------
function getSelectedTheme() {
  return storage.get("selectedTheme", "");
}
function setSelectedTheme(v) {
  storage.set("selectedTheme", v || "");
}
function updateThemeStats() {
  const statsEl = qs("#theme-stats");
  if (!statsEl) return;
  const sel = getSelectedTheme();
  if (!sel) {
    statsEl.textContent = "All themes";
    return;
  }
  const rows = qsa('[data-row="trait"]');
  const lines = [];
  for (const r of rows) {
    const name = qs('[data-key="name"]', r).textContent.trim();
    const weird = !!qs(".trait-weird", r)?.checked;
    let pool = weird ? getWeirdSuggestions(name) : getCombinedSuggestions(name);
    if (typeof window.filterValuesByTheme === "function") {
      const themed = window.filterValuesByTheme(name, pool, sel);
      if (themed && themed.length) pool = themed;
    }
    lines.push(`${name}: ${pool.length}`);
  }
  statsEl.innerHTML = lines.map(l => `<div>${l}</div>`).join("");
}
function updateAllThemeAffectedUI() {
  const rows = qsa('[data-row="trait"]');
  for (const r of rows) renderSuggestionsForRow(r);
  updateThemeStats();
}
function initThemeControls() {
  const select = qs("#theme-select");
  if (!select) return;
  // Populate options once
  if (window.THEMES && select.options.length <= 1) {
    for (const t of window.THEMES) {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      select.appendChild(opt);
    }
  }
  // Restore saved selection
  const saved = getSelectedTheme();
  if (saved && Array.from(select.options).some(o => o.value === saved)) {
    select.value = saved;
  }
  select.addEventListener("change", () => {
    setSelectedTheme(select.value || "");
    updateAllThemeAffectedUI();
  });
}

// ---------- UI: Trait rows ----------
function renderSuggestionsForRow(row) {
  try {
    const name = qs('[data-key="name"]', row).textContent.trim();
    const input = qs(".trait-value", row);
    const cont = qs('[data-sug="combined"]', row);
    const weird = !!qs(".trait-weird", row)?.checked;
    const selectedTheme = getSelectedTheme();
    let pool = weird ? getWeirdSuggestions(name) : getCombinedSuggestions(name);
    // Prefer themed pool if available (fallback to unfiltered if none)
    if (selectedTheme && typeof window.filterValuesByTheme === "function") {
      const themed = window.filterValuesByTheme(name, pool, selectedTheme);
      if (themed && themed.length) pool = themed;
    }
    if (!cont) return;
    cont.innerHTML = "";
    for (const v of sampleFromPool(name, pool, 6)) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.textContent = v;
      chip.addEventListener("click", () => { input.value = v; });
      cont.appendChild(chip);
    }
    // Update matches badge
    const matchesBadge = qs("[data-matches]", row);
    if (matchesBadge) {
      const span = matchesBadge.querySelector(".matches-count");
      if (span) span.textContent = String(pool.length || 0);
    }
    const sugContainer = qs("[data-suggestions]", row);
    if (sugContainer) sugContainer.style.display = pool.length ? "" : "none";
  } catch {}
}

function makeTraitRow({ key, include = true, value = "", placeholder = "", weird = false }) {
  const row = document.createElement("div");
  row.className = "trait";
  row.dataset.row = "trait";
  row.innerHTML = `
    <div class="top">
      <div class="left">
        <input type="checkbox" class="trait-include" ${include ? "checked" : ""} title="Include this trait" />
        <label class="trait-name label" data-key="name">${key}</label>
        <label class="badge"><input type="checkbox" class="trait-weird" ${weird ? "checked" : ""}/> WEIRD</label>
        <button class="btn small" data-action="rename" title="Rename trait">Rename</button>
      </div>
      <div class="badge">Included: <span class="include-state">${include ? "Yes" : "No"}</span></div>
      <div class="badge" data-matches>Matches: <span class="matches-count">0</span></div>
    </div>
    <div class="right">
      <input type="text" class="trait-value" placeholder="${placeholder || "Enter value..."}" value="${value || ""}" />
      <button class="btn small" data-action="shuffle" title="Shuffle suggestions">Suggest</button>
    </div>
    <div class="suggestions" data-suggestions>
      <div class="chips" data-sug="combined"></div>
    </div>
  `;
  const includeCb = qs(".trait-include", row);
  const includeState = qs(".include-state", row);
  includeCb.addEventListener("change", () => { includeState.textContent = includeCb.checked ? "Yes" : "No"; });
  qs('[data-action="rename"]', row).addEventListener("click", () => {
    const nameLabel = qs('[data-key="name"]', row);
    const newName = prompt("Enter new trait name:", nameLabel.textContent.trim());
    if (newName && newName.trim()) {
      nameLabel.textContent = newName.trim();
      qs(".trait-value", row).placeholder = (SUGGESTIONS[newName]?.[0]) || "Enter value...";
      renderSuggestionsForRow(row);
      updateThemeStats();
    }
  });
  qs('[data-action="shuffle"]', row).addEventListener("click", () => { renderSuggestionsForRow(row); updateThemeStats(); });
  qs(".trait-weird", row)?.addEventListener("change", () => { renderSuggestionsForRow(row); updateThemeStats(); });
  renderSuggestionsForRow(row);
  return row;
}

function renderDefaultTraits() {
  const elTraits = qs("#traits");
  elTraits.innerHTML = "";
  const saved = storage.get("traitsData", null);
  let initial = (saved && Array.isArray(saved)) ? saved : DEFAULT_TRAITS;
  // Ensure new default "Pose" trait exists even if old layout was saved
  if (Array.isArray(initial) && !initial.some(t => (t.key || t.name) === "Pose")) {
    initial = [...initial, { key: "Pose", placeholder: "e.g., Front view portrait", include: true, weird: false }];
  }
  for (const t of initial) elTraits.appendChild(makeTraitRow(t));
}

function collectTraits() {
  const elTraits = qs("#traits");
  const rows = qsa('[data-row="trait"]', elTraits);
  const traits = [];
  for (const r of rows) {
    const include = !!qs(".trait-include", r)?.checked;
    const weird = !!qs(".trait-weird", r)?.checked;
    const name = qs('[data-key="name"]', r).textContent.trim();
    const value = qs(".trait-value", r).value.trim();
    traits.push({ name, value, include, weird });
  }
  storage.set("traitsData", traits.map(t => ({ key: t.name, placeholder: "", include: t.include, weird: !!t.weird })));
  return traits;
}

function fillExample(includeAdditionalRandom = false) {
  const elTraits = qs("#traits");
  elTraits.innerHTML = "";
  const example = [
    { key: "Character", value: "Whale", include: true },
    { key: "Body Type", value: "normal", include: true },
    { key: "Skin Color", value: "black", include: true },
    { key: "Headwear", value: "chef hat", include: true },
    { key: "Hair", value: "black short hair", include: true },
    { key: "Outfit", value: "chef outfit", include: true },
    { key: "Back", value: "backpack", include: true },
    { key: "Eyes", value: "Angry", include: true },
    { key: "Mouth", value: "Smiling", include: true },
    { key: "Accessories", value: "earring", include: true },
    { key: "Pose", value: "Front view portrait", include: true },
    { key: "Background Color", value: "gray", include: true }
  ];
  for (const t of example) elTraits.appendChild(makeTraitRow(t));
  if (includeAdditionalRandom) {
    elTraits.appendChild(makeTraitRow({ key: "additionaltraits", value: "random", include: true, weird: false }));
  }
}

// ---------- Randomization / Generation ----------
const HAIR_COLOR_PREFIXES = [
  "Black","Brown","Dark brown","Light brown","Blonde","Platinum blonde","Dirty blonde","Red","Auburn","Ginger","Copper","Burgundy","Mahogany",
  "White","Grey","Silver","Blue","Navy blue","Sky blue","Teal","Turquoise","Cyan","Green","Mint green","Emerald","Pink","Hot pink","Pastel pink","Rose gold",
  "Purple","Violet","Lavender","Magenta","Orange","Peach","Gold","Golden"
];
const HAIR_COLOR_HINTS = [
  "black","brown","blonde","platinum","dirty blonde","red","auburn","ginger","copper","burgundy","mahogany","white","grey","gray","silver","gold","golden",
  "blue","navy","sky blue","teal","turquoise","cyan","green","mint","emerald","pink","rose gold","magenta","purple","violet","lavender","orange","peach",
  "rainbow","two-tone","balayage","ombre","bleached","bleach"
];
function hairHasColor(s) {
  const x = String(s || "").toLowerCase();
  return HAIR_COLOR_HINTS.some(h => x.includes(h));
}
function ensureHairColor(style) {
  const s = String(style || "").trim();
  const low = s.toLowerCase();
  if (!s) return s;
  if (low === "none" || low.includes("bald")) return s;
  if (hairHasColor(s)) return s;
  const color = pickDiverse("hair color", HAIR_COLOR_PREFIXES);
  return `${color} ${s}`;
}

function maybeRandomizeValue(name, value, weird = false) {
  const v = (value || "").trim();
  if (v && v.toLowerCase() !== "random") return value;

  // Prefer weird pool if WEIRD on
  if (weird) {
    const pool = getWeirdSuggestions(name);
    if (pool.length) return pickDiverse(name, pool);
  }

  const low = String(name || "").toLowerCase();
  if (low === "background color" || low === "background") {
    if (PLAIN_BACKGROUNDS.length) return pickDiverse(name, PLAIN_BACKGROUNDS);
  }
  if (low === "hair") {
    let pool = getCombinedSuggestions(name);
    // Apply theme if available
    const sel = getSelectedTheme();
    if (sel && typeof window.filterValuesByTheme === "function") {
      const themed = window.filterValuesByTheme(name, pool, sel);
      if (themed && themed.length) pool = themed;
    }
    const style = pool.length ? pickDiverse(name, pool) : "short hair";
    return ensureHairColor(style);
  }
  // Generic categories: prefer themed suggestions if available
  let pool = getCombinedSuggestions(name);
  const sel = getSelectedTheme();
  if (sel && typeof window.filterValuesByTheme === "function") {
    const themed = window.filterValuesByTheme(name, pool, sel);
    if (themed && themed.length) pool = themed;
  }
  if (pool.length) return pickDiverse(name, pool);
  const fallback = ["metallic","matte","glossy","holographic","pastel","neon","textured","retro","modern","minimalist"];
  return pickDiverse(name, fallback);
}

function fillTraitsHeuristic(traits) {
  return traits.map(t => {
    const v = (t.value || "").trim();
    if (!t.include) return { ...t };
    if (!v || v.toLowerCase() === "random") {
      return { ...t, value: maybeRandomizeValue(t.name, "random", !!t.weird) };
    }
    return { ...t };
  });
}

function prefillMissingTraits(traits) {
  const out = traits.map(t => ({ ...t }));
  const filledMap = {};
  for (let i = 0; i < out.length; i++) {
    const t = out[i];
    if (!t.include) continue;
    const v = (t.value || "").trim();
    if (!v || v.toLowerCase() === "random") {
      const val = maybeRandomizeValue(t.name, "random", !!t.weird);
      out[i].value = val;
      filledMap[t.name] = val;
    }
  }
  return { traits: out, filledMap };
}

function enforceMaskRule(traits, updateUI = false) {
  try {
    const mask = traits.find(t => t.name && t.name.toLowerCase() === "mask");
    if (!mask) return traits;
    const val = (mask.value || "").trim().toLowerCase();
    const hasMask = val && val !== "none" && val !== "no mask" && val !== "random";
    if (!hasMask) return traits;

    const setNone = (traitName) => {
      const tr = traits.find(t => t.name && t.name.toLowerCase() === traitName);
      if (tr) {
        tr.value = "NONE";
        tr.include = true;
        if (updateUI) {
          const rows = qsa('[data-row="trait"]');
          for (const r of rows) {
            const n = qs('[data-key="name"]', r).textContent.trim().toLowerCase();
            if (n === traitName) {
              const input = qs(".trait-value", r);
              if (input) input.value = "NONE";
              const includeCb = qs(".trait-include", r);
              if (includeCb && !includeCb.checked) {
                includeCb.checked = true;
                const includeState = qs(".include-state", r);
                if (includeState) includeState.textContent = "Yes";
              }
            }
          }
        }
      }
    };
    setNone("eyes");
    setNone("mouth");
  } catch {}
  return traits;
}

// Single prompt (non-AI)
function generateSinglePrompt(traits) {
  const included = traits.filter(t => t.include && t.value);
  if (!included.length) return "No traits selected.";
  const dict = Object.fromEntries(included.map(t => [t.name.toLowerCase(), t.value]));
  const parts = [];
  if (dict["character"]) parts.push(`${dict["character"]}`);
  if (dict["body type"]) parts.push(`${dict["body type"]} body type`);
  if (dict["skin color"]) parts.push(`${dict["skin color"]} skin`);
  if (dict["headwear"] && String(dict["headwear"]).trim().toLowerCase() !== "none") parts.push(`wearing ${dict["headwear"]}`);
  if (dict["hair"]) parts.push(dict["hair"]);
  if (dict["outfit"]) parts.push(dict["outfit"]);
  if (dict["back"]) parts.push(`back: ${dict["back"]}`);
  if (dict["eyes"]) parts.push(`eyes: ${dict["eyes"]}`);
  if (dict["mouth"]) parts.push(`mouth: ${dict["mouth"]}`);
  if (dict["accessories"]) parts.push(`accessories: ${dict["accessories"]}`);
  if (dict["background color"]) parts.push(`background color: ${dict["background color"]}`);
  for (const t of included) {
    const lower = t.name.toLowerCase();
    if (!["character","body type","skin color","headwear","hair","outfit","back","eyes","mouth","accessories","background color"].includes(lower)) {
      parts.push(`${t.name}: ${t.value}`);
    }
  }
  return parts.join(", ");
}

const normalizePrompt = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

// ---------- AI / Settings ----------
const UNIQUE = {
  styles: ["comic-book ink","cel shaded","oil painting","watercolor wash","pixel art","low-poly 3D","isometric","line engraving","chalk pastel","marker sketch","vector flat","airbrushed","grunge texture","sticker style","holographic foil"],
  moods: ["epic","whimsical","serene","ominous","playful","mysterious","energetic","dreamlike","noir","retro","futuristic","vaporwave","cyberpunk"],
  lighting: ["rim light","softbox key","backlit glow","neon fill","warm sunset","cool moonlight","studio 3-point","volumetric rays","top-down hard light","bounce-lit"],
  camera: ["portrait framing","medium shot","close-up","Dutch angle","wide angle","telephoto compression","eye-level","low-angle hero shot"],
  materials: ["matte finish","glossy highlights","metallic sheen","soft fabric","brushed steel","porcelain glaze","velvet"],
  backgrounds: ["gradient wash","graphic pattern","paper texture","bokeh orbs","abstract shapes","radial burst","halftone dots"],
  render: ["high detail","clean composition","subtle shading","sharp lineart","smooth anti-alias","color-graded","film grain"]
};
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
function pickN(arr, n) {
  const copy = arr.slice();
  const out = [];
  for (let i = 0; i < n && copy.length; i++) out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  return out;
}
function buildUniquenessCue() {
  const parts = [];
  parts.push(...pickN(UNIQUE.styles, 1));
  parts.push(...pickN(UNIQUE.moods, 1));
  parts.push(...pickN(UNIQUE.lighting, 1));
  if (Math.random() < 0.6) parts.push(pick(UNIQUE.camera));
  if (Math.random() < 0.6) parts.push(pick(UNIQUE.materials));
  if (Math.random() < 0.6) parts.push(pick(UNIQUE.backgrounds));
  parts.push(pick(UNIQUE.render));
  return parts.join(", ");
}

function loadSettings() {
  const apiBase = qs("#api-base")?.value?.trim() || "https://openrouter.ai/api/v1";
  const apiKey = qs("#api-key")?.value?.trim() || "";
  const model = qs("#api-model")?.value?.trim() || "google/gemini-2.5-flash-lite-preview-09-2025";
  const concurrency = Math.max(1, Math.min(8, parseInt(qs("#concurrency")?.value || "3", 10)));
  const useAI = !!qs("#use-ai")?.checked;
  const allowFallback = !!qs("#allow-fallback")?.checked;
  const randomizeRandom = !!qs("#randomize-random")?.checked;
  const decoupleTraits = (qs("#decouple-traits")?.checked) ?? true;
  storage.set("settings", { apiBase, model, concurrency, useAI, allowFallback, randomizeRandom, decoupleTraits, hasKey: !!apiKey });
  return { apiBase, apiKey, model, concurrency, useAI, allowFallback, randomizeRandom, decoupleTraits };
}
function restoreSettings() {
  const s = storage.get("settings", null);
  if (!s) return;
  if (qs("#api-base")) qs("#api-base").value = s.apiBase || "https://openrouter.ai/api/v1";
  if (qs("#api-model")) qs("#api-model").value = s.model || "google/gemini-2.5-flash-lite-preview-09-2025";
  if (qs("#concurrency")) qs("#concurrency").value = s.concurrency || 3;
  if (qs("#use-ai")) qs("#use-ai").checked = !!s.useAI;
  if (qs("#allow-fallback")) qs("#allow-fallback").checked = !!s.allowFallback;
  if (qs("#randomize-random")) qs("#randomize-random").checked = s.randomizeRandom ?? true;
  const dc = qs("#decouple-traits");
  if (dc) dc.checked = s.decoupleTraits ?? true;
}

async function generateAIForRow(traits, { apiBase, apiKey, model, decoupleTraits }, uniquenessCue) {
  const included = traits.filter(t => t.include && t.value);
  const asObj = {};
  for (const t of included) asObj[t.name] = t.value;

  const messages = [
    {
      role: "system",
      content: [
        "You are an expert prompt engineer for generative image models.",
        "Given finalized NFT trait values, write ONE vivid, comma-separated prompt (60-120 words).",
        "Do NOT change the provided trait values; keep them consistent. No trait labels, no quotes, no preambles.",
        decoupleTraits ? "Treat each trait independently and do not try to harmonize or replace them for compatibility. Keep unusual or contradictory combinations as-is (e.g., cowboy hat with astronaut suit)." : ""
      ].filter(Boolean).join(" ")
    },
    {
      role: "user",
      content: [
        "Finalized traits JSON:",
        JSON.stringify(asObj, null, 2),
        "",
        "Uniqueness cues (influence style/mood/lighting/composition but keep traits consistent):",
        uniquenessCue || "",
        "",
        "Return ONLY strict JSON with shape:",
        "{",
        '  "prompt": "One line prompt, no trait labels or quotes, no preamble"',
        "}"
      ].join("\n")
    }
  ];

  const url = apiBase.replace(/\/+$/, "") + "/chat/completions";
  const hdrs = {
    "Content-Type": "application/json",
    ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
  };
  if (/openrouter\.ai/i.test(apiBase)) {
    try {
      let referer = location.origin || "";
      if (!/^https?:\/\//i.test(referer)) referer = "https://local.file";
      hdrs["HTTP-Referer"] = referer;
      hdrs["X-Title"] = "NFT Traits AI Prompt Generator";
    } catch {
      hdrs["HTTP-Referer"] = "https://local.file";
      hdrs["X-Title"] = "NFT Traits AI Prompt Generator";
    }
  }
  const resp = await fetch(url, {
    method: "POST",
    headers: hdrs,
    body: JSON.stringify({ model, messages, temperature: 0.9, max_tokens: 400 })
  });
  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`AI error ${resp.status}: ${text.slice(0, 400)}`);
  }
  const data = await resp.json();
  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error("AI returned empty content");

  let jsonText = content;
  const match = content.match(/\{[\s\S]*\}/);
  if (match) jsonText = match[0];
  let parsed;
  try { parsed = JSON.parse(jsonText); } catch { throw new Error("AI did not return valid JSON"); }
  let prompt = typeof parsed.prompt === "string" ? parsed.prompt : "";
  prompt = prompt.replace(/\s+/g, " ").trim();
  return { prompt };
}

function heuristicPrompt(traits, uniquenessCue) {
  const included = traits.filter(t => t.include && t.value);
  const parts = [];
  const dict = Object.fromEntries(included.map(t => [t.name.toLowerCase(), t.value]));
  const char = dict["character"] || "character";
  const body = dict["body type"] ? `${dict["body type"]} body` : "";
  const skin = dict["skin color"] ? `${dict["skin color"]} skin` : "";
  const headwear = dict["headwear"] && String(dict["headwear"]).trim().toLowerCase() !== "none" ? `wearing ${dict["headwear"]}` : "";
  const hair = dict["hair"] || "";
  const outfit = dict["outfit"] || "";
  const back = dict["back"] ? `back item: ${dict["back"]}` : "";
  const eyes = dict["eyes"] ? `eyes ${dict["eyes"]}` : "";
  const mouth = dict["mouth"] ? `mouth ${dict["mouth"]}` : "";
  const accessories = dict["accessories"] ? `accessories ${dict["accessories"]}` : "";
  const bg = dict["background color"] ? `background ${dict["background color"]}` : "";

  const extras = included
    .filter(t => !["character","body type","skin color","headwear","hair","outfit","back","eyes","mouth","accessories","background color"].includes(t.name.toLowerCase()))
    .map(t => t.value)
    .filter(Boolean)
    .join(", ");

  parts.push(`${char}, ${body}, ${skin}, ${headwear}, ${hair}, ${outfit}`);
  parts.push(`${back}, ${eyes}, ${mouth}, ${accessories}, ${bg}`);
  if (extras) parts.push(extras);
  if (uniquenessCue) parts.push(uniquenessCue);
  parts.push("high detail, crisp line art, subtle shading, studio lighting, volumetric light, soft shadows, vibrant yet balanced colors, clean composition, centered subject");
  return parts.join(", ").replace(/\s+,/g, ",").replace(/,+\s*,/g, ", ").replace(/,\s*,/g, ", ").replace(/\s{2,}/g, " ").trim();
}

// CSV helpers
function buildFullPrompt(names, traits) {
  const dict = {};
  for (const t of traits) if (t && t.include) dict[t.name] = t.value || "";
  const parts = [];
  for (const name of names) {
    const v = (dict[name] || "").trim();
    if (v === "" || v.toLowerCase() === "none") continue;
    if (String(name).toLowerCase() === "character") {
      parts.push(v + " and just Change");
    } else {
      parts.push(name + ": " + v);
    }
  }
  return parts.join(", ");
}
function csvEscape(v) {
  if (v === null || v === undefined) return "";
  const s = String(v);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}
function excelColumnLabel(n) {
  // 1-based column index to Excel letters
  let s = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    s = String.fromCharCode(65 + rem) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}
function buildFullPromptFormula(includedNames, rowIndex) {
  // id is column 1 (A), includedNames start at column 2 (B)
  const getRef = (name) => {
    const idx = includedNames.indexOf(name);
    if (idx === -1) return "";
    const col = 2 + idx; // 1-based column index
    return excelColumnLabel(col) + String(rowIndex);
  };
  const parts = [];

  // Character prefix (only if present and non-empty)
  const charRef = getRef("Character");
  if (charRef) {
    parts.push(`IF(LEN(TRIM(${charRef}))=0,"",${charRef} & " and just Change")`);
  }

  // Other traits with conditional inclusion (skip empty or "none")
  for (const name of includedNames) {
    if (name === "Character") continue;
    const ref = getRef(name);
    if (!ref) continue;
    const label = String(name).replace(/"/g, '""'); // escape double quotes for Excel string literal
    parts.push(`IF(OR(LEN(TRIM(${ref}))=0,LOWER(TRIM(${ref}))="none"),"",", ${label}: " & ${ref})`);
  }

  if (!parts.length) return "";
  // Join as Excel concatenation starting with '='
  return "=" + parts.join(" & ");
}
function toCSV(rows) {
  if (!rows.length) return "";
  const headers = Object.keys(rows[0]);
  const lines = [];
  lines.push(headers.map(csvEscape).join(","));
  for (const row of rows) lines.push(headers.map(h => csvEscape(row[h])).join(","));
  return lines.join("\n");
}
function downloadCSV(filename, csv) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Logging/progress
function log(msg, logBox) {
  const time = new Date().toLocaleTimeString();
  logBox.textContent += `[${time}] ${msg}\n`;
  logBox.scrollTop = logBox.scrollHeight;
}
function setProgress(done, total, progressBar) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  progressBar.style.width = pct + "%";
}

// Bulk orchestration (sequential to keep UI simple)
async function bulkGenerate() {
  const progressBar = qs("#progress-bar");
  const logBox = qs("#log");
  logBox.textContent = "";
  setProgress(0, 1, progressBar);

  const count = Math.max(1, parseInt(qs("#bulk-count")?.value || "1", 10));
  const settings = loadSettings();
  const baseTraits = collectTraits();
  enforceMaskRule(baseTraits, false);

  if (settings.useAI && !settings.apiKey && !settings.allowFallback) {
    log("AI mode enabled but no API key; fallback not allowed. Aborting.", logBox);
    alert("No API key provided. Disable AI mode or enable heuristic fallback, or enter an API key.");
    return;
  }

  const includedNames = baseTraits.filter(t => t.include).map(t => t.name);
  const seenPrompts = new Set();
  const results = [];

  // Track exact trait-combination duplicates for this batch
  const seenCombos = new Set();

  // Traits that originated as empty or 'random' are considered mutable
  const mutableNames = new Set(
    baseTraits
      .filter(t => t.include && (!t.value || String(t.value).trim().toLowerCase() === "random"))
      .map(t => t.name)
  );

  // Preference order when perturbing to avoid duplicates
  const PERTURB_ORDER = [
    "Background Color","Pose","Accessories","Mouth","Eyes","Back",
    "Headwear","Hair","Outfit","Skin Color","Body Type"
  ];

  const nName = (s) => String(s || "").toLowerCase();
  const nVal = (s) => String(s || "").toLowerCase().trim();

  function computeSignatureFromArray(traitsArr) {
    // Build signature using includedNames in fixed order
    const map = Object.fromEntries(traitsArr.map(t => [t.name, t.value]));
    return includedNames.map(name => nVal(map[name] || "")).join("||");
  }

  function ensureUniqueCombination(traitsArr) {
    // Try to ensure this combination is unique; may mutate traitsArr in place
    let attempts = 0;
    let signature = computeSignatureFromArray(traitsArr);
    if (!seenCombos.has(signature)) {
      seenCombos.add(signature);
      return { working: traitsArr, duplicate: false };
    }

    // Determine candidates to tweak
    const candidates = includedNames.slice();
    // Prefer mutable names first
    candidates.sort((a,b) => {
      const am = mutableNames.has(a) ? 0 : 1;
      const bm = mutableNames.has(b) ? 0 : 1;
      if (am !== bm) return am - bm;
      const ai = PERTURB_ORDER.indexOf(a);
      const bi = PERTURB_ORDER.indexOf(b);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

    while (attempts < 20) {
      // Pick next candidate in round-robin across attempts
      const candidate = candidates[attempts % Math.max(1, candidates.length)];
      const idx = traitsArr.findIndex(t => t.name === candidate);
      if (idx !== -1) {
        const cur = traitsArr[idx];
        const curNorm = nVal(cur.value);
        // Allow changing only if mutable or as fallback when nothing mutable exists
        const allowChange = mutableNames.size > 0 ? mutableNames.has(candidate) : true;
        if (allowChange) {
          let tries = 0;
          while (tries < 10) {
            const newVal = maybeRandomizeValue(cur.name, "random", !!cur.weird);
            if (nVal(newVal) && nVal(newVal) !== curNorm) {
              traitsArr[idx] = { ...cur, value: newVal };
              break;
            }
            tries++;
          }
          enforceMaskRule(traitsArr, false);
        }
      }

      signature = computeSignatureFromArray(traitsArr);
      if (!seenCombos.has(signature)) {
        seenCombos.add(signature);
        return { working: traitsArr, duplicate: false };
      }
      attempts++;
    }

    // Still duplicate after perturbations
    return { working: traitsArr, duplicate: true };
  }

  for (let i = 0; i < count; i++) {
    try {
      let working = baseTraits.map(t => ({ ...t }));
      let prompt = "";
      const uniquenessCue = buildUniquenessCue();
      let rowDuplicate = false;

      if (settings.useAI && settings.apiKey) {
        const pre = prefillMissingTraits(working);
        working = pre.traits;
        enforceMaskRule(working, false);
        const uniq = ensureUniqueCombination(working);
        working = uniq.working;
        rowDuplicate = uniq.duplicate;
        const ai = await generateAIForRow(working, settings, uniquenessCue);
        prompt = ai.prompt;
        log(`AI ✓ Row ${i + 1}`, logBox);
      } else {
        working = fillTraitsHeuristic(working);
        enforceMaskRule(working, false);
        const uniq = ensureUniqueCombination(working);
        working = uniq.working;
        rowDuplicate = uniq.duplicate;
        prompt = heuristicPrompt(working, uniquenessCue);
        if (settings.useAI && !settings.apiKey && settings.allowFallback) {
          log(`AI key missing → Heuristic fallback used for Row ${i + 1}`, logBox);
        } else {
          log(`Heuristic ✓ Row ${i + 1}`, logBox);
        }
      }

      // de-dup simple
      let norm = normalizePrompt(prompt);
      let attempt = 0;
      while (seenPrompts.has(norm) && attempt < 2) {
        prompt = heuristicPrompt(working, buildUniquenessCue());
        norm = normalizePrompt(prompt);
        attempt++;
      }
      seenPrompts.add(norm);

      const row = { id: i + 1 };
      for (const name of includedNames) {
        const match = working.find(t => t.name === name);
        row[name] = match ? (match.value || "") : "";
        if (row[name]) recordTraitUsage(name, row[name]);
      }
      row["DUPLICATE"] = rowDuplicate ? "DUPLICATE" : "";
      // Use an Excel/Sheets formula so "Full Prompt" auto-updates when trait cells change
      // Row index in the spreadsheet is (header row = 1), so data starts at 2
      row["Full Prompt"] = buildFullPromptFormula(includedNames, i + 2);
      row["AI Prompt"] = prompt;
      results.push(row);

      setProgress(i + 1, count, progressBar);
    } catch (err) {
      log(`Error Row ${i + 1}: ${err.message}`, logBox);
    }
  }

  // ----- Rarity ranking (per-batch) -----
  const total = results.length;
  if (total > 0) {
    const runUsage = {};
    const pctMap = {};
    const nName = (s) => String(s || "").toLowerCase();
    const nVal  = (s) => String(s || "").toLowerCase().trim();

    // 1) Count occurrences from this batch only
    for (const row of results) {
      for (const name of includedNames) {
        const rawVal = row[name];
        if (!rawVal) continue;
        const nk = nName(name);
        const vk = nVal(rawVal);
        if (!vk) continue;
        runUsage[nk] = runUsage[nk] || {};
        runUsage[nk][vk] = (runUsage[nk][vk] || 0) + 1;
      }
    }

    // 2) Convert to percentage map
    for (const nk of Object.keys(runUsage)) {
      pctMap[nk] = {};
      for (const vk of Object.keys(runUsage[nk])) {
        pctMap[nk][vk] = (runUsage[nk][vk] / total) * 100;
      }
    }

    // 3) Score each row
    const scored = results.map((row, idx) => {
      let score = 0;
      for (const name of includedNames) {
        const rawVal = row[name];
        if (!rawVal) continue;
        const nk = nName(name);
        const vk = nVal(rawVal);
        const pct = (pctMap[nk] && pctMap[nk][vk]) || 0;
        score += pct;
      }
      return { idx, id: row.id || (idx + 1), score };
    });

    // 4) Rank ascending by score, tie-break by id
    scored.sort((a, b) => (a.score - b.score) || (a.id - b.id));
    for (let rank = 1; rank <= scored.length; rank++) {
      const { idx } = scored[rank - 1];
      results[idx]["RANKING"] = rank; // Rarest = 1
      // If you want to include the numeric score in the CSV, uncomment below:
      // results[idx]["RarityScore"] = Number(scored[rank - 1].score.toFixed(6));
    }
  }
  // --------------------------------------

  const csv = toCSV(results);
  if (csv) {
    downloadCSV("nft_traits_prompts.csv", csv);
    log("CSV downloaded.", logBox);
  } else {
    log("No data to export.", logBox);
  }
  setProgress(count, count, progressBar);
}

// DOM ready wiring
document.addEventListener("DOMContentLoaded", () => {
  renderDefaultTraits();
  restoreSettings();
  initThemeControls();
  updateAllThemeAffectedUI();

  qs("#add-trait-btn")?.addEventListener("click", () => {
    const name = prompt("New trait name (e.g., additionaltraits):");
    if (!name) return;
    const elTraits = qs("#traits");
    elTraits.appendChild(
      makeTraitRow({
        key: name.trim(),
        include: true,
        weird: false,
        placeholder: SUGGESTIONS[name]?.[0] || "Enter value..."
      })
    );
    updateAllThemeAffectedUI();
  });

  qs("#fill-example-btn")?.addEventListener("click", () => {
    const addExtra = confirm("Also add additionaltraits: random?");
    fillExample(addExtra);
    updateAllThemeAffectedUI();
  });

  qs("#generate-prompt-btn")?.addEventListener("click", async () => {
    const settings = loadSettings();
    let traits = collectTraits();
    enforceMaskRule(traits, true);

    const singleOutput = qs("#single-output");
    const logBox = qs("#log");

    if (settings.useAI && settings.apiKey) {
      try {
        const pre = prefillMissingTraits(traits);
        traits = pre.traits;
        // Reflect filled values into UI
        const rows = qsa('[data-row="trait"]');
        for (const r of rows) {
          const name = qs('[data-key="name"]', r).textContent.trim();
          if (pre.filledMap[name]) {
            const input = qs(".trait-value", r);
            if (input) input.value = pre.filledMap[name];
          }
        }
        enforceMaskRule(traits, true);
        const ai = await generateAIForRow(traits, settings, buildUniquenessCue());
        if (singleOutput) singleOutput.value = ai.prompt;
      } catch (err) {
        log(`Single AI generation failed: ${err.message} → using heuristic.`, logBox);
        const filled = fillTraitsHeuristic(traits);
        enforceMaskRule(filled, true);
        const rows = qsa('[data-row="trait"]');
        for (const r of rows) {
          const name = qs('[data-key="name"]', r).textContent.trim();
          const input = qs(".trait-value", r);
          const match = filled.find(t => t.name === name);
          if (match) {
            const cur = (input.value || "").trim();
            if (!cur || cur.toLowerCase() === "random") input.value = match.value;
          }
        }
        if (singleOutput) singleOutput.value = generateSinglePrompt(filled);
      }
    } else {
      const filled = fillTraitsHeuristic(traits);
      enforceMaskRule(filled, true);
      // reflect, but do not overwrite non-empty
      const rows = qsa('[data-row="trait"]');
      for (const r of rows) {
        const name = qs('[data-key="name"]', r).textContent.trim();
        const input = qs(".trait-value", r);
        const match = filled.find(t => t.name === name);
        if (match) {
          const cur = (input.value || "").trim();
          if (!cur || cur.toLowerCase() === "random") input.value = match.value;
        }
      }
      if (singleOutput) singleOutput.value = generateSinglePrompt(filled);
    }
  });

  qs("#bulk-generate-btn")?.addEventListener("click", () => {
    bulkGenerate().catch(err => {
      const logBox = qs("#log");
      log(`Bulk generation failed: ${err.message}`, logBox);
      alert("Bulk generation failed: " + err.message);
    });
  });
});
