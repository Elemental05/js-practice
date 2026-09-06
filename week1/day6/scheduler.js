function schedule(fn, priority){
    if(priority === "now"){
        fn();
    }
    if(priority === "soon"){
    Promise.resolve().then(fn);
    }
    if(priority === "later"){
        setTimeout(fn, 0);
    }
}

schedule(() => console.log("3 — later"), "later");
schedule(() => console.log("1 — now"), "now");
schedule(() => console.log("2 — soon"), "soon");
schedule(() => console.log("3.5 — ещё один later"), "later");
schedule(() => console.log("2.5 — ещё один soon"), "soon");
console.log("конец файла");