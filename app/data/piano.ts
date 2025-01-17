export interface Piano {
  id: string;
  brand: string;
  model: string;
  year: number;
  condition: PianoCondition;
  price: number;
  description: string;
  image: string;
  location: string;
}

export type PianoCondition = 'Excellent' | 'Good' | 'Fair';

export const pianos: Piano[] = [
  {
    id: '1',
    brand: 'Steinway & Sons',
    model: 'Model D Concert Grand',
    year: 2019,
    condition: 'Excellent',
    price: 195000,
    description:
      'Flagship concert grand piano in pristine condition. Previously owned by a concert hall, meticulously maintained.',
    image: '/public/assets/piano1.webp',
    location: 'New York, NY',
  },
  {
    id: '2',
    brand: 'Yamaha',
    model: 'U3 Professional Upright',
    year: 2020,
    condition: 'Excellent',
    price: 12500,
    description:
      'Professional upright piano perfect for serious students and teachers. Rich, warm tone.',
    image: '/public/assets/piano2.webp',
    location: 'Los Angeles, CA',
  },
  {
    id: '3',
    brand: 'Bösendorfer',
    model: 'Imperial 290',
    year: 2015,
    condition: 'Good',
    price: 245000,
    description:
      'Rare Imperial grand with 97 keys. Exceptional Viennese sound quality.',
    image: '/public/assets/piano3.webp',
    location: 'Los Angeles, CA',
  },
  {
    id: '4',
    brand: 'Kawai',
    model: 'K-300 Upright',
    year: 2021,
    condition: 'Excellent',
    price: 8900,
    description:
      "Popular upright model with Kawai's renowned quality. Perfect for home use.",
    image: '/public/assets/piano4.webp',
    location: 'Miami, FL',
  },
  {
    id: '5',
    brand: 'Fazioli',
    model: 'F308 Concert Grand',
    year: 2018,
    condition: 'Excellent',
    price: 298000,
    description:
      'The longest concert grand piano in the world. Italian craftsmanship at its finest.',
    image: '/public/assets/piano5.webp',
    location: 'Seattle, WA',
  },
  {
    id: '6',
    brand: 'Baldwin',
    model: 'R1 Artist Grand',
    year: 1995,
    condition: 'Fair',
    price: 18500,
    description:
      'Classic American grand piano. Some wear but mechanically sound.',
    image: '/public/assets/piano6.webp',
    location: 'Boston, MA',
  },
  {
    id: '7',
    brand: 'Schimmel',
    model: 'K132 Upright',
    year: 2017,
    condition: 'Good',
    price: 32000,
    description:
      'German-engineered upright with exceptional touch sensitivity.',
    image: '/public/assets/piano7.webp',
    location: 'Denver, CO',
  },
  {
    id: '8',
    brand: 'Mason & Hamlin',
    model: 'BB Grand',
    year: 2016,
    condition: 'Excellent',
    price: 89000,
    description: 'American-made semi-concert grand. Known for powerful bass.',
    image: '/public/assets/piano8.webp',
    location: 'Austin, TX',
  },
  {
    id: '9',
    brand: 'Estonia',
    model: 'L190 Grand',
    year: 2019,
    condition: 'Excellent',
    price: 79000,
    description:
      'European concert grand with remarkable clarity and projection.',
    image: '/public/assets/piano1.webp',
    location: 'Portland, OR',
  },
  {
    id: '10',
    brand: 'Steingraeber & Söhne',
    model: 'E-272 Concert Grand',
    year: 2020,
    condition: 'Excellent',
    price: 225000,
    description: 'Boutique German concert grand with innovative features.',
    image: '/public/assets/piano2.webp',
    location: 'San Francisco, CA',
  },
  {
    id: '11',
    brand: 'Bechstein',
    model: 'M/P192 Grand',
    year: 1985,
    condition: 'Fair',
    price: 45000,
    description: 'Vintage German grand piano with historical significance.',
    image: '/public/assets/piano3.webp',
    location: 'Philadelphia, PA',
  },
  {
    id: '12',
    brand: 'Yamaha',
    model: 'CFX Concert Grand',
    year: 2021,
    condition: 'Excellent',
    price: 179000,
    description: 'Professional concert grand piano with powerful projection.',
    image: '/public/assets/piano4.webp',
    location: 'Nashville, TN',
  },
  {
    id: '13',
    brand: 'Grotrian',
    model: 'Cabinet Upright',
    year: 2018,
    condition: 'Good',
    price: 55000,
    description: 'Premium German upright with concert-level sound quality.',
    image: '/public/assets/piano5.webp',
    location: 'Atlanta, GA',
  },
  {
    id: '14',
    brand: 'Sauter',
    model: 'Pure Vita S',
    year: 2022,
    condition: 'Excellent',
    price: 135000,
    description: 'Modern grand piano with innovative sustainable materials.',
    image: '/public/assets/piano6.webp',
    location: 'Las Vegas, NV',
  },
  {
    id: '15',
    brand: 'Steinway & Sons',
    model: 'Model M',
    year: 1928,
    condition: 'Fair',
    price: 38000,
    description: 'Historic "Living Room Grand" with original ivory keys.',
    image: '/public/assets/piano7.webp',
    location: 'Washington, DC',
  },
  {
    id: '16',
    brand: 'August Förster',
    model: '215 Concert',
    year: 2017,
    condition: 'Excellent',
    price: 145000,
    description: 'Handcrafted German grand with exceptional tonal quality.',
    image: '/public/assets/piano8.webp',
    location: 'Houston, TX',
  },
  {
    id: '17',
    brand: 'Blüthner',
    model: 'Model 4',
    year: 2020,
    condition: 'Excellent',
    price: 168000,
    description:
      'Features patented Aliquot stringing system for enhanced sound.',
    image: '/public/assets/piano1.webp',
    location: 'Minneapolis, MN',
  },
  {
    id: '18',
    brand: 'Shigeru Kawai',
    model: 'SK-EX Concert Grand',
    year: 2019,
    condition: 'Excellent',
    price: 185000,
    description:
      'Master-crafted concert grand with exceptional touch response.',
    image: '/public/assets/piano2.webp',
    location: 'San Diego, CA',
  },
  {
    id: '19',
    brand: 'Petrof',
    model: 'P 284 Mistral',
    year: 2021,
    condition: 'Excellent',
    price: 155000,
    description: 'Czech concert grand with European sound character.',
    image: '/public/assets/piano3.webp',
    location: 'Phoenix, AZ',
  },
  {
    id: '20',
    brand: 'Fazioli',
    model: 'F156',
    year: 2020,
    condition: 'Excellent',
    price: 159000,
    description: 'Compact grand piano with the renowned Fazioli sound.',
    image: '/public/assets/piano4.webp',
    location: 'Detroit, MI',
  },
  {
    id: '21',
    brand: 'Steinway & Sons',
    model: 'Model B',
    year: 1965,
    condition: 'Good',
    price: 68000,
    description: 'Classic "Music Room Grand" with rich history.',
    image: '/public/assets/piano5.webp',
    location: 'St. Louis, MO',
  },
  {
    id: '22',
    brand: 'Bösendorfer',
    model: '214 VC',
    year: 2022,
    condition: 'Excellent',
    price: 245000,
    description: 'Vienna Concert grand with latest innovations.',
    image: '/public/assets/piano6.webp',
    location: 'Baltimore, MD',
  },
  {
    id: '23',
    brand: 'Yamaha',
    model: 'S6X',
    year: 2021,
    condition: 'Excellent',
    price: 89000,
    description: 'Semi-concert grand with exceptional clarity.',
    image: '/public/assets/piano7.webp',
    location: 'Cleveland, OH',
  },
  {
    id: '24',
    brand: 'Mason & Hamlin',
    model: 'CC-94',
    year: 2018,
    condition: 'Good',
    price: 125000,
    description: 'American concert grand with tension resonator.',
    image: '/public/assets/piano8.webp',
    location: 'Pittsburgh, PA',
  },
];
