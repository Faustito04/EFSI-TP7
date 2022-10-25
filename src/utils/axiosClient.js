import axios from "axios";

const axiosClient = axios.create({
});

export const getProducto = async (id) => {
    return axiosClient.get(
        `https://dummyjson.com/products/${id}`
    )
        .then(res => {
            if (res.status < 300) return res.data;
            else console.log(`Response with status code ${res.status}`);
        })
        .catch(err => {
            console.log(err);
        })
}