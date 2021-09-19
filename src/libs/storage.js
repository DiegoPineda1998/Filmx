import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {

    add: async(key, value) => {

        try {

            await AsyncStorage.setItem(key, value);

            return true;

        }
        catch(err) {

            return false;

        }
    },

    remove: async(key) => {

        try {

            await AsyncStorage.removeItem(key);

            return true;

        }
        catch(err) {

            return false;

        }
    },

    get: async(key) => {

        try {

            return await AsyncStorage.getItem(key);

        }
        catch(err) {

            return null;

        }
    },

    getAll: async(keys) => {

        try {

            return await AsyncStorage.multiGet(keys);

        }
        catch(err) {

            return null;

        }
    },

    getAllKeys: async() => {

        try {

            const allKeys = await AsyncStorage.getAllKeys();
            const keysOfFilms = allKeys.filter(key => key != 'query');
            return keysOfFilms;

        }
        catch(err) {

            return null;

        }
    }

};

export default storage;