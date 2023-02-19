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
} from 'react-icons/ai'

const data = [
  { x: -1, y: 0, image: <AiFillApple /> },
  { x: 1, y: 0, image: <AiFillAppstore /> },
  { x: 0, y: -1, image: <AiFillChrome /> },
  { x: 0, y: 1, image: <AiFillCustomerService /> },
  { x: -1, y: 1, image: <AiFillExperiment /> },
  { x: -1, y: -1, image: <AiFillDollarCircle /> },
  { x: 1, y: -1, image: <AiFillAndroid /> },
  { x: 1, y: 1, image: <AiFillGitlab /> },
]

const Dots = () => {
  const [show, setShow] = useState(false)

  return (
    <div className={`navigationBox bg-[#161a23] `}>
      <div className="main">
        <div className={`nav ${show ? 'active' : null}`}>
          {data.map((el, index) => {
            const style = { '--x': el.x, '--y': el.y, '--i': index }
            return (
              <span key={index} style={style}>
                {el.image}
              </span>
            )
          })}
        </div>
        <div className="close" onClick={() => setShow(!show)}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}

export default Dots
