const counter = {
    count: 0,
    inc(){
        console.log("this =", this);
        this.count++;
        console.log("count:", this.count);
    },
};

counter.inc();
counter.inc();
setTimeout(() => counter.inc(), 1000);

// const other = {count: 100, inc: counter.inc};
// other.inc();

// const f = counter.inc;
// f();