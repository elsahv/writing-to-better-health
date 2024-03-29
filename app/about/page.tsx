import Image from "next/image";
import img2 from "../../public/images/self.jpg";

const About = () => {
  return (
    <div className="2xl:mt-[55px] 2xl:ml-[205px] lg:m-5 lg:h-100% overflow-x-hidden">
      <div className="h-screen grid 2xl:grid-cols-2">
      <section className="h-full p-3">  
        <h2 className="text-2xl">About</h2>
        <p>
          Welcome to Writing to Better Health!! This site is currently a  
          work in progress, a comic blog regarding nutrition and mental
          wellness.
        </p>
        <p>
          {"I'm"} Elsa, a web developer who really, really likes food.
        </p>
      </section>
      <section className="p-5 md:w-1/2 drop-shadow-lg">
        <Image src={img2} alt="elsa-hovey" className="" />
      </section>
    </div>
    </div>


  );
};

export default About;