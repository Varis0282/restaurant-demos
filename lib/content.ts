// Shared bilingual content consumed by all 5 restaurant themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export type MenuItem = { name: string; nameHi: string; price: number; special?: boolean; desc?: string; descHi?: string };

export const menu: { icon: string; en: { title: string }; hi: { title: string }; items: MenuItem[] }[] = [
  {
    icon: "Flame", en: { title: "Starters & Tandoor" }, hi: { title: "स्टार्टर व तंदूर" },
    items: [
      { name: "Paneer Tikka", nameHi: "पनीर टिक्का", price: 220, special: true, desc: "Charcoal-grilled, house masala", descHi: "कोयले पर सिका, घर का मसाला" },
      { name: "Hara Bhara Kebab", nameHi: "हरा भरा कबाब", price: 180 },
      { name: "Crispy Corn", nameHi: "क्रिस्पी कॉर्न", price: 190 },
      { name: "Veg Seekh Kebab", nameHi: "वेज सीख कबाब", price: 200 },
      { name: "Mushroom Duplex", nameHi: "मशरूम डुप्लेक्स", price: 240 },
    ],
  },
  {
    icon: "Soup", en: { title: "Main Course" }, hi: { title: "मेन कोर्स" },
    items: [
      { name: "Paneer Butter Masala", nameHi: "पनीर बटर मसाला", price: 260, special: true, desc: "Our most-ordered dish since 2012", descHi: "2012 से सबसे ज़्यादा ऑर्डर होने वाली डिश" },
      { name: "Dal Tadka", nameHi: "दाल तड़का", price: 180 },
      { name: "Dal Makhani", nameHi: "दाल मखनी", price: 220 },
      { name: "Veg Kolhapuri", nameHi: "वेज कोल्हापुरी", price: 240 },
      { name: "Malai Kofta", nameHi: "मलाई कोफ्ता", price: 250 },
      { name: "Kaju Curry", nameHi: "काजू करी", price: 280 },
    ],
  },
  {
    icon: "UtensilsCrossed", en: { title: "Thali Specials" }, hi: { title: "थाली स्पेशल" },
    items: [
      { name: "Zaika Special Thali", nameHi: "ज़ायका स्पेशल थाली", price: 320, special: true, desc: "2 sabzi, dal, paneer, 4 roti, rice, sweet, chaas", descHi: "2 सब्ज़ी, दाल, पनीर, 4 रोटी, चावल, मिठाई, छाछ" },
      { name: "Rajasthani Thali", nameHi: "राजस्थानी थाली", price: 280 },
      { name: "Mini Thali", nameHi: "मिनी थाली", price: 180 },
    ],
  },
  {
    icon: "Sun", en: { title: "South Indian" }, hi: { title: "साउथ इंडियन" },
    items: [
      { name: "Masala Dosa", nameHi: "मसाला डोसा", price: 140, special: true, desc: "Crisp, ghee-roasted, sambhar-chutney", descHi: "कुरकुरा, घी में सिका, सांभर-चटनी" },
      { name: "Paper Dosa", nameHi: "पेपर डोसा", price: 160 },
      { name: "Idli Sambhar", nameHi: "इडली सांभर", price: 100 },
      { name: "Onion Uttapam", nameHi: "प्याज़ उत्तपम", price: 150 },
    ],
  },
  {
    icon: "Salad", en: { title: "Chinese" }, hi: { title: "चाइनीज़" },
    items: [
      { name: "Veg Manchurian", nameHi: "वेज मंचूरियन", price: 200 },
      { name: "Hakka Noodles", nameHi: "हक्का नूडल्स", price: 180 },
      { name: "Veg Fried Rice", nameHi: "वेज फ्राइड राइस", price: 170 },
      { name: "Chilli Paneer", nameHi: "चिली पनीर", price: 240 },
    ],
  },
  {
    icon: "Star", en: { title: "Indori Specials" }, hi: { title: "इंदौरी स्पेशल" },
    items: [
      { name: "Poha-Jalebi (8–11 AM)", nameHi: "पोहा-जलेबी (सुबह 8–11)", price: 60, special: true, desc: "The Indore breakfast — steamed poha, sev, hot jalebi", descHi: "इंदौर का नाश्ता — भाप वाला पोहा, सेव, गरम जलेबी" },
      { name: "Bhutte ka Kees", nameHi: "भुट्टे का कीस", price: 100, special: true, desc: "Malwa's own grated-corn classic", descHi: "मालवा की अपनी पहचान" },
      { name: "Garadu Chaat (winter)", nameHi: "गराडू चाट (सर्दियों में)", price: 90 },
      { name: "Sabudana Khichdi", nameHi: "साबूदाना खिचड़ी", price: 80 },
    ],
  },
  {
    icon: "CakeSlice", en: { title: "Desserts & Beverages" }, hi: { title: "मिठाई व पेय" },
    items: [
      { name: "Gulab Jamun (2 pc)", nameHi: "गुलाब जामुन (2 पीस)", price: 90 },
      { name: "Rabdi", nameHi: "रबड़ी", price: 120 },
      { name: "Masala Chaas", nameHi: "मसाला छाछ", price: 60 },
      { name: "Sweet Lassi", nameHi: "मीठी लस्सी", price: 80 },
      { name: "Filter Coffee", nameHi: "फिल्टर कॉफी", price: 70 },
    ],
  },
];

export const signatures = [
  { photo: 0, en: { name: "Zaika Special Thali", desc: "Our pride — 12 items, unlimited roti, one honest price." }, hi: { name: "ज़ायका स्पेशल थाली", desc: "हमारा गौरव — 12 आइटम, अनलिमिटेड रोटी, एक ईमानदार दाम।" } },
  { photo: 1, en: { name: "Paneer Butter Masala", desc: "Slow-cooked tomato gravy, malai paneer — the crowd favourite." }, hi: { name: "पनीर बटर मसाला", desc: "धीमी आँच की टमाटर ग्रेवी, मलाई पनीर — सबका पसंदीदा।" } },
  { photo: 2, en: { name: "Bhutte ka Kees", desc: "Malwa's grated-corn classic, served the traditional way." }, hi: { name: "भुट्टे का कीस", desc: "मालवा का क्लासिक, पारंपरिक अंदाज़ में।" } },
  { photo: 3, en: { name: "Masala Dosa", desc: "Ghee-roasted, crisp edges, homemade podi." }, hi: { name: "मसाला डोसा", desc: "घी में सिका, कुरकुरे किनारे, घर की पोड़ी।" } },
  { photo: 4, en: { name: "Malai Kofta", desc: "Melt-in-mouth kofta in saffron-cashew gravy." }, hi: { name: "मलाई कोफ्ता", desc: "मुँह में घुलते कोफ्ते, केसर-काजू ग्रेवी।" } },
  { photo: 5, en: { name: "Poha-Jalebi", desc: "Indore's heartbeat, every morning 8–11." }, hi: { name: "पोहा-जलेबी", desc: "इंदौर की धड़कन, रोज़ सुबह 8–11।" } },
];

export const reviews = [
  { name: "Rohit Agrawal", area: "Vijay Nagar, Indore", stars: 5, en: "Best veg thali in Vijay Nagar, hands down. Unlimited rotis actually means unlimited — and the staff serves with a smile.", hi: "विजय नगर की सबसे बढ़िया वेज थाली। अनलिमिटेड रोटी सच में अनलिमिटेड है — और स्टाफ मुस्कुरा कर परोसता है।" },
  { name: "Neha Bhandari", area: "Palasia, Indore", stars: 5, en: "We booked a table on WhatsApp for 8 people on a Sunday — zero waiting when we arrived. Paneer butter masala is a must.", hi: "रविवार को 8 लोगों के लिए WhatsApp पर टेबल बुक की — पहुँचे तो बिल्कुल इंतज़ार नहीं। पनीर बटर मसाला ज़रूर लें।" },
  { name: "Suresh Patidar", area: "Dewas", stars: 4, en: "Come from Dewas just for their bhutte ka kees and thali. Clean kitchen — you can literally see it from the seating.", hi: "देवास से सिर्फ भुट्टे का कीस और थाली के लिए आते हैं। किचन इतना साफ कि बैठे-बैठे दिखता है।" },
  { name: "Ayesha Khan", area: "Khajrana, Indore", stars: 5, en: "Jain food options without asking twice, AC family hall, and dosa better than the famous chains. Prices are honest.", hi: "जैन खाना बिना दोबारा कहे मिल जाता है, AC फैमिली हॉल, और डोसा बड़े ब्रांड्स से बेहतर। दाम ईमानदार हैं।" },
  { name: "Mahesh Joshi", area: "Sudama Nagar, Indore", stars: 5, en: "Hosted my daughter's birthday for 30 guests. They arranged the cake, decoration and a special menu — all on one WhatsApp message.", hi: "बेटी का जन्मदिन 30 मेहमानों के साथ यहीं किया। केक, सजावट और स्पेशल मेन्यू — सब एक WhatsApp मैसेज पर हो गया।" },
  { name: "Pooja Sharma", area: "Rau, Indore", stars: 5, en: "Sunday morning poha-jalebi here is a family ritual now. Feels like home, tastes better than home!", hi: "रविवार सुबह का पोहा-जलेबी अब हमारी फैमिली की आदत है। घर जैसा माहौल, स्वाद घर से भी बढ़िया!" },
];

export const faqs = [
  { en: { q: "Is the restaurant 100% pure veg?", a: "Yes — 100% pure vegetarian since 2012. No egg either. Jain preparations (no onion-garlic) are available for most dishes, just tell your server." }, hi: { q: "क्या रेस्टोरेंट 100% शुद्ध शाकाहारी है?", a: "हाँ — 2012 से 100% शुद्ध शाकाहारी। अंडा भी नहीं। ज़्यादातर डिश जैन (बिना प्याज़-लहसुन) भी बनती हैं, बस बताएं।" } },
  { en: { q: "Do I need to book a table?", a: "Walk-ins are welcome, but weekends get busy. Book free on WhatsApp in 30 seconds and your table is ready when you arrive." }, hi: { q: "क्या टेबल बुक करना ज़रूरी है?", a: "सीधे भी आ सकते हैं, पर वीकेंड पर भीड़ रहती है। WhatsApp पर 30 सेकंड में फ्री बुकिंग करें — पहुँचते ही टेबल तैयार।" } },
  { en: { q: "Do you do home delivery?", a: "Yes — our own delivery within 3 km of Vijay Nagar, and we are on Zomato & Swiggy for the rest of Indore." }, hi: { q: "क्या होम डिलीवरी होती है?", a: "हाँ — विजय नगर के 3 किमी में हमारी अपनी डिलीवरी, बाकी इंदौर के लिए Zomato व Swiggy पर।" } },
  { en: { q: "Can you host birthdays and small parties?", a: "Yes — a private family section seats up to 40 guests. Cake, decoration and custom menus can be arranged on request." }, hi: { q: "क्या बर्थडे व छोटी पार्टी हो सकती है?", a: "हाँ — प्राइवेट फैमिली सेक्शन में 40 मेहमान बैठ सकते हैं। केक, सजावट और कस्टम मेन्यू की व्यवस्था हो जाती है।" } },
  { en: { q: "Is parking available?", a: "Yes, free car and two-wheeler parking right in front, with a valet on weekends." }, hi: { q: "क्या पार्किंग है?", a: "हाँ, ठीक सामने कार व दोपहिया की मुफ़्त पार्किंग, वीकेंड पर वैले भी।" } },
  { en: { q: "What are the timings?", a: "Open all 7 days, 8 AM – 11 PM. Indori breakfast 8–11 AM, lunch 12–3:30 PM, dinner 7–11 PM. Kitchen last order 10:45 PM." }, hi: { q: "समय क्या है?", a: "सातों दिन, सुबह 8 – रात 11। इंदौरी नाश्ता 8–11, लंच 12–3:30, डिनर 7–11। किचन लास्ट ऑर्डर 10:45।" } },
];

export const stats = [
  { value: "12+", en: "Years of Taste", hi: "स्वाद के वर्ष" },
  { value: "60+", en: "Dishes on Menu", hi: "मेन्यू में व्यंजन" },
  { value: "200", en: "Seats (AC Family Hall)", hi: "सीटें (AC फैमिली हॉल)" },
  { value: "4.6★", en: "Google Rating", hi: "गूगल रेटिंग" },
];

export const whyUs = [
  { icon: "Leaf", en: { title: "100% Pure Veg + Jain Options", desc: "No egg, no compromise since 2012. Jain preparations on request for most dishes." }, hi: { title: "100% शुद्ध शाकाहारी + जैन विकल्प", desc: "2012 से बिना अंडा, बिना समझौता। ज़्यादातर डिश जैन में भी उपलब्ध।" } },
  { icon: "ShieldCheck", en: { title: "FSSAI-Certified Open Kitchen", desc: "See your food being made. Daily-ground masalas, RO water, no reheated gravies." }, hi: { title: "FSSAI-प्रमाणित ओपन किचन", desc: "खाना बनते हुए देखिए। रोज़ पिसे मसाले, RO पानी, बासी ग्रेवी नहीं।" } },
  { icon: "Users", en: { title: "AC Family Hall — 200 Seats", desc: "Comfortable family seating plus a private section for birthdays and gatherings up to 40." }, hi: { title: "AC फैमिली हॉल — 200 सीटें", desc: "आरामदायक फैमिली बैठक और 40 तक की पार्टी के लिए प्राइवेट सेक्शन।" } },
  { icon: "BadgeCheck", en: { title: "Honest Prices, Big Portions", desc: "Full thali at ₹320, unlimited rotis that are truly unlimited. No service charge." }, hi: { title: "ईमानदार दाम, भरपूर मात्रा", desc: "₹320 में पूरी थाली, सच में अनलिमिटेड रोटी। कोई सर्विस चार्ज नहीं।" } },
];

export const guestsOptions = [
  { en: "2 Guests", hi: "2 लोग" },
  { en: "4 Guests", hi: "4 लोग" },
  { en: "6 Guests", hi: "6 लोग" },
  { en: "8+ Guests / Party", hi: "8+ लोग / पार्टी" },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", menu: "Menu", gallery: "Gallery", contact: "Contact & Booking", book: "Book a Table" },
    hero: {
      badge: "Pure veg · Indore · Since 2012",
      title: "Taste That Feels Like Home,",
      titleAccent: "Portions That Don't",
      sub: "Indore's favourite pure-veg family restaurant near Vijay Nagar Square — thalis, dosas, Indori nashta and a 200-seat AC family hall. Book your table on WhatsApp in 30 seconds.",
      cta1: "Book a Table",
      cta2: "Call Now",
      open: "Open Today · 8 AM – 11 PM",
    },
    sections: {
      menuTitle: "Our Menu",
      menuSub: "60+ pure-veg dishes — from Indori nashta to royal thalis.",
      signatureTitle: "Signature Dishes",
      signatureSub: "The plates Indore keeps coming back for.",
      whyTitle: "Why Families Choose Zaika",
      whySub: "12 years, one promise — ghar jaisa khana, honest prices.",
      reviewsTitle: "Indore Foodies Love Us",
      reviewsSub: "Real reviews from real tables.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything you'd ask before visiting.",
      galleryTitle: "A Look Inside",
      gallerySub: "The food, the hall, the open kitchen.",
      visitTitle: "Find Us",
      visitSub: "Near Vijay Nagar Square — free parking in front.",
      ctaTitle: "Hungry already?",
      ctaSub: "Book your table now — it takes 30 seconds on WhatsApp.",
      indoriTitle: "Indori Specials",
      indoriSub: "Poha-jalebi mornings, bhutte ka kees evenings — Malwa on a plate.",
    },
    booking: {
      title: "Book a Table",
      sub: "Fill this form — your booking goes directly to our WhatsApp. We confirm within 10 minutes.",
      name: "Your Name", namePh: "e.g. Rohit Agrawal",
      phone: "Mobile Number", phonePh: "e.g. 92024 20455",
      guests: "Number of Guests",
      date: "Select Date", slot: "Select Time",
      note: "Occasion / Special Request (optional)", notePh: "e.g. birthday — need cake at table",
      submit: "Book on WhatsApp",
      or: "or",
      call: "Call the restaurant",
      success: "Opening WhatsApp… your table request is ready to send!",
      morning: "Lunch (12:00 – 3:30 PM)", evening: "Dinner (7:00 – 11:00 PM)",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Timings", tagline: "Ghar jaisa swad, har roz — pure veg since 2012." },
    misc: { viewAll: "View Full Menu", experience: "Since 2012", readMore: "Know More", getDirections: "Get Directions", emergency: "Table Booking Helpline (8 AM – 11 PM)", veg: "Pure Veg", special: "Chef's Special", priceNote: "All prices in ₹, inclusive of taxes. No service charge." },
    about: {
      title: "About Zaika",
      sub: "12 years of ghar jaisa khana in Indore.",
      story1: "Zaika was started in 2012 by the Agrawal family with their dadi's recipe diary and one stubborn rule — food will be cooked exactly the way we cook it for our own family: fresh masalas ground every morning, pure ghee, and no shortcuts.",
      story2: "What began as a 6-table eatery near Vijay Nagar Square is today a 200-seat AC family restaurant with an open kitchen, a private party section, our own 3-km delivery fleet and a breakfast counter that serves Indore's beloved poha-jalebi every morning.",
      story3: "Our promise has never changed: 100% pure veg, honest prices, big portions and a kitchen so clean we let you watch it work.",
      missionTitle: "Our Mission",
      mission: "To be the table where every Indore family celebrates — from Sunday poha to birthday parties — without ever worrying about purity or price.",
      values: [
        { title: "Purity First", desc: "100% veg, no egg, pure ghee, RO water — since day one." },
        { title: "Fresh Every Morning", desc: "Masalas ground daily, sabzi from Choithram mandi at 6 AM." },
        { title: "Honest Portions", desc: "Unlimited means unlimited. No service charge, no hidden taxes." },
        { title: "Family Comfort", desc: "AC hall, high chairs for kids, Jain options, valet on weekends." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", menu: "मेन्यू", gallery: "गैलरी", contact: "संपर्क व बुकिंग", book: "टेबल बुक करें" },
    hero: {
      badge: "शुद्ध शाकाहारी · इंदौर · 2012 से",
      title: "स्वाद जो घर जैसा लगे,",
      titleAccent: "मात्रा जो घर से ज़्यादा",
      sub: "विजय नगर चौराहे के पास इंदौर का पसंदीदा शुद्ध-शाकाहारी फैमिली रेस्टोरेंट — थाली, डोसा, इंदौरी नाश्ता और 200 सीट का AC फैमिली हॉल। WhatsApp पर 30 सेकंड में टेबल बुक करें।",
      cta1: "टेबल बुक करें",
      cta2: "अभी कॉल करें",
      open: "आज खुला है · सुबह 8 – रात 11",
    },
    sections: {
      menuTitle: "हमारा मेन्यू",
      menuSub: "60+ शुद्ध शाकाहारी व्यंजन — इंदौरी नाश्ते से शाही थाली तक।",
      signatureTitle: "सिग्नेचर डिश",
      signatureSub: "वो प्लेटें जिनके लिए इंदौर बार-बार आता है।",
      whyTitle: "परिवार ज़ायका क्यों चुनते हैं",
      whySub: "12 साल, एक वादा — घर जैसा खाना, ईमानदार दाम।",
      reviewsTitle: "इंदौर के फूडी हमें प्यार करते हैं",
      reviewsSub: "असली टेबल की असली राय।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "विज़िट से पहले के हर सवाल का जवाब।",
      galleryTitle: "अंदर की एक झलक",
      gallerySub: "खाना, हॉल और ओपन किचन।",
      visitTitle: "हम तक पहुँचें",
      visitSub: "विजय नगर चौराहे के पास — सामने मुफ़्त पार्किंग।",
      ctaTitle: "भूख लग गई?",
      ctaSub: "अभी टेबल बुक करें — WhatsApp पर सिर्फ 30 सेकंड।",
      indoriTitle: "इंदौरी स्पेशल",
      indoriSub: "सुबह पोहा-जलेबी, शाम भुट्टे का कीस — थाली में मालवा।",
    },
    booking: {
      title: "टेबल बुक करें",
      sub: "यह फॉर्म भरें — बुकिंग सीधे हमारे WhatsApp पर पहुँचेगी। 10 मिनट में कन्फर्मेशन।",
      name: "आपका नाम", namePh: "जैसे: रोहित अग्रवाल",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 92024 20455",
      guests: "मेहमानों की संख्या",
      date: "तारीख चुनें", slot: "समय चुनें",
      note: "अवसर / विशेष अनुरोध (वैकल्पिक)", notePh: "जैसे: बर्थडे — टेबल पर केक चाहिए",
      submit: "WhatsApp पर बुक करें",
      or: "या",
      call: "रेस्टोरेंट को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी टेबल रिक्वेस्ट भेजने के लिए तैयार है!",
      morning: "लंच (12:00 – 3:30)", evening: "डिनर (शाम 7 – रात 11)",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "समय", tagline: "घर जैसा स्वाद, हर रोज़ — 2012 से शुद्ध शाकाहारी।" },
    misc: { viewAll: "पूरा मेन्यू देखें", experience: "2012 से", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "टेबल बुकिंग हेल्पलाइन (सुबह 8 – रात 11)", veg: "शुद्ध वेज", special: "शेफ स्पेशल", priceNote: "सभी दाम ₹ में, टैक्स सहित। कोई सर्विस चार्ज नहीं।" },
    about: {
      title: "ज़ायका के बारे में",
      sub: "इंदौर में 12 साल का घर जैसा खाना।",
      story1: "ज़ायका की शुरुआत 2012 में अग्रवाल परिवार ने अपनी दादी की रेसिपी डायरी और एक ज़िद के साथ की — खाना ठीक वैसे ही बनेगा जैसे हम अपने परिवार के लिए बनाते हैं: रोज़ सुबह पिसे ताज़े मसाले, शुद्ध घी, और कोई शॉर्टकट नहीं।",
      story2: "विजय नगर चौराहे के पास 6 टेबल की छोटी सी शुरुआत आज 200 सीट का AC फैमिली रेस्टोरेंट है — ओपन किचन, प्राइवेट पार्टी सेक्शन, अपनी 3-किमी डिलीवरी और हर सुबह इंदौर का प्यारा पोहा-जलेबी काउंटर।",
      story3: "हमारा वादा कभी नहीं बदला: 100% शुद्ध शाकाहारी, ईमानदार दाम, भरपूर मात्रा और इतना साफ किचन कि हम आपको देखने देते हैं।",
      missionTitle: "हमारा मिशन",
      mission: "वह टेबल बनना जहाँ इंदौर का हर परिवार जश्न मनाए — रविवार के पोहे से बर्थडे पार्टी तक — शुद्धता या दाम की चिंता के बिना।",
      values: [
        { title: "शुद्धता सबसे पहले", desc: "100% वेज, अंडा नहीं, शुद्ध घी, RO पानी — पहले दिन से।" },
        { title: "हर सुबह ताज़ा", desc: "रोज़ पिसे मसाले, सुबह 6 बजे छोइथराम मंडी से सब्ज़ी।" },
        { title: "ईमानदार मात्रा", desc: "अनलिमिटेड मतलब अनलिमिटेड। न सर्विस चार्ज, न छिपा टैक्स।" },
        { title: "परिवार की सुविधा", desc: "AC हॉल, बच्चों की हाई-चेयर, जैन विकल्प, वीकेंड पर वैले।" },
      ],
    },
  },
};
