import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "../../../assets/css/header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB '>
          
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/collg'>Colleges</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            {/* <li>
              <Link to='/team'>Applications</Link>
            </li> */}
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/journal'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='buttonn'> 
            <Link to='/profile'><i className="fa fa-user-circle" /> </Link>
            </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import Head from "./Head"
// import "../../../assets/css/header.css"

// const Header = () => {
//   const [click, setClick] = useState(false)

//   return (
//     <>
//       <Head />
//       <header>
//         <nav className='flexSB'>
//           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
//             <li>
//               <Link to='/home'>Home</Link>
//             </li>
//             <li>
//               <Link to='/collg'>Colleges</Link>
//             </li>
//             <li>
//               <Link to='/about'>About</Link>
//             </li>
//             {/* <li>
//               <Link to='/team'>Applications</Link>
//             </li> */}
//             <li>
//               <Link to='/faq'>FAQ</Link>
//             </li>
//             <li>
//               <Link to='/journal'>Blog</Link>
//             </li>
//             <li>
//               <Link to='/contact'>Contact</Link>
//             </li>
//           </ul>
//           <div className='start'>
//             <div className='button'>Profile</div>
//           </div>
//           <button className='toggle' onClick={() => setClick(!click)}>
//             {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Header
