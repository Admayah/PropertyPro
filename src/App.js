import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Homepage from "./pages/homepage/Homepage";
import PropertiesInputData from "./components/propertiesInput/PropertiesInputData";
import Feed from "./components/feed/Feed";
import AllPropertiesData from "./components/allproperties/AllPropertiesData";
import Profile from "./pages/profile/Profile";
import Sales from "./components/sales/Sales";
import Rent from "./components/rent/Rent";
import PropertyDetails from "./components/propertydetails/PropertyDetails";
import Description from "./components/propertydetails/Description";
import Review from "./components/propertydetails/Review";
import Features from "./components/propertydetails/Features";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/properties" element={<AllPropertiesData />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/my-properties" element={<Feed />}></Route>
          <Route
            path="/post-property"
            element={<PropertiesInputData />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
          <Route path="/rent" element={<Rent />}></Route>

          <Route path="/properties/:id" element={<PropertyDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="desc" element={<Description />} />{" "}
            <Route path="review" element={<Review />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
