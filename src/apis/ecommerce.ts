import axios from "axios"


interface iFetchProducts {
    id?:number;
    category?:string; 
}
export const fetchProducts = (fetchProps:iFetchProducts) => {

    const {id,category} = fetchProps; 
    const url = id ? `https://dummyjson.com/products/${id}`: category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products';
    return axios.get(url).then((res) => res?.data).catch((err) => err)
}

export const searchProduct = (searchQuery:string) =>{
return axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`)
.then(res => res?.data)
.catch(err => err);

}