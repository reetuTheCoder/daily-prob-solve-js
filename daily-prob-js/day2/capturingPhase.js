const parent = document.getElementById("parent");
const child1 = document.getElementById("child1");
const child2 = document.getElementById("child2");
const grandchild = document.getElementById("grandchild");

parent.addEventListener(
  "click",
  (e) => {
     e.stopPropagation();
    console.log("parent capture");
  },
  true,
);

child1.addEventListener(
  "click",
  () => {
    console.log("child1 capture");
  },
  true,
);

child2.addEventListener(
  "click",
  () => {
    console.log("child2 capture");
  },
  true,
);

grandchild.addEventListener(
  "click",
  () => {
     

    console.log("grandchild capture");
  },
  true,
);
