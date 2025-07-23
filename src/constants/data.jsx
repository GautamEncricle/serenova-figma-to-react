//service images
import PalmTreeIcon from "../assets/images/icons/services/personalize.svg";
import BeachChairIcon from "../assets/images/icons/services/privacy.svg";
import CoconutDrinkIcon from "../assets/images/icons/services/luxury.svg";

//brands images
import brandLogo1 from "../assets/images/Home/brand/image1.svg";
import brandLogo2 from "../assets/images/Home/brand/image2.svg";
import brandLogo3 from "../assets/images/Home/brand/image3.svg";
import brandLogo4 from "../assets/images/Home/brand/image4.svg";
import brandLogo5 from "../assets/images/Home/brand/image5.svg";
import brandLogo6 from "../assets/images/Home/brand/image6.svg";

//tours images

import tourImage1 from "../assets/images/Home/tours/image1.png";
import tourImage2 from "../assets/images/Home/tours/image2.png";
import tourImage3 from "../assets/images/Home/tours/image3.png";
import tourImage4 from "../assets/images/Home/tours/image4.png";
import tourImage5 from "../assets/images/Home/tours/image5.png";
import tourImage6 from "../assets/images/Home/tours/image6.png";

const navLinks = [
  { title: "Home", url: "#home", active: true },
  { title: "About Us", url: "#about" },
  { title: "Accommodation", url: "#accommodation" },
  { title: "Offers & Packages", url: "#offers" }, 
  { title: "Wellness & Spa", url: "#spa" },
  { title: "Events", url: "#events" },
  { title: "Facilities", url: "#facilities" },
  { title: "Gallery", url: "#gallery" },
  { title: "Contact Us", url: "#contact" },
];

const services = [
  {
    icon: <img src={BeachChairIcon} alt="Privacy Icon" className="w-12 h-12" />,
    title: "Privacy & exclusivity",
    description:
      "Enjoy peaceful moments in secluded settings, curated for those who value space, silence, and sophistication.",
  },
  {
    icon: (
      <img
        src={PalmTreeIcon}
        alt="Personalized Service Icon"
        className="w-12 h-12"
      />
    ),
    title: "Personalized service",
    description:
      "From arrival to farewell, every detail is tailored to your preferences by our attentive, discreet staff.",
    isHighlighted: true,
  },
  {
    icon: (
      <img src={CoconutDrinkIcon} alt="Luxury Icon" className="w-12 h-12" />
    ),
    title: "Luxury accommodation",
    description:
      "Stay in refined villas and suites designed with nature, comfort, and quiet luxury at their heart.",
  },
];

const experiences = [
  "Sunset catamaran cruises",
  "Guided cultural excursions",
  "Coastal nature treks",
  "Mountain biking adventures",
  "Scuba diving expeditions",
];

const blogPosts = [
  {
    image: "./src/assets/images/Home/blog/image1.png",
    category: "Nature & Stillness",
    title: "5 Simple Rituals to Embrace Slow Living on Vacation",
    date: "July 7, 2025",
    comments: 3,
  },
  {
    image: "./src/assets/images/Home/blog/image2.png",
    category: "Coastal Escapes",
    title: "Explore top green destinations in the world",
    date: "June 8, 2025",
    comments: 2,
  },
  {
    image: "./src/assets/images/Home/blog/image3.png",
    category: "Design & Atmosphere",
    title: "Top 15 best travel blogs to follow in 2025",
    date: "May 2, 2025",
    comments: 4,
  },
  {
    image: "./src/assets/images/Home/blog/image4.png",
    category: "Wellness & Retreats",
    title: "Amazing photos of rare and exotic plants in Africa",
    date: "May 5, 2025",
    comments: 3,
  },
];

const logos = [
  { name: "Mountaineer Casino", src: brandLogo1 },
  { name: "Tripadvisor", src: brandLogo2 },
  { name: "Diani Sea Resort", src: brandLogo3 },
  { name: "Le Gilmer Beach Resort", src: brandLogo4 },
  { name: "My World", src: brandLogo5 },
  { name: "Cruise Travel", src: brandLogo6 },
];

//tours data
const toursData = [
  {
    image: tourImage1,
    title: "Coastal Kayaking & Hidden Coves",
    category: "Adventure Tour",
    details: [
      { label: "Duration", value: "Half Day (4 hrs)" },
      { label: "Includes", value: "Kayak gear" },
      { label: "Guide", value: "Local marine naturalist" },
    ],
  },
  {
    image: tourImage2,
    title: "Hillside Hike & Ocean Vistas",
    category: "Nature Walk",
    details: [
      { label: "Duration", value: "3-5 Hours" },
      { label: "Includes", value: "Trail snacks, water, guide" },
      { label: "Guide", value: "Certified eco-hiking expert" },
    ],
  },
  {
    image: tourImage3,
    title: "Sacred Temples & Local Traditions",
    category: "Cultural Experience",
    details: [
      { label: "Duration", value: "Full Day (6-7 hrs)" },
      { label: "Includes", value: "Entry passes, lunch, guide" },
      { label: "Guide", value: "Local historian & storyteller" },
    ],
  },
  {
    image: tourImage4,
    title: "Dolphin Cruise & Marine Discovery",
    category: "Ocean Safari",
    details: [
      { label: "Duration", value: "2.5 Hours" },
      { label: "Includes", value: "Boat ride, binoculars, snacks" },
      { label: "Guide", value: "Marine life specialist" },
    ],
  },
  {
    image: tourImage5,
    title: "Coastal Flavors Culinary Tour",
    category: "Food & Culture",
    details: [
      { label: "Duration", value: "Half Day (4 hrs)" },
      { label: "Includes", value: "Cooking class, tasting menu" },
      { label: "Guide", value: "In-house chef & local farmer" },
    ],
  },
  {
    image: tourImage6,
    title: "Sunset Sailing Experience",
    category: "Romantic Escape",
    details: [
      { label: "Duration", value: "2 Hours" },
      { label: "Includes", value: "Small bites, captain" },
      { label: "Guide", value: "Private skipper" },
    ],
  },
];

//Testimonial Data

const testimonials = [
  {
    quote:
      "I came to unwind, and I left transformed. Morning yoga by the sea, quiet forest walks, and food that nourished more than my body. Serenova is pure soul therapy. Really I love this place must visit.",
    author: "Talia M.",
    location: "Dubai",
  },
  {
    quote:
      "From our spacious villa to the cultural tours and kind-hearted staff, everything was seamless. My children still talk about the dolphin cruise. We’ll be back—next time, for longer.",
    author: "Ravi N.",
    location: "Bengaluru, India",
  },
  {
    quote:
      "Serenova was a dream come true. The sunsets were breathtaking, and the guided meditation sessions changed my perspective. I never wanted to leave this paradise. I often look for places that breathe inspiration.",
    author: "Clara J.",
    location: "New York, USA",
  },
  {
    quote:
      "Our family found a slice of heaven. The blend of adventure and relaxation was perfect for everyone. From competitive beach games to the serene spa, every moment was magical.",
    author: "Eli & Mara",
    location: "Toronto, Canada",
  },
  {
    quote:
      "It felt like it was just us, the ocean, the silence, the breeze whispering our names. It was the pause we desperately needed.",
    author: "Chen L.",
    location: "Shanghai, China",
  },
];

export {navLinks, services, experiences, blogPosts, logos, toursData, testimonials };
