(function () {
  // Full themes list
  const THEMES = [
    "Medieval",
    "Renaissance",
    "Royal / Noble",
    "Knight / Warrior",
    "Pirate",
    "Samurai / Ronin",
    "Viking",
    "Ancient Greek / Roman",
    "Ancient Egyptian",
    "Old West / Cowboy",
    "Japanese Traditional",
    "Korean Hanbok Style",
    "Chinese Imperial",
    "Filipino Tribal / Barong",
    "Arabian Desert",
    "Indian Mythic",
    "African Tribal",
    "Native Warrior",
    "European Classic",
    "Tropical Islander",
    "Magical / Sorcerer",
    "Fairy / Elf",
    "Dark Fantasy",
    "Celestial / Divine",
    "Elemental (Fire, Water, Earth, Air)",
    "Demon / Cursed",
    "Angelic",
    "Dragonborn",
    "Spirit Realm",
    "Crystal / Mystic",
    "Futuristic Tech",
    "Cyberpunk",
    "Mecha",
    "AI / Android",
    "Space Explorer",
    "Neon Future",
    "Virtual Reality",
    "Holographic",
    "Bio-Tech",
    "Digital Warrior",
    "Wasteland Survivor",
    "Mutant / Radiation",
    "Bunker Gear",
    "Post-War Soldier",
    "Scavenger",
    "Rusted Industrial",
    "Toxic Zone",
    "Rebel Resistance",
    "Desert Nomad",
    "Outlaw",
    "Streetwear",
    "Gang / Mafia",
    "Hacker",
    "City Rebel",
    "Hip-Hop / Rap Style",
    "Graffiti Culture",
    "Skater",
    "Urban Tech",
    "Dystopian Underground",
    "Cyber Street",
    "80’s Retro",
    "90’s Oldschool",
    "Punk Rock",
    "Disco / Glam",
    "Grunge",
    "Vintage Military",
    "Retro Arcade",
    "Classic Pop Culture",
    "Y2K Neon",
    "Steampunk",
    "Jungle Explorer",
    "Forest Tribe",
    "Arctic Expedition",
    "Desert Wanderer",
    "Ocean Diver",
    "Mountain Survivor",
    "Hunter / Tracker",
    "Druid / Nature Spirit",
    "Nomad",
    "Wildlands",
    "Royalty / Aristocrat",
    "Business Elite",
    "Fashionista",
    "Cyber Couture",
    "Celebrity Style",
    "Gala / Red Carpet",
    "Futuristic Suit",
    "Elegant / Noble",
    "Minimalist Luxe",
    "Designer Techwear",
    "Cursed Hybrid",
    "Heroic / Superpower",
    "Festival / Celebration",
    "Ritual / Cult",
    "Fantasy-Meets-Tech",
    "Alien Civilization",
    "Cyber-Tribal Fusion",
    "Apocalyptic Samurai",
    "Junk World / Scrap Gear",
    "AI Deity"
  ];

  // Flexible, keyword-based rules that map trait values to themes
  const RULES = [
    // Samurai / Ronin / Japanese
    { category: "Outfit", match: /(samurai|ronin|ninja|menpo|kabuto|kimono|gi)\b/i, themes: ["Samurai / Ronin", "Japanese Traditional"] },
    { category: "Headwear", match: /(kabuto|menpo|samurai|ronin|ninja)\b/i, themes: ["Samurai / Ronin", "Japanese Traditional"] },
    { category: "Mask", match: /(menpo|noh|oni|kitsune|tengu)\b/i, themes: ["Japanese Traditional"] },
    { category: "Character", match: /(samurai|ronin|ninja)\b/i, themes: ["Samurai / Ronin", "Japanese Traditional"] },

    // Pirate
    { category: "Outfit", match: /pirate|tricorn/i, themes: ["Pirate"] },
    { category: "Headwear", match: /tricorn/i, themes: ["Pirate"] },
    { category: "Back", match: /parrot/i, themes: ["Pirate"] },
    { category: "Character", match: /pirate/i, themes: ["Pirate"] },

    // Knight / Medieval / Royal
    { category: "Outfit", match: /(knight|chainmail|hauberk|plate|medieval|tunic|crusader|templar|squire)\b/i, themes: ["Knight / Warrior", "Medieval"] },
    { category: "Headwear", match: /(crown|circlet|bascinet|sallet|barbute|kettle hat|coif|hennin|wimple)\b/i, themes: ["Royal / Noble", "Medieval"] },
    { category: "Mask", match: /plague doctor/i, themes: ["Medieval", "Dark Fantasy"] },
    { category: "Character", match: /(knight|crusader|paladin)\b/i, themes: ["Knight / Warrior", "Medieval"] },

    // Magical / Dark Fantasy
    { category: "Outfit", match: /(wizard|sorcerer|mage|robe|spell)\b/i, themes: ["Magical / Sorcerer", "Dark Fantasy"] },

    // Viking
    { category: "Outfit", match: /viking/i, themes: ["Viking"] },
    { category: "Headwear", match: /viking helmet/i, themes: ["Viking"] },
    { category: "Character", match: /viking/i, themes: ["Viking"] },

    // Ancient Greek / Roman
    { category: "Headwear", match: /laurel|wreath/i, themes: ["Ancient Greek / Roman"] },
    { category: "Outfit", match: /toga|roman|greek/i, themes: ["Ancient Greek / Roman"] },

    // Futuristic, Space, Cyber
    { category: "Outfit", match: /(astronaut|space\s*suit|spacesuit|pilot suit|space)/i, themes: ["Space Explorer", "Futuristic Tech"] },
    { category: "Back", match: /jetpack|hoverboard/i, themes: ["Futuristic Tech"] },
    { category: "Outfit", match: /(cyber|techwear|android|neon|hologram|mecha|ai|cyberpunk)/i, themes: ["Cyberpunk", "Futuristic Tech", "Neon Future", "AI / Android", "Mecha"] },
    { category: "Character", match: /(astronaut|cyborg|android|mech)/i, themes: ["Space Explorer", "Futuristic Tech", "AI / Android", "Mecha"] },

    // Post-apoc / Toxic
    { category: "Outfit", match: /(hazmat|toxic|radiation|wasteland|scavenger)/i, themes: ["Toxic Zone", "Wasteland Survivor", "Post-War Soldier", "Scavenger"] },
    { category: "Mask", match: /(gas mask|respirator|hazmat)/i, themes: ["Toxic Zone", "Wasteland Survivor", "Post-War Soldier"] },

    // Steampunk
    { category: "Outfit", match: /steampunk/i, themes: ["Steampunk"] },

    // Regional / Cultural
    { category: "Outfit", match: /(kimono|yukata)/i, themes: ["Japanese Traditional"] },
    { category: "Outfit", match: /(hanbok)/i, themes: ["Korean Hanbok Style"] },
    { category: "Outfit", match: /(cheongsam|qipao|imperial|dragon robe)/i, themes: ["Chinese Imperial"] },
    { category: "Outfit", match: /(barong|tribal)/i, themes: ["Filipino Tribal / Barong"] },
    { category: "Outfit", match: /(cowboy|western|old west|cowboy hat)/i, themes: ["Old West / Cowboy"] },
    { category: "Outfit", match: /(arabian|desert|nomad)/i, themes: ["Arabian Desert", "Desert Nomad"] },

    // Street / Business
    { category: "Outfit", match: /(streetwear|hoodie|tracksuit|leather jacket|denim jacket|bomber jacket)/i, themes: ["Streetwear", "Urban Tech", "City Rebel", "Hacker"] },
    { category: "Outfit", match: /(business suit|tuxedo|black suit)/i, themes: ["Business Elite", "Elegant / Noble", "Royalty / Aristocrat"] },

    // Nature / Fantasy races
    { category: "Outfit", match: /(druid|nature|forest|tribe)/i, themes: ["Druid / Nature Spirit", "Forest Tribe"] },
    { category: "Character", match: /(elf|fairy)/i, themes: ["Fairy / Elf"] },

    // Wildcard generic rules (apply to any category)
    { category: "*", match: /samurai|ronin|ninja/i, themes: ["Samurai / Ronin", "Japanese Traditional"] },
    { category: "*", match: /pirate/i, themes: ["Pirate"] },
    { category: "*", match: /knight|crusader|templar|chainmail|medieval/i, themes: ["Knight / Warrior", "Medieval"] },
    { category: "*", match: /wizard|sorcerer|mage/i, themes: ["Magical / Sorcerer"] },
    { category: "*", match: /viking/i, themes: ["Viking"] },
    { category: "*", match: /astronaut|spacesuit|space/i, themes: ["Space Explorer", "Futuristic Tech"] },
    { category: "*", match: /hazmat|gas mask|respirator|toxic|radiation/i, themes: ["Toxic Zone", "Wasteland Survivor", "Post-War Soldier"] },
    { category: "*", match: /cyber|neon|android|ai|mecha|cyberpunk/i, themes: ["Cyberpunk", "Futuristic Tech", "Neon Future", "AI / Android", "Mecha"] },
    { category: "*", match: /steampunk/i, themes: ["Steampunk"] },
    { category: "*", match: /kimono|hanbok|cheongsam|qipao/i, themes: ["Japanese Traditional", "Korean Hanbok Style", "Chinese Imperial"] },
    { category: "*", match: /cowboy|western/i, themes: ["Old West / Cowboy"] }
  ];

  function unique(arr) {
    const set = new Set(arr || []);
    return Array.from(set);
  }

  function matchThemesForValue(category, value) {
    const val = String(value || "");
    const cats = [category, "*"];
    const matched = [];
    for (const cat of cats) {
      for (const r of RULES) {
        if (r.category !== cat) continue;
        if (r.match.test(val)) matched.push(...r.themes);
      }
    }
    return unique(matched);
  }

  function filterValuesByTheme(category, values, selectedTheme) {
    if (!selectedTheme) return Array.from(values || []);
    const out = [];
    for (const v of values || []) {
      const themes = matchThemesForValue(category, v);
      if (themes.includes(selectedTheme)) out.push(v);
    }
    return out; // may be empty; callers should fallback to unfiltered list if needed
  }

  // Expose to window
  window.THEMES = THEMES;
  window.CATHE_RULES = RULES;
  window.matchThemesForValue = matchThemesForValue;
  window.filterValuesByTheme = filterValuesByTheme;
})();
