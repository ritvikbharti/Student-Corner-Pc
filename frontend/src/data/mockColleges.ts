export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  rating: number;
  courses: string[];
  highestPlacement: number;
  firstYearFees: number;
  image: string;
}

export const mockColleges: College[] = [
  // B.Tech
  { id: 'rv-college', name: 'RV College of Engineering', location: 'Bangalore', state: 'Karnataka', rating: 4.5, courses: ['B.Tech', 'M.Tech'], highestPlacement: 5000000, firstYearFees: 221935, image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
  { id: 'pes-university', name: 'PES University', location: 'Bangalore', state: 'Karnataka', rating: 4.4, courses: ['B.Tech', 'M.Tech', 'MBA'], highestPlacement: 9000000, firstYearFees: 480000, image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80' },
  { id: 'dsce', name: 'Dayananda Sagar College of Engineering', location: 'Bangalore', state: 'Karnataka', rating: 4.1, courses: ['B.Tech', 'M.Tech', 'MBA'], highestPlacement: 4000000, firstYearFees: 150000, image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80' },
  { id: 'nit-surathkal', name: 'National Institute of Technology Karnataka', location: 'Surathkal', state: 'Karnataka', rating: 4.7, courses: ['B.Tech', 'M.Tech', 'B.Arch'], highestPlacement: 5000000, firstYearFees: 96870, image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80' },
  { id: 'iiit-bangalore', name: 'International Institute of Information Technology Bangalore', location: 'Bangalore', state: 'Karnataka', rating: 4.6, courses: ['B.Tech', 'M.Tech', 'Ph.D'], highestPlacement: 7000000, firstYearFees: 283000, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80' },
  { id: 'bit-bangalore', name: 'Bangalore Institute of Technology', location: 'Bangalore', state: 'Karnataka', rating: 4.2, courses: ['B.Tech', 'M.Tech', 'MBA'], highestPlacement: 6000000, firstYearFees: 146000, image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80' },
  { id: 'sir-mvit', name: 'Sir M Visvesvaraya Institute of Technology', location: 'Bangalore', state: 'Karnataka', rating: 4.1, courses: ['B.Tech', 'M.Tech'], highestPlacement: 6000000, firstYearFees: 200000, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
  { id: 'nhce', name: 'New Horizon College of Engineering', location: 'Bangalore', state: 'Karnataka', rating: 4.0, courses: ['B.Tech', 'M.Tech', 'MBA'], highestPlacement: 6000000, firstYearFees: 250000, image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
  { id: 'acharya', name: 'Acharya Institute of Technology', location: 'Bangalore', state: 'Karnataka', rating: 4.0, courses: ['B.Tech', 'M.Tech', 'MBA'], highestPlacement: 4000000, firstYearFees: 279968, image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80' },

  // MBBS
  { id: 'aiims-new-delhi', name: 'AIIMS New Delhi', location: 'New Delhi', state: 'Delhi', rating: 5.0, courses: ['MBBS', 'MD', 'MS'], highestPlacement: 2500000, firstYearFees: 1628, image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80' },
  { id: 'cmc-vellore', name: 'Christian Medical College', location: 'Vellore', state: 'Tamil Nadu', rating: 4.9, courses: ['MBBS', 'MD', 'MS', 'Ph.D'], highestPlacement: 2000000, firstYearFees: 45000, image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80' },
  { id: 'kasturba', name: 'Kasturba Medical College', location: 'Manipal', state: 'Karnataka', rating: 4.7, courses: ['MBBS', 'MD', 'MS'], highestPlacement: 2000000, firstYearFees: 1450000, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' },
  { id: 'mamc', name: 'Maulana Azad Medical College', location: 'New Delhi', state: 'Delhi', rating: 4.8, courses: ['MBBS', 'MD', 'MS'], highestPlacement: 2500000, firstYearFees: 10000, image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80' },
  { id: 'afmc', name: 'Armed Forces Medical College', location: 'Pune', state: 'Maharashtra', rating: 4.7, courses: ['MBBS', 'MD', 'MS'], highestPlacement: 2000000, firstYearFees: 56500, image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80' },
  { id: 'sri-ramachandra', name: 'Sri Ramachandra Institute of Higher Education', location: 'Chennai', state: 'Tamil Nadu', rating: 4.5, courses: ['MBBS', 'MD', 'MS', 'BDS'], highestPlacement: 1800000, firstYearFees: 1200000, image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80' },
  { id: 'jss-medical', name: 'JSS Medical College', location: 'Mysore', state: 'Karnataka', rating: 4.4, courses: ['MBBS', 'MD', 'MS'], highestPlacement: 1800000, firstYearFees: 850000, image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80' },
  { id: 'bmc', name: 'Bangalore Medical College and Research Institute', location: 'Bangalore', state: 'Karnataka', rating: 4.6, courses: ['MBBS', 'MD', 'MS'], highestPlacement: 2000000, firstYearFees: 25000, image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80' },
  { id: 'grant-medical', name: 'Grant Medical College', location: 'Mumbai', state: 'Maharashtra', rating: 4.5, courses: ['MBBS', 'MD', 'MS'], highestPlacement: 2200000, firstYearFees: 35000, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' },

  // Abroad MBBS
  { id: 'bashkir', name: 'Bashkir State Medical University', location: 'Ufa', state: 'Russia', rating: 4.5, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)'], highestPlacement: 2000000, firstYearFees: 450000, image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
  { id: 'kazan', name: 'Kazan Federal University', location: 'Kazan', state: 'Russia', rating: 4.6, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)', 'Ph.D'], highestPlacement: 2000000, firstYearFees: 500000, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
  { id: 'tbilisi', name: 'Tbilisi State Medical University', location: 'Tbilisi', state: 'Georgia', rating: 4.4, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)'], highestPlacement: 1800000, firstYearFees: 550000, image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80' },
  { id: 'osh-state', name: 'Osh State University', location: 'Osh', state: 'Kyrgyzstan', rating: 4.2, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)'], highestPlacement: 1500000, firstYearFees: 300000, image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80' },
  { id: 'altai', name: 'Altai State Medical University', location: 'Barnaul', state: 'Russia', rating: 4.3, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)'], highestPlacement: 2000000, firstYearFees: 420000, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' },
  { id: 'peoples-friendship', name: 'Peoples Friendship University of Russia', location: 'Moscow', state: 'Russia', rating: 4.7, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)', 'Ph.D'], highestPlacement: 2200000, firstYearFees: 600000, image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80' },
  { id: 'kazakhstan-national', name: 'Kazakhstan National Medical University', location: 'Almaty', state: 'Kazakhstan', rating: 4.3, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)'], highestPlacement: 1800000, firstYearFees: 380000, image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80' },
  { id: 'david-tvildiani', name: 'David Tvildiani Medical University', location: 'Tbilisi', state: 'Georgia', rating: 4.4, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)'], highestPlacement: 1800000, firstYearFees: 500000, image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80' },
  { id: 'crimea', name: 'Crimea Federal University', location: 'Simferopol', state: 'Russia', rating: 4.1, courses: ['Abroad MBBS', 'MBBS (MD Equivalent)'], highestPlacement: 1600000, firstYearFees: 350000, image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80' },

  // MBA & Others
  { id: 'cmr-institute', name: 'CMR Institute of Technology', location: 'Bangalore', state: 'Karnataka', rating: 4.2, courses: ['MBA', 'B.Tech'], highestPlacement: 1200000, firstYearFees: 250000, image: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80' },
  { id: 'iim-ahmedabad', name: 'IIM Ahmedabad', location: 'Ahmedabad', state: 'Gujarat', rating: 4.9, courses: ['MBA', 'Ph.D'], highestPlacement: 11500000, firstYearFees: 3100000, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80' },
  { id: 'symbiosis', name: 'Symbiosis Institute of Business Management', location: 'Pune', state: 'Maharashtra', rating: 4.6, courses: ['MBA', 'Executive MBA'], highestPlacement: 3500000, firstYearFees: 1100000, image: 'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=800&q=80' },
  { id: 'nift-delhi', name: 'NIFT Delhi', location: 'New Delhi', state: 'Delhi', rating: 4.7, courses: ['Design', 'B.Des', 'M.Des'], highestPlacement: 1200000, firstYearFees: 280000, image: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=800&q=80' },
  { id: 'nls', name: 'National Law School of India University', location: 'Bangalore', state: 'Karnataka', rating: 4.8, courses: ['Law', 'BA LLB', 'LLM'], highestPlacement: 1800000, firstYearFees: 325000, image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80' },
  { id: 'vit-vellore', name: 'VIT Vellore', location: 'Vellore', state: 'Tamil Nadu', rating: 4.6, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA'], highestPlacement: 7500000, firstYearFees: 198000, image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80' },
  { id: 'bits-pilani', name: 'BITS Pilani', location: 'Pilani', state: 'Rajasthan', rating: 4.9, courses: ['B.Tech', 'M.Tech', 'B.Pharm'], highestPlacement: 6000000, firstYearFees: 484000, image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80' },
];
