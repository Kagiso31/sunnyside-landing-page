import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";
import emily from "../assets/image-emily.jpg";
import jennie from "../assets/image-jennie.jpg";
import thomas from "../assets/image-thomas.jpg";

import milkDesktop from "../assets/desktop/image-gallery-milkbottles.jpg";
import milkMobile from "../assets/mobile/image-gallery-milkbottles.jpg";
import coneDesktop from "../assets/desktop/image-gallery-cone.jpg";
import coneMobile from "../assets/mobile/image-gallery-cone.jpg";
import orangeDesktop from "../assets/desktop/image-gallery-orange.jpg";
import orangeMobile from "../assets/mobile/image-gallery-orange.jpg";
import sugarDesktop from "../assets/desktop/image-gallery-sugarcubes.jpg";
import sugarMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";

export const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    role: "Marketing Director",
    comment:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    img: emily,
  },
  {
    id: 2,
    name: "Thomas S.",
    role: "Chief Operating Officer",
    comment:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    img: thomas,
  },
  {
    id: 3,
    name: "Jennie F.",
    role: "Business Owner",
    comment:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    img: jennie,
  },
];

export const links = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Services",
  },
  {
    id: 3,
    title: "Projects",
  },
];

export const gallery = [
  {
    id: 1,
    desktopImg: milkDesktop,
    mobileImg: milkMobile,
  },
  {
    id: 2,
    desktopImg: orangeDesktop,
    mobileImg: orangeMobile,
  },
  {
    id: 3,
    desktopImg: coneDesktop,
    mobileImg: coneMobile,
  },
  {
    id: 4,
    desktopImg: sugarDesktop,
    mobileImg: sugarMobile,
  },
];

export const socials = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: facebook,
  },
  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: instagram,
  },
  {
    id: 3,
    title: "Twitter",
    link: "https://www.twitter.com",
    icon: twitter,
  },
  {
    id: 4,
    title: "Pinterest",
    link: "https://www.pinterest.com",
    icon: pinterest,
  },
];
