const parent = document.getElementById("parent");
const child1 = document.getElementById("child1");
const child2 = document.getElementById("child2");
const grandchild = document.getElementById("grandchild");

parent.addEventListener("click", () => {
  console.log("parent capture");
});
child1.addEventListener("click", () => console.log("child1 capture"));

child2.addEventListener("click", () => console.log("child2 capture"));

grandchild.addEventListener("click", () => console.log("grandchild capture"));
