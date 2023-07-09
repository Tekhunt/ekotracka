import React from 'react';

export const Organizations = () => {
  const organizations = [
    { name: 'ExxonMobil', logo: 'https://i.pinimg.com/originals/c0/5d/4c/c05d4cd523255614840441c8c3f3c53d.jpg' },
    { name: 'Murtala Mohammed Airport', logo: 'https://leadership.ng/wp-content/uploads/2022/10/Airport-MMA.webp' },
    { name: 'Ikeja City Mall', logo: 'https://www.cometonigeria.com/wp-content/uploads/2011/12/Ikeja-city-mall-Alausa-lagos.jpg' },
    { name: 'Total', logo: 'https://independent.ng/wp-content/uploads/2018/06/Total-Nigeria-Plc.jpg' }
    // Add more organizations as needed
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Organizations that Trust Our Services
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {organizations.map((org) => (
            <div key={org.name} className="flex flex-col items-center">
              <img
                src={org.logo}
                alt={org.name}
                className="h-24 w-24 object-contain"
              />
              <p className="mt-2 text-sm text-gray-700">{org.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};