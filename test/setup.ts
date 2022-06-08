import { installGlobals } from '@remix-run/node/globals';
import '@testing-library/jest-dom/extend-expect';
import { beforeEach } from 'vitest';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';

installGlobals();

beforeEach(() => {
  truncateDB();
});
