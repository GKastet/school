import axios from 'axios';

// axios.get(`https://res.cloudinary.com/dko6zcffp/image/upload/v1/samples/dessert-on-a-plate`)
//   .then(response => {
//     const imageUrl = response.data.url;
//     console.log(imageUrl);
//     // Здесь можно сохранить imageUrl в состоянии вашего компонента или использовать его напрямую в <img> элементе.
//   })
//   .catch(error => {
//     console.error('Ошибка при получении изображения из Cloudinary:', error);
//   });

//   axios()

 
const baseURL = 'https://api.cloudinary.com/v1_1/dko6zcffp/cloudinary://424626118126268:UCa2ubZbbyfDwDdTnt0dEVKgSVA@dko6zcffp'
// const baseURL = 'https://res.cloudinary.com/dko6zcffp/image/upload/v1/samples/dessert-on-a-plate'

export const instance = axios.create({
    baseURL,
})

export const getApiCarsCatalog = async () => {
    const {data} = await instance.get()
    console.log(data);
    return data
}



// export const getCarsPerPage = async (page=1) => {    
//     const {data} = await instance.get('carrental', {params: {
//         page: page,
//         limit: 8
//     }})    
//     return data
// }