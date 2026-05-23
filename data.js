// ── Lisbon Suggestions Data ──────────────────────────────────────────────────

const SUGGESTIONS = [
  // SIGHTS
  {
    id: 1, type: "sight",
    name: "Jerónimos Monastery",
    area: "Belém",
    emoji: "⛪",
    rating: 5,
    price: "€€",
    cost: "€10 (free Sun before 2 PM)",
    duration: "2–3 hrs",
    tip: "Go early (opens 10 AM). Late Gothic Manueline architecture at its finest. The cloister alone is worth the trip.",
    mustDo: true,
    tags: ["UNESCO", "Architecture", "History"]
  },
  {
    id: 2, type: "sight",
    name: "São Jorge Castle",
    area: "Alfama",
    emoji: "🏰",
    rating: 4,
    price: "€€",
    cost: "€15",
    duration: "2 hrs",
    tip: "The views over the city are breathtaking. Go in the morning for soft golden light and fewer crowds.",
    mustDo: true,
    tags: ["History", "Views", "Moorish"]
  },
  {
    id: 3, type: "sight",
    name: "Torre de Belém",
    area: "Belém",
    emoji: "🗼",
    rating: 4,
    price: "€",
    cost: "€6",
    duration: "1 hr",
    tip: "Iconic but small inside. Best enjoyed from outside and combined with a walk along the waterfront.",
    mustDo: false,
    tags: ["UNESCO", "History", "Waterfront"]
  },
  {
    id: 4, type: "sight",
    name: "Museu Nacional do Azulejo",
    area: "Xabregas",
    emoji: "🎨",
    rating: 5,
    price: "€",
    cost: "€5",
    duration: "2 hrs",
    tip: "Hidden gem. The 18th-century azulejo panorama of pre-earthquake Lisbon is a once-in-a-lifetime artwork.",
    mustDo: true,
    tags: ["Art", "Culture", "Tiles"]
  },
  {
    id: 5, type: "sight",
    name: "Miradouro da Graça",
    area: "Graça",
    emoji: "🌅",
    rating: 5,
    price: "Free",
    cost: "Free",
    duration: "30–60 min",
    tip: "Locals' favourite viewpoint — less crowded than Santa Luzia. Perfect at golden hour with a cerveja from the kiosk.",
    mustDo: true,
    tags: ["Views", "Sunset", "Local"]
  },
  {
    id: 6, type: "sight",
    name: "LX Factory",
    area: "Alcântara",
    emoji: "🏭",
    rating: 4,
    price: "Free",
    cost: "Free entry",
    duration: "2–3 hrs",
    tip: "Visit on Sunday for the market. The bookshop Ler Devagar, set inside an old press building, is magical.",
    mustDo: false,
    tags: ["Market", "Cool", "Sunday"]
  },

  // FOOD & DRINK
  {
    id: 7, type: "food",
    name: "Time Out Market",
    area: "Cais do Sodré",
    emoji: "🍽️",
    rating: 5,
    price: "€€",
    cost: "€10–20/person",
    duration: "1–2 hrs",
    tip: "The original — still the best food hall in Europe. Try bacalhau à Brás, ginjinha shots, and Portuguese cheeses.",
    mustDo: true,
    tags: ["Market", "Seafood", "Local"]
  },
  {
    id: 8, type: "food",
    name: "Pastéis de Belém",
    area: "Belém",
    emoji: "🥐",
    rating: 5,
    price: "€",
    cost: "€1.50 per tart",
    duration: "30 min",
    tip: "The original recipe since 1837. Eat them warm with cinnamon and powdered sugar. Queue moves fast.",
    mustDo: true,
    tags: ["Pastries", "Iconic", "Breakfast"]
  },
  {
    id: 9, type: "food",
    name: "Cervejaria Ramiro",
    area: "Intendente",
    emoji: "🦐",
    rating: 5,
    price: "€€€",
    cost: "€40–60/person",
    duration: "2 hrs",
    tip: "Lisbon's legendary seafood beer hall. Go for the prawns, barnacles (percebes), and a cold Imperial. Book or expect queues.",
    mustDo: true,
    tags: ["Seafood", "Beer", "Splurge"]
  },
  {
    id: 10, type: "food",
    name: "Taberna da Rua das Flores",
    area: "Chiado",
    emoji: "🍷",
    rating: 4,
    price: "€€",
    cost: "€25–35/person",
    duration: "2 hrs",
    tip: "Modern Portuguese cooking using traditional ingredients. The cured meats and cheeses board is exceptional. Book ahead.",
    mustDo: false,
    tags: ["Portuguese", "Wine", "Upscale"]
  },
  {
    id: 11, type: "food",
    name: "Ginjinha Sem Rival",
    area: "Rossio",
    emoji: "🍒",
    rating: 5,
    price: "€",
    cost: "€1.50/shot",
    duration: "10 min",
    tip: "Standing-only ginjinha bar that's been here forever. Get it 'com elas' — with the cherries. A Lisbon ritual.",
    mustDo: true,
    tags: ["Drinks", "Local", "Iconic"]
  },
  {
    id: 12, type: "food",
    name: "Mercado de Campo de Ourique",
    area: "Campo de Ourique",
    emoji: "🛒",
    rating: 4,
    price: "€€",
    cost: "€10–15/person",
    duration: "1 hr",
    tip: "Neighbourhood food market — less touristy than Time Out. Great petiscos (Portuguese tapas) and local atmosphere.",
    mustDo: false,
    tags: ["Market", "Local", "Tapas"]
  },

  // DAY TRIPS
  {
    id: 13, type: "daytrip",
    name: "Sintra",
    area: "30 min from Lisbon",
    emoji: "🏯",
    rating: 5,
    price: "€€",
    cost: "€2.35 train + €14–15 palace tickets",
    duration: "Full day",
    tip: "Take the 7:30 AM train from Rossio to beat the crowds at Pena Palace. Also see Quinta da Regaleira's mysterious initiation well.",
    mustDo: true,
    tags: ["UNESCO", "Palaces", "Nature"]
  },
  {
    id: 14, type: "daytrip",
    name: "Arrábida Natural Park",
    area: "45 min from Lisbon",
    emoji: "🏖️",
    rating: 5,
    price: "€€",
    cost: "€30–50 car rental or tour",
    duration: "Full day",
    tip: "Crystal-clear turquoise waters that feel Mediterranean. Pack snorkelling gear. Best beaches: Portinho da Arrábida and Galapinhos.",
    mustDo: true,
    tags: ["Beach", "Nature", "Swimming"]
  },
  {
    id: 15, type: "daytrip",
    name: "Cascais & Estoril",
    area: "40 min from Lisbon",
    emoji: "🌊",
    rating: 4,
    price: "€",
    cost: "€3.90 train return",
    duration: "Half or full day",
    tip: "Charming fishing town turned glamorous coastal resort. Visit Boca do Inferno cliffs. Walk the 3km coastal path to Estoril.",
    mustDo: false,
    tags: ["Beach", "Coastal", "Easy"]
  },
  {
    id: 16, type: "daytrip",
    name: "Óbidos",
    area: "1 hr from Lisbon",
    emoji: "🏟️",
    rating: 4,
    price: "€€",
    cost: "€12 bus return",
    duration: "Half day",
    tip: "Perfectly preserved medieval walled town. Drink ginjinha served in a chocolate cup — an Óbidos tradition. Can combine with Nazaré.",
    mustDo: false,
    tags: ["Medieval", "Walled Town", "Ginja"]
  },

  // EXPERIENCES
  {
    id: 17, type: "experience",
    name: "Live Fado at Tasca do Chico",
    area: "Alfama",
    emoji: "🎵",
    rating: 5,
    price: "€€",
    cost: "€10 cover (consume minimum)",
    duration: "3 hrs",
    tip: "Reserve 2–3 weeks ahead — it's tiny and famous. Authentic, emotional fado. Arrive hungry; the petiscos are excellent.",
    mustDo: true,
    tags: ["Music", "Culture", "Evening"]
  },
  {
    id: 18, type: "experience",
    name: "Tram 28 Ride",
    area: "Martim Moniz → Prazeres",
    emoji: "🚋",
    rating: 4,
    price: "€",
    cost: "€3 (Viva Viagem: €1.55)",
    duration: "45 min",
    tip: "Iconic yellow tram through Alfama's narrowest streets. Go early morning (8–9 AM) to avoid huge tourist crowds. Watch your pockets.",
    mustDo: false,
    tags: ["Iconic", "Transport", "Scenic"]
  },
  {
    id: 19, type: "experience",
    name: "Cooking Class: Bacalhau & Pastel",
    area: "Various locations",
    emoji: "👨‍🍳",
    rating: 5,
    price: "€€€",
    cost: "€65–80/person",
    duration: "3–4 hrs",
    tip: "Learn to make Portugal's famous salt cod and custard tarts. Includes market visit. Cookly and Airbnb Experiences have great options.",
    mustDo: false,
    tags: ["Cooking", "Culture", "Hands-on"]
  },
  {
    id: 20, type: "experience",
    name: "Sunset Sailboat Tour",
    area: "Tagus River",
    emoji: "⛵",
    rating: 5,
    price: "€€€",
    cost: "€45–70/person",
    duration: "2 hrs",
    tip: "Seeing Lisbon's skyline and 25 de Abril Bridge from the Tagus at sunset is unforgettable. Book through Get Your Guide.",
    mustDo: false,
    tags: ["River", "Sunset", "Romantic"]
  }
];

// ── Travel Agent Advice ──────────────────────────────────────────────────────

const ADVICE = {
  neighbourhood: {
    icon: "🏘️",
    title: "Best Neighbourhoods to Stay & Explore",
    body: `
      <h4>Where to Stay</h4>
      <ul>
        <li><strong>Chiado / Bairro Alto</strong> — Chic, central, great restaurants and bars. Best for first-timers. Noisy at night near Bairro Alto.</li>
        <li><strong>Príncipe Real</strong> — Sophisticated, leafy, boutique hotels. Antique shops, great cafés, quiet evenings. My top pick.</li>
        <li><strong>Alfama</strong> — Atmospheric and historic, but hilly. Book carefully — some "Alfama" listings are far from the action.</li>
        <li><strong>Mouraria</strong> — Authentic, multicultural, off the tourist trail. Great food. Some streets feel rough at night.</li>
        <li><strong>Belém</strong> — Peaceful, spacious, perfect if you want to avoid crowds. 20 min to centre by tram or Uber.</li>
      </ul>
      <h4>Neighbourhoods to Explore (Not Stay)</h4>
      <ul>
        <li><strong>Intendente</strong> — Gritty-cool regeneration zone. Excellent coffee, multicultural street food.</li>
        <li><strong>Marvila</strong> — Lisbon's East End: warehouses turned into breweries, galleries, wine bars. Worth an evening.</li>
        <li><strong>Santos / Cais do Sodré</strong> — Evening and night scene. Pink Street, seafood restaurants, rooftop bars.</li>
      </ul>
      <p><em>Sofia's pick: Stay in Príncipe Real for the best balance of charm, access, and quality of life.</em></p>
    `
  },
  food: {
    icon: "🍽️",
    title: "The Lisbon Food Guide",
    body: `
      <h4>Must-Eat Dishes</h4>
      <ul>
        <li><strong>Pastel de Nata</strong> — Custard tart. Non-negotiable. Eat warm, with cinnamon.</li>
        <li><strong>Bacalhau à Brás</strong> — Shredded salt cod with eggs, onions, and crisps. Comfort food of the gods.</li>
        <li><strong>Ameijoas à Bulhão Pato</strong> — Clams in garlic, olive oil, coriander, white wine. Order with crusty bread to soak it up.</li>
        <li><strong>Bifanas</strong> — Pork sandwich with mustard. Street food staple. Buy from O Trevo near Rossio for €2.</li>
        <li><strong>Pastéis de Bacalhau</strong> — Crispy salt cod cakes. Perfect with a cold Sagres.</li>
        <li><strong>Francesinha</strong> — This is Porto's dish but Tasca do Chico sometimes does a riff on it. Rich, meaty, saucy.</li>
      </ul>
      <h4>Dining Rhythm</h4>
      <ul>
        <li>Breakfast (8–10 AM): coffee + pastel de nata at a local café. Never pay café prices at tourist spots.</li>
        <li>Lunch (1–3 PM): prato do dia at a tasca — soup, main, dessert, wine: €10–13. Best value in Europe.</li>
        <li>Petiscos hour (6–8 PM): Portuguese tapas with wine. Taberna da Rua das Flores or Tasca do Lagarto.</li>
        <li>Dinner (9–11 PM): Locals eat late. Restaurants fill up after 8:30 PM.</li>
      </ul>
      <h4>Drinks</h4>
      <ul>
        <li>Wine: Vinho Verde (crisp, slightly fizzy), Alentejo reds, Moscatel de Setúbal for dessert.</li>
        <li>Beer: Sagres and Super Bock. Order "uma imperial" for a draft.</li>
        <li>Ginjinha: cherry liqueur. €1.50 at Ginjinha Sem Rival in Rossio. Drink standing.</li>
        <li>Coffee: "uma bica" = espresso. "Um galão" = latte. Never order a cappuccino.</li>
      </ul>
    `
  },
  transport: {
    icon: "🚌",
    title: "Getting Around Lisbon",
    body: `
      <h4>Viva Viagem Card — Your #1 Priority</h4>
      <p>Buy at any metro station (€0.50 card fee). Load with "Zapping" credit — valid on metro, buses, trams, and ferries. Metro ride: €1.55. Much cheaper than single tickets (€1.99+).</p>

      <h4>Metro</h4>
      <p>4 lines, clean, fast, air-conditioned. Covers most tourist areas except Alfama and Belém. 6:30 AM – 1 AM. Your primary tool for covering distance.</p>

      <h4>Trams</h4>
      <ul>
        <li><strong>Tram 28</strong>: Famous but packed with tourists and pickpockets. Worth it early AM. Use Viva Viagem (not paper ticket).</li>
        <li><strong>Tram 15E</strong>: Goes to Belém. More modern, less crowded, air-conditioned. Recommended over 28 for Belém trips.</li>
        <li><strong>Tram 12E</strong>: Alfama loop. Short and useful.</li>
      </ul>

      <h4>Buses</h4>
      <p>Extensive network. Use Google Maps or Moovit app — both work brilliantly in Lisbon. Night buses (night owl routes) run when metro closes.</p>

      <h4>Ferries</h4>
      <p>Transtejo ferries cross the Tagus to Cacilhas, Barreiro, and Montijo. Scenic and cheap (~€1.55 with Viva Viagem). The Cacilhas crossing for dinner is a local favourite.</p>

      <h4>Uber / Bolt</h4>
      <p>Both work well. Bolt tends to be slightly cheaper. Useful for late nights, Alfama hills, and airport. Airport to centre: ~€15–25.</p>

      <h4>Airport</h4>
      <p>Humberto Delgado Airport is on the red metro line — 25 min to centre, €1.55. Uber runs €15–25. No need for an airport taxi — they're overpriced.</p>
    `
  },
  budget: {
    icon: "💶",
    title: "Budget Guide: What Things Actually Cost",
    body: `
      <h4>Daily Budget Estimates</h4>
      <ul>
        <li><strong>Budget traveller:</strong> €60–80/day (hostel, self-catering breakfasts, prato do dia lunches, cooking dinner)</li>
        <li><strong>Mid-range:</strong> €120–180/day (3-star hotel, lunch + dinner out, 1–2 activities)</li>
        <li><strong>Comfort/splurge:</strong> €250–400/day (boutique hotel, fine dining, guided tours)</li>
      </ul>

      <h4>Actual Prices (2026)</h4>
      <ul>
        <li>Espresso (bica): €0.80–1.20 (tourist areas: up to €2.50 — avoid!)</li>
        <li>Pastel de nata: €1.20–1.50</li>
        <li>Prato do dia (daily special): €10–13</li>
        <li>Bifana sandwich: €2–3</li>
        <li>Glass of wine at a tasca: €2–3.50</li>
        <li>Craft beer: €3–5</li>
        <li>Sagres in a supermarket: €0.70</li>
        <li>Metro single: €1.55 (Viva Viagem)</li>
        <li>Jerónimos Monastery: €10</li>
        <li>São Jorge Castle: €15</li>
        <li>Pena Palace (Sintra): €14.50</li>
      </ul>

      <h4>Money-Saving Tips</h4>
      <ul>
        <li>Many museums are free on Sunday mornings before 2 PM — Jerónimos, Museu do Azulejo, etc.</li>
        <li>Lisbon Card (€22/24hr, €38/48hr, €46/72hr) — unlimited transport + free/discounted entry to 80+ sites. Worth it if you're sightseeing intensively.</li>
        <li>Supermarkets: Pingo Doce and Continente for cheap, excellent Portuguese wine (€4–8), cheese, and snacks.</li>
        <li>Avoid restaurants with photos on the menu and someone standing outside inviting you in — tourist traps without exception.</li>
      </ul>
    `
  },
  safety: {
    icon: "🔒",
    title: "Safety, Scams & Common Sense",
    body: `
      <h4>Overall Safety</h4>
      <p>Lisbon is one of Europe's safest capitals. Violent crime is rare. The main risks are petty theft and tourist scams. Relax, but stay smart.</p>

      <h4>Pickpocket Hotspots</h4>
      <ul>
        <li><strong>Tram 28</strong> — The most pickpocketed tram in Europe. Use a hidden money belt or keep valuables in front pockets.</li>
        <li><strong>Alfama's narrow alleys</strong> — Beautiful but easy for bag snatchers on mopeds. Keep bags on your inside shoulder.</li>
        <li><strong>Rossio & Praça do Comércio</strong> — Busy squares attract distraction thieves. Don't flash expensive cameras/phones.</li>
        <li><strong>Baixa at night</strong> — Can get rough around Intendente after midnight. Stick to lit streets.</li>
      </ul>

      <h4>Common Scams</h4>
      <ul>
        <li><strong>Fado "free show" lure</strong> — Someone offers a free fado show, then you get a €80 drinks bill. Walk away.</li>
        <li><strong>Overcharging taxis</strong> — Always use Uber/Bolt or confirm meter is running. Official taxis are fine but confirm the rate.</li>
        <li><strong>CD scam</strong> — Someone puts a CD in your hands and demands money. Drop it and walk.</li>
        <li><strong>Friendship bracelet</strong> — Tied on your wrist, then payment demanded. Don't let anyone touch your wrist.</li>
      </ul>

      <h4>Emergency Numbers</h4>
      <ul>
        <li>Emergency (Police/Fire/Medical): <strong>112</strong></li>
        <li>PSP Tourist Police (Alfama): <strong>+351 21 342 1623</strong></li>
        <li>UK Embassy: <strong>+351 21 392 4000</strong></li>
        <li>US Embassy: <strong>+351 21 727 3300</strong></li>
      </ul>
    `
  },
  packing: {
    icon: "🎒",
    title: "Sofia's Lisbon Packing List",
    body: `
      <p>Click the "🎒 Packing List" button above to open the interactive checklist below!</p>
    `,
    showPacking: true
  },
  fado: {
    icon: "🎵",
    title: "Fado, Culture & Nightlife",
    body: `
      <h4>What is Fado?</h4>
      <p>Fado is Portugal's soul music — melancholic, passionate, often about longing (saudade), the sea, fate, and lost love. It's a UNESCO Intangible Cultural Heritage. Hearing it live in a small Alfama tasca is a genuinely moving experience.</p>

      <h4>Best Fado Venues</h4>
      <ul>
        <li><strong>Tasca do Chico</strong> (Alfama) — Small, authentic, excellent petiscos. Book 2–3 weeks ahead. €10 cover + food consumption.</li>
        <li><strong>Mesa de Frades</strong> (Alfama) — Intimate, inside a converted chapel. Stunning acoustics. Book well ahead.</li>
        <li><strong>Clube de Fado</strong> (Alfama) — More formal, higher quality performances. Good for a special night out.</li>
        <li><strong>A Severa</strong> (Mouraria) — Named after the legendary fadista Maria Severa. Traditional atmosphere.</li>
      </ul>
      <p><em>Avoid</em>: large "fado restaurants" near Praça do Comércio that seat 200+ people. The food is overpriced and the fado is background noise.</p>

      <h4>Nightlife Beyond Fado</h4>
      <ul>
        <li><strong>Pink Street (Rua Nova do Carvalho)</strong> — Cais do Sodré's neon-lit bar strip. Starts buzzing around midnight.</li>
        <li><strong>Bairro Alto</strong> — Tiny bars spill into cobblestone streets. Drinks are cheap, crowd is young. 10 PM–3 AM.</li>
        <li><strong>Lux Frágil</strong> — Lisbon's legendary club on the Tagus waterfront. Electronic music, rooftop terrace. Queue by 1 AM.</li>
        <li><strong>MAAT &amp; Marvila</strong> — Weekend warehouse parties and art openings. Check Lisbon's Resident Advisor listings.</li>
      </ul>

      <h4>Cultural Tips</h4>
      <ul>
        <li>During fado performances: <strong>absolute silence</strong>. No talking, no phones. Applaud at the end of each song.</li>
        <li>Santo António Festival (June 12–13) — Just after your trip, but if you extend: Lisbon's biggest street party in Alfama.</li>
        <li>Portuguese are warm but reserved at first. Learn 3 words: "obrigado/a" (thank you), "por favor" (please), "faz favor" (excuse me / waiter call).</li>
      </ul>
    `
  },
  daytrips: {
    icon: "🌊",
    title: "Best Day Trips from Lisbon",
    body: `
      <h4>🏯 Sintra (Must-Do) — 40 min</h4>
      <p>UNESCO World Heritage site. Take the train from Rossio station. Highlights: Pena Palace (fairy-tale colours on a hilltop), Quinta da Regaleira (mysterious initiation wells and Masonic gardens), Sintra National Palace in the town centre. Buy a combo ticket online to skip queues. Budget: €30–40 for transport + entries.</p>

      <h4>🏖️ Arrábida Natural Park — 45 min drive</h4>
      <p>The most beautiful beaches near Lisbon. Turquoise water, dramatic limestone cliffs, crystal clear visibility for snorkelling. Rent a car or book a day tour (€40–60). Best beaches: Portinho da Arrábida, Galapinhos (hike-in only). Stop at José Maria da Fonseca winery for Moscatel de Setúbal on the way back.</p>

      <h4>🌊 Cascais — 40 min train</h4>
      <p>Former royal summer resort, now a chic coastal town. Train from Cais do Sodré (€3.90 return). Walk the sea promenade to Boca do Inferno (blowhole cliffs). Good beaches, excellent seafood restaurants. Can continue walking 9km to Guincho Beach — wild Atlantic dunes.</p>

      <h4>🏟️ Óbidos — 1 hr bus</h4>
      <p>Perfectly preserved 12th-century walled town. Walk the walls, drink ginja from a chocolate cup, wander white-and-blue painted streets. Half-day is plenty. Combine with Nazaré (giant waves, cliff-top views) if you have a car.</p>

      <h4>🐬 Setúbal & Tróia — 1 hr</h4>
      <p>Cross the estuary by ferry to Tróia Peninsula — 18km of Atlantic beach with dolphin-watching cruises. Setúbal itself has an excellent fish market and great restaurants. Best with a car or a guided tour.</p>

      <h4>Tips for Day Trips</h4>
      <ul>
        <li>Book Sintra tickets online — Palace queues can be 2+ hours without pre-booking.</li>
        <li>Start early (7–8 AM) for all day trips — you'll share sights with far fewer people.</li>
        <li>For Arrábida: Parking near the best beaches is restricted in summer. Join a tour or rent a scooter/bike.</li>
        <li>Lisbon Card includes some day-trip train discounts — check before buying individual tickets.</li>
      </ul>
    `
  }
};

// ── Packing List ─────────────────────────────────────────────────────────────

const PACKING_ITEMS = [
  { category: "Clothing", items: [
    "Breathable t-shirts (5–6)",
    "Light linen or cotton trousers (2)",
    "One smart casual outfit for fado dinner",
    "Shorts (2–3)",
    "Light jacket or layer for evenings",
    "Comfortable walking shoes — no new ones!",
    "Sandals for beach / casual",
    "Underwear & socks (7 days)",
    "Swimwear (2 sets for Arrábida)"
  ]},
  { category: "Essentials", items: [
    "Passport (valid 6+ months beyond June 6)",
    "EHIC / travel insurance card",
    "Printed hotel confirmations",
    "Viva Viagem card (buy on arrival)",
    "€100–200 cash for small purchases",
    "Phone + charger",
    "Portable charger (power bank)",
    "Universal EU plug adapter"
  ]},
  { category: "Health & Sun", items: [
    "High-SPF sunscreen (50+) — June sun is strong",
    "Lip balm with SPF",
    "Sunglasses",
    "Wide-brim hat or cap",
    "Prescription medications",
    "Ibuprofen / paracetamol",
    "Blister plasters (cobblestones WILL test you)",
    "Insect repellent (for evening outdoors)"
  ]},
  { category: "Daypack Essentials", items: [
    "Small daypack or crossbody bag",
    "Reusable water bottle",
    "Snorkel mask (for Arrábida — or rent there)",
    "Lightweight rain jacket (just in case)",
    "Small umbrella"
  ]},
  { category: "Smart Traveller", items: [
    "Download Google Maps offline (Lisbon area)",
    "Download Moovit for public transport",
    "Save Uber & Bolt apps",
    "Screenshot hotel addresses in Portuguese",
    "Note emergency numbers: 112",
    "TIDAL or Spotify: download Portuguese fado playlist"
  ]}
];
