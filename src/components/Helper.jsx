import {
  ChocolateBadge,
  GreenBadge,
  OrangeBadge,
  RedeBadge,
} from "./AllBadges";

export const beanProductList = [
  {
    id: "1",
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirstName:'Bean',
    badgeSecondName:'Caramel',
    badgeThirdName:'Chocalate',
    badgeFourName:'Honey',
    badgeFirst: <GreenBadge className={"py-[6px] px-[10px]"} name={"Bean"} />,
    badgeSecond: (
      <RedeBadge className={"py-[6px] px-[10px]"} name={"caramel"} />
    ),
    badgeThird: (
      <ChocolateBadge className={"py-[6px] px-[10px]"} name={"chocalate"} />
    ),
    badgeFourth: (
      <OrangeBadge className={"py-[6px] px-[10px]"} name={"Honey"} />
    ),
  },
  {
    id: "2",
    image: "/assets/images/png/new_slider_bean.png",
    title: "Coffee Bean",
    description: "Malerapaso",
    badgeFirstName:'Bean2',
    badgeSecondName:'Caramel2',
    badgeThirdName:'Chocalate2',
    badgeFourName:'Honey2',
    badgeFirst: <GreenBadge className={"py-[6px] px-[10px]"} name={"Bean"} />,
    badgeSecond: (
      <RedeBadge className={"py-[6px] px-[10px]"} name={"caramel"} />
    ),
    badgeThird: (
      <ChocolateBadge className={"py-[6px] px-[10px]"} name={"Bean"} />
    ),
    badgeFourth: (
      <OrangeBadge className={"py-[6px] px-[10px]"} name={"Honey"} />
    ),
  },
];
