import React from 'react'
import css from '../style/mobiNav.module.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { GrGallery } from 'react-icons/gr'
import { SiSkillshare } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'

const data = [
  { name: 'Home', route: '/name', image: <AiOutlineHome /> },
  { name: 'Gallery', route: '/name', image: <GrGallery /> },
  { name: 'Skills', route: '/name', image: <SiSkillshare /> },
  { name: 'Calender', route: '/name', image: <SlCalender /> },
  { name: 'User', route: '/name', image: <AiOutlineUser /> },
]

const NavigationOne = () => {
  const [select, setSelect] = React.useState(0)
  return (
    <div className={css.navigation}>
      <ul>
        {data.map((el, index) => (
          <li
            key={index}
            className={select === index ? css.active : null}
            onClick={() => setSelect(index)}>
            <a>
              <span className={css.icon}>{el.image}</span>
              <span className={css.text}>{el.name}</span>
            </a>
          </li>
        ))}
        <div className={css.indicator} />
      </ul>
    </div>
  )
}

export default NavigationOne
