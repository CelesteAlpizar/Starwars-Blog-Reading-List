const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				await fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "aplication/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ characters: data.results });
					})
					.catch(error => console.log(error, "error"));
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getPlanets: async () => {
				await fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "aplication/json"
					}
				})
					.then(res => {
						return res.json();
					})
					.then(data => {
						setStore({ planets: data.results });
					})
					.catch(error => console.log(error, "error"));
			}
		}
	};
};

export default getState;
