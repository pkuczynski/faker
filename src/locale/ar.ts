/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import ar from '../locales/ar';
import en from '../locales/en';

const faker = new Faker({
  locale: 'ar',
  localeFallback: 'en',
  locales: {
    ar,
    en,
  },
});

export = faker;
