import { mainClient } from "./clients"

const getAllPosts = () => {
  return mainClient.get("/posts")
}

const createNewPost = (post: IPost) => {
  return mainClient.post("/posts", post)
}

interface IPost {
  title: string
}

export { getAllPosts, createNewPost }
