const user = {
    name: ["Аня", "Вася"],
    hiNormal(){
        console.log("normal:", this.name[1]);
    },
    hiArrow: () => {
        console.log("arrow:", this);
    },
};

user.hiNormal();
user.hiArrow();