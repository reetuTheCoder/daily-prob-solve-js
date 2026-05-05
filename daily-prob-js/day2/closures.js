const name = "heena";
function outer() {
  let count = 0;

  console.log("name in the outer fun", name);

  function inner() {
    count++;
    console.log(count);
    console.log("name in the inner fun", name);
  }

  return inner;
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3



for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
