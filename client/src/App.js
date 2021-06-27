import React from "react";
import Appointments from "./pages/appointments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from './components/Login/LoginButton';
// import Navbar from "./components/Navbar";
// import Main from "./components/HomePage/main";
// import Sidebar from "./components/UserDashboard/index";

// import StoreLocator from "./components/StoreLocator/index";
import Error from "./components/Error";
// import Navbar from "./components/Navbar";
import Home from "./components/newpages/Home";

// NEW PAGES IMPORTS - CAN DELETE LATER
// import Home from "./components/newpages/Home";
import FetchMarkers from "./components/newpages/FetchMarkers";
import Issues from "./components/newpages/Issues";
import AddStores from "./components/newpages/AddStores";
import AddWashroom from "./components/newpages/AddWashroom";
import StoreProfile from "./components/newpages/StoreProfile";
import Organisation from "./components/newpages/organisations/index"
import AddOrganisation from "./components/newpages/organisations/AddOrg"

export default function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading</div>;
  return (
    <Router>
      {/* <Sidebar /> */}
      {/* <FetchMarkers /> */}
      {/* <Home /> */}
      {/* <Main /> */}
      {/* <Navbar /> */}
      {/* <LoginButton /> */}
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/stores" component={FetchMarkers} />
      {/* <Route path="/toilets" component={ToiletLocator}/> */}
      {/* <Route path="/articles" component={Articles}/> */}
      {/* <Route path="/parents" component={Parents}/> */}
      {/* <Route path="/orgs" component={Organizations}/> */}
      <Route path="/issues" component={Issues} />
      <Route path="/addstores" component={AddStores} />
      <Route path="/addwashroom" component={AddWashroom} />
      
      <Route path="/oneStore/:toiletId" component={StoreProfile} />
      <Route path="/organisation" component={Organisation} />
      <Route path="/addorg" component={AddOrganisation} />

      {/* <Route path="/addtoilet" component={AddToilet}/> */}
      <Route path="/error" component={Error} />
      {/* <LogoutButton /> */}
      {/* <Profile /> */}
      {/* <StoreLocator /> */}
    </Router>
  );
}