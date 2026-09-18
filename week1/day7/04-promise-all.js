function getUser(id){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(id == 2){
                reject(new Error("Юзер 2 недоступен"));
                return;
            }
            resolve({id: id, name: "Макс"});
        }, 500 + id * 300);
    });
}
async function main(){
    try{
        console.time("последовательно");
        const user1 = await getUser(1);
        const user2 = await getUser(2);
        const user3 = await getUser(3);
        console.timeEnd("последовательно");
        console.log(user1, user2, user3);
    }catch(err){
        console.log("последовательно упало:", err.message);
    }
    try{
        console.time("параллельно");
        const [a, b, c ] = await Promise.all([
            getUser(1),
            getUser(2),
            getUser(3)
        ]);
        console.timeEnd("параллельно");
        console.log(a,b,c);
    }catch (err) {
        console.log("парралельно упало: ", err.message);  
    }
}

main();