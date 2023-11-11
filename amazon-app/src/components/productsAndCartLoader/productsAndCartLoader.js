import { getDataFromLocalStorage } from "../../utilities/localStorage";

export const productsAndCartLoader = async() => {
    const productsData = await fetch('product.json');
    const products = await productsData.json();

    const savedData = getDataFromLocalStorage();
    const previousData = [];

    for(const id in savedData){
        const addedData = products.find(product => product.id === id);
        const quantity = savedData[id];
        addedData.quantity = quantity;
        previousData.push(addedData);
    }

    return {products, previousData};
}