import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../../res/colors';

import FilmsScreen from "./FilmsScreen";
import FilmsHeader from './FilmsHeader';
import FilmDetailScreen from '../filmDetail/FilmDetailScreen';
import Logo from '../brands/Logo';

const Stack = createStackNavigator();

const FilmsStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeFilms"
                component={FilmsScreen}
                options={() => ({
                    headerTitle: () => <FilmsHeader />,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: colors.black }
                })}
            />
            <Stack.Screen
                name="HomeFilmDetail"
                component={FilmDetailScreen}
                options={() => ({
                    headerStyle: { backgroundColor: colors.black },
                    headerTitle: '',
                    headerTintColor: colors.white,
                    headerRight: () => <Logo />
                })}
            />
        </Stack.Navigator>
    );
}

export default FilmsStack;