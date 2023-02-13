import {
  FaFacebook,
  FaInstagram,
  FaHome,
  FaCalendarAlt,
  FaUserFriends,
  FaWpforms,
  FaSearchLocation,
} from 'react-icons/fa'

import { BsYoutube } from 'react-icons/bs'

import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'

export const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'PriMMAt Gym',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/trainings',
    text: 'Tréninky',
    icon: <FaCalendarAlt />,
  },
  {
    id: 3,
    url: '/price-list',
    text: 'Ceník',
    icon: <GiPriceTag />,
  },
  {
    id: 4,
    url: '/about',
    text: 'Napsali o nás',
    icon: <FaWpforms />,
  },
  {
    id: 5,
    url: '/contact',
    text: 'Kontakt',
    icon: <FaUserFriends />,
  },
]

export const socialLinks = [
  {
    id: 1,
    url: 'https://www.facebook.com/PriMMAtGymPraha',
    type: 'facebook',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.youtube.com/channel/UCrDiM6npt1vyM1QnmL3NGhA?view_as=subscriber',
    type: 'youtube',
    icon: <BsYoutube />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com/primmatgympraha/',
    type: 'instagram',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: 'mailto:evgenia@dpromolab.cz?Subject=Hello PriMMAt Gym',
    type: 'email',
    icon: <MdEmail />,
  },
  {
    id: 5,
    url: 'tel:+420725572706',
    type: 'phone',
    icon: <AiFillPhone />,
  },
  {
    id: 6,
    url: 'https://goo.gl/maps/oVN7iShySh3hXToX9',
    type: 'location',
    icon: <FaSearchLocation />,
  },
]
