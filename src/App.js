import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import Privacypolicy from "./Pages/Privacypolicy";
import Onewayresult from "./Pages/Oneway/Onewayresult";
import Bookingdetails from "./Pages/Oneway/Bookingdetails";
import Seatbookoneway from "./Pages/Oneway/Seatbookoneway";
import Onewayselectmeal from "./Pages/Oneway/Onewayselectmeal";
import Onewayaddon from "./Pages/Oneway/Onewayaddon";
import Onewayreviewdetail from "./Pages/Oneway/Onewayreviewdetail";
import Twowayresult from "./Pages/Twoway/Twowayresult";
import Twowaybookingdetails from "./Pages/Twoway/Twowaybookingdetails";
import Twowayseatbooking from "./Pages/Twoway/Twowayseatbooking";
import Twowaysselectmeal from "./Pages/Twoway/Twowayselectmeal";
import Twowayaddon from "./Pages/Twoway/Twowayaddon";
import Twowaysreviewdetails from "./Pages/Twoway/Twowaysreviewdetails";
import Milticityresult from "./Pages/Multicity/Milticityresult";
import Multicitybookingdetails from "./Pages/Multicity/Multicitybookingdetails";
import Multicityreviewdetails from "./Pages/Multicity/Multicityreviewdetails";
import Profile from "./Pages/Profile/Profile";
import Jdwallet from "./Pages/Profile/Jdwallet";
import Gstdetails from "./Pages/Profile/Gstdetails";
import Managebooking from "./Pages/Profile/Managebooking";
import Flightbookingconfirmed from "./Pages/Flightbookingconfirmed";
import Cancelleddetailflight from "./Pages/Cancelleddetailflight";

import Fightbookingcompleted from "./Pages/Fightbookingcompleted";
import Invoice from "./Pages/Invoice";
import Login from "./Components/Login/Login"
import LoginOtp from "./Components/Login/LoginOtp";
const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/LoginOtp",
    element: <LoginOtp />,
  },
  {
  
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },

      {
        path: "/Privacypolicy",
        element: <Privacypolicy />,
      },
      {
        path: "/Onewayresult",
        element: <Onewayresult />,
      },
      {
        path: "/Onewayresult/Bookingdetails",
        element: <Bookingdetails />,
      },
      {
        path: "/Onewayresult/Bookingdetails/Seatbookoneway",
        element: <Seatbookoneway />,
      },
      {
        path: "/Onewayresult/Bookingdetails/Selectmeal",
        element: <Onewayselectmeal />,
      },
      {
        path: "/Onewayresult/addon",
        element: <Onewayaddon />,
      },
      {
        path: "/Onewayresult/Reviewdetails",
        element: <Onewayreviewdetail />,
      },
      {
        path: "/Twowayresult",
        element: <Twowayresult />,
      },
      {
        path: "/Twowayresult/bookingresult",
        element: <Twowaybookingdetails />,
      },
      {
        path: "/Twowayresult/seatbooking",
        element: <Twowayseatbooking />,
      },
      {
        path: "/Twowayresult/selectmeal",
        element: <Twowaysselectmeal />,
      },
      {
        path: "/Twowayresult/Twowayaddon",
        element: <Twowayaddon />,
      },

      {
        path: "/Twowayresult/reviewdetails",
        element: <Twowaysreviewdetails />,
      },
      {
        path: "/Milticityresult",
        element: <Milticityresult />,
      },
      {
        path: "/Milticity/bookingdetails",
        element: <Multicitybookingdetails />,
      },
      {
        path: "/Milticity/reviewdetails",
        element: <Multicityreviewdetails />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Jdwallet",
        element: <Jdwallet />,
      },
      
      {
        path: "/Gstdetails",
        element: <Gstdetails />,
      },
      {
        path: "/Managebooking",
        element: <Managebooking />,
      },
      {
        path: "/Flightbookingconfirmed",
        element: <Flightbookingconfirmed />,
      },
      {
        path: "/Cancelleddetailflight",
        element: <Cancelleddetailflight />,
      },
     
      {
        path: "/Fightbookingcompleted",
        element: <Fightbookingcompleted />,
      },{
        path: "/Invoice",
        element: <Invoice />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="Montserrat">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
