const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: {},
			userdata: []
		},
		actions: {
			SetCredential: (token, user) => {
				setStore({ token, user })
			},
			fetchLogin: (data) => {
				/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch("http://localhost:3001/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					return response.json()
				}).then((data) => {
					console.log("data", data)
				})
/* 					.catch((error) =>
						console.log(error)) */
			},
			fetchRegister: (data2) => {
				/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch("http://localhost:3001/user", {
					method: "POST",
					body: JSON.stringify(data2),
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					console.log("response", response)
					return response.json()
				}).then((data2) => {
					console.log("data", data2)
				})
/* 					.catch((error) =>
						console.log(error)) */
			},
			fetchUserData() {
				fetch(`http://localhost:3001/users`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ userdata: [...data.data] })
					})
					.catch(error => console.log("error to obtain contact data", error))
			},
			fetchTask: (data) => {
				/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch("http://localhost:3001/task", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					return response.json()
				}).then((data) => {
					console.log("data", data)
				})
/* 					.catch((error) =>
						console.log(error)) */
			}
		}
	}
};



export default getState;




