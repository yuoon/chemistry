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
    tip: "Reopened 2026 after renovations. Interior is small — the real reward is the waterfront walk from the tower to Padrão dos Descobrimentos at golden hour. Wide open, breezy, spectacular.",
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
    tip: "Locals' favourite viewpoint — far fewer tourists than Santa Luzia or Portas do Sol. Golden hour + cold cerveja from the kiosk = perfect. Neighbouring Graça streets feel genuinely unlisted.",
    mustDo: true,
    tags: ["Views", "Sunset", "Local"]
  },
  {
    id: 21, type: "sight",
    name: "Miradouro da Senhora do Monte",
    area: "Graça",
    emoji: "⛰️",
    rating: 5,
    price: "Free",
    cost: "Free",
    duration: "30–45 min",
    tip: "Lisbon's highest viewpoint — 360° panorama over all seven hills and the Tagus. Less known than the main miradouros, which means you might have the bench to yourself. Arrive 30–45 min before sunset.",
    mustDo: true,
    tags: ["Views", "Hidden", "Sunset"]
  },
  {
    id: 22, type: "sight",
    name: "Miradouro de Santa Catarina",
    area: "Bica",
    emoji: "🌇",
    rating: 5,
    price: "Free",
    cost: "Free",
    duration: "1–2 hrs",
    tip: "Lisbon's sunset social scene. Faces south over the Tejo estuary — the light is golden and the vibe is electric. Locals show up from 6 PM with wine and speakers. Don't miss it.",
    mustDo: true,
    tags: ["Views", "Sunset", "Vibes"]
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
    cost: "€20+/person",
    duration: "1–2 hrs",
    tip: "The original — still the best food hall in Europe. Budget €20+ per person. Go for bacalhau à Brás, petiscos, and ginjinha shots. Locals don't eat here daily — treat it as a curated best-of Lisbon experience.",
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
    tip: "Standing-only ginjinha bar. Get it 'com elas' — with the cherries in the glass. €1.50, no seats, no menus, no fuss. End your night here or use it as a punctuation mark between dinner and fado.",
    mustDo: true,
    tags: ["Drinks", "Local", "Iconic"]
  },
  {
    id: 23, type: "food",
    name: "Bifana at O Trevo",
    area: "Rossio",
    emoji: "🥖",
    rating: 5,
    price: "€",
    cost: "€2–3",
    duration: "15 min",
    tip: "Lisbon's #1 street food: marinated pork in a crusty roll with wine, garlic, and a hint of chili. O Trevo near Rossio is legendary. Eat it standing at the counter — it genuinely tastes better that way.",
    mustDo: true,
    tags: ["Street Food", "Lunch", "Cheap"]
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
    area: "38 min from Lisbon",
    emoji: "🏯",
    rating: 5,
    price: "€€",
    cost: "€2.45 train + €14–15 palace tickets",
    duration: "Full day",
    tip: "Board the 8 AM train from Rossio — tour buses hit Pena Palace by 9 AM. Sintra has its own microclimate: even if Lisbon is sunny, expect morning fog that clears by afternoon. Buy palace tickets online in advance.",
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
    area: "33–40 min from Lisbon",
    emoji: "🌊",
    rating: 4,
    price: "€",
    cost: "€2.45 train one-way",
    duration: "Half or full day",
    tip: "Train from Cais do Sodré every 15–30 min. Walk the sea promenade to Boca do Inferno blowhole cliffs. The adventurous can keep walking 9km more to wild Guincho Beach on the Atlantic.",
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
    tip: "The most pickpocketed tram in Europe — money belt mandatory. Go before 9 AM or after 6 PM to avoid sardine-can crowds. For Alfama without the chaos, take Tram 12E instead (same hills, fraction of the tourists).",
    mustDo: false,
    tags: ["Iconic", "Transport", "Scenic"]
  },
  {
    id: 24, type: "experience",
    name: "Petiscos Bar-Hop, Bairro Alto",
    area: "Bairro Alto",
    emoji: "🍢",
    rating: 5,
    price: "€€",
    cost: "€20–30/person",
    duration: "3–4 hrs",
    tip: "The local way to eat: drift between tiny bars from 6–10 PM, ordering one or two petiscos (Portuguese tapas) in each. Bairro Alto's cobblestone streets spill out to the footpath by 10 PM. No reservations, no rush.",
    mustDo: true,
    tags: ["Nightlife", "Food", "Local"]
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
        <li><strong>Chiado / Bairro Alto</strong> — Chic, central, great restaurants and bars. Best for first-timers. Noisy near Bairro Alto past midnight.</li>
        <li><strong>Príncipe Real</strong> — Sophisticated, leafy, boutique hotels. Antique shops, great cafés, quiet evenings. Sofia's top pick.</li>
        <li><strong>Alfama</strong> — Atmospheric and historic but hilly. Book carefully — some "Alfama" listings are 15+ min walk from anything. Explore early morning or late evening: cats on doorsteps, no crowds.</li>
        <li><strong>Mouraria</strong> — Birthplace of fado. Multicultural, authentic, less touristy. Genuinely diverse street food. Some streets feel edgy after midnight.</li>
        <li><strong>Belém</strong> — Peaceful, spacious, river views. 20 min to centre by Tram 15E. Perfect if you hate noise.</li>
      </ul>
      <h4>Neighbourhoods to Explore (Not Stay)</h4>
      <ul>
        <li><strong>Graça</strong> — Same hills as Alfama but a fraction of the tourists. Genuinely local. Best miradouros. Walk here, don't rush.</li>
        <li><strong>Campo de Ourique</strong> — Residential, calm, where Lisboetas actually live. Mercado de Campo de Ourique for cheap, excellent petiscos.</li>
        <li><strong>Intendente</strong> — Gritty-cool regeneration zone. Excellent coffee, multicultural street food. Where locals are moving.</li>
        <li><strong>Marvila</strong> — Lisbon's East End: warehouses turned breweries, galleries, natural wine bars. Worth a Sunday evening.</li>
        <li><strong>Santos / Cais do Sodré</strong> — Pink Street nightlife, seafood restaurants, the ferry terminal for Tagus crossings.</li>
      </ul>
      <p><em>Sofia's pick: Príncipe Real for the best balance of charm, access, and quality of life. Book 2–3 months ahead for May–June.</em></p>
    `
  },
  food: {
    icon: "🍽️",
    title: "The Lisbon Food Guide",
    body: `
      <h4>Must-Eat Dishes</h4>
      <ul>
        <li><strong>Pastel de Nata</strong> — Custard tart. Non-negotiable. Eat warm at Pastéis de Belém with cinnamon and powdered sugar. The recipe hasn't changed since 1837.</li>
        <li><strong>Bifana</strong> — Marinated pork in a crusty roll with white wine, garlic, and a hint of chili. Eat it standing at the counter at O Trevo near Rossio. €2–3. Tastes better that way — it's a fact.</li>
        <li><strong>Bacalhau à Brás</strong> — Shredded salt cod with scrambled eggs, onions, and matchstick crisps. Comfort food of the gods.</li>
        <li><strong>Ameijoas à Bulhão Pato</strong> — Clams in garlic, olive oil, coriander, white wine. Order with crusty bread to soak it up.</li>
        <li><strong>Pastéis de Bacalhau</strong> — Crispy salt cod cakes. Perfect with a cold Sagres.</li>
        <li><strong>Petiscos</strong> — Portuguese tapas. The local way: drift between bars from 6–10 PM, two plates per stop. Flavorful, shareable, never rushed.</li>
      </ul>
      <h4>Dining Rhythm</h4>
      <ul>
        <li><strong>Breakfast (8–10 AM):</strong> coffee + pastel de nata at a local pastelaria. Pay €2.50+ at tourist spots? Walk away.</li>
        <li><strong>Lunch (1–3 PM):</strong> prato do dia at a tasca — soup, main, dessert, half-litre wine: €10–13. Best value in Europe, full stop.</li>
        <li><strong>Petiscos (6–10 PM):</strong> bar-hop Bairro Alto or Mouraria for small plates and house wine. No reservations needed.</li>
        <li><strong>Dinner (9–11 PM):</strong> Locals eat late. Restaurants fill up after 8:30 PM. Restaurants with five-language menus and someone standing outside waving you in = avoid.</li>
      </ul>
      <h4>Drinks</h4>
      <ul>
        <li>Wine: Vinho Verde (crisp, slightly sparkling), Alentejo reds, Moscatel de Setúbal for dessert. €2–3 a glass at any tasca.</li>
        <li>Beer: Sagres and Super Bock. "Uma imperial" = draft pint. Or grab a Sagres at the supermarket for €0.70.</li>
        <li>Ginjinha: sour cherry liqueur. €1.50 a shot at Ginjinha Sem Rival in Rossio. Get it "com elas" — with the cherries.</li>
        <li>Coffee: "uma bica" = espresso. "Um galão" = tall latte. Skip the cappuccino; order like a local.</li>
      </ul>
      <h4>Where to Find the Real Stuff</h4>
      <ul>
        <li><strong>Tascas</strong> — Simple, traditional, half the price of trendy spots. No English menus is a good sign.</li>
        <li><strong>Mercado de Arroios or Campo de Ourique</strong> — Less touristy than Time Out. Fresh produce, artisan cheeses, proper petiscos.</li>
        <li><strong>Cervejaria Ramiro</strong> — For the full seafood splurge: tiger prawns, barnacles (percebes), and clams with an Imperial Sagres. Go at lunch to skip the dinner queue.</li>
      </ul>
    `
  },
  transport: {
    icon: "🚌",
    title: "Getting Around Lisbon",
    body: `
      <h4>Viva Viagem Card — Get This First</h4>
      <p>Buy at any metro station on arrival (€0.50 card fee). Load "Zapping" credit — works on metro, buses, trams, and ferries. Metro: €1.55. Tram: €1.55. Single tickets at the machine cost more; don't bother.</p>

      <h4>Metro</h4>
      <p>4 lines, clean, fast, air-conditioned. Covers most areas except Alfama and Belém (which need trams or Uber). Runs 6:30 AM – 1 AM. Your backbone for covering distance quickly.</p>

      <h4>Trams — Know the Difference</h4>
      <ul>
        <li><strong>Tram 28</strong>: Beautiful route through Alfama. Also Lisbon's most pickpocketed vehicle. Take it before 9 AM or after 6 PM only. Keep valuables in a front pocket or money belt.</li>
        <li><strong>Tram 12E</strong>: The insider alternative — covers the same Alfama hills, far fewer tourists. Take this instead of 28 when it's busy.</li>
        <li><strong>Tram 15E</strong>: Modern, air-conditioned, goes to Belém. Much better than 28 for the waterfront trip.</li>
      </ul>

      <h4>Buses</h4>
      <p>Extensive network. Google Maps and Moovit both work brilliantly in Lisbon. Night owl routes run when the metro closes — handy for late Bairro Alto nights.</p>

      <h4>Ferries</h4>
      <p>Transtejo ferries cross the Tagus to Cacilhas (~€1.55 with Viva Viagem). 10-min ride with sweeping views of Lisbon's skyline. Take the ferry to Cacilhas for dinner at a riverside fish restaurant — genuinely one of the best local experiences.</p>

      <h4>Uber / Bolt</h4>
      <p>Both work well. Bolt is usually slightly cheaper. Essential for Alfama hills at night, late returns, and anything with luggage. Airport to centre: ~€15–25 (25 min).</p>

      <h4>Airport Hack</h4>
      <p>Red metro line from the airport to Alameda/Marquês de Pombal: 20–25 min, €1.55. Skip the airport taxi queue entirely.</p>
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
      <p>Lisbon is one of Europe's safest capitals. Violent crime is very rare. The main risks are petty theft and tourist traps. Relax — but stay smart about your bag.</p>

      <h4>Pickpocket Hotspots</h4>
      <ul>
        <li><strong>Tram 28</strong> — The most pickpocketed tram in Europe. Money belt or valuables in front pockets only. Or take Tram 12E instead.</li>
        <li><strong>Alfama & Baixa</strong> — Narrow alleys are beautiful but moped bag-snatchers operate here. Wear your bag in front.</li>
        <li><strong>Rossio & Praça do Comércio</strong> — Busy squares attract distraction-based thieves. Don't flash phones or cameras.</li>
        <li><strong>Café chairs</strong> — Never hang your bag on the back of a chair. Keep it on your lap or between your feet.</li>
      </ul>

      <h4>Common Scams</h4>
      <ul>
        <li><strong>Fado "free show" invite</strong> — Someone on the street offers a free fado show, you end up with a €80 drinks bill. Walk away politely.</li>
        <li><strong>Friendship bracelet</strong> — Someone ties a bracelet on your wrist uninvited, then demands payment. Don't let anyone touch your wrist.</li>
        <li><strong>CD in your hands</strong> — A stranger places a CD in your hands and demands money. Drop it, keep walking.</li>
        <li><strong>Taxi overcharging</strong> — Always use Uber/Bolt or confirm the meter is running from the start. Official taxis are generally fine.</li>
        <li><strong>Restaurants on main squares</strong> — Rossio and Praça do Comércio restaurants are often overpriced with mediocre food. Walk two streets in any direction.</li>
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
      <h4>🏯 Sintra — 38 min train from Rossio</h4>
      <p>UNESCO World Heritage. Train every 10–30 min, €2.45 one-way. Highlights: Pena Palace (fairy-tale colours on a cloud-capped hill), Quinta da Regaleira (Masonic initiation wells, underground tunnels). Key tip: trains leave hourly before 8 AM, then get packed. Board the 8 AM train from Rossio. Sintra has its own micro-climate — morning fog often clears by midday. Buy palace tickets online. Budget €30–40 total.</p>

      <h4>🏖️ Arrábida Natural Park — 45 min drive</h4>
      <p>The best beaches near Lisbon. Turquoise water, limestone cliffs, snorkelling visibility like the Caribbean. Rent a car or book a group tour (€40–60). Best beaches: Portinho da Arrábida, Galapinhos (hike-in only). On the way back, stop at José Maria da Fonseca for Moscatel de Setúbal. Access roads get restricted in summer — book a tour to avoid parking chaos.</p>

      <h4>🌊 Cascais — 33–40 min train from Cais do Sodré</h4>
      <p>Former royal resort, now a gorgeous coastal town. Trains every 15–30 min, €2.45 one-way. Walk the sea promenade to Boca do Inferno blowhole cliffs. The adventurous can keep walking 9km to wild Guincho Beach on the open Atlantic — bring sunscreen and water.</p>

      <h4>🏟️ Óbidos — 1 hr bus from Praça de Espanha</h4>
      <p>Perfectly preserved 12th-century walled town. Walk the ramparts, drink ginja from a chocolate cup (an Óbidos tradition), wander blue-and-white painted streets. Half-day is enough. Combine with Nazaré (giant waves, dramatic cliff viewpoints) if you hire a car.</p>

      <h4>🐬 Setúbal & Tróia — 1 hr</h4>
      <p>Ferry across the estuary to Tróia Peninsula — 18km of Atlantic beach with dolphin-watching cruises. Setúbal has a brilliant fish market and waterfront restaurants. Best with a car or guided tour.</p>

      <h4>Day Trip Rules</h4>
      <ul>
        <li>Sintra: book Pena Palace tickets online. Queues without pre-booking can hit 2+ hours in May–June.</li>
        <li>Leave early — all day trips get more crowded after 10 AM. Aim to board by 8 AM.</li>
        <li>Arrábida beach parking is restricted June–Sept. Take a tour or risk a long walk.</li>
        <li>Lisbon Card covers some train routes — check before buying individual tickets.</li>
        <li>Sesimbra has no train — take a bus from Praça de Espanha (1 hr) or rent a car.</li>
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
