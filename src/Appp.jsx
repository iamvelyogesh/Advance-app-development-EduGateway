// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";

// const LazyLOGIN = lazy(() => import("./pages/OR/Form/Login"));
// const LazyForm = lazy(() => import("./pages/OR/Form/Form"));
// const LazyHome = lazy(() => import("./components/home/Home"));
// const LazyAbout = lazy(() => import("./components/about/About"));
// const LazyCourseHome = lazy(() => import("./components/allcourses/CourseHome"));
// const LazyTeam = lazy(() => import("./components/team/Team"));
// const LazyPricing = lazy(() => import("./components/pricing/Pricing"));
// const LazyBlog = lazy(() => import("./components/blog/Blog"));
// const LazyContact = lazy(() => import("./components/contact/Contact"));
// const LazyProfile = lazy(() => import("./components/profile/profile"));
// const LazyEnrollmentPage = lazy(() => import("./components/Enrollment/EnrollmentPage"));
// const LazyApplications = lazy(() => import("./components/Applications/Applications"));
// import './assets/css/App.css'
// import './assets/css/profile.css'

// function Appp() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyLOGIN/></Suspense>} />
//         <Route path="/signup" element={<Suspense fallback={<div>Loading...</div>}><LazyForm/></Suspense>} />
//         <Route exact path='/home' element={<Suspense fallback={<div>Loading...</div>}><LazyHome/></Suspense>} />
//         <Route exact path='/about' element={<Suspense fallback={<div>Loading...</div>}><LazyAbout/></Suspense>} />
//         <Route exact path='/collg' element={<Suspense fallback={<div>Loading...</div>}><LazyCourseHome/></Suspense>} />
//         <Route exact path='/team' element={<Suspense fallback={<div>Loading...</div>}><LazyTeam/></Suspense>} />
//         <Route exact path='/faq' element={<Suspense fallback={<div>Loading...</div>}><LazyPricing/></Suspense>} />
//         <Route exact path='/journal' element={<Suspense fallback={<div>Loading...</div>}><LazyBlog/></Suspense>} />
//         <Route exact path='/contact' element={<Suspense fallback={<div>Loading...</div>}><LazyContact/></Suspense>} />
//         <Route exact path='/profile' element={<Suspense fallback={<div>Loading...</div>}><LazyProfile/></Suspense>} />
//         <Route exact path='/enroll' element={<Suspense fallback={<div>Loading...</div>}><LazyEnrollmentPage/></Suspense>} />
//         <Route exact path='/applications' element={<Suspense fallback={<div>Loading...</div>}><LazyApplications/></Suspense>} />
//       </Routes>
//     </Router>
//   );
// }

// export default Appp;


// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import Form from './pages/OR/Form/Form';
// import LOGIN from "./pages/OR/Form/Login";
// import Home from './components/home/Home';
// import About from "./components/about/About"
// import CourseHome from "./components/allcourses/CourseHome"
// import Team from "./components/team/Team"
// import Pricing from "./components/pricing/Pricing"
// import Blog from "./components/blog/Blog"
// import Contact from "./components/contact/Contact"
// import './assets/css/App.css'
// import './assets/css/profile.css'
// import Profile from "./components/profile/profile";
// import Navigation from "./pages/ADMIN/Components/Navigation/Navigation";
// import EnrollmentPage from "./components/Enrollment/EnrollmentPage";
// import Applications from "./components/Applications/Applications";

// function Appp() {
//   return (
  
//   <Router>
//     {/* <Header /> */}
//     <Routes>
//       <Route path ="/" element = {<LOGIN/>} />
//       <Route path ="/signup" element = {<Form/>} />
//       <Route exact path='/home' element={<Home/>} />
//       <Route exact path='/about' element={<About/>} />
//       <Route exact path='/collg' element={<CourseHome/>} />
//       <Route exact path='/team' element={<Team/>} />
//       <Route exact path='/faq' element={<Pricing/>} />
//       <Route exact path='/journal' element={<Blog/>} />
//       <Route exact path='/contact' element={<Contact/>} />
//       <Route exact path='/profile' element={<Profile/>} />
//       {/* <Route exact path='/admin' element={<Navigation/>} /> */}
//       <Route exact path='/enroll' element={<EnrollmentPage/>} />
//       <Route exact path='/applications' element={<Applications/>} />
//     </Routes>
//     {/* <Footer /> */}
//   </Router>
   
//   );
// }

// export default Appp;


import { lazy, Suspense } from "react";
import './assets/css/App.css'
import './assets/css/profile.css'
import "./assets/css/price.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import loadingImage from './assets/images/l/loading.gif'; // Import the image
import './assets/css/navig.css';

// Lazy load the components
const LazyLoginForm = lazy(() => import("./pages/OR/Form/Login"));
const LazyForm = lazy(() => import("./pages/OR/Form/Form"));
const LazyHome = lazy(() => import("./components/home/Home"));
const LazyAbout = lazy(() => import("./components/about/About"));
const LazyCourseHome = lazy(() => import("./components/allcourses/CourseHome"));
const LazyTeam = lazy(() => import("./components/team/Team"));
const LazyPricing = lazy(() => import("./components/pricing/Pricing"));
const LazyBlog = lazy(() => import("./components/blog/Blog"));
const LazyContact = lazy(() => import("./components/contact/Contact"));
const LazyProfile = lazy(() => import("./components/profile/profile"));
const LazyEnrollmentPage = lazy(() => import("./components/Enrollment/EnrollmentPage"));
const LazyApplications = lazy(() => import("./components/Applications/Applications"));
const LazyAdmin = lazy(() => import("./pages/ADMIN/Components/Navigation/Navigation"));
const LazyPay = lazy(() => import("./components/payment/PaymentPage"));
const Lazyadmclg = lazy(() => import("./pages/ADMIN/Components/Navigation/Mainclg"));
const Lazyadmcour = lazy(() => import("./pages/ADMIN/Components/Navigation/MainCourse"));
const Lazydisplay = lazy(() => import("./pages/ADMIN/Components/Navigation/Maindisplay"));
const Lazyeditcourses = lazy(() => import("./pages/ADMIN/Components/Navigation/MainEditCourse"));
const Lazyadmineditclg = lazy(() => import("./pages/ADMIN/Components/Navigation/MainEditclg"));
const Lazyeditapplicationform = lazy(() => import("./pages/ADMIN/Components/Navigation/MainEditApplications"));
const Lazyupdateapplicationform = lazy(() => import("./pages/ADMIN/Components/Navigation/MainDecision"));
const Lazypay = lazy(() => import("./pages/ADMIN/Components/Navigation/MainPayments"));
const Lazyappform = lazy(() => import("./components/allcourses/ApplicationForm"));

function App() {
  return (
    <Router>
      <Suspense fallback={<img src={loadingImage} alt="Loading..." />}>
        <Routes>
          <Route path="/" element={<LazyLoginForm />} />
          <Route path="/signup" element={<LazyForm />} />
          <Route path="/home" element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/collg" element={<LazyCourseHome />} />
          <Route path="/team" element={<LazyTeam />} />
          <Route path="/faq" element={<LazyPricing />} />
          <Route path="/journal" element={<LazyBlog />} />
          <Route path="/contact" element={<LazyContact />} />
          <Route path="/profile" element={<LazyProfile />} />
         <Route exact path='/enroll' element={<Suspense fallback={<div>Loading...</div>}><LazyEnrollmentPage/></Suspense>} />
         <Route exact path='/applications' element={<Suspense fallback={<div>Loading...</div>}><LazyApplications/></Suspense>} />
         <Route exact path='/admin' element={<Suspense fallback={<div>Loading...</div>}><LazyAdmin/></Suspense>} />
         <Route exact path='/pay' element={<Suspense fallback={<div>Loading...</div>}><LazyPay/></Suspense>} />
         <Route exact path='admin/college' element={<Suspense fallback={<div>Loading...</div>}><Lazyadmclg/></Suspense>} />
         <Route exact path='admin/course' element={<Suspense fallback={<div>Loading...</div>}><Lazyadmcour/></Suspense>} />
         <Route exact path='admin/display' element={<Suspense fallback={<div>Loading...</div>}><Lazydisplay/></Suspense>} />
         <Route exact path='admin/editcourses' element={<Suspense fallback={<div>Loading...</div>}><Lazyeditcourses/></Suspense>} />
         <Route exact path='admin/editclg' element={<Suspense fallback={<div>Loading...</div>}><Lazyadmineditclg/></Suspense>} />
         <Route exact path='applicationform' element={<Suspense fallback={<div>Loading...</div>}><Lazyappform/></Suspense>} />
         <Route exact path='admin/editapplicationform' element={<Suspense fallback={<div>Loading...</div>}><Lazyeditapplicationform/></Suspense>} />
         <Route exact path='admin/updateapplicationform' element={<Suspense fallback={<div>Loading...</div>}><Lazyupdateapplicationform/></Suspense>} />
         <Route exact path='admin/pay' element={<Suspense fallback={<div>Loading...</div>}><Lazypay/></Suspense>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;


// import { lazy, Suspense } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import loadingImage from './assets/images/l/loading.gif'; // Import the image
// import './assets/css/App.css'
// import './assets/css/profile.css'

// // Lazy load the components
// const LazyLoginForm = lazy(() => import("./pages/OR/Form/Login"));
// const LazyForm = lazy(() => import("./pages/OR/Form/Form"));
// const LazyHome = lazy(() => import("./components/home/Home"));
// const LazyAbout = lazy(() => import("./components/about/About"));
// const LazyCourseHome = lazy(() => import("./components/allcourses/CourseHome"));
// const LazyTeam = lazy(() => import("./components/team/Team"));
// const LazyPricing = lazy(() => import("./components/pricing/Pricing"));
// const LazyBlog = lazy(() => import("./components/blog/Blog"));
// const LazyContact = lazy(() => import("./components/contact/Contact"));
// const LazyProfile = lazy(() => import("./components/profile/profile"));

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<img src={loadingImage} alt="Loading..." />}>
//         <Routes>
//           <Route path="/" element={<LazyLoginForm />} />
//           <Route path="/signup" element={<LazyForm />} />
//           <Route path="/home" element={<LazyHome />} />
//           <Route path="/about" element={<LazyAbout />} />
//           <Route path="/collg" element={<LazyCourseHome />} />
//           <Route path="/team" element={<LazyTeam />} />
//           <Route path="/faq" element={<LazyPricing />} />
//           <Route path="/journal" element={<LazyBlog />} />
//           <Route path="/contact" element={<LazyContact />} />
//           <Route path="/profile" element={<LazyProfile />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;

