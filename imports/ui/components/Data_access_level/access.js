import { changements, levels } from './What_and_who';

const mappings = new Map();

mappings.set(changements.Creation, [levels.ADMIN, levels.CREATEUR]);
mappings.set(changements.Modification, [levels.ADMIN, levels.CREATEUR, levels.PARTICIPANT]);
mappings.set(changements.Suppression, [levels.ADMIN, levels.CREATEUR]);