import { Link } from "react-router-dom";

export const Hero = () => {
  const backgroundImageUrl =
    "https://www.tharawat-magazine.com/wp-content/uploads/2021/11/shutterstock_1445313830-freshblue.jpg";

  return (
    <div
      className="relative flex flex-col items-start justify-center px-4 pb-12 mx-auto pt-20 pb-20 lg:flex md:px-40 bg-cover"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
      <h1 className="mt-40 text-4xl font-bold text-green-500 relative z-10">
        Welcome to Ekotracka
      </h1>
      <p className="mt-4 text-lg max-w-3xl relative z-10  text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-400">
        Your waste management solution in Lagos. 
        Ekotracka is a leading waste management company dedicated to providing sustainable solutions for effective waste disposal and recycling in Lagos. We are committed to creating a cleaner and greener environment by promoting responsible waste management practices.
      </p>

      <div className="mt-8 mb-40 space-x-4 relative z-10">
        <Link to="/register">
          <button
            type="submit"
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Register here
          </button>
        </Link>

        <Link to="/login">
          <button
            type="submit"
            className="inline-block rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Login here
          </button>
        </Link>
      </div>
    </div>
  );
};
