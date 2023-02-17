import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavigationOne from './components/NavigationOne';
import NavigationTwo from './components/NavigationTwo';
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
} from 'react-icons/ai';
import { GrGallery } from 'react-icons/gr';
import { SiSkillshare } from 'react-icons/si';
import { SlCalender } from 'react-icons/sl';

const data = [
  { x: -1, y: 0, image: <AiFillApple /> },
  { x: 1, y: 0, image: <AiFillAppstore /> },
  { x: 0, y: -1, image: <AiFillChrome /> },
  { x: 0, y: 1, image: <AiFillCustomerService /> },
  { x: -1, y: 1, image: <AiFillExperiment /> },
  { x: -1, y: -1, image: <AiFillDollarCircle /> },
  { x: 1, y: -1, image: <AiFillAndroid /> },
  { x: 1, y: 1, image: <AiFillGitlab /> },
];

const nav = [
  { name: 'Home', route: '/name', image: <AiOutlineHome />, color: '#f44336' },
  { name: 'Gallery', route: '/name', image: <GrGallery />, color: '#ffa117' },
  { name: 'Skills', route: '/name', image: <SiSkillshare />, color: 'rgb(15, 27, 199)' },
  { name: 'Calender', route: '/name', image: <SlCalender />, color: '#f321e5' },
  { name: 'User', route: '/name', image: <AiOutlineUser />, color: '#b145e9' },
];

function App() {
  const [show, setShow] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [select, setSelect] = useState(0);

  return (
    <div className="flex">
      <aside className="w-[400px] bg-green-500 h-[100vh] text-black">
        <div className={`navigation ${showToggle ? 'active' : null}`}>
          <div className="menuToggle" onClick={() => setShowToggle(!showToggle)} />
          <ul>
            {nav.map((el, index) => {
              const style = { '--crl': el.color };
              return (
                <li
                  className={`list ${select === index ? 'active' : null}`}
                  onClick={() => setSelect(index)}>
                  <a href="#" style={style}>
                    <span className="icon">{el.image}</span>
                    <span className="text">{el.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
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
        <div>
          <div className={`navigationBox bg-[#161a23] `}>
            <div className="main">
              <div className={`nav ${show ? 'active' : null}`}>
                {data.map((el, index) => {
                  const style = { '--x': el.x, '--y': el.y, '--i': index };
                  return (
                    <span key={index} style={style}>
                      {el.image}
                    </span>
                  );
                })}
              </div>
              <div className="close" onClick={() => setShow(!show)}>
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-1 bg-slate-800 h-[100vh] text-black justify-center items-center">
        <div className="nav_right">
          <ul>
            {nav.map((el, index) => {
              return (
                <li>
                  <a href="#" onClick={() => setSelect(index)}>
                    <span className="icon">{el.image}</span>
                    <span className="text">{el.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
