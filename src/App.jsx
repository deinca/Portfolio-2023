import Header from "./template/header";
import Footer from "./template/footer";
import Homepage from "./pages/HomePage";
import FrontendProjectsPage from "./pages/FrontendProjectsPage";
import MultimediaProjectsPage from "./pages/MultimediaProjectsPage";
import AboutMePage from "./pages/AboutMePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/front-end-projecten" element={<FrontendProjectsPage />} />
        <Route path="/multimedia-projecten" element={<MultimediaProjectsPage />} />
        <Route path="/meer-over-mij" element={<AboutMePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
