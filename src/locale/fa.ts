import Faker from '..';
import fa from '../locales/fa';
import en from '../locales/en';

const faker = new Faker({
  locale: 'fa',
  localeFallback: 'en',
  locales: {
    fa,
    en,
  },
});

export default faker;
