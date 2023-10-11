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
			  },

			  addFavorite: (favToSave) => {
				let store = getStore()
		
				let exists = store.favorites.some((item) => item._id == favToSave._id)
				
				if (exists) {
				  let newList = store.favorites.filter((item) => item._id != favToSave._id)
		
				  setStore({
					favorites: newList
				  })
		
				} else {
				  setStore({
					favorites: [...store.favorites, favToSave]
				  })
				}
			},

			deleteFavorite: (favToDelete) => {
				let store = getStore()

				let newList = store.favorites.filter((item) => item._id != favToDelete._id)
				console.log(newList)
				setStore({
					favorites: newList
				})
			},
		}
	}
	};

export default getState;
