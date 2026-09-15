function getUser(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve({id: id, name: "Макс"});
        }, 500);
    });
}

function getOrders(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve([{id: 101, total: 250}, {id: 102, total: 90}]);
        }, 500);
    });
}

function getOrderDetails(orderId){
    return new Promise(( resolve, reject) => {
        setTimeout(() => {
            resolve({id: orderId, items:["книга", "кружка"]});
            // reject(new Error("сервер упав."));
        }, 500)
    });
}

async function main(){
    try{
        const user = await getUser(1);
        const orders = await getOrders(user.id);
        const details = await getOrderDetails(orders[0].id);
        console.log(details.items.join(", "));
    } catch (err) {
        console.log("Упало: ", err.message);
    }
}

main();
console.log("конец файла");