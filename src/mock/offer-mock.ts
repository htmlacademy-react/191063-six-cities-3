import { Offer } from '../types/offer';

const offerMock: Offer = {
  id: '89b6ae84-2724-4369-ab85-6877dbdd2795',
  title: 'Perfectly located Castro',
  description:
    'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  type: 'room',
  price: 299,
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16,
  },
  goods: [
    'Air conditioning',
    'Wi-Fi',
    'Laptop friendly workspace',
    'Towels',
    'Washing machine',
    'Kitchen',
    'Baby seat',
    'Breakfast',
    'Fridge',
    'Washer',
    'Dishwasher',
    'Coffee machine',
  ],
  host: {
    isPro: true,
    name: 'Angelina',
    avatarUrl:
      'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
  },
  isPremium: true,
  isFavorite: false,
  rating: 3.4,
  bedrooms: 1,
  maxAdults: 2,
};

export { offerMock };
