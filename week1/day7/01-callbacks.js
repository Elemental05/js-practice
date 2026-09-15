function getUser(id, callback){
    setTimeout(() => {
        callback({id, name: "Макс"});
    }, 500);
} 

function getOrders(userId, callback){
    setTimeout(() => {
        callback([{id: 101, total: 250}, {id: 102, total: 90}]);
    }, 500);
}

function getOrderDetails(orderId, callback){
    setTimeout(() => {
        callback({id: orderId, items:["книга", "кружка"]});
    }, 500);
}

getUser(1, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            console.log(`${user.name}, заказ ${details.id}: ${details.items.join(", ")}`);
        })
    })
})

// getUser(1, function (user) {
//     getOrders(user.id, function (orders) {
//         getOrderDetails(orders[0].id, function (details) {
//             console.log(`${user.name}, заказ ${details.id}: ${details.items.join(", ")}`);
//         });
//     });
// });