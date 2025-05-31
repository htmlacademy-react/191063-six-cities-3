import { Action } from '@reduxjs/toolkit';
import { OfferFull, OfferPreview, OfferPreviews } from '../types/offer-types';
import { AuthorizationStatus, RequestStatus } from '../const/api-const';
import { SortOption } from '../components/sort/sort-const';
import { CurrentUser } from '../types/user-types';
import { Reviews } from '../types/review-types';
import { Cities } from '../const/app-const';
import { State } from '../types/store-types';

export function extractActionsTypes(actions: Action<string>[]) {
  return actions.map(({ type }) => type);
}

export function getMockOfferPreviews(): OfferPreviews {
  return [
    {
      id: 'e5a2a853-caba-47a1-b63e-c9c649021122',
      title: 'House in countryside',
      type: 'room',
      price: 195,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
      city: {
        name: 'Paris',
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
      },
      location: {
        latitude: 48.858610000000006,
        longitude: 2.330499,
        zoom: 16,
      },
      isFavorite: true,
      isPremium: false,
      rating: 2.3,
    },
    {
      id: '86920d37-5938-43e1-9136-c04a41f240db',
      title: 'Wood and stone place',
      type: 'hotel',
      price: 142,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
      city: {
        name: 'Brussels',
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13,
        },
      },
      location: {
        latitude: 50.860557,
        longitude: 4.376697,
        zoom: 16,
      },
      isFavorite: false,
      isPremium: false,
      rating: 2.3,
    },
    {
      id: '9e4c9a62-2bf9-41b5-a6a7-b34d623c3f7e',
      title: 'The Joshua Tree House',
      type: 'apartment',
      price: 397,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
      city: {
        name: 'Cologne',
        location: {
          latitude: 50.938361,
          longitude: 6.959974,
          zoom: 13,
        },
      },
      location: {
        latitude: 50.951361,
        longitude: 6.944974,
        zoom: 16,
      },
      isFavorite: false,
      isPremium: false,
      rating: 1.8,
    },
    {
      id: '5f8243c5-c9ca-4d0a-a5f4-0c4a4e392a6a',
      title: 'Penthouse, 4-5 rooms + 5 balconies',
      type: 'apartment',
      price: 155,
      previewImage: 'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13,
        },
      },
      location: {
        latitude: 52.361540000000005,
        longitude: 4.883976,
        zoom: 16,
      },
      isFavorite: false,
      isPremium: false,
      rating: 4,
    },
  ];
}

export function getMockOfferFull(): OfferFull {
  return {
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
}

export function getMockOfferFullPreview(): OfferPreview {
  return {
    id: '89b6ae84-2724-4369-ab85-6877dbdd2795',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 299,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
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
    isPremium: true,
    isFavorite: false,
    rating: 3.4,
  };
}

export function getMockReviews(): Reviews {
  return [
    {
      id: 'ecefb027-adde-4aa7-b53d-6f35093252dd',
      comment:
        'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
      date: '2025-02-10T21:00:00.468Z',
      rating: 5,
      user: {
        name: 'Mollie',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/6.jpg',
        isPro: false,
      },
    },
    {
      id: 'a127e283-903e-4e1b-a5d8-75008d0039c1',
      comment:
        'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
      date: '2025-02-07T21:00:00.468Z',
      rating: 2,
      user: {
        name: 'Jack',
        avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/7.jpg',
        isPro: true,
      },
    },
  ];
}

export function getMockCurrentUser(): CurrentUser {
  return {
    email: 'test@mail.com',
    token: 'dGVzdEBtYWlsLmNvbQ==',
    name: 'test',
    avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
    isPro: false,
  };
}

export function getMockAppStore(initialState?: Partial<State>): State {
  return {
    FullOffer: {
      offerFull: null,
      offerFullStatus: RequestStatus.Idle,
      nearOfferPreviews: [],
      nearOfferPreviewsStatus: RequestStatus.Idle,
      reviews: [],
      reviewsStatus: RequestStatus.Idle,
      postReviewStatus: RequestStatus.Idle,
    },
    Offers: {
      city: Cities.Paris,
      sortOption: SortOption[0],
      offerPreviews: [],
      offerPreviewsStatus: RequestStatus.Idle,
      favoriteOfferPreviews: [],
      favoriteOfferPreviewsStatus: RequestStatus.Idle,
      updateFavoriteStatus: RequestStatus.Idle,
    },
    User: {
      currentUser: null,
      authStatus: AuthorizationStatus.Unknown,
      authRequestStatus: RequestStatus.Idle,
    },
    ...(initialState ?? {}),
  };
}
