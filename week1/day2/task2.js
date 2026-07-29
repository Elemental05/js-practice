let x = 'двор';

function outer() {
  let x = 'комната';
  function inner() {
    console.log(x);        // A — комната
  }
  inner();
  if (true) {
    let x = 'шкаф';
    console.log(x);        // B — шкаф
  }
  console.log(x);          // C — комната
}

outer();
console.log(x);            // D — двор