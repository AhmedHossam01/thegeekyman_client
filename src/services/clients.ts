import axios from "axios"

const mainClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
})

export { mainClient }
