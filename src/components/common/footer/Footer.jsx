import React from "react"
import { blog } from "../../../dummydata"
import "../../../assets/css/footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container1 padding'>
          <div className='box logo'>
            <h1>EduGateway<br></br>
            <span>ONLINE COLLEGE ADMISSION PORTAL</span></h1>
            {/* <p>Empowering Minds, Transforming Lives: Your Path to Personal Growth Starts Here with EduGateway's Online Counseling Platform.</p> */}

            
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Contact?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                SKCET, Kuniyamuthur, Coimbatore
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 94439 46688
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                cbvelyogesh@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 done by Vel Yogesh C B 
        </p>
      </div>
    </>
  )
}

export default Footer
