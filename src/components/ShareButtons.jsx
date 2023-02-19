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
} from 'react-icons/ai'
import { MdShare } from 'react-icons/md'
import '../style/shareButton.css'

const shareDots = [
  { color: '#f44336', image: <AiFillApple /> },
  { color: '#ffa117', image: <AiFillAppstore /> },
  { color: 'rgb(15, 27, 199)', image: <AiFillChrome /> },
  { color: '#f321e5', image: <AiFillCustomerService /> },
  { color: '#b145e9', image: <AiFillExperiment /> },
  { color: '#ff0000', image: <AiFillDollarCircle /> },
  { color: '#bd081c', image: <AiFillAndroid /> },
  { color: '#0a66c2', image: <AiFillGitlab /> },
]

const ShareButtons = () => {
  const [show, setShow] = useState(false)
  return (
    <div className={`containerShareBox text-black`}>
      <div className={`menu ${show ? 'active' : null}`}>
        <div className="toggle" onClick={() => setShow(!show)}>
          <MdShare />
        </div>
        {shareDots.map((el, index) => {
          const style = { '--i': index, '--crl': el.color }
          return (
            <>
              <li style={style}>
                <a
                  href={'#'}
                  style={{ transform: `rotate(calc(360deg/-8 * ${index}))`, color: el.color }}>
                  {el.image}
                </a>
              </li>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ShareButtons
