import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/mood/ScrollToTop";

import { ThemeProvider } from "./components/mood/DarkMood";
import UpEve from "./pages/UpEve";
import SigEve from "./pages/SigEve";
import AboutUs from "./pages/AboutUs";
import ConTact from "./pages/ConTact";
import SigNi from "./pages/SigNi";
import AdminLaout from "./pages/admin/AdminLaout";
import AdminDeshboard from "./pages/admin/AdminDeshboard";
import AdminEvent from "./pages/admin/AdminEvent";
import Head from "./components/head/Head";
import Footer from "./components/footer/Footer";
import AdminPurchases from "./pages/admin/AdminPurchas";
import AdminPastEvents from "./pages/admin/AdminPastEvent";
import PaymentSuccess from "./pages/paYmenSus";
import PaymentCancel from "./pages/paYmentCan";
import NewEvent from "./components/mood/NewEvent";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Privacy from "./pages/Privacy";

function App() {
  const isAdmin = useLocation().pathname.startsWith("/admin");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {!isAdmin && <Head />}
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="upevent" element={<UpEve />} />
        <Route path="event/:id" element={<SigEve />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ConTact />} />
        <Route path="signin" element={<SigNi />} />
        <Route path="terms" element={<Terms />} />
        <Route path="refund" element={<Refund />} />
        <Route path="privacy" element={<Privacy />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />

        <Route path="/admin" element={<AdminLaout />}>
          <Route index element={<AdminDeshboard />} />
          <Route path="events" element={<AdminEvent />} />
          <Route path="events/new" element={<NewEvent />} />
          <Route path="events/edit/:id" element={<NewEvent />} />
          <Route path="purchases" element={<AdminPurchases />} />
          <Route path="past-events" element={<AdminPastEvents />} />
        </Route>
      </Routes>
      {!isAdmin && <Footer />}
    </ThemeProvider>
  );
}

export default App;
