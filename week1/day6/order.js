console.log("start");

setTimeout(() => console.log("timeout 1"), 0);

Promise.resolve().then(() => console.log("promise 1"));

function foo() {
  console.log("foo");
  setTimeout(() => console.log("timeout inside foo"), 0);
}

foo();

Promise.resolve().then(() => {
  console.log("promise 2");
  setTimeout(() => console.log("timeout inside promise"), 0);
});

console.log("end");
// start
// foo
// end
// promise 1
// promise 2
// timeout 1
// timeout inside foo
// timeout inside promise