// import React from 'react';
// import Header from '../common/header/Header';

// function ProfilePage() {
//   return (
//     <section style={{ backgroundColor: '#eee' }}>
//       <div >
//        <Header/>
         
//         <div className="row1 ">
//             <div className='f'>
//         <div className="col-lg-8">
//             <div className="card1 mb-4">
//               <div className="card-body">
//               <div className="row">
//                     <h1>Your Profile</h1>
//                     <br></br>
//                   <div className="col-sm-3">
//                     <p className="mb-0">Full Name</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted">Vel Yogesh C B</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Email</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted">cbvelyogesh@gmail.com</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">dob</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted">22/07/03</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Phone</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted">+91 94439 46688</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Student ID</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted">24vy001</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Address</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted">Coimbatore, Tamil Nadu, Coimbatore</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="card2 mb-4">
//               <div className="card-body text-center">
//               <img
//                   src="https://media.licdn.com/dms/image/D5603AQGzgkl98B5Z5Q/profile-displayphoto-shrink_800_800/0/1693999116975?e=2147483647&v=beta&t=xZVLJqazLnvtgnTvRMpbXuCJauc9KSUIfvgat9-Mp3g"
//                   alt="avatar"
//                   className="rounded-circle"
//                   style={{ width: '150px' }}
//                 />
//                 <p className="text-muted mb-1">Full Stack Developer</p>
//                 <p className="text-muted mb-4">Coimbatore, Tamil Nadu</p>
//                 <div className="d-flex justify-content-center mb-2">
//                   <button className="btn btn-primary">Edit</button>
//                   <button className="btn btn-outline-primary ms-1">Applications</button>
//                 </div>
//               </div>
//             </div>

//             <div className="card3">
//               <div className="card-body p-0">
//                 <ul className="list-group list-group-flush rounded-3">
//                   <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                     <h2>Follow me on</h2>
//                   </li>
//                   <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                     <i className="fab fa-github fa-lg me-2" style={{ color: '#333333' }}></i>
//                     <span>     https://github.com/iamvelyogesh</span>
//                   </li>
//                   <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                     <i className="fab fa-twitter fa-lg me-2" style={{ color: '#55acee' }}></i>
//                     <span>     https://twitter.com/cbvelyogesh</span>
//                   </li>
//                   <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                     <i className="fab fa-instagram fa-lg me-2" style={{ color: '#ac2bac' }}></i>
//                     <span>     https://www.instagram.com/iamvelyogesh/</span>
//                   </li>
//                   <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                     <i className="fab fa-facebook fa-lg me-2" style={{ color: '#3b5998' }}></i>
//                     <span>     https://www.facebook.com/vel.yogesh</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           </div>

          
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProfilePage;


import React,{useState} from 'react';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import a from '../../assets/images/l/bg.webp';
import { Link } from 'react-router-dom';
import '../../assets/css/p2.scss'

function ProfilePage() {
   
    
  return (
    <>
       <img src={a} alt="Login Image" className="login-image2" />
    <section >
      <div >
       <Header/>
         
        <div className="row1 ">
            <div className='f'>
        <div className="col-lg-8">
            <div className="card1 mb-4">
              <div className="card-body">
              <div className="row">
                    <h1>Your Profile</h1>
                    <br></br>
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">Vel Yogesh C B</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">cbvelyogesh@gmail.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">dob</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">22/07/03</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">+91 94439 46688</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Student ID</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">24vy001</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted">Coimbatore, Tamil Nadu, Coimbatore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card2 mb-4">
              <div className="card-body text-center">
              <img
                  src="https://media.licdn.com/dms/image/D5603AQGzgkl98B5Z5Q/profile-displayphoto-shrink_800_800/0/1693999116975?e=2147483647&v=beta&t=xZVLJqazLnvtgnTvRMpbXuCJauc9KSUIfvgat9-Mp3g"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Coimbatore, Tamil Nadu</p>
                <div className="d-flex justify-content-center mb-2">
                  <button className="btn btn-primary">Edit</button>
                  <Link to = '/applications'><button className="btn btn-outline-primary ms-1" >Applications</button></Link>
                  <Link to = '/'><button className="btn btn-primary">Logout</button></Link>
                </div>
              </div>
            </div>

            <div className="card3">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <h2>Follow me on</h2>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg me-2" style={{ color: '#333333' }}></i>
                    <span>     https://github.com/iamvelyogesh</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg me-2" style={{ color: '#55acee' }}></i>
                    <span>     https://twitter.com/cbvelyogesh</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg me-2" style={{ color: '#ac2bac' }}></i>
                    <span>     https://www.instagram.com/iamvelyogesh/</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook fa-lg me-2" style={{ color: '#3b5998' }}></i>
                    <span>     https://www.facebook.com/vel.yogesh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
            
          
           {/* <div className="col-lg-12">
             <table className="table table-striped">
               <thead>
                 <tr>
                   <th>College</th>
                   <th>Time of Application</th>
                   <th>Status</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>Sample College</td>
                   <td>22/02/2024 10:00 AM</td>
                   <td>Approved</td>
                 </tr>
                 <tr>
                   <td>Another College</td>
                   <td>21/02/2024 03:00 PM</td>
                   <td>Rejected</td>
                 </tr>
                 <tr>
                   <td>Yet Another College</td>
                   <td>20/02/2024 09:00 AM</td>
                   <td>Submitted</td>
                 </tr>
               </tbody>
             </table>
           </div> */}
          
          <div>
            <br></br><br></br><br></br>
            <h10>Your Personal Tutor Assistants</h10>
          <section className="highlights containerpp">
            <article className="highlights__item">
              <img src="/src/assets/images/team/t1.webp" alt="Profile Picture" className="highlights__img" />
              <div className="highlights__text">
                <p className="highlights__text--primary">   Trainer 1</p>
                <p className="highlights__text--secondary">  9852147630</p>
              </div>
              <div className="highlights__text">
                <p className="highlights__text--primary commons__green">Verified</p>
                <p className="highlights__text--secondary">Call/msg</p>
              </div>
            </article>
    
            <article className="highlights__item">
              <img src="/src/assets/images/team/t2.webp" alt="Profile Picture" className="highlights__img" />
              <div className="highlights__text">
                <p className="highlights__text--primary">Trainer 1</p>
                <p className="highlights__text--secondary">8745690213</p>
              </div>
              <div className="highlights__text">
                <p className="highlights__text--primary commons__green">Verified</p>
                <p className="highlights__text--secondary">Call/msg</p>
              </div>
            </article>
          </section>
        </div>
        </div>
      </div>
      <br></br><br></br>
      <Footer/>
    </section>
    </>
  );
}

export default ProfilePage;
