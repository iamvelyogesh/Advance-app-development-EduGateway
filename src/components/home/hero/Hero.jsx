// import React from "react"
// import Heading from "../../common/heading/Heading"
// import "../../../assets/css/Hero.css"

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <Heading subtitle='WELCOME TO EduGateway' title='Best Online Counselling Platform' />
//             <p>Empowering Minds, Transforming Lives: Your Path to Personal Growth Starts Here with EduGateway's Online Counseling Platform.</p>
//             <div className='button'>
//               <button className='primary-btn'>
//                 GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//               <button>
//                 VIEW COLLEGES <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   )
// }

// export default Hero
import React from "react";
import Heading from "../../common/heading/Heading";
import "../../../assets/css/Hero.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  const handleClickclg = () => {
   window.location.href("/collg"); // Navigate to "/collg" when button is clicked
  };
  const handleClickabt = () => {
   window.location.href("/collg"); // Navigate to "/collg" when button is clicked
  };
  return (
    <>
      <section className='hero'>


        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO EduGateway' title='Best Online Counselling Platform' />
            <p>Empowering Minds, Transforming Lives: Your Path to Personal Growth Starts Here with EduGateway's Online Counseling Platform.</p>
            {/* <div className='button'>
              <button className='primary-btn' onClick={handleClickclg}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button onClick={handleClickclg}>
                VIEW COLLEGES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
