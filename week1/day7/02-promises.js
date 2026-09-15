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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: orderId, items:["книга", "кружка"]});
        }, 500)
    });
}

getUser(1)
    .then((user) => getOrders(user.id))
    .then((orders) => getOrderDetails(orders[0].id))
    .then((details) => {
        console.log(details.items.join(", "));
    })
    .catch((err) => {
        console.log("Упаф: ", err.message);
    });