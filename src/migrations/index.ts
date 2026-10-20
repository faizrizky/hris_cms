import * as migration_20261020_070552_initial from './20261020_070552_initial';
import * as migration_20261020_101108_add_blob_storage_fields from './20261020_101108_add_blob_storage_fields';

export const migrations = [
  {
    up: migration_20261020_070552_initial.up,
    down: migration_20261020_070552_initial.down,
    name: '20261020_070552_initial',
  },
  {
    up: migration_20261020_101108_add_blob_storage_fields.up,
    down: migration_20261020_101108_add_blob_storage_fields.down,
    name: '20261020_101108_add_blob_storage_fields'
  },
];
