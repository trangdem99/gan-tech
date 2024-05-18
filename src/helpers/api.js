import {
  Api 
} from "./axios"

const api = new Api()

export const getSetting = () => api.get("/assets/data/settings.json")