import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import films from '../../libs/films';

import FilmsSearch from './FilmsSearch';
import FilmsNotFound from './FilmsNotFound';
import FilmsList from './FilmsList';

import storage from '../../libs/storage';

const FilmsScreen = () => {

    const [listFilms, setListFilms] = useState([]);
    const [query, setQuery] = useState('Spider');

    const loadFilms = async () => {

        let allFilms = await films.getAll(query);
        setListFilms(allFilms.Search);

    }

    const loadLastSearchedFilmsList = async () => {

        const querySaved = await storage.get('query');

        if (querySaved) {
            let allFilms = await films.getAll(querySaved);
            setListFilms(allFilms.Search);
        }
        else {

            loadFilms();
            
        }

    }

    useEffect(() => {

        loadLastSearchedFilmsList();

    }, []);

    return (
        <View>
            <FilmsSearch
                setQuery={setQuery}
                loadFilms={loadFilms}
            />
            {
                listFilms == undefined
                    ?
                    <FilmsNotFound />
                    :
                    <FilmsList listFilms={listFilms} />
            }

        </View>
    );
}

export default FilmsScreen;