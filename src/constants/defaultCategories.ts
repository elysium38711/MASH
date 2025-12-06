import { Category } from '../types/game.types';

export const DEFAULT_MASH_CATEGORIES: Omit<Category, 'id'>[] = [
  {
    name: 'Home',
    options: [
      { id: 'home-1', text: 'Mansion', eliminated: false },
      { id: 'home-2', text: 'Apartment', eliminated: false },
      { id: 'home-3', text: 'Shack', eliminated: false },
      { id: 'home-4', text: 'House', eliminated: false },
    ],
  },
  {
    name: 'Spouse',
    options: [
      { id: 'spouse-1', text: 'Celebrity Crush', eliminated: false },
      { id: 'spouse-2', text: 'Best Friend', eliminated: false },
      { id: 'spouse-3', text: 'Neighbor', eliminated: false },
      { id: 'spouse-4', text: 'Coworker', eliminated: false },
    ],
  },
  {
    name: 'Car',
    options: [
      { id: 'car-1', text: 'Ferrari', eliminated: false },
      { id: 'car-2', text: 'Honda Civic', eliminated: false },
      { id: 'car-3', text: 'Bicycle', eliminated: false },
      { id: 'car-4', text: 'Tesla', eliminated: false },
    ],
  },
  {
    name: 'Number of Kids',
    options: [
      { id: 'kids-1', text: '0', eliminated: false },
      { id: 'kids-2', text: '2', eliminated: false },
      { id: 'kids-3', text: '5', eliminated: false },
      { id: 'kids-4', text: '10', eliminated: false },
    ],
  },
  {
    name: 'Pet',
    options: [
      { id: 'pet-1', text: 'Dog', eliminated: false },
      { id: 'pet-2', text: 'Cat', eliminated: false },
      { id: 'pet-3', text: 'Hamster', eliminated: false },
      { id: 'pet-4', text: 'Iguana', eliminated: false },
    ],
  },
  {
    name: 'Career',
    options: [
      { id: 'career-1', text: 'Doctor', eliminated: false },
      { id: 'career-2', text: 'Teacher', eliminated: false },
      { id: 'career-3', text: 'Artist', eliminated: false },
      { id: 'career-4', text: 'Engineer', eliminated: false },
    ],
  },
  {
    name: 'Salary',
    options: [
      { id: 'salary-1', text: '$1,000,000/year', eliminated: false },
      { id: 'salary-2', text: '$75,000/year', eliminated: false },
      { id: 'salary-3', text: '$30,000/year', eliminated: false },
      { id: 'salary-4', text: '$500,000/year', eliminated: false },
    ],
  },
  {
    name: 'Location',
    options: [
      { id: 'location-1', text: 'New York City', eliminated: false },
      { id: 'location-2', text: 'Paris', eliminated: false },
      { id: 'location-3', text: 'Small Town', eliminated: false },
      { id: 'location-4', text: 'Beach Resort', eliminated: false },
    ],
  },
  {
    name: 'Vacation Destination',
    options: [
      { id: 'vacation-1', text: 'Hawaii', eliminated: false },
      { id: 'vacation-2', text: 'Disney World', eliminated: false },
      { id: 'vacation-3', text: 'Camping Trip', eliminated: false },
      { id: 'vacation-4', text: 'Europe Tour', eliminated: false },
    ],
  },
];
