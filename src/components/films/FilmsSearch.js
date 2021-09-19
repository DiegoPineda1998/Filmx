import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import colors from '../../res/colors';

import storage from '../../libs/storage';

const FilmsSearch = ({ setQuery, loadFilms }) => {

    const updateQuery = async (query) => {

        setQuery(query);

        const querySaved = await storage.get('query');

        if (querySaved) {
            await storage.remove('query');
            await storage.add('query', query);
        }
        else {
            await storage.add('query', query);
        }

    }

    return (
        <View style={styles.headerSearch}>
            <View style={styles.search}>
                <TextInput
                    style={styles.inputSearch}
                    placeholder='film or serie title...'
                    placeholderTextColor={colors.gray}
                    onChangeText={query => updateQuery(query)}
                />
                <Button
                    buttonStyle={styles.buttonSearch}
                    icon={{ name: 'magnify', type: 'material-community', color: colors.white }}
                    onPress={loadFilms}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerSearch: {
        backgroundColor: colors.black,
        width: '100%',
        height: 65,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.red
    },
    search: {
        backgroundColor: colors['white-transparent'],
        width: '90%',
        height: 45,
        flexDirection: 'row',
        marginTop: 7,
        borderRadius: 30
    },
    inputSearch: {
        width: '80%',
        height: 30,
        color: colors.white,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 7,
        fontFamily: 'Montserrat-Regular'
    },
    buttonSearch: {
        backgroundColor: 'transparent',
        marginTop: 3,
        marginLeft: -15
    }
});

export default FilmsSearch;
