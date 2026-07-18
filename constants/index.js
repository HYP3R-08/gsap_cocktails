const navLinks = [
    {
        id: "cocktails",
        title: "Cocktails",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "art",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const cocktailLists = [
    {
        name: "Classic Mojito",
        country: "CU",
        detail: "45 ml",
        price: "$12",
    },
    {
        name: "Old Fashioned",
        country: "US",
        detail: "60 ml",
        price: "$14",
    },
    {
        name: "Negroni",
        country: "IT",
        detail: "90 ml",
        price: "$13",
    },
    {
        name: "Espresso Martini",
        country: "GB",
        detail: "75 ml",
        price: "$15",
    },
];

const mockTailLists = [
    {
        name: "Tropical Bloom",
        country: "US",
        detail: "250 ml",
        price: "$10",
    },
    {
        name: "Passionfruit Mint",
        country: "US",
        detail: "250 ml",
        price: "$11",
    },
    {
        name: "Citrus Glow",
        country: "CA",
        detail: "300 ml",
        price: "$9",
    },
    {
        name: "Lavender Fizz",
        country: "IE",
        detail: "300 ml",
        price: "$10",
    },
];

const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
];

const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
        phone: "(555) 987-6543",
        email: "hello@velvetpour.com",
    },
};

const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const sliderLists = [
    {
        id: 1,
        name: "Classic Mojito",
        image: "/images/drink1.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
            "White rum, fresh lime, mint and a splash of soda over crushed ice. Bright, herbaceous and endlessly refreshing — the benchmark every other highball is measured against.",
    },
    {
        id: 2,
        name: "Raspberry Mojito",
        image: "/images/drink2.png",
        title: "A Berry-Bright Twist on a Classic",
        description:
            "The classic mojito with muddled fresh raspberries. Tart berry sweetness meets cool mint and lime for a vivid, summer-in-a-glass twist.",
    },
    {
        id: 3,
        name: "Violet Breeze",
        image: "/images/drink3.png",
        title: "Floral, Delicate, Unforgettable",
        description:
            "Gin, crème de violette and lemon finished with soda. Softly floral and delicately sweet, with a lavender hue that makes it as pretty as it is easy to sip.",
    },
    {
        id: 4,
        name: "Curacao Mojito",
        image: "/images/drink4.png",
        title: "A Splash of Color, a Burst of Citrus",
        description:
            "Blue curaçao lifts the mojito with orange sweetness and an electric-blue glow. Citrusy, minty and made to stand out on any table.",
    },
];

export {
    navLinks,
    cocktailLists,
    mockTailLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists,
};
