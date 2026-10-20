import * as migration_20261020_070552_initial from './20261020_070552_initial';

export const migrations = [
  {
    up: migration_20261020_070552_initial.up,
    down: migration_20261020_070552_initial.down,
    name: '20261020_070552_initial'
  },
];
