export const specialties = [
  { id: '1', name: 'Dentist', icon: 'bi-gear-wide', count: 12 },
  { id: '2', name: 'Cardiologist', icon: 'bi-heart-pulse', count: 15 },
  { id: '3', name: 'Dermatologist', icon: 'bi-person', count: 10 },
  { id: '4', name: 'Pediatrics', icon: 'bi-emoji-smile', count: 8 },
  { id: '5', name: 'Neurologist', icon: 'bi-activity', count: 6 },
  { id: '6', name: 'Orthopedics', icon: 'bi-person-walking', count: 9 },
];

export const doctorsData = [
  {
    id: '1',
    name: 'Dr. Ahmed Samy',
    specialty: 'Dentist',
    rating: 4.8,
    reviewsCount: 124,
    location: 'Mansoura, Egypt',
    experienceYears: 8,
    languages: ['Arabic', 'English'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400',
    about: 'Dr. Ahmed Samy is a dedicated dentist with over 8 years of experience in general dentistry, cosmetic dentistry, and dental implants.',
    education: [
      'Bachelor of Dental Surgery - Mansoura University',
      "Master's in Cosmetic Dentistry"
    ],
    availableSlots: {
      '2026-09-20': ['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM'],
      '2026-09-21': ['10:00 AM', '01:00 PM', '03:30 PM'],
    },
    isPopular: true
  },
  {
    id: '2',
    name: 'Dr. Sara Mohamed',
    specialty: 'Cardiologist',
    rating: 4.7,
    reviewsCount: 98,
    location: 'Mansoura, Egypt',
    experienceYears: 10,
    languages: ['Arabic', 'English'],
    image: 'https://images.unsplash.com/photo-1594824813566-8185b378a753?q=80&w=400',
    about: 'Dr. Sara Mohamed specializes in cardiovascular health and heart diseases with over a decade of clinical excellence.',
    education: ['M.D. in Cardiology - Cairo University'],
    availableSlots: {
      '2026-09-20': ['11:30 AM', '02:00 PM'],
    },
    isPopular: true
  },
  {
    id: '3',
    name: 'Dr. Mohamed Ali',
    specialty: 'Dermatologist',
    rating: 4.9,
    reviewsCount: 156,
    location: 'Mansoura, Egypt',
    experienceYears: 6,
    languages: ['Arabic', 'English'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400',
    about: 'Expert in skin care treatments, laser therapy, and cosmetic dermatology.',
    education: ['Bachelor of Medicine - Alexandria University'],
    availableSlots: {
      '2026-09-21': ['01:00 PM', '05:00 PM'],
    },
    isPopular: true
  },
  {
    id: '4',
    name: 'Dr. Yasmin Hassan',
    specialty: 'Pediatrics',
    rating: 4.6,
    reviewsCount: 87,
    location: 'Mansoura, Egypt',
    experienceYears: 7,
    languages: ['Arabic'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400',
    about: 'Compassionate pediatrician focusing on child growth, nutrition, and wellness.',
    education: ['Pediatrics Specialist Diploma'],
    availableSlots: {
      '2026-09-22': ['09:00 AM', '11:00 AM'],
    },
    isPopular: false
  }
];