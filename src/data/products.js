/**
 * LuxeCart Curated Exhibition Product Catalog
 * Realistic mock data with images, pricing, materials, specifications, and reviews.
 */

export const PRODUCTS = [
  {
    id: "aethelgard-chronometer-01",
    name: "The Horizon Automatic Chronograph",
    subtitle: "Calibre Valjoux 7750",
    brand: "Aethel Studio",
    sku: "LUX-HZ-7750",
    category: "timepieces",
    categoryLabel: "Timepieces & Chronographs",
    badge: "Capsule Release",
    edition: "Edition 01 / Ref. HZ-904",
    price: 480.00,
    originalPrice: 600.00,
    rating: 4.9,
    reviewCount: 86,
    inStock: true,
    stockCount: 4,
    isPreorder: false,
    featured: true,
    trending: true,
    bestSeller: true,
    description: "The Horizon Automatic Chronograph embodies absolute structural discipline. Stripping extraneous ornamental noise, its multi-layered dial presents precision dual counter-registers recessed into a micro-blasted slate bed. The 40mm titanium chassis features faceted geometric lugs engineered to comfortably cradle the wrist contour.",
    designEthos: "Designed in partnership with independent Geneva horologists, each unit undergoes a 120-hour chronometric bench test ensuring exceptional isochronism under temperature and pressure variations.",
    materials: "Crafted using 100% recycled Grade 5 aerospace-grade titanium sourced from circular European aerospace scrap. Straps feature un-dyed, vegetable-tanned Tuscan leather certified by the Leather Working Group (LWG Gold Standard), tanned without toxic heavy metals or chromium salts.",
    specifications: {
      caliber: "Self-Winding Automatic Valjoux 7750",
      powerReserve: "48 Hours Continuous Reserve",
      frequency: "28,800 VPH (4Hz)",
      jewels: "25 Synthetic Rubies",
      caseThickness: "11.4 mm ultra-profile",
      waterResistance: "10 ATM / 100 Metres Tested",
      caseDiameter: "40.0 mm",
      lugWidth: "20.0 mm"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6OJwWYs_MxgTVZR_HDbctxys7ANwDC6Xut2RvFlfxCPC-pxiu-7slmRvAj3wibMRdqPXTR3Zo8n8-iWMY9uJOzuqXrcNMtnPHkRF-w3ofKGFLKfl-TphTRTiNx_gW9nE3cBM3hQ4ngKBQIZi4jAVbZjZEOOVFNwSGXrOURGDSl56CsR5DyDK5KXuc6RBncL_ZEhJgi3YkkTECR8zKvXeaiX6JFj3r6zgigEy2BJ1voRhkj8TaiWh",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKnf8hogRxTmRi-WPCR2AwEk1ubYHSkeaepFTzHrRxntJnbmGHw54IxlAlcrztOMZ9kdatKBv9JNHvRthpNEUSPUn2aFGvsgAsVwN2_sqqOm5ORy-oYx79zkWVdr8tZyijd9k3aM9pIp332pvaGLmsy6AzzobRd2r-TwOdJ8DkZsBrD33_3UKmMTNDxXUOwRZSxqcI1liWqcb3qhBArrBIoNC9AaJSGoKxZHixMXti1NSL3z9DCJZx",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgQG2nIG4TshmMH8cWZNjdqnCuFz3X81e6WuCnsG3sohzsu3WQW3Uuahb5Y3JLGnFjNp32COvtrc1lwICTjLKMlpNHhVfxeq9gE8P9y7RAmDJWXRCS0XDjbZSm2j1sH2Qxw3oj7VuO9ke5-7PiT-eOAmFUDf35U2hhw2GfNW1VXJoeobPTyoz8oklDOvcQQehgAlDJCxm6TIILhXz1zI1t7CTgIRRzWoE4lYhfj5Lpmu0DTHmNr_4S",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnnZw65480X8yc5Vyk87NvMU1Vxwa6bW_qF_zsamL-JbjY6wmjfBEg0cSCO_njv9BILwotfWQeUVpB6xFtY7igKsw6iWlK77Wz2O1UWCkErgjh47pPLnB9ok7LNBRXAW9SzMQCUE8yRdDG8hqocLe2jyzfu8dtWCn4Ea7Xp0_v3OYuJtwy-U1nddr1QeAU4G_nCooqRzV1BuTbXiKE5Dtk2wLEu_2WVdidx1doV8NYoMQKnwFvawuq"
    ],
    colors: [
      { name: "Matte Black Titanium", hex: "#191c1d", bgClass: "bg-zinc-900" },
      { name: "Brushed Steel", hex: "#a1a1aa", bgClass: "bg-zinc-400" },
      { name: "Champagne Gold PVD", hex: "#d4af37", bgClass: "bg-amber-300" }
    ],
    sizes: [
      { label: "Milanese Mesh", subtitle: "40mm • Magnetic clasp" },
      { label: "Italian Calfskin", subtitle: "Vegetable-tanned leather" },
      { label: "Ceramic Bracelet", subtitle: "Ultra-light scratchproof" }
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Henri V. de Saint-Gervais",
        location: "Architecture Director • Zurich",
        rating: 5,
        date: "3 weeks ago",
        verified: true,
        title: "A masterclass in restraint. Surpasses timepieces three times its price.",
        comment: "The titanium weight distribution makes this effortless on the wrist. The matte slate dial catches light with a subtle industrial gradient, and the chronograph pushers possess a clean, crisp mechanical actuation. Arrived within 48 hours in Zurich with pristine presentation."
      },
      {
        id: "rev-2",
        author: "Elena Rostova",
        location: "Industrial Designer • Stockholm",
        rating: 5,
        date: "1 month ago",
        verified: true,
        title: "The Milanese mesh bracelet is flawlessly integrated.",
        comment: "I was hesitant about purchasing a chronograph without viewing it in person first, but LuxeCart’s insured trial took away the friction. The exhibition caseback allows you to admire the decorated automatic rotor in action. This is pure industrial art."
      }
    ]
  },
  {
    id: "the-soren-courier-bag",
    name: "The Soren Courier Bag",
    subtitle: "Tuscan Vegetable Leather",
    brand: "Vesper Studio",
    sku: "LUX-SR-890",
    category: "leather",
    categoryLabel: "Fine Leather Goods",
    badge: "Bestseller",
    edition: "Edition 02 / Limited Run",
    price: 890.00,
    originalPrice: 1050.00,
    rating: 4.9,
    reviewCount: 84,
    inStock: true,
    stockCount: 7,
    isPreorder: false,
    featured: true,
    trending: true,
    bestSeller: true,
    description: "Monochrome matte calfskin messenger bag with subtle custom engraved hardware. Engineered for urban transit and timeless longevity with dedicated padded sleeves for up to 16-inch laptops.",
    designEthos: "Constructed with full-grain calfskin tanned naturally using tree barks and plant extracts. The bag develops a deep personal patina over decades of service.",
    materials: "Full-grain Tuscan calfskin, solid brushed gunmetal brass hardware, durable recycled micro-twill lining.",
    specifications: {
      dimensions: "38cm × 28cm × 11cm",
      weight: "1.2 kg",
      capacity: "14 Liters",
      laptopCompartment: "Up to 16-inch MacBook Pro",
      strapLength: "Adjustable 90cm – 140cm",
      origin: "Handcrafted in Florence, Italy"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACGIR5lA4WTfLvQ5CodUrUIXV1i-LqM6SrwPZabQ05ydhwhceLkOMpfoPFzH0DOH_An0C_ImTeCoZu-gwUsOPyNxAZf1G2ErIBrObS6A7AdIl_5pqNPELZ2OJED1LHei2qX0PDohPEelCGs8mh4DVSH4rHgtcOMSfxTaR_EFaUUYNFN_raXYdkfmdeF91qWXTkayKR4dD3CpewXuqzdaiJbipZXihWxLDB-aBK3yHYXkodEccyAmj1",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDx72gfxmb0dzZzEs01RWVAFVBpPBDcTE7iR0ZeQn6ChsMl9FzZ8rWY3DhlHEt7goRDX321MEaWJkZan6wt4pYw_TZs9fMeO3G6pysCgVlrT_lLFePsOPH66kF49BRIo2ctzFTKo4pzlXDlrIFmVw7i8_RuQoXLYNhvpQUxcYFQiFVbPoja17NiaiE20bNifN934iNhMi2alUAgaZogfJV7YInFaKnwpaGPGr1NRpwyROQKlrBnLpzR"
    ],
    colors: [
      { name: "Black Noir", hex: "#000000", bgClass: "bg-black" },
      { name: "Espresso", hex: "#3f3f46", bgClass: "bg-stone-800" },
      { name: "Cognac", hex: "#78350f", bgClass: "bg-amber-900" }
    ],
    sizes: [
      { label: "Medium 14L", subtitle: "Fits 14-inch laptops" },
      { label: "Large 18L", subtitle: "Fits 16-inch laptops" }
    ],
    reviews: [
      {
        id: "rev-soren-1",
        author: "Elena Lindqvist",
        location: "Verified Buyer • Manhattan",
        rating: 5,
        date: "2 weeks ago",
        verified: true,
        title: "Packaging alone is pure museum art.",
        comment: "Unboxing the Soren Courier was an architectural experience. Heavy bonded linen casing, wax-sealed provenance card, and calfskin that has already begun patinating gorgeously in New York humidity."
      }
    ]
  },
  {
    id: "aura-one-spatial-headset",
    name: "Aura One Spatial Headset",
    subtitle: "Lossless Audio ANC",
    brand: "Kanso Elements",
    sku: "LUX-AO-640",
    category: "audio",
    categoryLabel: "Spatial Audio & Tech",
    badge: "Trending",
    edition: "Studio Precision Mark II",
    price: 640.00,
    originalPrice: 720.00,
    rating: 5.0,
    reviewCount: 128,
    inStock: true,
    stockCount: 8,
    isPreorder: false,
    featured: true,
    trending: true,
    bestSeller: false,
    description: "Precision-engineered over-ear spatial headset constructed from aircraft-grade aluminum and buttery soft lambskin. Features proprietary lossless planar magnetic drivers with adaptive room tuning.",
    designEthos: "Stripped of plasticky logos and flashy LEDs, Aura One delivers tactile rotary dials, silent magnetic cushions, and laboratory-calibrated acoustic transparency.",
    materials: "Anodized milled aerospace aluminum, memory foam lambskin pads, custom woven titanium mesh headband.",
    specifications: {
      driver: "45mm Custom Planar Magnetic Drivers",
      frequency: "5Hz – 48,000Hz Ultra-Wide",
      batteryLife: "38 Hours Continuous Playback",
      connectivity: "Bluetooth 5.3 aptX Lossless & USB-C DAC",
      weight: "320 grams",
      noiseCancelling: "Adaptive Hybrid Quad-Mic ANC"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXIEPg9kUdIHqX2-ULjOyrsi0_v0c_coTEmULhzQ2tYOLnHrCMwdC8fuPxVy9n2bIeHrx9cRxrkS6lzw2_2lXNTibK96Q_aoigryGoQbacYpXxwtlY9ym-zaV55kAWGSq-Ay3rv6X9oiEtnvtVm5s0V63QowBi2AcaQDRwFe3BXItcaUs1XvSZoV2GaHTARtbsZX8c4pQ6iLH5tPLORbsOCzSSbh2xkX_no3L9HD0nKUncniCJSYj9",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAd6pza-DAdNEJeHfpicaKLWHTkGGshWxZUEUlBN_wQgCpN69L0hfRqr1tLehBz883BuJySxGklmn7ItEBm9KirwrT-dBP8ow_X_VLD1jHjD9CKYDuJ46myvsv_IrRTWokbwpDPzUvZrdvMQ9kiyOGe34tNt0m-rz0If7EIdHVNHR_3g4HCBXNfaDGXrsvmTRmgheQHpIYYJBKLuOjMlg7sn4aAbjNis_wDz0NFevLgWqtG0z7F8pG"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#1c1917", bgClass: "bg-stone-900" },
      { name: "Brushed Silver", hex: "#a1a1aa", bgClass: "bg-zinc-400" }
    ],
    sizes: [
      { label: "Standard Over-Ear", subtitle: "Ergonomic Universal Contour" }
    ],
    reviews: [
      {
        id: "rev-aura-1",
        author: "Marcus Keller",
        location: "Verified Collector • Zurich",
        rating: 5,
        date: "1 month ago",
        verified: true,
        title: "The highest acoustic clarity.",
        comment: "The Aura One Spatial headsets are the first audio equipment in years that made me re-listen to my entire lossless orchestral library. Unbelievable isolation and featherlight balance."
      }
    ]
  },
  {
    id: "monolith-ribbed-cardigan",
    name: "Monolith Ribbed Cardigan",
    subtitle: "100% Mongolian Cashmere",
    brand: "Atelier Noir",
    sku: "LUX-MC-520",
    category: "apparel",
    categoryLabel: "Cashmere & Apparel",
    badge: "Limited Edition",
    edition: "Edition 03 Autumn Harvest",
    price: 520.00,
    originalPrice: 610.00,
    rating: 4.8,
    reviewCount: 46,
    inStock: true,
    stockCount: 6,
    isPreorder: false,
    featured: true,
    trending: true,
    bestSeller: false,
    description: "Relaxed silhouette knit cardigan spun from 4-ply Mongolian cashmere. Features horn buttons, subtle drop shoulders, and dense English ribbing for structural drape without heaviness.",
    designEthos: "Designed for effortless seasonal layering, bridging evening salon elegance with calm daytime poise.",
    materials: "100% Grade A Mongolian cashmere (15.2 micron fineness), sustainably harvested horn buttons.",
    specifications: {
      gauge: "7-Gauge Heavyweight Rib Knit",
      yarn: "4-Ply Inner Mongolian Long Staple",
      fit: "Relaxed Contemporary Drape",
      care: "Dry Clean or Gentle Hand Wash in Cold Water",
      origin: "Knit in Biella, Italy"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5IU0rtk3iaYV68tu5e5PRtRoyFKGHFUPncwwuXZ9TVdf1CbFKPX6PS7tnJjKbrWDhascPNedQg6xl_X1Lx0i1ORuhpOFO7zbxDerfmMcvYP17DKKoh83NylurbECeTJMPGaISxdcVWsadUSEDNBKN4FTAMsV-VC85TAxHUQBrVJpHpfwWkUjvJ7wM7fHgXq3YENN3N36UQZYPyuzklj7lYrmZWg5gGnS9OharT0MeInv7EWSLKrzy",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRCSFhZfp2kAqBe6LZI2tuEbtEfFcU67sCT49oYMxESKFTJm59-YpKFFlP9ti8j3QBH8bzrTzZbgYV1hCV0t8l8i-vrj0szxt-xgD6AMhpqxaEqT9OXFPI2al5fail_9kKn0WgbNA-OM4aGKV9_FmKc6tK5NKxsTamxVzQNQ-yPajaxjinTA4AoCbWzo0g7ODeRFzWiytemuhk_FSmkfoibLyerQjNV_F9v-9r6o1k7KT_61UTW53F"
    ],
    colors: [
      { name: "Charcoal Slate", hex: "#27272a", bgClass: "bg-zinc-800" },
      { name: "Ecru Chalk", hex: "#e7e5e4", bgClass: "bg-stone-300" },
      { name: "Umber Amber", hex: "#78350f", bgClass: "bg-amber-800" }
    ],
    sizes: [
      { label: "S / 48", subtitle: "Chest 38-40 in" },
      { label: "M / 50", subtitle: "Chest 40-42 in" },
      { label: "L / 52", subtitle: "Chest 42-44 in" },
      { label: "XL / 54", subtitle: "Chest 44-46 in" }
    ],
    reviews: [
      {
        id: "rev-cardigan-1",
        author: "Julian Aubrey",
        location: "Collector • London",
        rating: 5,
        date: "3 weeks ago",
        verified: true,
        title: "Sublime softness and structure.",
        comment: "Most cashmere sweaters lose their shape within hours. The Monolith holds its clean geometric shoulder lines effortlessly while remaining cloud-soft against the skin."
      }
    ]
  },
  {
    id: "verdant-card-folio",
    name: "Verdant Card Folio",
    subtitle: "Grained Italian Leather",
    brand: "Vesper Studio",
    sku: "LUX-VF-240",
    category: "leather",
    categoryLabel: "Fine Leather Goods",
    badge: "Bestseller",
    edition: "Numbered Vault Archival",
    price: 240.00,
    originalPrice: 280.00,
    rating: 4.9,
    reviewCount: 92,
    inStock: true,
    stockCount: 12,
    isPreorder: false,
    featured: true,
    trending: true,
    bestSeller: true,
    description: "Architectural slim leather cardholder crafted in emerald green grained leather with beveled hand-painted edges on raw concrete finish. Holds up to 8 cards with RFID protection.",
    designEthos: "A study in minimal daily carry. Perfectly engineered pockets allow seamless card retrieval without bulky expansion.",
    materials: "Full-grain French Taurillon leather with vegetable wax top finish, silk twill interior.",
    specifications: {
      dimensions: "10.2cm × 7.2cm × 0.6cm",
      slots: "6 Card Slots + Central Cash Slot",
      weight: "38 grams",
      rfid: "Full Frequency Shielding",
      origin: "Paris Atelier Workshop"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuwmEJ1uvjUOs39WKK7oW9QABQJ-xa0pujmYciOfpOX-JmUUeL4Xl6Usc7BVwPoOODT6qQMeyVkEgRKkvCPdTwf80-TVV2f9mgQiJpIa3nPEnZrr1ItNIM1o1tGEOmfvnQDferbxk0lpd8sgRYbjzPb0iy0QHJqK16NUtpL22YnKkm5CMK9jRUkcDX_enAqsa9vNoHy5rjH5r5NLJeM3VGEEUgIN8ADu0rfPXr8Vtr83Hgt2KdZf6P",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCx6SvZ-jtS5dmaAz_CjkokhdrKlGbK4Gfw6Lc13qgRmITTGJN6yj1qnUTyZR416qHY5CAuxeee-TC4sh8gnw_K2bCFaz29b8JLlOql1hsXg4KYIbbAtNs8zcMIK8qEToGz6glWukbUxYnrFm5ZRepbLiblXLdiOUQDsrbPlXT0a2l8V1jhhkpG9Uo3hOu31o9wzTMGKIvFoJj3fgmufH2YvM8rkK0J3Uq-qA0zWG5AtMpJQ8S5Pu__"
    ],
    colors: [
      { name: "Forest Emerald", hex: "#064e3b", bgClass: "bg-emerald-950" },
      { name: "Onyx Black", hex: "#1c1917", bgClass: "bg-stone-900" }
    ],
    sizes: [
      { label: "Standard 6-Slot", subtitle: "Ultra-slim 0.6cm profile" }
    ],
    reviews: [
      {
        id: "rev-verdant-1",
        author: "Sophie Laurent",
        location: "Architect • Milan",
        rating: 5,
        date: "2 months ago",
        verified: true,
        title: "Perfection down to the edge dye.",
        comment: "The hand-burnished edge coating hasn’t frayed in three months of daily front-pocket carry. A true jewel of leather craftsmanship."
      }
    ]
  },
  {
    id: "palermo-dframe-acetate",
    name: "The Palermo D-Frame Acetate",
    subtitle: "Mazzucchelli Bio-Acetate",
    brand: "Aethel Studio",
    sku: "LUX-PL-380",
    category: "accessories",
    categoryLabel: "Accessories",
    badge: "Signature",
    edition: "Signature Horizon Series",
    price: 380.00,
    originalPrice: 440.00,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    stockCount: 5,
    isPreorder: false,
    featured: false,
    trending: false,
    bestSeller: true,
    description: "Sculptural luxury optical frames hand-cut from 8mm thick Italian Mazzucchelli bio-acetate with custom 5-barrel hinges and Zeiss polarized optical glass lenses.",
    designEthos: "Balancing geometric heft with featherweight balance, the Palermo frames frame the face with architectural discipline.",
    materials: "100% Cotton-derived Italian Bio-Acetate, Zeiss amber polarized lenses with anti-reflective internal coating.",
    specifications: {
      frameWidth: "144 mm",
      lensWidth: "50 mm",
      bridge: "22 mm",
      templeLength: "145 mm",
      lensCategory: "3 (100% UVA/UVB Protection)",
      origin: "Handcrafted in Cadore, Italy"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsNNekd4t2yNxfytgCVKH4g1d-yk9rmET2XqZdl-67Sai4qYrzdxkLjGVs66YS1t8QDGlANU1lxqCytsbWMVVA-LVYXpHtKm5usUNz4Fadv66pJ338dPucJ3PcsKmlE3bCLIujCIFY3DojQCMOsrQf-kuESyL_I6c5YyWEtxa6kXlJU2kjuVxkWkC6FbIKE8POZHt6xvrC9DOZ_ud25sxiQY-D4qPWDTukMhHbn3zHV4Xy6-Y6Ndil"
    ],
    colors: [
      { name: "Tortoiseshell Amber", hex: "#78350f", bgClass: "bg-amber-900" },
      { name: "Obsidian Gloss", hex: "#000000", bgClass: "bg-black" }
    ],
    sizes: [
      { label: "Universal Fit 50-22", subtitle: "Includes leather hardcase & microfiber" }
    ],
    reviews: []
  },
  {
    id: "atelier-document-folio",
    name: "Atelier 13-Inch Document Folio",
    subtitle: "Pebbled French Leather",
    brand: "Vesper Studio",
    sku: "LUX-AF-490",
    category: "leather",
    categoryLabel: "Fine Leather Goods",
    badge: "Icon",
    edition: "Iconic Archive 01",
    price: 490.00,
    originalPrice: 560.00,
    rating: 4.8,
    reviewCount: 54,
    inStock: true,
    stockCount: 9,
    isPreorder: false,
    featured: false,
    trending: false,
    bestSeller: true,
    description: "Minimalist structured leather folio organizer in warm taupe tone, open zipper detail, architectural desk composition with dedicated micro-suede laptop protective compartment.",
    designEthos: "Refining the executive desk accessory into a piece of mobile architecture.",
    materials: "Full-grain Taurillon leather, padded alcantara micro-suede lining, Swiss Riri smooth-glide metal zippers.",
    specifications: {
      dimensions: "34cm × 25cm × 2.5cm",
      compatibility: "13-inch and 14-inch Laptops and Tablets",
      pockets: "Document sleeve, 4 pen slots, passport pocket",
      origin: "Lyon, France"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDx1PAwcKAtaXSKBlilovyDZX5b_ICR-ay1br4swLttcLS_PW3uURchGFB_K20mou447cBkJEWqiHAY6xQAH3d-pPLtv9MA7p_rv6oxKb-HdCawCurq4sMf0LkVCcxQ7PzOl1OCq8li61ucmDQTN6fNyWNFSHcP6vW-pHWizrp3LQIkruhJUJ5uSUQgTd935JFjKOuB9LYnZdJVx0yCLy3ISk5N3W6wQXU2nbx6dBL6cVR7HiNbqFJ2"
    ],
    colors: [
      { name: "Taupe Alabaster", hex: "#a8a29e", bgClass: "bg-stone-400" },
      { name: "Black Noir", hex: "#18181b", bgClass: "bg-zinc-900" }
    ],
    sizes: [
      { label: "13-14 Inch Folio", subtitle: "MacBook Pro / iPad Pro compatible" }
    ],
    reviews: []
  },
  {
    id: "koben-ceramic-brew-set",
    name: "Koben Ceramic Brew Set",
    subtitle: "Hand-Thrown Stoneware",
    brand: "Atelier Noir",
    sku: "LUX-KB-195",
    category: "living",
    categoryLabel: "Architectural Living",
    badge: "Curator Pick",
    edition: "Studio Værn Collaboration",
    price: 195.00,
    originalPrice: 230.00,
    rating: 4.9,
    reviewCount: 65,
    inStock: true,
    stockCount: 14,
    isPreorder: false,
    featured: false,
    trending: false,
    bestSeller: true,
    description: "Hand-thrown stoneware carafe with oiled Danish oak heat guard and conical ceramic dripper. Engineered for optimal slow coffee extraction and thermal retention.",
    designEthos: "Bringing the ritual of quiet morning reflection into tactile focus through coarse clay texture and natural organic contours.",
    materials: "Speckled Scandinavian iron stoneware, untreated Danish oak collar, food-safe matte glaze.",
    specifications: {
      capacity: "750 ml (2-4 Cups)",
      filterCompatibility: "Standard V60 02 paper or cloth filters",
      dishwasherSafe: "Ceramic body dishwasher safe (remove wood collar)",
      origin: "Copenhagen, Denmark"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqynD1LaZxUk63yad_zzPSqRZrEEvppIno-4XUKIhosroBzh8u-G1Bs9rkO5Z1I3_vVzxfBJ5q7aoPPm62EeRWq2lRQTJhnSaDj22PGGh7rjLZmQfFUGLyvugd9OiwM9DwJUb8daJPi9qAUk8D85gfGaDenNYIGnwytbeYsza50RvngQrDq-g84d6_uGRr64CbWavnkwqf5kTV6SvruJ2oCPUQdKxLJCCDmERexTJ4Gs9fsXW5iJBM"
    ],
    colors: [
      { name: "Speckled Charcoal", hex: "#3f3f46", bgClass: "bg-zinc-700" },
      { name: "Limestone Sand", hex: "#e7e5e4", bgClass: "bg-stone-300" }
    ],
    sizes: [
      { label: "750ml Complete Kit", subtitle: "Carafe, dripper, oak collar & 50 filters" }
    ],
    reviews: []
  },
  {
    id: "sterling-index-signet-ring",
    name: "Sterling Index Signet Ring",
    subtitle: "Solid 925 Recycled Silver",
    brand: "Aethel Studio",
    sku: "LUX-SR-310",
    category: "jewelry",
    categoryLabel: "Fine Jewelry",
    badge: "Just In",
    edition: "Architectural Armature Batch",
    price: 310.00,
    originalPrice: 360.00,
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    stockCount: 11,
    isPreorder: false,
    featured: false,
    trending: true,
    bestSeller: false,
    description: "Solid 925 recycled sterling silver signet ring with engraved micro-architectural geometric lines and satin-brushed face. Sculptural weight that rests effortlessly on the index finger.",
    designEthos: "Geometric symmetry inspired by modern structural brutalism, hand-buffed for subtle ambient specular reflections.",
    materials: "100% Recycled 925 Sterling Silver, rhodium anti-tarnish treatment.",
    specifications: {
      weight: "16.4 grams",
      faceDimensions: "18mm × 14mm",
      hallmark: "Laser-engraved 925 Atelier stamp",
      origin: "Arezzo, Italy"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyVqiAcgO-gvYqwS--y1aodZDIQUtrv7szGY5JVc_OypZJ5dTFELiOcgsF52z4VWw3cldzq2BMqavnjiRXzxCHzb16D_rknJO3fszg4df2kQRMR8wzJc402BlK-YFxFRH1za22sykHvrNhCvuxvvP_fvcXP0UfGLPyx_ySAFyXHtnZ0J54GvX7G34SDg_r65Ybq-NH_O73Ifkx7yC7W7mPx-bbellkWWtsyWEuxM4voykTLcQFYIsK"
    ],
    colors: [
      { name: "Satin Silver", hex: "#e4e4e7", bgClass: "bg-zinc-300" },
      { name: "Ruthenium Black", hex: "#27272a", bgClass: "bg-zinc-800" }
    ],
    sizes: [
      { label: "US 8 / 18.2mm", subtitle: "Internal diameter" },
      { label: "US 9 / 19.0mm", subtitle: "Internal diameter" },
      { label: "US 10 / 19.8mm", subtitle: "Internal diameter" },
      { label: "US 11 / 20.6mm", subtitle: "Internal diameter" }
    ],
    reviews: []
  },
  {
    id: "como-handrolled-silk-foulard",
    name: "Como Hand-Rolled Silk Foulard",
    subtitle: "16mm Mulberry Twill",
    brand: "Atelier Noir",
    sku: "LUX-CS-145",
    category: "apparel",
    categoryLabel: "Cashmere & Apparel",
    badge: "Just In",
    edition: "Lake Como Heritage Drop",
    price: 145.00,
    originalPrice: 175.00,
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
    stockCount: 15,
    isPreorder: false,
    featured: false,
    trending: false,
    bestSeller: false,
    description: "Pure white silk pocket square with hand rolled contrast navy edge, printed on heavy 16mm mulberry twill by century-old Lake Como textile mills.",
    designEthos: "Soft tactile drape that holds its fold in tailored jacket pockets or drapes gracefully around the neck.",
    materials: "100% Mulberry Silk Twill (16 momme), hand-rolled hem stitched with silk thread.",
    specifications: {
      dimensions: "45cm × 45cm",
      hem: "Hand-rolled French hem",
      origin: "Lake Como, Italy"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIp30hGP9_z88QP7A-6mapwJ-CIrdIHZilI3hEHXhKQXIgs0dnpo80mee44q-MWI9MOIpmfGI8feYZirQmMtTR4CBe18MPVc1MEMFv40sEVYk2IlOFTaNfKVTt9feGqR2KvCQYsYs7N-OnAE3GkE23ZqwFieHRIOa8zLLB_C5kITEPj0l-3GsgR3FvjU78LLLyOKzD0upPtw9dK_r9qdp2Vq6joJdoi9AuPvaZofBZZfU0KFj8mmiK"
    ],
    colors: [
      { name: "Chalk White / Navy", hex: "#f8fafc", bgClass: "bg-slate-100" }
    ],
    sizes: [
      { label: "45 × 45 cm", subtitle: "Square Pocket Foulard" }
    ],
    reviews: []
  },
  {
    id: "alloy-dual-device-charging-valet",
    name: "Alloy Dual-Device Charging Valet",
    subtitle: "Milled Aerospace Aluminum",
    brand: "Kanso Elements",
    sku: "LUX-AC-220",
    category: "audio",
    categoryLabel: "Spatial Audio & Tech",
    badge: "Just In",
    edition: "Kanso Electronics Lab",
    price: 220.00,
    originalPrice: 260.00,
    rating: 4.8,
    reviewCount: 22,
    inStock: true,
    stockCount: 10,
    isPreorder: false,
    featured: false,
    trending: true,
    bestSeller: false,
    description: "Cast and CNC milled aluminum sculptural wireless charging tray in matte sand finish with MagSafe fast charging coil array and catch-all tray for keys and timepieces.",
    designEthos: "Eliminating chaotic bedside cables with a solid monolithic charging vessel carved from a single aluminum ingot.",
    materials: "Aerospace 6061-T6 Aluminum with micro-bead blasted finish, Italian leather contact pad, braided Kevlar power cable.",
    specifications: {
      chargingOutput: "15W MagSafe Fast Wireless + 5W Accessory Pad",
      input: "USB-C 30W Power Delivery",
      dimensions: "220mm × 140mm × 16mm",
      weight: "680 grams (weighted non-slip base)",
      origin: "Berlin, Germany"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNGUckj-etCFmESaj_g6v9cBkaHgOHtQW8HhB_guMkmz9W7xzsNuKN_6_qdey9en-XVPvhxinWi_1zfZpBNP_2nsl-I4f31tn_6UUMuE43NtV7-zzjHXV7MXjgOgwvaYUYxZxrmxA524SjXHRiSFUa0MPY-LKjswv1BBmiVUc9v1BjZy78n_e_VYUnOkUXRUk8SsveVNi0X2817rQFk4Zrgx3Ii85JpA9JK8h8a7zm6fYB6MeGMzEH"
    ],
    colors: [
      { name: "Matte Sand", hex: "#e7e5e4", bgClass: "bg-stone-300" },
      { name: "Space Graphite", hex: "#27272a", bgClass: "bg-zinc-800" }
    ],
    sizes: [
      { label: "Dual Wireless 20W", subtitle: "Includes 45W GaN adapter and braided cable" }
    ],
    reviews: []
  },
  {
    id: "kyoto-sandalwood-vessel",
    name: "Kyoto Sandalwood Vessel",
    subtitle: "Dark Bronze Scented Candle",
    brand: "Atelier Noir",
    sku: "LUX-KS-120",
    category: "living",
    categoryLabel: "Architectural Living",
    badge: "Limited Run",
    edition: "Kyoto Temple Heritage",
    price: 120.00,
    originalPrice: 140.00,
    rating: 4.9,
    reviewCount: 77,
    inStock: true,
    stockCount: 18,
    isPreorder: false,
    featured: true,
    trending: false,
    bestSeller: false,
    description: "Monolithic brushed dark bronze vessel holding hand-poured rapeseed and soy wax infused with aged Kyoto sandalwood, smoked hinoki cedar, and dried iris petals.",
    designEthos: "Burn the wax to reveal a forever bronze container suited as an architectural desk vessel.",
    materials: "Hand-turned raw bronze with geometric lid, natural non-GMO wax, lead-free cotton braided wick.",
    specifications: {
      burnTime: "65+ Hours Clean Burn",
      waxWeight: "280 grams (10 oz)",
      notes: "Top: Cypress, Hinoki; Heart: Sandalwood, Iris; Base: Vetiver, Incense",
      origin: "Kyoto / Paris Atelier"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYC04u7VWcCCk06NwgycDwv0vPipIl0_0jS2VaGQueHs9hIIE8ibJq4OeZDFi1mwZUgH-U10xkCKpgHCrDkAAoymRisdX1suCNN0Rc2aCQRIx6RijtfJQjokMm5lCyTP6JQBubmPOdVLiH-ciWJ5SIiSaz_R8EdHVdbaz5ZgiojpN8coXOf3JO43Tpa0VisG-mK8GA48wplbDy2OMMeoWcLBD9oTlKpmR-WmAgkMLXSViiOj9Du4x"
    ],
    colors: [
      { name: "Aged Bronze", hex: "#78350f", bgClass: "bg-amber-900" },
      { name: "Silver Pewter", hex: "#a1a1aa", bgClass: "bg-zinc-400" }
    ],
    sizes: [
      { label: "Standard 280g", subtitle: "Vessel reusable for stationery or matchsticks" }
    ],
    reviews: []
  },
  {
    id: "strata-weekender-45l",
    name: "Strata Weekender 45L",
    subtitle: "Raw Denim & Italian Leather",
    brand: "Vesper Studio",
    sku: "LUX-SW-460",
    category: "leather",
    categoryLabel: "Fine Leather Goods",
    badge: "Icon",
    edition: "Traveler Capsule",
    price: 460.00,
    originalPrice: 530.00,
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    stockCount: 5,
    isPreorder: false,
    featured: true,
    trending: true,
    bestSeller: false,
    description: "Monochromatic Japanese raw denim and structured canvas weekend duffle. Vegetable-tanned leather straps, gunmetal solid brass hardware, and waterproof bottom compartment for footwear.",
    designEthos: "A travel companion designed to comply with worldwide overhead compartments while aging handsomely across voyages.",
    materials: "16oz Kurabo Japanese shuttle loom denim, 3.5mm bridle leather straps, water-repellent wax coating.",
    specifications: {
      dimensions: "52cm × 30cm × 28cm",
      volume: "45 Liters",
      weight: "1.65 kg",
      shoeCompartment: "Separate ventilated base compartment",
      origin: "Okayama / Florence"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTuWNDttngQi9-yfuEoukx2EcJk2pl_6rxEo4vyWUHOqbBqnwjxvNe1QOIfv-ENPpzl86QkFsi4VTgNC6UmO16zD5O-rHGP8gZktNAwX6vEwMaiPRbpNcv8n3kiyw4ABbuDsvvnQ3oucVzTA6tMx_GWLj_OXx1dpmYvXxgtFXrRwcm8ow6oIvF1OnGh-vo0Lg3nDl7VzO0FEyZAipFDvOokbvxwCL_-EURlZ3UKYd6u-GwSycux0_3"
    ],
    colors: [
      { name: "Midnight Denim", hex: "#1e1b4b", bgClass: "bg-indigo-950" },
      { name: "Obsidian Canvas", hex: "#18181b", bgClass: "bg-zinc-900" }
    ],
    sizes: [
      { label: "45L Carry-On Spec", subtitle: "IATA flight cabin compliant" }
    ],
    reviews: []
  },
  {
    id: "sora-resonance-pebble",
    name: "Sora Resonance Pebble",
    subtitle: "Basalt Ceramic Wireless Speaker",
    brand: "Kanso Elements",
    sku: "LUX-SP-290",
    category: "audio",
    categoryLabel: "Spatial Audio & Tech",
    badge: "New Arrival",
    edition: "Acoustics Monograph",
    price: 290.00,
    originalPrice: 340.00,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    stockCount: 7,
    isPreorder: false,
    featured: true,
    trending: false,
    bestSeller: false,
    description: "Ceramic acoustic sound pebble speaker finished in matte basalt stone. Compact architectural desk piece with textured organic surface, custom neodymium woofer, and 360-degree sonic dispersion.",
    designEthos: "Organic sculptural tactility meets crystalline high-resolution wireless streaming.",
    materials: "Cast basalt ceramic composite casing, woven wool speaker grille, tuned bass reflex port.",
    specifications: {
      battery: "16 Hours Playback",
      power: "35W RMS Hi-Fi Output",
      connectivity: "Bluetooth 5.3 + Multi-Room Stereo Pairing",
      waterResistance: "IPX5 Splash Resistant",
      origin: "Stockholm, Sweden"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdYHx76F7FIpda0bkddtXJ27YfbgkheJsrcHepkfnNkXWDZJ5fWG-s_djGR3hqJS3plF5gvO65X-rIDIeTP9aKwPqh3gN-wgVO-JpmRY2g0_xVqUjU6WNvUfgOFGZmJOltF2CEJ-RIbm29TmhnP_NNaY9g25CE3lm1L1QxMTrMyNOSxO7imAFNt3qniE6L0LUmOGUJDYCXgGGsVM9kAZLc1fmNr7-R8MHJBqVR5dRJ6BlugZndH5OE"
    ],
    colors: [
      { name: "Basalt Stone", hex: "#3f3f46", bgClass: "bg-zinc-700" },
      { name: "Warm Sand", hex: "#d6d3d1", bgClass: "bg-stone-300" }
    ],
    sizes: [
      { label: "Desktop Pebble 35W", subtitle: "Includes magnetic charging puck" }
    ],
    reviews: []
  },
  {
    id: "travertine-foldover-pouch",
    name: "Travertine Foldover Pouch",
    subtitle: "Raw Alabaster Calfskin",
    brand: "Vesper Studio",
    sku: "LUX-TP-240",
    category: "leather",
    categoryLabel: "Fine Leather Goods",
    badge: "Atelier Core",
    edition: "Core Collection 01",
    price: 240.00,
    originalPrice: 280.00,
    rating: 4.8,
    reviewCount: 41,
    inStock: true,
    stockCount: 9,
    isPreorder: false,
    featured: false,
    trending: true,
    bestSeller: false,
    description: "An artisanal structured ivory cream calfskin leather shoulder pouch with hand-burnished edge detailing positioned on a travertine slab in warm natural window sunlight.",
    designEthos: "Pure minimalist geometry designed to carry essentials without distraction.",
    materials: "Full-grain Italian calfskin, brushed titanium magnetic clasp, raw linen interior.",
    specifications: {
      dimensions: "22cm × 15cm × 5cm",
      strapDrop: "52cm adjustable cross-body strap",
      weight: "260 grams",
      origin: "Milan, Italy"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUnUKx5zxp-aArvDKnNjz7RAuDTMyDkwEmtC6d-xXLX26hhuE7KOpX7KEc8323p0m8xpNPBDVD3wh3ase94uQ7LWvrG8nV1vthrkvZLflMScCWPlHKujlmgpf3gw0UWxRswLn7y_tBTmteU-eds_7TMftvIiA9R6-EAjQTgihXdAEFx7vzppVTFx3shT-IK2ZTdRMtEFwJ-3iIoL80tgMlFey8wBNFo5Fj3gxiNnmtooeIwaWuePQu"
    ],
    colors: [
      { name: "Raw Alabaster", hex: "#f5f5f4", bgClass: "bg-stone-100" },
      { name: "Tuscan Tan", hex: "#a8a29e", bgClass: "bg-stone-400" }
    ],
    sizes: [
      { label: "Medium Pouch", subtitle: "Fits phone, cardholder, keys & sunglasses" }
    ],
    reviews: []
  },
  {
    id: "twill-silk-carre-scarf",
    name: "Twill Silk Carré Scarf",
    subtitle: "Deep Nocturne Mulberry",
    brand: "Atelier Noir",
    sku: "LUX-TS-120",
    category: "apparel",
    categoryLabel: "Cashmere & Apparel",
    badge: "Capsule 04",
    edition: "Autumn Solstice",
    price: 120.00,
    originalPrice: 150.00,
    rating: 4.9,
    reviewCount: 34,
    inStock: true,
    stockCount: 16,
    isPreorder: false,
    featured: false,
    trending: false,
    bestSeller: false,
    description: "A premium heavy mulberry silk twill foulard scarf in midnight violet and deep charcoal graphic geometric patterns draped elegantly across architectural lines.",
    designEthos: "A fluid canvas of chromatic depth, combining ancient screen-printing techniques with modern geometric patterns.",
    materials: "100% Organic Mulberry Silk (16mm heavy twill), hand-rolled hems.",
    specifications: {
      dimensions: "90cm × 90cm large square",
      origin: "Lyon, France"
    },
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD56Pb_JpWR0R0TdvzGIUmoGwNSEVwNQgeyIeeq2mdqlYwFhFlWcH_9VSBWXa92NzihcU2X8i_lgnxKg1CvOmjribNBGr151KsB3pJGu4xRcFaZlFFtoDQR_rK83FYHGYqpVCl-mPkAKTi3azmOO0r3MP5bp7r2-wQT8TKp8PnMa01m09H7Ed1_PxSo5WmNzpgtDqgBolfB9gdx4M03kMar1mNO5bzDJ0krlvn6ZQtgeGvoH2woA_UU"
    ],
    colors: [
      { name: "Deep Nocturne", hex: "#1e1b4b", bgClass: "bg-indigo-950" }
    ],
    sizes: [
      { label: "90 × 90 cm Carré", subtitle: "Classic large square foulard" }
    ],
    reviews: []
  }
];

export const CATEGORIES = [
  {
    id: "timepieces",
    name: "Timepieces & Chronographs",
    itemCount: "24 Pieces",
    description: "Perpetual calendars, titanium bezels, and automatic calibres.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRTw5-y-4IdlgQACdK7Zmzu3wzPdCJ4DL7dSGJk-LrI2jlIqtlHXratOZU8_COCEQYU__XkQJK80GfT9MwCqc7VhgV-6a4RnQaIaA5a6xAMBvdd78W08Dw03Q5l3ydCrkYSWG3gYnuSB36fMN2LfX28fAlsvsi2CD5IjgjEdS1SMbIlvxC2PZRw0L14dVEte8gnpS9SyGAt-AMkb8Ac2jlQsFroFYd7ACMA7qeDfYvedcirH2pR4Yz",
    colSpan: "lg:col-span-7"
  },
  {
    id: "leather",
    name: "Fine Leather Goods",
    itemCount: "42 Pieces",
    description: "Full-grain vegetable-tanned Italian calfskin essentials.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx72gfxmb0dzZzEs01RWVAFVBpPBDcTE7iR0ZeQn6ChsMl9FzZ8rWY3DhlHEt7goRDX321MEaWJkZan6wt4pYw_TZs9fMeO3G6pysCgVlrT_lLFePsOPH66kF49BRIo2ctzFTKo4pzlXDlrIFmVw7i8_RuQoXLYNhvpQUxcYFQiFVbPoja17NiaiE20bNifN934iNhMi2alUAgaZogfJV7YInFaKnwpaGPGr1NRpwyROQKlrBnLpzR",
    colSpan: "lg:col-span-5"
  },
  {
    id: "audio",
    name: "Spatial Audio & Tech",
    itemCount: "18 Pieces",
    description: "Lossless planar acoustics and sculptural hardware.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAd6pza-DAdNEJeHfpicaKLWHTkGGshWxZUEUlBN_wQgCpN69L0hfRqr1tLehBz883BuJySxGklmn7ItEBm9KirwrT-dBP8ow_X_VLD1jHjD9CKYDuJ46myvsv_IrRTWokbwpDPzUvZrdvMQ9kiyOGe34tNt0m-rz0If7EIdHVNHR_3g4HCBXNfaDGXrsvmTRmgheQHpIYYJBKLuOjMlg7sn4aAbjNis_wDz0NFevLgWqtG0z7F8pG",
    colSpan: "lg:col-span-4"
  },
  {
    id: "apparel",
    name: "Cashmere & Apparel",
    itemCount: "36 Pieces",
    description: "Monochrome pure cashmere knits and Como silk foulards.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRCSFhZfp2kAqBe6LZI2tuEbtEfFcU67sCT49oYMxESKFTJm59-YpKFFlP9ti8j3QBH8bzrTzZbgYV1hCV0t8l8i-vrj0szxt-xgD6AMhpqxaEqT9OXFPI2al5fail_9kKn0WgbNA-OM4aGKV9_FmKc6tK5NKxsTamxVzQNQ-yPajaxjinTA4AoCbWzo0g7ODeRFzWiytemuhk_FSmkfoibLyerQjNV_F9v-9r6o1k7KT_61UTW53F",
    colSpan: "lg:col-span-4"
  },
  {
    id: "living",
    name: "Architectural Living",
    itemCount: "29 Pieces",
    description: "Hand-thrown stoneware, living bronze vessels, and desk objects.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoMgXPcaeyCeF9HL51wwWFETpmpZ1jt8-FjQCQbzv65od_OxwrKiULlJjD1qgJAEHUnR5Out_Zt2GJzfGMinRo5g0dtLiG5dL77StDfS3U08Dxtf6sLmWTKDYL0ka3iPde3Gq6K6LNX2ApRqkLhnHBxqvNxWCFetxlQxu1TXsEh-uXRDidtkkQrnq7nfHHAEXGtB15lwstvsOMBEIIVcJGoXkZTgoVIL9Ak9XBwxbL8p-mRWnup5tH",
    colSpan: "lg:col-span-4"
  }
];

export const BRANDS = ["Aethel Studio", "Vesper Studio", "Kanso Elements", "Atelier Noir"];

export const PROMO_CODES = {
  "LUXE24": { rate: 0.15, description: "15% Seasonal VIP Discount" },
  "ATELIER10": { rate: 0.10, description: "10% First Acquisition Privilege" },
  "ARCHIVE20": { rate: 0.20, description: "20% Private Vault Privilege" }
};
