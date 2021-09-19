const films = {

    getAll : async(query) => {

        const url = `https://www.omdbapi.com/?s=${query}&apikey=b4f3016a`;
        const res = await fetch(url);
        const data = res.json();
        return data;

    },

    get : async(id) => {

        const url = `https://www.omdbapi.com/?i=${id}&apikey=b4f3016a`;
        const res = await fetch(url);
        const data = res.json();
        return data;
    }

}

export default films;