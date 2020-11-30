import axios from 'axios'

const url = 'https://crudcrud.com/api/5ef95534c3374d5380588aae6a37c39d/cakes'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url,newPost)
export const updatePost = (id,updatePost) => axios.patch(`${url}/${id}`,updatePost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)