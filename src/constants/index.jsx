import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm, FiHelpCircle, FiSettings } from "react-icons/fi";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { RiFeedbackLine, RiLightbulbLine } from "react-icons/ri";

export const categories = [
  { name: "Anasayfa", icon: <AiFillHome />, path: "/" },
  {
    name: "Trendler",
    icon: <MdLocalFireDepartment />,
    path: "trending",
  },
  {
    name: "Müzik",
    icon: <CgMusicNote />,
    path: "müzik",
  },
  { name: "Filmler", icon: <FiFilm />, path: "filmler" },
  { name: "Canlı", icon: <MdLiveTv />, path: "canlı" },
  {
    name: "Oyun",
    icon: <IoGameControllerSharp />,
    path: "oyun",
  },
  {
    name: "Haberler",
    icon: <ImNewspaper />,
    path: "haberler",
  },
  {
    name: "Spor",
    icon: <GiDiamondTrophy />,
    path: "sport",
  },
  {
    name: "Eğitici",
    icon: <RiLightbulbLine />,
    path: "eğitim",
  },
  {
    name: "Güzellik & Kozmetik",
    icon: <GiEclipse />,
    path: "kozmetik",
    divider: true,
  },
  { name: "Ayarlar", icon: <FiSettings />, type: "menu" },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
  },
  { name: "Yardım", icon: <FiHelpCircle />, type: "menu" },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];
