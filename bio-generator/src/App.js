import React from "react";

// import "./static/scss/app.scss";
import "react-router-dom";
import { Route, Routes } from "react-router-dom";
// import Header from "./components/presentation/header";
// import Footer from "./components/presentation/footer";
import LandingPage from "./components/presentation/LandingPage";
import GettingStarted from "./components/presentation/gettingStarted";
import Login from "./components/presentation/login";
import Register from "./components/presentation/register";
// import AboutUs from "./components/presentation/aboutUs";
import Contacts from "./components/presentation/contact";
import Education from "./components/presentation/education";
import Finalize from "./components/presentation/finalizePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      {/* <Header></Header> */}

      <Routes>
        {/* <PrivateRoute path="/education" component={Education}></PrivateRoute> */}
        <Route path="/education" element={<Education />} />
        {/* <PrivateRoute path="/contact" component={Contacts}></PrivateRoute> */}
        <Route path="/contact" element={<Contacts />} />

        {/* <Route path="/getting-started" component={GettingStarted}></Route> */}
        <Route path="/getting-started" element={<GettingStarted />} />

        {/* <PrivateRoute path="/resume-templates"component={GettingStarted} ></PrivateRoute> */}
        <Route path="/resume-templates" element={<GettingStarted />} />
        {/* <Route path="/about-us" component={AboutUs}></Route> */}
        {/* <PrivateRoute path="/finalize" component={Finalize}></PrivateRoute> */}
        <Route path="/finalize" element={<Finalize />} />
        {/* <Route path="/login" component={Login}></Route> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" component={Register}></Route> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/" component={LandingPage}></Route> */}

        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
