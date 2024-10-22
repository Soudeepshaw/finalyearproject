import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from "./Components/Lanidng"
import CustomerHomepage from "./Components/Customer"
import TailorProfile from "./Components/Tailor"
import OrderPlacement from "./Components/Order_Placement_Page"
import OrderTrackingPage from "./Components/Track_Order"
import TailorOrdersDashboard from "./Components/Tailor_View"
import AdminDashboard from "./Components/Admin_dashbord"
import CustomerSupportPage from "./Components/Customer_support"
import './App.css'
import Navbar from "./Components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<CustomerHomepage />} />
        <Route path="/tailor" element={<TailorProfile />} />
        <Route path="/order" element={<OrderPlacement />} />
        <Route path="/track" element={<OrderTrackingPage />} />
        <Route path="/tailor-dashboard" element={<TailorOrdersDashboard />} />
        <Route path="/support" element={<CustomerSupportPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
