import React, { useEffect, useContext } from 'react';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from './src/res/colors';

import FilmsStack from './src/components/films/FilmsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';

import FilmContext from './src/context/Film/FilmContext';

const Tab = createBottomTabNavigator();

const Navigation = () => {

  const stateFavoriteFilms = useContext(FilmContext);

  useEffect(() => {
    stateFavoriteFilms.getFavoritesFilmsTotal();
  }, []);

  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let { name } = route;
              let iconName;

              if (name === 'Home') {
                iconName = focused ? 'home-variant' : 'home-variant-outline';
              }
              else if (name === 'Favorites') {
                iconName = focused ? 'star' : 'star-outline';
              }

              return <Icon 
                        name={iconName} 
                        size={size} 
                        color={color} 
                        type='material-community' 
                     />;
            },
            tabBarActiveTintColor: colors.white,
            tabBarInactiveTintColor: colors.white,
            tabBarStyle: { 
              backgroundColor: colors['black-transparent'],
              borderTopWidth: 0,
              height: 55, 
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0 },
            tabBarLabelStyle: { fontSize: 10, fontFamily: 'Montserrat-Regular', paddingBottom: 6 }
          })}
        >
          <Tab.Screen
            name="Home"
            component={FilmsStack}
            options={{ headerShown: false }}
          />

          <Tab.Screen
            name="Favorites"
            component={FavoritesStack}
            options={{ headerShown: false, tabBarBadge: stateFavoriteFilms['favorite-films-total'] }}
          />

        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default Navigation;
