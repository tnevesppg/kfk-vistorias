const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroMain: img("1705326701287-346fc37a2c86", 1600),
  heroPlant: img("1776754373093-c36d872e635b", 700),
  heroSmall: img("1749703836810-361f30aba87a", 900),
  aboutA: img("1632489753406-52689c507a83", 700),
  aboutB: img("1610177534644-34d881503b83", 1400),
  aboutC: img("1600489000022-c2086d79f9d4", 700),
  serviceA: img("1780042731953-15dd1b3b5f00", 900),
  serviceB: img("1716078410207-20e223587181", 900),
  serviceMain: img("1502005097973-6a7082348e28", 1000),
  video: img("1653242370243-5f7ca54b00db", 1800),
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { n: "01", title: "Lighting Design", text: "There are many variations passages Lorem available majority suffered alteration some." },
  { n: "02", title: "Architectural Design", text: "There are many variations of passages of Lorem Ipsum available majority have suffered alteration some injected humour, or randomised." },
  { n: "03", title: "Interior Design", text: "There are many variations of Lorem passages of Ipsum available majority suffered." },
];

export const categories = ["All", "Decoration", "Interior", "Kitchen", "Uncategorized"] as const;

export const projects: { title: string; tags: string[]; src: string }[] = [
  { title: "Patio Dining Sets", tags: ["Uncategorized"], src: img("1653242370243-5f7ca54b00db", 800) },
  { title: "Kitchen Remodel", tags: ["Interior", "Kitchen"], src: img("1502005097973-6a7082348e28", 800) },
  { title: "Unique Wall Shelves", tags: ["Decoration"], src: img("1632489753406-52689c507a83", 800) },
  { title: "Affordable Home Accessories", tags: ["Decoration"], src: img("1749703836810-361f30aba87a", 800) },
  { title: "The Best Window Curtains", tags: ["Decoration", "Interior"], src: img("1764742814331-65fce6c3367c", 800) },
];

export const stats = [
  { label: "Products", value: 614 },
  { label: "Happy Customers", value: 970 },
  { label: "Clients", value: 215 },
  { label: "Project Launched", value: 15 },
  { label: "Materials", value: 106 },
];

export const testimonials = [
  { quote: "There are many variations of passages of Lorem Ipsum available majority have suffered alteration some form by injected humour, or randomised.", name: "Martin Kabour", city: "New York" },
  { quote: "There are many variations of passages of Lorem Ipsum available majority have suffered alteration some form by injected humour, or randomised.", name: "Martin Kabour", city: "New York" },
  { quote: "There are many variations of passages of Lorem Ipsum available majority have suffered alteration some form by injected humour, or randomised.", name: "Martin Kabour", city: "New York" },
];

export const posts = [
  { title: "Interior inspiration to hidden in the middle of text …", date: "May 6, 2019", src: img("1465224414649-ceb7f1db3999", 1000) },
  { title: "7 of the biggest interior have suffered alteration some …", date: "May 6, 2019", src: img("1600489000022-c2086d79f9d4", 1000) },
  { title: "Global Interior Design Software There are many variations…", date: "May 6, 2019", src: img("1610177534644-34d881503b83", 1000) },
];
