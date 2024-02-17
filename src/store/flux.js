const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			user: {},
			userdata: [],
			task: [],
			taskdata: []
		},
		actions: {
			fetchLogin: (data) => {
				return fetch("http://localhost:3001/login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
					},
				})
					.then((response) => {
						if (response.status === 200) {
							return response.json()
						} if (response.status === 401) {
							const errorMessage = "El usuario no existe"
							response.json().then((data) => {
								alert(errorMessage);
							});
							throw new Error("ERROR")
						} if (response.status === 400) {
							const errorMessage2 = "Contraseña incorrecta"
							response.json().then((data) => {
								alert(errorMessage2);
							});
							throw new Error("ERROR")
						} if (response.status === 422) {
							throw new Error("ERROR");
						}
					})
					.then((response) => {
						setStore({ token: response.token, user: response.user })
						return response.user
					})
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
			fetchUserData: () => {
				const storage = getStore()
				const fetchOptions = {}
				if (storage.token.length > 0) {
					fetchOptions.headers = {Authorization: `Bearer ${storage.token}`}
				}
				fetch(`http://localhost:3001/users`,
				fetchOptions
				)
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
				const storage = getStore()
				/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch("http://localhost:3001/task", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${storage.token}`
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
				const storage = getStore()
				/* 				fetch("https://octopus-app-epbnm.ondigitalocean.app/login", { */
				fetch("http://localhost:3001/user", {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${storage.token}`
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
			fetchTaskData: () => {
				const storage = getStore()
				fetch(`http://localhost:3001/tasks`,{
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${storage.token}`
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ taskdata: [...data.data] })
					})
					.catch(error => console.log("error to obtain contact data", error))
			},
			fetchTaskUser: (id) => {
				const storage = getStore()
				fetch(`http://localhost:3001/task/${id}`,{
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${storage.token}`
					}
				})
					.then(resp => resp.json())
					.then(data => {
						setStore({ task: data })
					})
					.catch(error => console.log("error to obtain task data", error))
			},
			fetchTaskDelete: (id) => {
				fetch(`http://localhost:3001/task/${id}`, {
				  method: "DELETE",
				  headers: {
					"content-type": "application/json",
				  },
				})
				  .then((response) => {
					if (!response.ok) {
					  throw new Error(`HTTP error! status: ${response.status}`);
					}
					console.log("response", response);
					return response.json();
				  })
				  .catch((error) => {
					console.log("Error:", error);
				  });
			  },
			
		}
	}
}




export default getState;




