// Apni saari details yahin badlo. Baaki components ko chhedne ki zarurat nahi.
// var typed = new Typed(".text", {
//   strings: ["Frontend Developer", "Backend Developer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   typedelay: 1000,
//   loop: true,
// });

// const images = import.meta.glob("../assets/*.jpg", {
//   eager: true,
//   import: "default",
// });

export const profile = {
  name: "Shivam Kumar",
  city: "Bihar, Jmaui",
  phone: "916201389057", // 91 ke saath, bina + ke
  headline: "Website Designer",
  subtext:
    "Your businesses online & Professinal - Modern Website | Mobile Friendly | Better UI & Main thing According to your Requirement.",
};

export const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Business Website",
    text: "Dukaan ki poori website jisme products, photos aur location ho.",
  },
  {
    id: 2,
    icon: "🍽️",
    title: "Restaurant Menu Site",
    text: "Online menu, WhatsApp order aur QR code ke saath.",
  },
  {
    id: 3,
    icon: "📱",
    title: "Mobile Friendly",
    text: "Har phone par sahi dikhne wali fast website.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zaika",
    type: "Restaurant",
    image: "zaika.png",
    url: "https://zaika-frontend-silk.vercel.app",
  },
  {
    id: 2,
    title: "Cafe",
    type: "Restaurant",
    image: "cafe.png",

    url: "https://rastp-or-cafe-demo.vercel.app",
  },
  {
    id: 3,
    title: "Music Artist",
    type: "Artist",
    image: "artist.png",
    url: "https://artist-website-frontend.vercel.app",
  },
  {
    id: 4,
    title: "Admin Pannel",
    type: "Security",
    image: "adminartist.png",
    url: "https://artist-website-frontend.vercel.app/admin/login",
  },
];
