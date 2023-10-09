const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
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
			},
		}
	};

export default getState;
