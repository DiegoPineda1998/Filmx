import { GET_FAVORITE_FILMS_TOTAL } from './types';

export default (state, action) => {

    const {payload, type} = action;

    switch(type) {
        case GET_FAVORITE_FILMS_TOTAL:
            return {
                ...state,
                'favorite-films-total': payload
            }
        default:
            return state;
    }
}

