import { Footer } from "./footer";
import { NavHeader } from "./navHeader";
import team from '../assets/team.png';


export const About = () => {
    return (
      <>
        <NavHeader />
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                About Ekotracka
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600">
                At Ekotracka, our mission is to revolutionize waste management
                and create a sustainable future. We are dedicated to
                implementing innovative solutions that address the challenges of
                waste disposal and recycling. By leveraging advanced analytics,
                engaging communities, ensuring security, promoting global
                collaboration, and providing incentives, we aim to transform the
                waste management landscape.
              </p>
            </div>
            <div className="w-full lg:w-8/12 ">
              <img
                className="w-full h-full"
                src={team}
                alt="A group of People"
              />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                Our Story
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600">
                In the beginning, our vision was to create a waste management
                solution that goes beyond traditional methods. We set out to
                develop a platform that empowers individuals and organizations
                to actively participate in waste reduction, recycling, and
                environmental preservation. Through continuous innovation and a
                commitment to excellence, we have grown to become a trusted
                leader in the waste management industry, serving communities
                worldwide.
              </p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                {/* Card components */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  