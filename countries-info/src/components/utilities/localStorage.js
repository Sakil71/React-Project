
//Approach : 1 (simple)
// const setLocalStorage =(id) =>{
//     const exist = localStorage.getItem(id);
//     if(exist){
//         const newData = parseInt(exist) + 1;
//         localStorage.setItem(id, newData);
//     }
//     else{
//         localStorage.setItem(id, 1);
//     }
// }

// Approach : 2 (Object)

const setLocalStorage = (id) => {
    let storedData;
    //================= get data from local storage 
    const existData = localStorage.getItem('detailsData');
    if (existData) {
        storedData = JSON.parse(existData);
    }
    else {
        storedData = {};
    }

    //================ set data in local storage 
    const quantity = storedData[id];
    if (quantity) {
        const newData = quantity + 1;
        storedData[id] = newData;
    }
    else {
        storedData[id] = 1;
    }
    localStorage.setItem('detailsData', JSON.stringify(storedData));
}

//========================= Remove data from local storage
const removeData = (id) => {
    const existData = JSON.parse(localStorage.getItem('detailsData'));
    if(existData){
        if(id in existData){
            delete existData[id];
            localStorage.setItem('detailsData', JSON.stringify(existData));
        }
    }
}

export { setLocalStorage, removeData }
