import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  useTitle("", true);

  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Services />
      <WhyChoose />
      <Faq />
      <Subscribe />
    </div>
  );
};

export default Home;
