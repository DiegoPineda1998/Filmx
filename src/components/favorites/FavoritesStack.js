import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from "../../res/colors";

import FavoritesScreen from './FavoritesScreen';
import FilmDetailScreen from '../filmDetail/FilmDetailScreen';
import Logo from '../brands/Logo';

const Stack = createStackNavigator();

const FavoritesStack = () => {

    return(

        <Stack.Navigator>
            <Stack.Screen 
                name="FavoritesFilms"
                component={FavoritesScreen}
                options={() => ({
                    headerStyle: { backgroundColor: colors.black },
                    headerTitle: '',
                    headerRight: () => <Logo />
                })}
            />
            <Stack.Screen
                name="FavoritesFilmDetail"
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

export default FavoritesStack;