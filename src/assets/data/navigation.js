import {
  FaFacebook,
  FaInstagram,
  FaHome,
  FaCalendarAlt,
  FaUserFriends,
  FaWpforms,
  FaSearchLocation,
} from "react-icons/fa"

import { BsYoutube } from "react-icons/bs"

import { AiFillPhone, AiOutlineDisconnect } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import Homepage from "../../components/_pages/Homepage/Homepage"
import Trainings from "../../components/_pages/Trainings/Trainings"
import About from "../../components/_pages/About/About"
import Partners from "../../components/_pages/Partners/Partners"
import Contact from "../../components/_pages/Contact/Contact"

export const navLinks = [
  {
    id: 1,
    url: "/",
    text: "PriMMAt Gym",
    icon: <FaHome />,
    element: <Homepage />,
  },
  // {
  //   id: 2,
  //   url: '/trainings',
  //   text: 'Tréninky',
  //   icon: <FaCalendarAlt />,
  //   element: <Trainings />,
  // },
  {
    id: 3,
    url: "/about",
    text: "Napsali o nás",
    icon: <FaWpforms />,
    element: <About />,
  },
  {
    id: 4,
    url: "/partners",
    text: "Partneři",
    icon: <AiOutlineDisconnect />,
    element: <Partners />,
  },
  {
    id: 5,
    url: "/contact",
    text: "Kontakt",
    icon: <FaUserFriends />,
    element: <Contact />,
  },
]

export const socialLinks = [
  {
    id: 1,
    url: "https://www.facebook.com/PriMMAtGymPraha",
    type: "facebook",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.youtube.com/channel/UCrDiM6npt1vyM1QnmL3NGhA?view_as=subscriber",
    type: "youtube",
    icon: <BsYoutube />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/primmatgympraha/",
    type: "instagram",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "mailto:evgenia@promolab.cz?Subject=Hello PriMMAt Gym",
    type: "email",
    icon: <MdEmail />,
  },
  {
    id: 5,
    url: "tel:+420776199358",
    type: "phone",
    icon: <AiFillPhone />,
  },
  {
    id: 6,
    url: "https://goo.gl/maps/oVN7iShySh3hXToX9",
    type: "location",
    icon: <FaSearchLocation />,
  },
]
