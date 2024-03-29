import { BsOctagon } from 'react-icons/bs'
import {
  GiBlackBelt,
  GiHighKick,
  GiKimono,
  GiUnderwearShorts,
} from 'react-icons/gi'
import { BiDumbbell } from 'react-icons/bi'

const home = [
  {
    id: 1,
    heading: 'PriMMAt Gym Praha',
    trainingLink: '',
    contactLink: '',
    video: 'https://www.youtube.com/embed/BMqbsp3h9bQ"',
    paragraphs1: [
      {
        text: 'Sportovní klub zaměřený na smíšená bojová umění (MMA) založený v roce 2012. Nabízíme přípravu nejen profesionálním závodníkům, ale i tréninky pro začátečníky MMA, kruhové tréninky, Brazilské Jiu Jitsu, thai box, sambo nebo grappling. V tělocvičně si můžete dojít zacvičit i mimo tréninky, využit činkárnu nebo kardio zónu.',
      },
      {
        text: 'Máme tréninky, jak pro nováčky nepolíbené jakýmkoliv bojovým sportem, tak i začátečníky a profesionální závodníky. Na první trénink potřebujete pouze sportovní oděv (tričko a trenky). Více informací najdete v sekci',
      },
    ],
    paragraphs2: [
      {
        title: 'mma',
        text: 'jsou smíšená bojová umění. Zápasí se v kleci ve tvaru oktagonu. V postoji se používají techniky boxu, kickboxu, thajského boxu, juda a dalších. Boj pokračuje i na zemi, kde přichází na řadu zápasení, Brazilské Jiu Jitsu, grappling a další.',
        icon: <BsOctagon className='icon' />,
      },
      {
        title: 'bjj',
        text: 'je především o technikách páčení, uchopení a škrcení. Souboj se ve většině případů odehrává na zemi, kde se síly zápasníků ještě více vyrovnávají.',
        icon: <GiBlackBelt className='icon' />,
      },
      {
        title: 'thai box',
        text: 'je tradiční umění sebeobrany pocházející z Thajska. Od boxu se thai box odlišuje tím, že k neozbrojenému boji používá nejen pěsti, ale i chodidla, lokty a kolena.',
        icon: <GiHighKick className='icon' />,
      },
      {
        title: 'sambo',
        text: 'je staré sovětské bojové umění. Cílem tohoto sebeobranného cvičení není celkové zneškodnění nebo ublížení útočníkovi. Snaží se především o rychlé a účinné omráčení protivníka. Naučíte se tak základním sebeobranným praktikám a principům, jak a kam protiútok směřovat s minimální silou a maximálním efektem.',
        icon: <GiKimono className='icon' />,
      },
      {
        title: 'grappling',
        text: 'se vyznačuje bezúderovou technikou. Jeho hlavní dominantou je přenesení boje na zem a použití nejrůznějších pák a škrcení.',
        icon: <GiUnderwearShorts className='icon' />,
      },
      {
        title: 'Kruhové tréninky',
        text: 'zakládáme na komplexním posílení celého těla. Zajímavé cviky s prvky bojových umění.',
        icon: <BiDumbbell className='icon' />,
      },
    ],
  },
]
export default home
