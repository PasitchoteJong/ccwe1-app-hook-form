export async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return data.products;
}


export async function getProductById ({ params }) {
          // fetch(`https://dummyjson.com/products/${params.id}`)
          // ... ทำเพิ่มตรงนี้
          const response = await fetch(`https://dummyjson.com/product/${params.id}`)
          const data = await response.json();
          
          return data;
        }