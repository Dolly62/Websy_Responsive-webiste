import { useEffect } from "react";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import Blog from "./components/Blogs/Blog";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import SimpleBanner from "./components/SimpleBanner/SimpleBanner";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-gray-900 bg-white">
      <Navbar />
      <Home />
      <OverviewCounter />
      <BannerDetails />
      <BannerDetails reverse={true} />
      <SimpleBanner />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
