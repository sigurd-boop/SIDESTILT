
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import HjemPage from "../pages/HjemPage";
import GalleriPage from "../pages/GalleriPage";
import LydLysPage from "../pages/LydLysPage";
import RussebussPage from "../pages/RussebussPage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";

const RoutingMain = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HjemPage />} />
        <Route path="/Galleri" element={<GalleriPage />} />
        <Route path="/Lyd/Lys" element={<LydLysPage />} />
        <Route path="/Russebuss" element={<RussebussPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingMain;
