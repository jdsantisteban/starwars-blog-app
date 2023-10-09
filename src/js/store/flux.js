const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			urlBase: "https://www.swapi.tech/api",
		},
		actions: {
			getPeople: async () => {
				let store = getStore();
				try {
				  let response = await fetch(`${store.urlBase}/people`);
				  let data = await response.json();
		
				  for (let person of data.results) {
					let responsePerson = await fetch(person.url);
					let dataPerson = await responsePerson.json();
		
					setStore({
					  people: [...store.people, dataPerson.result],
					});
				  }
				} catch (error) {
				  console.log(error);
				}
			  },


			  getPlanets: async () => {
				let store = getStore();
				try {
					let response = await fetch(`${store.urlBase}/planets`);
					let data = await response.json();
					for (let planet of data.results) {
						let response = await fetch(`${store.urlBase}/planets/${planet.uid}`);
						let data = await response.json();

						setStore({
							planets: [...store.planets, data.result],
						});
					}
				} catch (error) {
					console.log(error)
				}
			  }
			},
		}
	};

export default getState;
