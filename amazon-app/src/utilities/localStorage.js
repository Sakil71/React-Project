const setDataInLocal = (id) =>{
    const saveData = getDataFromLocalStorage();
    const quantity = saveData[id];
    if(quantity){
        saveData[id] = quantity + 1;
    }
    else{
        saveData[id] = 1;
    }
    localStorage.setItem('items', JSON.stringify(saveData));
    
}

const getDataFromLocalStorage = () =>{
    let shoppingCart = {};
    const existItem = localStorage.getItem('items');
    if(existItem){
        shoppingCart = JSON.parse(existItem);
    }
    return shoppingCart;
}


export {setDataInLocal, getDataFromLocalStorage};