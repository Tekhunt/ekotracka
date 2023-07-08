const stats = [
    { id: 1, name: 'Tons of Waste Recycled', value: '10k' },
    { id: 2, name: 'Million Satisfied Customers', value: '2' },
    { id: 3, name: 'Trees Planted', value: '1k' },
    { id: 4, name: 'Waste Segregated', value: '5k tons' },
    { id: 5, name: 'Incentives Distributed', value: '$100k' },
  ];
  
  export const Figures = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-center font-semibold text-green-500">
            Ekotracka Statistics
          </h2>
          <p className="mt-4 text-lg text-center text-blue-500">
            Tracking our impact and achievements
          </p>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mt-12">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  };
  