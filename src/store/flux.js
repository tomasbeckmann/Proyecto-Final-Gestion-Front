const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: {}
		},
		actions: {
			SetCredential: (token, user) => {
				setStore({ token, user })
			},
			fetchLogin: (data) => {
/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch("https://localhost:/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					console.log("response", response)
					return response.json()
				}).then((data) => {
					console.log("data", data)
				})
					.catch((error) =>
					console.log(error))
			}
		}
	}
};



export default getState;




