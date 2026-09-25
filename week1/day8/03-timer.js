const timer = {
    seconds: 0,
    start(){
    setTimeout(function() {
        this.seconds++;
        console.log("normal:", this.seconds);
    }, 500);
    
    setTimeout(() => {
        this.seconds++;
        console.log("arrow", this.seconds);
        }, 1000);
    },
};

timer.start();