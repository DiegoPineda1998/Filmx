import React, { useReducer } from 'react';

import storage from '../../libs/storage';

import FilmReducer from './FilmReducer';
import FilmContext from './FilmContext';

const FilmState = ({ children }) => {

    const initialState = {
        'favorite-films-total': 0
    }

    const [state, dispatch] = useReducer(FilmReducer, initialState);

    const getFavoritesFilmsTotal = async() => {

        const favoritesFilmsTotal = await storage.getAllKeys();
        
        dispatch({
            type : 'GET_FAVORITE_FILMS_TOTAL',
            payload : favoritesFilmsTotal.length
        });

     }

    return (
        <FilmContext.Provider value={{
            'favorite-films-total' : state['favorite-films-total'],
            getFavoritesFilmsTotal
        }}>
            {children}
        </FilmContext.Provider>
    )

}

export default FilmState;
