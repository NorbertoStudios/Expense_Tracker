import {
  BiHome,
  BiSearchAlt,
  BiBarChart,
  BiCoinStack,
  BiDollar,
  BiSliderAlt,
  BiTransferAlt,
} from "react-icons/bi";
import Image from "next/image";


export const navIconSize = 24;

export const logoHome = (
    <a className="flex items-center w-full px-3 mt-3" href="#">
          <Image className='rounded-full' src={"/NS_fox_outline.svg"} height={40} width={40}/>
          <span className="ml-2 text-sm font-bold">Norberto Studios</span>
        </a>
)

export const navItems = [
  {
    name: "Search",
    icon: <BiSearchAlt size={navIconSize} />,
    hRef: "search",
  },
  {
    name: "Dashboard",
    icon: <BiHome size={navIconSize} />,
    hRef: "dashboard",
  },
  {
    name: "Transations",
    icon: <BiTransferAlt size={navIconSize} />,
    hRef: "transations",
  },
  {
    name: "Insights",
    icon: <BiBarChart size={navIconSize} />,
    hRef: "insights",
  },
  {
    name: "Pay Off",
    icon: <BiCoinStack size={navIconSize} />,
    hRef: "pay-off",
  },
  {
    name: "Budget",
    icon: <BiDollar size={navIconSize} />,
    hRef: "bidget",
  },
];

export const navItemSetting = {
    name: "Settings",
    icon: <BiSliderAlt size={navIconSize} />,
    hRef: "settings",
  }

/* <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg> */
