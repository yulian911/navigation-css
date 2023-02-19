import React, { useState } from 'react'
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
import { SiSkillshare } from 'react-icons/si'
import { SlCalender, SlPicture } from 'react-icons/sl'

const nav = [
  { name: 'Home', route: '/name', image: <AiOutlineHome />, color: '#f44336' },
  { name: 'Gallery', route: '/name', image: <SlPicture />, color: '#ffa117' },
  { name: 'Skills', route: '/name', image: <SiSkillshare />, color: 'rgb(15, 27, 199)' },
  { name: 'Calender', route: '/name', image: <SlCalender />, color: '#f321e5' },
  { name: 'User', route: '/name', image: <AiOutlineUser />, color: '#b145e9' },
]

const Sidebar = () => {
  const [showToggle, setShowToggle] = useState(false)
  const [select, setSelect] = useState(0)

  return (
    <div className={`navigation ${showToggle ? 'active' : null} `}>
      <div className="menuToggle" onClick={() => setShowToggle(!showToggle)} />
      <ul>
        {nav.map((el, index) => {
          const style = { '--crl': el.color }
          return (
            <li
              className={`list ${select === index ? 'active' : null}`}
              onClick={() => setSelect(index)}>
              <a href="#" style={style}>
                <span className="icon">{el.image}</span>
                <span className="text">{el.name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
