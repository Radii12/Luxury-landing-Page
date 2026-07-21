import { ServiceItem, Vehicle, Testimonial, OperatingHub, RoutePrice } from '../types';

export const UI_TEXT = {
  brandName: {
    en: 'Best Taxi Service',
    de: 'Best Taxi Service'
  },
  tagline: {
    en: 'Your companion on the road, wherever you are in Switzerland',
    de: 'Ihr verlässlicher Begleiter auf Schweizer Strassen'
  },
  subtitleRole: {
    en: 'VIP Chauffeur & Executive Transfer',
    de: 'VIP Chauffeur & Exekutiv-Transfer'
  },
  nav: {
    services: { en: 'Services', de: 'Dienstleistungen' },
    whyUs: { en: 'Why Us', de: 'Warum Wir' },
    fleet: { en: 'Fleet', de: 'Fahrzeugpark' },
    reviews: { en: 'Reviews', de: 'Bewertungen' },
    coverage: { en: 'Coverage', de: 'Einzugsgebiet' },
    prices: { en: 'Prices', de: 'Preise' },
    contact: { en: 'Contact', de: 'Kontakt' },
    bookRideNow: { en: 'Book Your Ride Now', de: 'Jetzt Fahrt Buchen' },
    callUs: { en: 'Call Chauffeur 24/7', de: 'Chauffeur Anrufen 24/7' },
    menu: { en: 'Menu', de: 'Menü' }
  },
  hero: {
    badge: {
      en: 'Official VIP Chauffeur & Executive Limousine • Switzerland',
      de: 'Offizieller VIP-Chauffeur & Exekutiv-Limousinenservice • Schweiz'
    },
    eyeline: {
      en: 'Prepared for VIP Travellers, Business Leaders & Families Across Switzerland',
      de: 'Für VIP-Gäste, Geschäftsleute und Familien in der gesamten Schweiz'
    },
    titleLine1: { en: 'Your Arrival, On Time —', de: 'Ihre Ankunft, Pünktlich —' },
    titleLine2: { en: 'Wherever You’re Headed', de: 'Wohin Ihre Reise Auch Führt' },
    lead1: {
      en: 'Always with you to any destination — a professional driver team, and coverage spanning 8 Swiss operating hubs.',
      de: 'Stets an Ihrer Seite zu jedem Ziel — ein professionelles Chauffeur-Team und 8 operative Schweizer Standorte.'
    },
    lead2: {
      en: 'Over 9,800 trips delivered their passengers exactly on time. Whether you’re booking for yourself, a client, or your family, the right service is ready within minutes.',
      de: 'Über 9.800 Fahrten haben unsere Passagiere auf die Minute genau ans Ziel gebracht. Für Sie, Ihre Geschäftspartner oder Ihre Familie — in wenigen Minuten fahrbereit.'
    },
    quickBookHeader: { en: 'Instant Chauffeur Reservation', de: 'Sofortige Chauffeur-Reservierung' },
    quickBookSub: { en: 'Book your ride in under a minute • No account needed', de: 'In unter 60 Sekunden gebucht • Keine Registrierung nötig' },
    ctaCalculate: { en: 'Calculate Price & Book', de: 'Preis Berechnen & Buchen' },
    ctaWhatsapp: { en: 'Chat on WhatsApp', de: 'Auf WhatsApp Schreiben' },
    stats: {
      trips: { label: { en: 'Completed Trips', de: 'Erfolgreiche Fahrten' }, value: '9,800+' },
      clients: { label: { en: 'Clients Who Trust Us', de: 'Zufriedene Kunden' }, value: '4,500+' },
      availability: { label: { en: 'Always-On Service', de: 'Rund um die Uhr' }, value: '24/7' },
      hubs: { label: { en: 'Swiss Operating Hubs', de: 'Schweizer Standorte' }, value: '8' }
    }
  },
  servicesSection: {
    eyebrow: { en: 'Section 3 • Scannable & Specialized', de: 'Sektion 3 • Spezialisierte Dienste' },
    title: { en: 'A Service for Every Trip, and Every Occasion', de: 'Ein maßgeschneiderter Service für jede Reise' },
    subtitle: {
      en: 'From the airport to a wedding, from the school run to corporate transport — choose what suits you in one tap.',
      de: 'Vom Flughafen bis zur Hochzeit, von Schulfahrten bis zum Firmen-Transfer — wählen Sie mit einem Klick.'
    },
    question: { en: 'Do you offer exactly what I need?', de: 'Bieten Sie genau das an, was ich suche?' }
  },
  whyUsSection: {
    eyebrow: { en: 'Section 4 • Uncompromising Quality', de: 'Sektion 4 • Unkompromisslose Qualität' },
    title: { en: 'Why Choose Us', de: 'Warum Sie Uns Wählen Sollen' },
    subtitle: {
      en: 'Trust Isn’t Built With Words — It’s Our Full Commitment to Your Schedule',
      de: 'Vertrauen entsteht nicht durch Worte — sondern durch absolute Termintreue'
    },
    question: { en: 'What makes you different from any other driver?', de: 'Was unterscheidet Sie von normalen Taxis?' },
    pillars: [
      {
        num: '01',
        title: { en: 'Absolute Reliability', de: 'Absolute Verlässlichkeit' },
        headline: { en: 'We arrive on time, always', de: 'Pünktlich am Treffpunkt, ausnahmslos' },
        text: {
          en: 'We track traffic and flight movement in real time, so we are in place before you need us. No waiting, no delayed starts.',
          de: 'Wir überwachen Verkehrsdaten und Flugstatus in Echtzeit. Unser Chauffeur wartet bereits auf Sie, bevor Sie aussteigen.'
        }
      },
      {
        num: '02',
        title: { en: 'First-Class Safety', de: 'Höchste Sicherheit' },
        headline: { en: 'Licensed drivers, monitored routes', de: 'Zertifizierte Chauffeure, überwachte Routen' },
        text: {
          en: 'Every driver passes a rigorous Swiss background check and defensive driving certification. Every route is traceable.',
          de: 'Jeder Fahrer durchläuft strenge Schweizer Sicherheitsprüfungen und Fahrsicherheitstrainings. Jede Route wird digital überwacht.'
        }
      },
      {
        num: '03',
        title: { en: 'Chauffeur Comfort & Discretion', de: 'Komfort & Höchste Diskretion' },
        headline: { en: 'Serene interiors, maximum space', de: 'Ruhiges Ambiente, maximales Platzangebot' },
        text: {
          en: 'Immaculately maintained vehicles, climate precision, quiet luxury cabin environment, bottled Swiss water, high-speed Wi-Fi.',
          de: 'Tadellos gepflegte Premium-Fahrzeuge, temperierte Kabine, Schweizer Mineralwasser, Highspeed-WLAN und absolute Diskretion.'
        }
      }
    ]
  },
  fleetSection: {
    eyebrow: { en: 'Section 5 • The Garage', de: 'Sektion 5 • Die Flotte' },
    title: { en: 'Cars That Match Your Journey', de: 'Fahrzeuge, die Ihrem Anlass entsprechen' },
    subtitle: {
      en: 'From executive business sedans to luxury VIP first class and extra-long passenger vans — pick what fits your group.',
      de: 'Von der Business-Klasse über die First-Class-Limousine bis zum XL VIP Van — wählen Sie das perfekte Fahrzeug.'
    },
    filterAll: { en: 'All Vehicles', de: 'Alle Fahrzeuge' },
    filterBusiness: { en: 'Business Class', de: 'Business Klasse' },
    filterFirst: { en: 'VIP First Class', de: 'VIP First Class' },
    filterVan: { en: 'Luxury Vans', de: 'Luxus Vans' },
    passengersLabel: { en: 'Guests', de: 'Gäste' },
    luggageLabel: { en: 'Suitcases', de: 'Koffer' },
    requestClassBtn: { en: 'Request This Class', de: 'Diese Klasse Anfragen' }
  },
  reviewsSection: {
    eyebrow: { en: 'Section 6 • Credibility & Verification', de: 'Sektion 6 • Kundenstimmen' },
    title: { en: 'What Our Customers Say About Us', de: 'Was Unsere Kunden Über Uns Sagen' },
    subtitle: {
      en: 'Reviews from customers who actually used our services across different Swiss routes and occasions.',
      de: 'Echte Erfahrungsberichte von Gästen, die unseren Service in der Schweiz genutzt haben.'
    },
    ratingBadge: { en: '4.9 ★ — based on 4,500+ verified Swiss clients', de: '4.9 ★ — basierend auf 4.500+ verifizierten Kunden' },
    addedDaily: { en: '+9,800 trips completed with daily satisfaction stories', de: '+9.800 Fahrten absolviert — täglich neue zufriedene Gäste' }
  },
  coverageSection: {
    eyebrow: { en: 'Section 7 • Geographic Authority', de: 'Sektion 7 • Einsatzgebiet' },
    title: { en: 'Wherever You Are in Switzerland, We’re One Ride Away', de: 'Wo Auch Immer Sie In Der Schweiz Sind — Wir Sind Da' },
    subtitle: {
      en: '8 active operating hubs covering key Swiss cities, airports, business districts, and alpine destinations.',
      de: '8 aktive Standorte in Schweizer Großstädten, Flughäfen, Wirtschaftszentren und Alpendestinationen.'
    },
    hubStatusActive: { en: 'Active Hub — 24/7 Service Ready', de: 'Aktiver Standort — 24/7 Betriebsbereit' },
    searchPlaceholder: { en: 'Type your town or destination (e.g. Zug, Davos, Zurich Airport)...', de: 'Ort oder Ziel eingeben (z.B. Zug, Davos, Flughafen Zürich)...' }
  },
  pricingSection: {
    eyebrow: { en: 'Section 8 • Guaranteed Transparency', de: 'Sektion 8 • Transparente Festpreise' },
    title: { en: 'Clear Pricing That Fits Your Trip', de: 'Klare, Transparente Preisstruktur' },
    subtitle: {
      en: 'Know your exact fixed rate before boarding. No surprises, no hidden surcharges.',
      de: 'Kennen Sie Ihren Festpreis vor der Fahrt. Keine Überraschungen, keine versteckten Kosten.'
    },
    promoBannerTitle: { en: 'SPECIAL LOCAL CAMPAIGN RATE', de: 'LOKALE AKTIONSTARIFE' },
    promoBannerHeadline: { en: 'Bis 15 Km fixed price — CHF 80.-', de: 'Bis 15 Km Festpreis — CHF 80.-' },
    promoSub: { en: 'Includes local town transfers within 15 km perimeter. Book instantly via Chauffeur Hotline.', de: 'Gilt für lokale Fahrten im Umkreis von 15 km. Sofort per Hotline buchbar.' },
    regionalTabs: {
      seeMarch: { en: '1. Region See & March', de: '1. Region See & March' },
      knonaueramt: { en: '2. Knonaueramt', de: '2. Knonaueramt' },
      zugInnerschweiz: { en: '3. Zug & Innerschweiz', de: '3. Zug & Innerschweiz' },
      business: { en: '4. Alpine Business & Cross-Border', de: '4. Business & Alpine Routen' }
    },
    calcTitle: { en: 'Interactive Live Fare Estimator', de: 'Interaktiver Fahrpreisrechner' },
    calcSub: { en: 'Select pickup and dropoff to calculate instant estimated fare:', de: 'Wählen Sie Start und Ziel für eine sofortige Preisschätzung:' },
    taxiHeader: { en: 'Sedan / Taxi', de: 'Limousine / Taxi' },
    vanHeader: { en: 'VIP Van (Up to 8)', de: 'VIP Van (Bis 8 Personen)' }
  },
  bookingForm: {
    title: { en: 'Book Your VIP Chauffeur Ride', de: 'VIP Chauffeur Buchen' },
    subtitle: { en: 'Fill out the details below. We confirm within minutes with exact rate and driver assignment.', de: 'Geben Sie Ihre Details ein. Wir bestätigen Ihre Fahrt innerhalb weniger Minuten.' },
    fields: {
      pickup: { label: { en: 'Pickup Point', de: 'Abholort' }, placeholder: { en: 'e.g. Zurich Airport (ZRH) or Hotel Baur au Lac', de: 'z.B. Flughafen Zürich oder Hotel Baur au Lac' } },
      destination: { label: { en: 'Destination Point', de: 'Zielort' }, placeholder: { en: 'e.g. St. Moritz, Zug Main Station, Winterthur', de: 'z.B. St. Moritz, Bahnhof Zug, Winterthur' } },
      date: { label: { en: 'Date of Trip', de: 'Datum der Fahrt' } },
      time: { label: { en: 'Pickup Time', de: 'Uhrzeit' } },
      serviceType: { label: { en: 'Service Type', de: 'Service-Art' } },
      vehicleType: { label: { en: 'Vehicle Class', de: 'Fahrzeugklasse' } },
      passengers: { label: { en: 'Passengers', de: 'Anzahl Personen' } },
      fullName: { label: { en: 'Your Name', de: 'Ihr Name' }, placeholder: { en: 'e.g. Dr. Alexander Weber', de: 'z.B. Dr. Alexander Weber' } },
      phone: { label: { en: 'Phone Number (WhatsApp)', de: 'Telefonnummer (mit Vorwahl)' }, placeholder: { en: '+41 79 123 45 67', de: '+41 79 123 45 67' } },
      email: { label: { en: 'Email Address', de: 'E-Mail Adresse' }, placeholder: { en: 'name@company.com', de: 'name@firma.ch' } },
      message: { label: { en: 'Special Requests / Luggage Notes', de: 'Besondere Wünsche / Gepäck' }, placeholder: { en: 'Flight number, child seat requirement, extra suitcases...', de: 'Flugnummer, Kindersitz, zusätzliche Koffer...' } }
    },
    submitBtn: { en: 'Confirm Chauffeur Reservation', de: 'Chauffeur-Reservierung Bestätigen' },
    submitting: { en: 'Processing Reservation Request...', de: 'Reservierung wird übermittelt...' },
    successTitle: { en: 'Reservation Submitted Successfully!', de: 'Reservierung Erfolgreich Übermittelt!' },
    successMsg: {
      en: 'Thank you. Our dispatcher has received your journey request and will confirm your chauffeur assignment via SMS / WhatsApp within 5 minutes.',
      de: 'Vielen Dank. Unser Dispatcher hat Ihre Anfrage erhalten und wird Ihnen die Bestätigung inkl. Chauffeur-Details in wenigen Minuten zusenden.'
    },
    whatsappOrCall: { en: 'Need immediate departure in < 15 minutes?', de: 'Sofortige Abfahrt in unter 15 Minuten benötigt?' }
  },
  footer: {
    rights: { en: 'All rights reserved. Best Taxi Service Switzerland.', de: 'Alle Rechte vorbehalten. Best Taxi Service Schweiz.' },
    address: { en: 'Hubs: Winterthur • Opfikon • Zurich Airport • Zug', de: 'Standorte: Winterthur • Opfikon • Flughafen Zürich • Zug' },
    phone: '+41 76 489 47 41',
    email: 'info@besttaxiservice.ch'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'airport',
    icon: '✈️',
    title: { en: 'Airport Transfer', de: 'Flughafen Transfer' },
    subtitle: { en: 'Punctual & Flight-Tracked', de: 'Pünktlich & Flugüberwacht' },
    description: {
      en: 'Guaranteed arrival, even if your flight is delayed. We track flight status in real time and meet you inside arrivals with a personalized name sign.',
      de: 'Garantierte pünktliche Abholung bei Landung. Wir überwachen Ihren Flug live und erwarten Sie direkt in der Ankunftshalle mit Namensschild.'
    },
    ctaText: { en: 'Book Airport Transfer', de: 'Flughafentransfer Buchen' },
    tag: { en: 'Most Requested', de: 'Beliebteste Wahl' },
    features: {
      en: ['Real-time flight tracking', '60-min complimentary wait time', 'Meet & Greet service', 'Fixed airport rates'],
      de: ['Live-Flugverfolgung', '60 Min. kostenlose Wartezeit', 'Personalisiertes Meet & Greet', 'Garantierte Festpreise']
    }
  },
  {
    id: 'limousine',
    icon: '👑',
    title: { en: 'Limousine & VIP Chauffeur', de: 'Limousinen & VIP Chauffeur' },
    subtitle: { en: 'Executive Comfort & Elegance', de: 'Exekutiver Komfort & Eleganz' },
    description: {
      en: 'For those who want the ride itself to be part of the occasion. Top-tier Mercedes-Benz S-Class & Maybach vehicles with discreet, suited professional drivers.',
      de: 'Für Gäste, die allerhöchsten Komfort schätzen. Mercedes-Benz S-Klasse & Maybach mit professionellen, diskreten Chauffeuren im Anzug.'
    },
    ctaText: { en: 'Reserve VIP Limousine', de: 'VIP-Limousine Buchen' },
    features: {
      en: ['Top-tier Mercedes fleet', 'Discreet suited chauffeurs', 'Onboard refreshment bar', 'Privacy partition glass'],
      de: ['Top Mercedes-Benz Flotte', 'Diskrete Chauffeure im Anzug', 'Erfrischungsgetränke an Bord', 'Sichtschutz & Intimsphäre']
    }
  },
  {
    id: 'tandem',
    icon: '🔀',
    title: { en: 'Tandem & Shared Express', de: 'Tandem & Shared Express' },
    subtitle: { en: 'Smart Shared Comfort', de: 'Smarter Geteilter Komfort' },
    description: {
      en: 'Share the route along major Swiss corridors to optimize expenses without ever compromising on luxury seat comfort, cleanliness, or timing.',
      de: 'Teilen Sie die Fahrstrecke auf Hauptrouten für optimale Wirtschaftlichkeit — ohne Kompromisse bei Bequemlichkeit, Hygiene und Pünktlichkeit.'
    },
    ctaText: { en: 'Book Shared Ride', de: 'Gemeinsame Fahrt Buchen' },
    features: {
      en: ['Cost-efficient premium option', 'Strict schedule adherence', 'Spacious individual seats', 'Luggage optimization'],
      de: ['Kosteneffizienter Premium-Transfer', 'Strikter Fahrplan', 'Großzügige Einzelssitze', 'Garantierter Gepäckraum']
    }
  },
  {
    id: 'courier',
    icon: '📦',
    title: { en: 'Express Courier & Valuables', de: 'Express Kurye & Werttransporte' },
    subtitle: { en: 'Hand-Delivered Precision', de: 'Persönliche Direktzustellung' },
    description: {
      en: 'Sending urgent documents, high-value packages, or confidential contract files? We deliver door-to-door across Switzerland with continuous GPS oversight.',
      de: 'Dringende Dokumente, Verträge oder hochwertige Fracht? Wir liefern direkt von Tür zu Tür mit lückenloser GPS-Überwachung.'
    },
    ctaText: { en: 'Request Courier Delivery', de: 'Kuriertransport Anfragen' },
    features: {
      en: ['Door-to-door direct dispatch', 'Proof of signature receipt', 'Confidential handling', '24/7 immediate pickup'],
      de: ['Direkte Tür-zu-Tür Zustellung', 'Schriftliche Übergabebestätigung', 'Höchste Vertraulichkeit', 'Sofortige 24/7 Abholung']
    }
  },
  {
    id: 'events',
    icon: '💍',
    title: { en: 'Events, Weddings & Galas', de: 'Events, Hochzeiten & Galas' },
    subtitle: { en: 'Unforgettable VIP Arrivals', de: 'Unvergessliche Auftritte' },
    description: {
      en: 'A day that deserves an arrival just as grand, elegant, and flawless. Coordinated multi-vehicle fleets for wedding parties, WEF Davos, or private galas.',
      de: 'Ein besonderer Tag verdient eine stilvolle Ankunft. Perfekt koordinierte Flotten für Hochzeiten, WEF Davos oder Galas.'
    },
    ctaText: { en: 'Book Event Fleet', de: 'Event-Flotte Buchen' },
    features: {
      en: ['Decorated car options', 'Multi-car coordination', 'Red carpet arrival prep', 'Flexible hour standbys'],
      de: ['Optionale Fahrzeugdekoration', 'Mehrfahrzeug-Koordination', 'VIP-Empfangsvorbereitung', 'Stundenweise Bereitschaft']
    }
  },
  {
    id: 'school',
    icon: '🎒',
    title: { en: 'School & Youth Transport', de: 'Schul- & Schülertransporte' },
    subtitle: { en: 'Safe, Punctual & Trusted Routine', de: 'Sicher, Pünktlich & Betreut' },
    description: {
      en: 'Parents’ peace of mind starts with a vetted, warm driver who knows the daily school route, keeps strict timing, and sends live pickup notifications.',
      de: 'Elterliche Beruhigung durch erfahrene, geprüfte Fahrer, die den täglichen Schulweg kennen, pünktlich sind und Live-Meldungen senden.'
    },
    ctaText: { en: 'Request School Transport', de: 'Schul-Service Anfragen' },
    features: {
      en: ['Child safety seats provided', 'Vetted background chauffeurs', 'Direct SMS arrival alerts', 'Daily or monthly contract'],
      de: ['Zertifizierte Kindersitze', 'Überprüfte Stammchauffeure', 'SMS-Ankunftsbenachrichtigung', 'Abonnement oder Einzelbuchung']
    }
  },
  {
    id: 'corporate',
    icon: '🏢',
    title: { en: 'Corporate Accounts', de: 'Firmenkunden & B2B' },
    subtitle: { en: 'Centralized Billing & VIP Management', de: 'Zentrale Abrechnung & B2B Service' },
    description: {
      en: 'Comprehensive corporate mobility management for international executives, visiting board members, and business roadshows with monthly invoicing.',
      de: 'Ganzheitliche Mobilitätslösung für Führungskräfte, Vorstandsgäste und Geschäftspartner mit monatlicher Sammelrechnung.'
    },
    ctaText: { en: 'Open Corporate Account', de: 'Firmenkonto Eröffnen' },
    features: {
      en: ['Monthly itemized invoicing', 'Priority vehicle dispatch', 'Dedicated account manager', 'Flexible modification'],
      de: ['Monatliche Sammelrechnung', 'Bevorzugte Dispo-Priorität', 'Persönlicher Ansprechpartner', 'Kostenfreie Stornierung']
    }
  }
];

export const FLEET_DATA: Vehicle[] = [
  {
    id: 's-class',
    name: 'Mercedes-Benz S-Class / Maybach',
    classType: { en: 'VIP First Class Sedan', de: 'VIP First Class Limousine' },
    category: 'first',
    passengers: 3,
    luggage: 3,
    imageJpg: '/images/cars/mercedes-s-class.jpg',
    imageWebp: '/images/cars/mercedes-s-class.jpg',
    description: {
      en: 'The flagship of automotive luxury. Acoustic glass insulation, massage seating, ambient executive lighting, and ultra-smooth air suspension.',
      de: 'Das Flaggschiff des Automobilluxus. Akustikverglasung, Massagesitze, Executive-Ambiente und Luftfederung.'
    },
    amenities: {
      en: ['High-Speed 5G Wi-Fi', 'Bottled Swiss Mineral Water', 'USB-C Fast Charging', 'Heated & Cooled Rear Seats', 'Air Purification'],
      de: ['Highspeed 5G WLAN', 'Schweizer Mineralwasser', 'USB-C Schnellladung', 'Sitzklimatisierung Fond', 'Ionisierende Luftreinigung']
    },
    basePrice: 'CHF 180.-'
  },
  {
    id: 'v-class',
    name: 'Mercedes-Benz V-Class Extra Long',
    classType: { en: 'Executive Passenger Van', de: 'Exekutiver VIP Van' },
    category: 'van',
    passengers: 7,
    luggage: 8,
    imageJpg: '/images/cars/mercedes-v-class.jpg',
    imageWebp: '/images/cars/mercedes-v-class.jpg',
    description: {
      en: 'Supreme group luxury with conference face-to-face seating, massive luggage room for up to 8 oversized suitcases, and total passenger liberty.',
      de: 'Höchster Gruppenkomfort mit Konferenzbestuhlung, gewaltigem Gepäckraum für bis zu 8 XL Koffer und viel Beinfreiheit.'
    },
    amenities: {
      en: ['Conference Leather Seating', '5G Wi-Fi', 'Individual Climate Zones', 'Fold-out Meeting Table', 'Multiple Power Outlets'],
      de: ['Konferenz-Lederbestuhlung', '5G WLAN', 'Separate Klimazonen', 'Ausklappbarer Besprechungstisch', 'Mehrere 230V Steckdosen']
    },
    basePrice: 'CHF 190.-'
  },
  {
    id: 'bmw-7',
    name: 'BMW 7 Series xDrive',
    classType: { en: 'Business VIP Limousine', de: 'Business VIP Limousine' },
    category: 'first',
    passengers: 3,
    luggage: 3,
    imageJpg: '/images/cars/bmw-7-series.jpg',
    imageWebp: '/images/cars/bmw-7-series.jpg',
    description: {
      en: 'Commanding dynamic presence and silent cabin performance. Perfect for business transfers between Zurich, Zug, and Basel.',
      de: 'Dynamische Eleganz und flüsterleise Kabine. Ideal für Geschäftsreisen zwischen Zürich, Zug und Basel.'
    },
    amenities: {
      en: ['Privacy Sunshades', 'Bowers & Wilkins Audio', 'Fresh Towels & Water', 'Workstation Laptop Tray'],
      de: ['Elektrische Sonnenschutzrollos', 'Bowers & Wilkins Sound', 'Frische Erfrischungstücher', 'Arbeitsplatz-Funktion']
    },
    basePrice: 'CHF 170.-'
  },
  {
    id: 'audi-a8',
    name: 'Audi A8 L Quattro',
    classType: { en: 'Executive Luxury Sedan', de: 'Exekutive Luxus-Limousine' },
    category: 'business',
    passengers: 3,
    luggage: 3,
    imageJpg: '/images/cars/audi-a8.jpg',
    imageWebp: '/images/cars/audi-a8.jpg',
    description: {
      en: 'Sophisticated long-wheelbase elegance combined with Quattro all-weather confidence across Alpine mountain passes.',
      de: 'Elegante Langversion mit Quattro-Allradantrieb für maximale Stabilität auf Schweizer Alpenpässen.'
    },
    amenities: {
      en: ['Quattro All-Wheel Drive', 'Soft-Close Doors', 'Wi-Fi & Magazines', 'Spacious Legroom'],
      de: ['Quattro Allradantrieb', 'Soft-Close Türen', 'WLAN & Wirtschaftsmagazine', 'Erweiterte Beinfreiheit']
    },
    basePrice: 'CHF 160.-'
  },
  {
    id: 'business-sedan',
    name: 'Mercedes-Benz E-Class Premium',
    classType: { en: 'Business Class Sedan', de: 'Business-Klasse Limousine' },
    category: 'business',
    passengers: 3,
    luggage: 3,
    imageJpg: '/images/cars/business-sedan.jpg',
    imageWebp: '/images/cars/business-sedan.jpg',
    description: {
      en: 'The global standard for professional corporate travel. Reliable, spotless, quiet, and equipped for working on the move.',
      de: 'Der weltweite Maßstab für professionelle Geschäftsreisen. Zuverlässig, makellos gepflegt und leise.'
    },
    amenities: {
      en: ['Quiet Business Cabin', 'Complimentary Bottled Water', 'Device Charging', 'Real-Time GPS Tracking'],
      de: ['Ruhiger Arbeitsinnenraum', 'Kostenloses Mineralwasser', 'Lademöglichkeiten', 'Echtzeit-GPS Tracking']
    },
    basePrice: 'CHF 120.-'
  },
  {
    id: 'luxury-van',
    name: 'VIP Executive Shuttler Van',
    classType: { en: 'Group Shuttle (Up to 8)', de: 'Gruppenshuttle (Bis 8 Personen)' },
    category: 'van',
    passengers: 8,
    luggage: 10,
    imageJpg: '/images/cars/luxury-van.jpg',
    imageWebp: '/images/cars/luxury-van.jpg',
    description: {
      en: 'Tailor-made for international ski delegations going to St. Moritz, Davos, or corporate event guest shuttles with high luggage demands.',
      de: 'Maßgeschneidert für Skidelegationen nach St. Moritz, Davos oder größere Eventgruppen mit viel Gepäck.'
    },
    amenities: {
      en: ['Ski Equipment Cargo Area', 'Rear Passenger AC Control', 'Leather Seats', 'Bottled Alpine Water'],
      de: ['Skiausrüstungs-Laderaum', 'Separates Fond-Klimagerät', 'Lederausstattung', 'Alpen-Mineralwasser']
    },
    basePrice: 'CHF 210.-'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Markus von Gunten',
    city: 'Zurich & St. Moritz',
    role: { en: 'Private Equity Director', de: 'Director Private Equity' },
    quote: {
      en: 'I rely on Best Taxi Service for all our executive board members landing at Zurich Airport. The chauffeurs are always waiting in the terminal before we land, the cars are pristine, and the billing is effortless.',
      de: 'Ich verlasse mich bei allen Vorstandsmitgliedern am Flughafen Zürich auf Best Taxi Service. Die Chauffeure warten bereits im Terminal, die Fahrzeuge sind perfekt gepflegt und die Abrechnung verläuft reibungslos.'
    },
    rating: 5,
    route: 'Zurich Airport → St. Moritz',
    date: 'February 2026'
  },
  {
    id: '2',
    name: 'Sophie & Laurent Mercier',
    city: 'Geneva / Winterthur',
    role: { en: 'VIP Event Guests', de: 'Hochzeitsgäste' },
    quote: {
      en: 'Booked the Mercedes V-Class for our family wedding in Pfäffikon. Impeccable driver attitude, spotless leather seats, and completely stress-free coordination for all our international relatives.',
      de: 'Haben die Mercedes V-Klasse für unsere Familienfeier in Pfäffikon gebucht. Einwandfreies Auftreten des Chauffeurs, makellose Ledersitze und absolut stressfreie Koordination für unsere internationalen Gäste.'
    },
    rating: 5,
    route: 'Opfikon → Pfäffikon See',
    date: 'January 2026'
  },
  {
    id: '3',
    name: 'Dr. Hans-Peter Keller',
    city: 'Zug',
    role: { en: 'Corporate Client', de: 'Stammkunde Firmenreisen' },
    quote: {
      en: 'Unlike standard taxi dispatch where arrival times fluctuate, Best Taxi Service has delivered 100% punctuality across 30+ trips I’ve booked this year. Transparent rates with zero surprise fees.',
      de: 'Anders als bei normalen Taxizentralen mit schwankenden Zeiten war Best Taxi Service bei all meinen über 30 Fahrten in diesem Jahr auf die Minute pünktlich. Transparente Festpreise ohne versteckte Aufschläge.'
    },
    rating: 5,
    route: 'Zug → Zurich City Center',
    date: 'January 2026'
  }
];

export const OPERATING_HUBS: OperatingHub[] = [
  {
    id: 'zh-airport',
    name: 'Zurich Airport Hub (ZRH)',
    canton: 'ZH',
    statusText: { en: 'Primary Airport Terminal Hub • 24/7 Fleet', de: 'Hauptflughafen-Standort • 24/7 Bereitschaft' },
    lat: 47.4582,
    lng: 8.5555,
    destinations: {
      en: ['Direct Terminal Meet & Greet', 'Zurich City Center (15 min)', 'Winterthur (18 min)', 'Zug & Lucerne transfers'],
      de: ['Direktes Terminal Meet & Greet', 'Zürich Zentrum (15 Min)', 'Winterthur (18 Min)', 'Zug & Luzern Transfers']
    },
    is24_7: true
  },
  {
    id: 'winterthur',
    name: 'Winterthur Central Hub',
    canton: 'ZH',
    statusText: { en: 'Regional Station & City Coverage', de: 'Regionaler Hauptstandort' },
    lat: 47.4988,
    lng: 8.7237,
    destinations: {
      en: ['Winterthur City & Suburbs', 'Frauenfeld & Thurgau border', 'Airport Shuttle'],
      de: ['Stadt Winterthur & Agglomeration', 'Frauenfeld & Thurgau', 'Flughafen-Shuttle']
    },
    is24_7: true
  },
  {
    id: 'opfikon',
    name: 'Opfikon & Glattbrugg Hub',
    canton: 'ZH',
    statusText: { en: 'Business Hotel Corridor Dispatch', de: 'Business-Hotel Gürtel Standby' },
    lat: 47.4333,
    lng: 8.5667,
    destinations: {
      en: ['Glattbrugg Hotel Belt', 'Airport Express', 'Zurich North Commercial Zone'],
      de: ['Hotelmeile Glattbrugg', 'Airport Express', 'Gewerbezone Zürich Nord']
    },
    is24_7: true
  },
  {
    id: 'zug',
    name: 'Zug & Cham Financial Hub',
    canton: 'ZG',
    statusText: { en: 'Crypto Valley & Corporate Transport', de: 'Crypto Valley & B2B Hub' },
    lat: 47.1662,
    lng: 8.5155,
    destinations: {
      en: ['Zug Main Station & Lakefront', 'Cham / Steinhausen', 'Zurich Airport Direct'],
      de: ['Bahnhof Zug & Seepromenade', 'Cham / Steinhausen', 'Flughafen Zürich Direkt']
    },
    is24_7: true
  },
  {
    id: 'see-march',
    name: 'Region See & March Hub (Pfäffikon / Lachen)',
    canton: 'SZ',
    statusText: { en: 'Lake Zurich South Shore Station', de: 'Zürichsee Süd-Ufer Standort' },
    lat: 47.2008,
    lng: 8.7836,
    destinations: {
      en: ['Hurden, Pfäffikon, Freienbach', 'Lachen, Altendorf, Wollerau', 'Wädenswil & Horgen'],
      de: ['Hurden, Pfäffikon, Freienbach', 'Lachen, Altendorf, Wollerau', 'Wädenswil & Horgen']
    },
    is24_7: true
  },
  {
    id: 'knonaueramt',
    name: 'Knonaueramt Hub (Affoltern / Wettswil)',
    canton: 'ZH',
    statusText: { en: 'Säuliamt Regional Service', de: 'Säuliamt Regionaler Service' },
    lat: 47.2792,
    lng: 8.4528,
    destinations: {
      en: ['Hedingen, Bonstetten, Wettswil', 'Stallikon, Birmensdorf', 'Bremgarten & Aargau border'],
      de: ['Hedingen, Bonstetten, Wettswil', 'Stallikon, Birmensdorf', 'Bremgarten & Grenze Aargau']
    },
    is24_7: true
  },
  {
    id: 'innerschweiz',
    name: 'Lucerne & Weggis Riviera Hub',
    canton: 'LU',
    statusText: { en: 'Lake Lucerne Riviera & Alpine Resort Access', de: 'Vierwaldstättersee Riviera & Alpendienst' },
    lat: 47.0502,
    lng: 8.3093,
    destinations: {
      en: ['Küssnacht am Rigi, Meggen', 'Weggis & Vitznau Resort Hotels', 'Zurich Airport Express'],
      de: ['Küssnacht am Rigi, Meggen', 'Weggis & Vitznau Luxushotels', 'Flughafen Zürich Express']
    },
    is24_7: true
  },
  {
    id: 'alpine',
    name: 'Alpine & Davos WEF High-Altitude Hub',
    canton: 'GR',
    statusText: { en: 'Ski Resorts & International Cross-Border', de: 'Skigebiete & Grenzüberschreitender VIP Service' },
    lat: 46.8027,
    lng: 9.836,
    destinations: {
      en: ['Davos & Klosters VIP transfers', 'St. Moritz & Engadin Valley', 'Bad Ragaz Resort', 'Milano & Munich cross-border'],
      de: ['Davos & Klosters VIP Transfer', 'St. Moritz & Engadin', 'Bad Ragaz Grand Resort', 'Milano & München Grenzverkehr']
    },
    is24_7: true
  }
];

export const REGIONAL_PRICES: RoutePrice[] = [
  // REGION 1: See & March
  { route: 'Lachen / Altendorf → Flughafen ZH', taxiPrice: '220.–', vanPrice: '230.–', region: 'see-march' },
  { route: 'Lachen / Altendorf → Zürich City', taxiPrice: '180.–', vanPrice: '190.–', region: 'see-march' },
  { route: 'Hurden / Pfäffikon / Freienbach → Flughafen ZH', taxiPrice: '180.–', vanPrice: '190.–', region: 'see-march' },
  { route: 'Hurden / Pfäffikon / Freienbach → Zürich City', taxiPrice: '140.–', vanPrice: '150.–', region: 'see-march' },
  { route: 'Feusisberg / Schindellegi → Flughafen ZH', taxiPrice: '170.–', vanPrice: '180.–', region: 'see-march' },
  { route: 'Wollerau / Bäch → Flughafen ZH', taxiPrice: '160.–', vanPrice: '170.–', region: 'see-march' },
  { route: 'Richterswil / Samstagern → Flughafen ZH', taxiPrice: '150.–', vanPrice: '160.–', region: 'see-march' },
  { route: 'Wädenswil → Flughafen ZH', taxiPrice: '140.–', vanPrice: '150.–', region: 'see-march' },
  { route: 'Horgen → Flughafen ZH', taxiPrice: '130.–', vanPrice: '140.–', region: 'see-march' },

  // REGION 2: Knonaueramt
  { route: 'Hedingen → Flughafen ZH', taxiPrice: '120.–', vanPrice: '130.–', region: 'knonaueramt' },
  { route: 'Bonstetten → Flughafen ZH', taxiPrice: '110.–', vanPrice: '120.–', region: 'knonaueramt' },
  { route: 'Wettswil am Albis → Flughafen ZH', taxiPrice: '100.–', vanPrice: '110.–', region: 'knonaueramt' },
  { route: 'Stallikon → Flughafen ZH', taxiPrice: '100.–', vanPrice: '110.–', region: 'knonaueramt' },
  { route: 'Birmensdorf → Flughafen ZH', taxiPrice: '90.–', vanPrice: '100.–', region: 'knonaueramt' },
  { route: 'Uitikon Waldegg → Flughafen ZH', taxiPrice: '90.–', vanPrice: '100.–', region: 'knonaueramt' },
  { route: 'Bremgarten / Zufikon / Widen → Flughafen ZH', taxiPrice: '130.–', vanPrice: '140.–', region: 'knonaueramt' },
  { route: 'Bremgarten / Zufikon / Widen → Zürich City', taxiPrice: '100.–', vanPrice: '110.–', region: 'knonaueramt' },
  { route: 'Oberwil-Lieli → Flughafen ZH', taxiPrice: '120.–', vanPrice: '130.–', region: 'knonaueramt' },

  // REGION 3: Zug & Innerschweiz
  { route: 'Zug → Flughafen ZH', taxiPrice: '170.–', vanPrice: '180.–', region: 'zug-innerschweiz' },
  { route: 'Baar → Flughafen ZH', taxiPrice: '170.–', vanPrice: '180.–', region: 'zug-innerschweiz' },
  { route: 'Cham / Steinhausen → Flughafen ZH', taxiPrice: '160.–', vanPrice: '170.–', region: 'zug-innerschweiz' },
  { route: 'Küssnacht am Rigi → Flughafen ZH', taxiPrice: '200.–', vanPrice: '210.–', region: 'zug-innerschweiz' },
  { route: 'Merlischachen → Flughafen ZH', taxiPrice: '200.–', vanPrice: '210.–', region: 'zug-innerschweiz' },
  { route: 'Meggen → Flughafen ZH', taxiPrice: '230.–', vanPrice: '240.–', region: 'zug-innerschweiz' },
  { route: 'Greppen → Flughafen ZH', taxiPrice: '210.–', vanPrice: '220.–', region: 'zug-innerschweiz' },
  { route: 'Weggis → Flughafen ZH', taxiPrice: '230.–', vanPrice: '240.–', region: 'zug-innerschweiz' },
  { route: 'Vitznau → Flughafen ZH', taxiPrice: '240.–', vanPrice: '250.–', region: 'zug-innerschweiz' },

  // REGION 4: Business & Alpine
  { route: 'Flughafen ZH → Davos WEF', taxiPrice: '560.–', vanPrice: '710.–', region: 'business' },
  { route: 'Flughafen ZH → St. Moritz / Engadin', taxiPrice: '810.–', vanPrice: '880.–', region: 'business' },
  { route: 'Flughafen ZH → Bad Ragaz Resort', taxiPrice: '410.–', vanPrice: '460.–', region: 'business' },
  { route: 'Flughafen ZH → Basel EuroAirport / City', taxiPrice: '360.–', vanPrice: '410.–', region: 'business' },
  { route: 'Flughafen ZH → Geneva (Genf)', taxiPrice: '910.–', vanPrice: '1010.–', region: 'business' },
  { route: 'Flughafen ZH → Milano / München', taxiPrice: 'On Request', vanPrice: 'Auf Anfrage', region: 'business' },
  { route: 'Full-Day Chauffeur Package (250 km / 8.5 hrs)', taxiPrice: '860.–', vanPrice: '980.–', region: 'business' }
];
