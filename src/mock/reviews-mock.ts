import { Review } from '../types/review';

const mockReviews: Review[] = [
  {
    id: 'ecefb027-adde-4aa7-b53d-6f35093252dd',
    comment:
      'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: new Date('2025-02-10T21:00:00.468Z'),
    rating: 5,
    user: {
      email: 'test1@mail.com',
      token: '',
      name: 'Mollie',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/6.jpg',
      isPro: false,
    },
  },
  {
    id: 'a127e283-903e-4e1b-a5d8-75008d0039c1',
    comment:
      'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: new Date('2025-02-07T21:00:00.468Z'),
    rating: 2,
    user: {
      email: 'test2@mail.com',
      token: '',
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true,
    },
  },
];

function getMockReviews(): Review[] {
  return mockReviews;
}

export { getMockReviews };
