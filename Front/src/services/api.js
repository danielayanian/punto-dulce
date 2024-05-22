// Fichero src/services/api.js

const callToApi = () => {
  return fetch('https://get/api/v1/products')
  .then(response=>response.json())
  .then((data)=>{
    const cleanData = data.results.map((product)=>{
      return{
        id:product.id,
        codigo: product.codigo,
        descripcion:product.descripcion,
        categoria:product.categoria,
        marca:product.marca,
        imagen:product.imagen,
        precio: product.precio,
        proveedor:product.proveedor
      };
    })
    return cleanData;
  });
      };


export default callToApi;
































