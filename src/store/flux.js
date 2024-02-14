const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: {},
			userdata: [],
			taskdata: []
		},
		actions: {
			SetCredential: (token, user) => {
				setStore({ token, user })
			},
			fetchLogin: (data) => {
				fetch("http://localhost:3001/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
					},
				})
					.then((response) => {
						if (response.status === 200) {
							window.location.href = "/home";
						} if (response.status === 401) {
							const errorMessage = "El usuario no existe"
							response.json().then((data) => {
								alert(errorMessage);
							});
						} if (response.status === 400) {
							const errorMessage2 = "Contraseña incorrecta"
							response.json().then((data) => {
								alert(errorMessage2);
							});
						}
					})
					.catch((error) => {
						console.log("Error:", error);
					});
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
			fetchUserData : () => {
				fetch(`http://localhost:3001/users`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ userdata: [...data.data] })
					})
					.catch(error => console.log("error to obtain contact data", error))
			},
			fetchUser: (user_id) => {
				fetch(`http://localhost:3001/user/${user_id}`)
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
			},
			fetchDelete: (data) => { 
				/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch(`http://localhost:3001/user/${data.id}`, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
					},
				}).then((response) => {
					console.log("response", response)
					return response.json()					
				}).then(() => {
					
				})
				/* 					.catch((error) =>
										console.log(error)) */
			},
			fetchPut: (data) => {
				/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch("http://localhost:3001/user", {
					method: "PUT",
					body: JSON.stringify(data),
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
			fetchTaskData : () => {
				fetch(`http://localhost:3001/tasks`)
					.then(resp => resp.json())
					.then(data => {
						setStore({ taskdata: [...data.data] })
					})
					.catch(error => console.log("error to obtain contact data", error))
			},
		}
	}
}




export default getState;




