const pulse = setInterval(() => console.log("тик"), 50);

let sum = 0;
const LIMIT = 100_000_000;
const CHUNK = 5_000_000;
let position = 1;


function processChunk(){
    const end = Math.min(position + CHUNK, LIMIT);
    for (let i = position; i < end; i++){
        sum += i;
    }
    
    position = end;
    if(position < LIMIT){
        setTimeout(processChunk, 0);
    } else {
        console.log(sum);
        clearInterval(pulse);
    }
}

processChunk();
