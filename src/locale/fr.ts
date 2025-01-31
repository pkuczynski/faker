import { Faker } from '..';
import fr from '../locales/fr';
import en from '../locales/en';

const faker = new Faker({
  locale: 'fr',
  localeFallback: 'en',
  locales: {
    fr,
    en,
  },
});

export = faker;
