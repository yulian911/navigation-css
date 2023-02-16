import { useState } from 'react'
import reactLogo from './assets/react.svg'
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

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="flex">
      <aside className="w-[400px] bg-green-500 h-[100vh]"></aside>
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
        <div>
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
        </div>
      </section>
    </div>
  )
}

export default App
