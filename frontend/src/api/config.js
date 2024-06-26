import axios from "axios";

export const apiV1 = () => {
    let token = localStorage.getItem("token")
    return axios.create({
        baseURL: "http://127.0.0.1:8000",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}