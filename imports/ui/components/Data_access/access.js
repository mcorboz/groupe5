/*import { changements, levels } from './constantes.js';

//Utilisation du "mappings" afin de lier les changements et les levels
const mappings = new Map();

mappings.set(changements.Creation, [levels.ADMIN, levels.CREATEUR]);
mappings.set(changements.Modification, [levels.ADMIN, levels.CREATEUR, levels.PARTICIPANT]);
mappings.set(changements.Suppression, [levels.ADMIN, levels.CREATEUR]);

//Implémentation d'une fonction de permission
function hasPermission(file, action) {
    if (!file?.accessLevels) {
        return false;
    }

    if (mappings.has(action)) {
        return mappings.get(action).includes(file.accessLevels);
    }

    return false;
}

export default hasPermission;*/