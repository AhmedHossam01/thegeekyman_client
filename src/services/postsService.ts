import { mainClient } from "./clients"

const getAllPosts = () => {
  return mainClient.get("/posts")
}

export { getAllPosts }
