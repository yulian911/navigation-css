import { useState } from 'react'

import './App.css'
import NavigationOne from './components/NavigationOne'
import NavigationTwo from './components/NavigationTwo'
import {
  AiFillAndroid,
  AiFillApple,
  AiFillAppstore,
  AiFillChrome,
  AiFillCustomerService,
  AiFillDollarCircle,
  AiFillExperiment,
  AiFillGitlab,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai'

import Sidebar from './components/Sidebar'
import { SlCalender, SlPicture } from 'react-icons/sl'
import { SiSkillshare } from 'react-icons/si'
import Dots from './components/Dots'
import ShareButtons from './components/ShareButtons'

const nav = [
  { name: 'Home', route: '/name', image: <AiOutlineHome />, color: '#f44336' },
  { name: 'Gallery', route: '/name', image: <SlPicture />, color: '#ffa117' },
  { name: 'Skills', route: '/name', image: <SiSkillshare />, color: 'rgb(15, 27, 199)' },
  { name: 'Calender', route: '/name', image: <SlCalender />, color: '#f321e5' },
  { name: 'User', route: '/name', image: <AiOutlineUser />, color: '#b145e9' },
]

function App() {
  const [select, setSelect] = useState(0)

  return (
    <div className="flex">
      <aside className="w-[300px] bg-green-500 h-[100vh] text-black">
        <Sidebar />
      </aside>
      <section className="h-[100vh] bg-slate-500 flex flex-1 flex-col">
        <div className="flex">
          <div className="navigationBox bg-yellow-700">
            <NavigationOne />
          </div>
          <div className="navigationBox bg-yellow-500  ">
            <NavigationTwo />
          </div>
          {/* <div className="navigationBox bg-yellow-200  "></div> */}
        </div>
        <div className="flex">
          <Dots />
          <ShareButtons />
        </div>
      </section>
      <div className="flex flex-1 bg-slate-800 h-[100vh] text-black justify-center items-center">
        <div className="nav_right">
          <ul>
            {nav.map((el, index) => {
              return (
                <li
                  className={`${select === index ? 'active' : null}`}
                  onClick={() => setSelect(index)}>
                  <a href="#">
                    <span className="icon">{el.image}</span>
                    <span className="text">{el.name}</span>
                  </a>
                </li>
              )
            })}
            <li className="indicator"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
