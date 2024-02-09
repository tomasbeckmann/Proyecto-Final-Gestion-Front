const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: {}
		},
		actions: {		
			SetCredential: (token, user) => {
				setStore({token, user})
			}
		}
	};
};


export default getState;


