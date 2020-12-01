import axios from 'axios'

const url = 'https://crudcrud.com/api/d820239df16a4692a1182ad877e2e2e4/cakes'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url,newPost)
export const updatePost = (id,updatePost) => axios.put(`${url}/${id}`,updatePost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)