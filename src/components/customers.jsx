export const Customers = () => {
    const recyclers = [
      {
        name: "Republic Services",
        logoUrl: "https://rscom-failover-classic-s3.s3.amazonaws.com/assets/images/rs-logo-2x.png",
      },
      {
        name: "Stericycle",
        logoUrl: "https://www.stericycle.com/content/dam/stericycle/global/icons/Stericycle-Logo-with-WPWM-Bigger.svg",
      },
      {
        name: "Clean Harbors",
        logoUrl: "https://www.cleanharbors.com/themes/custom/clean_harbor/logo.png",
      },
      {
        name: "Waste Connections",
        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquQNOvIwP8Et2b_Ni56k0AajKIKQU6IFBgTccfbgP&s",
      },
      {
        name: "Renewi",
        logoUrl: "https://www.renewi.com/-/media/renewi/logos/renewi_gradient_no-strapline_rgb_60px.svg?iar=0&hash=C3C2FACA975E6A98B86298AEE6A3F8CA",
      },
    ];
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Estates, Streets, and Communities that Trust Ekotracka
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {recyclers.map((recycler) => (
              <div key={recycler.name} className="text-center">
                <img
                  className="max-h-12 w-full object-contain mb-2"
                  src={recycler.logoUrl}
                  alt={recycler.name}
                  width={158}
                  height={48}
                />
                <p className="text-xs text-gray-700">{recycler.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  