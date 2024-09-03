import axios from "axios"

export const fetchProducts = (id?:number) => {
    const url = id ? `https://dummyjson.com/products/${id}`:'https://dummyjson.com/products';
    return axios.get(url).then((res) => res?.data).catch((err) => err)
}