import Customers from "../components/home/Customers";
import OurOffer from "../components/home/OurOffer";
import ReadBlogs from "../components/home/ReadBlogs";
import SupportingPartners from "../components/home/SupportingPartners";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <SupportingPartners></SupportingPartners>
      <ReadBlogs></ReadBlogs>
      <Customers></Customers>
      <OurOffer></OurOffer>
    </>
  );
};

export default Home;
