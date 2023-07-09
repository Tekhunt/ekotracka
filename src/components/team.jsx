import fola from '../assets/fola.jpeg';
import rasheed from '../assets/rasheed.jpeg';
import cathy from '../assets/cathy.jpeg';
import mrchizzy from '../assets/mrchizzy.jpg';
import rachy from '../assets/rachy.jpeg';
import jp from '../assets/jp.jpeg';



export const Team = () => {
    const people = [
      {
        name: 'Catherine Akouete',
        role: 'Sustainability Manager',
        imageUrl: cathy
      },
      {
        name: 'Oladele Folahan Michael',
        role: 'Environmental Specialist',
        imageUrl: fola
      },
      {
        name: 'JohnPaul Ugwulo',
        role: 'UI/UX Designer',
        imageUrl: jp
      },
      {
        name: 'Shaka Rasheed',
        role: 'Data Analyst',
        imageUrl: rasheed
      },
      {
        name: 'Lawrence Yetunde Rachael',
        role: 'Data Analyst',
        imageUrl: rachy
      },
      {
        name: 'Chiazam Ochiegbu',
        role: 'Product Designer',
        imageUrl: mrchizzy
      },
      // More team members...
    ];
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Ekotracka, our dedicated team of experts is committed to driving sustainable solutions and
              environmental impact. Together, we strive to make a positive difference in waste management and
              sustainability practices.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  