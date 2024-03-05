import React from "react";
import { CheckMark, Database, ProductData, SearchIcon } from "./Icons";
import { ChocolateBadge, GreenBadge, OrangeBadge, RedeBadge } from "./AllBadges";

export const roasterKeyFeatures = [
  {
    checkIcon: <CheckMark />,
    feature: "Gemma Roasting System",
  },
  {
    checkIcon: <CheckMark />,
    feature: "Fully Automated",
  },
  {
    checkIcon: <CheckMark />,
    feature:
      "Consistently roast up to 4.5 lbs of beans per cycle and over 100 lbs",
  },
  {
    checkIcon: <CheckMark />,
    feature: "10 pre-set programmed profiles",
  },
  {
    checkIcon: <CheckMark />,
    feature: "Cooling Automatic Internal",
  },
  {
    checkIcon: <CheckMark />,
    feature: "Beans roasted gently inside & out",
  },
  {
    checkIcon: <CheckMark />,
    feature:
      "Chaff and small particles are blown away by air steam; not present later to affect taste",
  },
  {
    checkIcon: <CheckMark />,
    feature:
      "Narrow roast profiles attained (inside and outside of bean roasted to same degree)",
  },
  {
    checkIcon: <CheckMark />,
    feature: "No bitter or sour tastes",
  },
  {
    checkIcon: <CheckMark />,
    feature:
      "Consistency delivered by computerized roast master, same roast profile every time.",
  },
];
export const sliderCard = [
  {
    image: "/assets/images/webp/slider_image_first.webp",
    title: "Coffee Bean by Malerapaso",
    description:
      "Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de",
  },
  {
    image: "/assets/images/webp/slider_image_second.webp",
    title: "Coffee Bean by Malerapaso",
    description:
      "Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de",
  },
  {
    image: "/assets/images/webp/slider_image_third.webp",
    title: "Coffee Bean by Malerapaso",
    description:
      "Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de",
  },
  {
    image: "/assets/images/webp/slider_image_first.webp",
    title: "Coffee Bean by Malerapaso",
    description:
      "Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de Plantilla de informe de resonancia magnética (RM) de articulación de",
  },
];

export const ServiceData = [
  {
    icon: <SearchIcon />,
    title: "Advanced Search Functionality",
    description:
      "We have an advanced search feature that allows you to search for coffee beans based on specific criteria such as origin, flavor notes, roast level, and more. This allows you to find precisely what you're looking for.",
  },
  {
    cardPadding: "pt-6 sm:pt-0",
    icon: <Database />,
    title: "Comprehensive Coffee Bean Database",
    description:
      "You have access to the extensive database of coffee bean varieties sourced from local roasters, with detailed information on each bean, including origin, flavor profile, processing method, and roasting level.",
  },
  {
    cardPadding: "pt-6 md:pt-0",
    icon: <ProductData />,
    title: "High quality products",
    description:
      "We understand the importance of quality when it comes to coffee beans. We are committed to ensuring that the coffee bean varieties featured on our platform meet the highest standards of excellence and authenticity.",
  },
];
export const BlogData = [
  {
    image: "/assets/images/webp/blog_img_1.webp",
    badge: "Bean",
    blogDate: "September 18, 20230",
    title: "How To Make Pour Over Coffee",
    description:
      "Pour over coffee sounds complicated, but this coffee brewing process is surprisingly simple and the results can be amazing with just a little practice. If...",
  },
  {
    image: "/assets/images/webp/blog_img_2.webp",
    badge: "Bean",
    blogDate: "September 18, 20230",
    title: "How to Make French Press Coffee",
    description:
      "Pour over coffee sounds complicated, but this coffee brewing process is surprisingly simple and the results can be amazing with just a little practice. If...",
  },
  {
    image: "/assets/images/webp/blog_img_3.webp",
    badge: "Bean",
    blogDate: "September 18, 20230",
    title: "How to Make French Press Coffee",
    description:
      "Pour over coffee sounds complicated, but this coffee brewing process is surprisingly simple and the results can be amazing with just a little practice. If...",
  },
  {
    blogclass: "md:hidden",
    image: "/assets/images/webp/blog_img_main.webp",
    badge: "Coffee",
    blogDate: "September 18, 20230",
    title: "How To Make Chemex Coffee",
    description:
      "Pour over coffee sounds complicated, but this coffee brewing process is surprisingly simple and the results can be amazing with just a little practice. If...",
  },
];

// ============== COFFEE BEAN =========
export const CoffeeBeanDetails = [
  {
    tittle: "Altitude",
    discription: "900-1000",
  },
  {
    tittle: "Country",
    discription: "Mexico",
  },
  {
    tittle: "Process",
    discription: "Fully washed",
  },
  {
    tittle: "Plantation",
    discription: "Manual",
  },
  {
    tittle: "Weight",
    discription: "50g",
  },
  {
    tittle: "Type",
    discription: "Rubusta",
  },
  {
    tittle: "Bean sort",
    discription: "5",
  },
  {
    tittle: "Roast level",
    discription: "12",
  },
  {
    tittle: "Season",
    discription: "Fall",
  },
  {
    tittle: "Roaster location",
    discription: "South America",
  },
];

export const QualityData = [
  {
    title: "Acidity",
    value: 10,
  },
  {
    title: "Body",
    value: 45,
  },
  {
    title: "Sweetness",
    value: 25,
  },
  {
    title: "Bitterness/",
    span:"Aroma",
    value: 5,
    
  },
  {
    title: "Aftertaste",
    value: 15,
  },
  {
    title: "Balance",
    value: 80,
  },
];
export const newSliderCard = [
  {
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirst: <ChocolateBadge name={"Chocolate"} />,
    badgeSecond: <GreenBadge name={"Bean"} />,
    badgeThird: <OrangeBadge name={"Honey"} />,
    badgeFourth: <RedeBadge name={"caramel"} />,
  },
  {
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirst: <ChocolateBadge name={"Chocolate"} />,
    badgeSecond: <GreenBadge name={"Bean"} />,
    badgeThird: <OrangeBadge name={"Honey"} />,
  },
  {
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirst: <ChocolateBadge name={"Chocolate"} />,
    badgeSecond: <RedeBadge name={"caramel"} />,
  },
  {
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirst: <GreenBadge name={"Bean"} />,
    badgeSecond: <OrangeBadge name={"Honey"} />,
    badgeThird: <RedeBadge name={"caramel"} />,
  },
  {
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirst: <GreenBadge name={"Bean"} />,
    badgeSecond: <RedeBadge name={"caramel"} />,
  },
  {
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirst: <ChocolateBadge name={"Chocolate"} />,
    badgeSecond: <GreenBadge name={"Bean"} />,
    badgeThird: <OrangeBadge name={"Honey"} />,
    badgeFourth: <RedeBadge name={"caramel"} />,
  },
  {
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirst: <GreenBadge name={"Bean"} />,
    badgeThird: <OrangeBadge name={"Honey"} />,
    badgeFourth: <RedeBadge name={"caramel"} />,
  },
];
