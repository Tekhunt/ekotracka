import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      imageSrc: "https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&ga=GA1.1.362901350.1688837487&semt=ais",
      label: "Lekki Gardens Estate",
      content: "EkoTracka's waste management solutions have transformed our estate into a cleaner and more sustainable environment.",
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/office-buildings_1127-3158.jpg?w=2000&t=st=1688837891~exp=1688838491~hmac=c4d186ea37273b08718ef59f0d1e9113458932e8d427bdc2abd7d2572344dc81",
      label: "Orchid Court Estate, G.R.A Ikeja",
      content: "EkoTracka has been instrumental in transforming waste management practices in Orchid Court Estate.",
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661463.jpg?w=2000&t=st=1688837935~exp=1688838535~hmac=630692778321fe2c03c2b113983a300d3446941bdffacd8972dd69219c5b0cf5",
      label: "Friends View Estate",
      content: "Choosing EkoTracka as our waste management provider has been a game-changer for Friends View Estate.",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 font-semibold text-gray-800">
          Estates, Streets, and Communities that Trust Ekotracka
        </h2>
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                onClick={onClickHandler}
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  {label}
                </span>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                onClick={onClickHandler}
              >
                <span className="inline-block h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  {label}
                </span>
              </button>
            )
          }
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <img
                src={testimonial.imageSrc}
                alt={`Slide ${index + 1}`}
                className="block w-full rounded"
              />
              <div className="absolute inset-x-0 bottom-0 py-5 text-center text-white">
                <h5 className="text-xl">{testimonial.label}</h5>
                <p className="text-white">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
