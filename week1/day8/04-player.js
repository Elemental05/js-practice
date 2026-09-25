const player = {
    tracks : ["Save That Shit", "Benz Truck", "16 Lines", "nuts"],
    current : 0,
    play(){
       console.log("Играет: ", this.tracks[this.current]);
    },
    next(){
        this.current++;
        if(this.current === this.tracks.length){
            this.current = 0;
        }
        this.play();
    }
};

player.play();                      
setTimeout(() =>  player.next(), 1000);   
setTimeout(() =>  player.next(), 2000);  
setTimeout(() =>  player.next(), 3000);  
setTimeout(() =>  player.next(), 4000);
setTimeout(() =>  player.next(), 5000);  