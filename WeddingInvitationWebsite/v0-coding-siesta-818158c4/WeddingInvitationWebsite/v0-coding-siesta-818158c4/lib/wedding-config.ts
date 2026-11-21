export const wedding = {
  /* --- The couple ------------------------------------------------------- */
  couple: {
    partnerOne: "Arthur", // First name shown big on the hero
    partnerTwo: "Joan", // Second name shown big on the hero
    initials: "A&J", // Shown in the logo badge / monogram
    hashtag: "ALWAYS", // Short word/hashtag shown next to the logo (optional)
  },

  /* --- Date & time ------------------------------------------------------ */
  // IMPORTANT: set `isoDate` to your real date/time for the countdown to work.
  event: {
    isoDate: "2027-02-13T02:30:00", // YYYY-MM-DDTHH:MM:SS (local time)
    dateLabel: "February 13, 2027",
    timeLabel: "Saturday 2:30 in the Afternoon",
    ceremonyVenue: "San Ildefonso de Toledo Parish Church - Tanay, Rizal",
    receptionLabel: "Melinda's Garden Event Place and Private Resort",
    receptionLabel2: "Tanay, Rizal",
  },

  /* --- Hero ------------------------------------------------------------- */
  hero: {
    intro: "Welcome to the Wedding of",
    quote:
      '"Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up."',
    quoteSource: "— Ecclesiastes 4:9–10",
  },

  /* --- Countdown -------------------------------------------------------- */
  countdown: {
    label: 'Time left \u2019til we say "I do, again"',
  },

  /* --- Entourage -------------------------------------------------------- */
  entourage: {
    title: "The Entourage",
    subtitle:
      "With praise & thanksgiving to God and blessing from our beloved parents",
    sections: [
      {
        sectionLabel: null, 
        groups: [
          {
            heading: "Parents of the Groom",
            names: ["Mr. Arturo L. Francisco +", "Mrs. Thelma T. Francisco"],
          },
          {
            heading: "Parents of the Bride",
            names: ["Mr. Jose T. Martinez Jr +", "Mrs. Lorna E. Martinez"],
          },
          { heading: "Best Man", names: ["Sean Aldridge M. Francisco"] },
          { heading: "Maid of Honor", names: ["Shylle Riana M. Francisco "] },
        ],
      },
      {
        sectionLabel: "— Principal Sponsors —",
        sectionNote: "To stand witness to our vows",
        groups: [
          {
            heading: "",
          
            names: [
              "Mrs. Marites V. Martinez",
              "Mrs. Corazon Enciso Peradilla",
              "Mrs. Lucila M. Ulpindo",
              "Mrs. Zita Jasareno",
              "Mrs. Zenaida Robles" ,
              "Mrs. Bleshilda G. Lampano"
            ],
          },
          {
            heading: "",
            names: [
              "Mr. Joey Martinez",
              "Mr. Antonio A. Enciso Jr.",
              "Mr. Roberto N. Ulpindo",
              "Mr. Jimmy Dela Cruz",
              "Mr. Pedrito S. Tolentino",
              "Mr. Garry S. Tolentino",
            ],
          },
        ],
      },
      {
        sectionLabel: "— Secondary Sponsors —",
        sectionNote: "To assist us on our needs",
        groups: [
          {
            heading: "Candle",
            names: ["Karen Enciso", "Sherjan Aimel M. Francisco"],
          },
          {
            heading: "Veil",
            names: ["Angeline F. Mendoza", "Joseph E. Martinez"],
          },
          {
            heading: "Cord",
            names: ["Concepcion V. Novencio", "John Karl E. Martinez"],
          },
        ],
      },
      {
        sectionLabel: "— Bridesmaids & Groomsmen —",
        groups: [
          {
            heading: "Groomsmen",
            names: [
              "Claude Alsheen F. Mendoza",
              "Sherwin Alvis",
              "Russell Tagnipes",

            ],
          },
          {
            heading: "Bridesmaids",
            names: [
              "Daphne P. Comendador",
              "Belle Rose Abesamis",
              "Zenneth Calinog",
            ],
          },
        ],
      },
      {
        sectionLabel: "— Bearers & Kids —",
        groups: [
          { heading: "Bible Bearer", names: ["Nelson C. Soledad"] },
          { heading: "Coin Bearer", names: [""] },
          { heading: "Ring Bearer", names: ["Lourd Liam Kai Enciso Rama"] },
          { heading: "Flower Girl", names: ["Elizandra Bliss Enciso", "Merin Anaiah E. Hemoroz"] },
        ],
      },
    ],
  },

  /* --- Timeline --------------------------------------------------------- */
  timeline: {
    title: "Wedding Timeline",
    subtitle: "The order of events",
    venueLabel: "Reception Venue",
    venueName: "Melinda's Garden Event Place and Private Resort",
    events: [
      { time: "2:00 PM", title: "Arrival of Guests" },
      { time: "2:30 PM", title: "Wedding Ceremony" },
      { time: "5:00 PM", title: "Cocktail Hour" },
      { time: "6:00 PM", title: "Reception Dinner" },
      { time: "8:00 PM", title: "Farewell" },
    ],
  },

  /* --- Maps ------------------------------------------------------------- */
  maps: {
    title: "Maps",
    subtitle: "Find your way to celebrate with us",
    locations: [
      {
        name: "San Ildefonso de Toledo Parish Church",
        area: "Tanay, Rizal",
        image: "/images/venue-church.png",
        imageAlt: "San Ildefonso de Toledo Parish Church",
        googleMaps: "https://www.google.com/maps/place/F7XM%2B9VW+Saint+Idelphonse+of+Toledo+Parish+-+Tanay,+Rizal+(Diocese+of+Antipolo),+M.H.+Del+Pilar+St,+Plaza+Aldea,+Tanay,+1980+Rizal/data=!4m2!3m1!1s0x3397ea160607dc03:0xe69647c9eff0932f!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI2LjI1LjUYACDXggMqiwEsOTQyNjc3MjcsOTQyOTIxOTUsOTQyOTk1MzIsMTAwNzk2NDk4LDEwMDc5Nzc2MSwxMDA3OTY1MzUsOTQyODA1NzYsOTQyMDczOTQsOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsOTQyNzk2MTksMTAwODE1NjQwQgJQSA%3D%3D&skid=02173393-e6bb-4546-9ca7-c364fb596b80&g_st=afm",
        waze: "https://ul.waze.com/ul?place=ChIJoTunCBbqlzMRTatimef8T70&ll=14.49860670%2C121.28489910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
      },
      {
        name: "Melinda's Garden Event Place and Private Resort",
        area: "Tanay, Rizal",
        image: "/images/venue-reception.png",
        imageAlt: "Melinda's Garden Event Place and Private Resort",
        googleMaps: "https://maps.app.goo.gl/sSdFE16UW2r8A7bp8",
        waze: "https://waze.com/ul/hwdw4xcp84",
      },
    ],
  },

  /* --- Dress code ------------------------------------------------------- */
  dressCode: {
    title: "Dress Code",
    subtitle: "Attire for the celebration",
    image: "/images/dress-code.png",
    imageAlt: "Dress code illustration",
    description:
      "To complement the elegance of our special day, we kindly invite our guests to wear semi-formal attire in elegant black and silver tones.",
  },

  /* --- RSVP ------------------------------------------------------------- */
  rsvp: {
    title: "RSVP",
    subtitle: "Kindly respond before December 15, 2026",
    description:
      "We can't wait to celebrate this special day with you, and would be so grateful to receive your response on or before December 15, 2026.",
    buttonLabel: "Send Your RSVP",
  },

  /* --- Gifts ------------------------------------------------------------ */
  gifts: {
    title: "Gifts",
    subtitle: "Your presence is our present",
    description:
      "Your presence truly means the world to us, and that's already the best gift we could ask for. But if you'd like to share a little something, monetary gifts are sincerely appreciated.",
  },

  /* --- FAQs ------------------------------------------------------------- */
  faqs: {
    title: "FAQs",
    subtitle: "Everything you need to know",
    items: [
      {
        question: "What if I can't make it?",
        answer:
          "We completely understand. Please let us know as soon as possible through the RSVP link so we can plan accordingly.",
      },
      {
        question: "Is there parking available?",
        answer:
          "Yes, in San Ildefenso Church but limited in Melinda's Garden venue (reception).",
      },
      {
        question: "Can I take photos during the ceremony?",
        answer:
          "We kindly ask that you keep phones away during the ceremony so our photographer can capture every moment. Feel free to snap away at the reception!",
      },
      {
        question: "Can I bring someone or my children?",
        answer:
          "Due to limited seating, we are only able to accommodate the guests named on your invitation. Thank you for understanding.",
      },
      {
        question: "Can I sit anywhere during the reception?",
        answer:
          "Seating will be assigned. Please look for your name at the entrance to find your table.",
      },
      {
        question: "When can I leave?",
        answer:
          "You are free to leave whenever you wish, but we'd love for you to stay through the farewell at 8:00 PM!",
      },
    ],
  },

  /* --- Navigation ------------------------------------------------------- */
  nav: [
    { id: "home", label: "Home" },
    { id: "countdown", label: "Countdown" },
    { id: "entourage", label: "Entourage" },
    { id: "timeline", label: "Timeline" },
    { id: "maps", label: "Maps" },
    { id: "dress-code", label: "Dress Code" },
    { id: "rsvp", label: "RSVP" },
    { id: "gifts", label: "Gifts" },
    { id: "faqs", label: "FAQs" },
  ],

  /* --- Footer ----------------------------------------------------------- */
  footer: {
    text: "With love, Arthur & Joan — February 13, 2027",
  },
  /* --- Music ------------------------------------------------------------ */  
  music: {
    src: "/music/wedding-music.mp3" as string | null,
    title: "OUR SONG",
  },
} as const

export type WeddingConfig = typeof wedding
