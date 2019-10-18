// import "@babel/polyfill";

// const data = _.join(["hello","min","today"],"~");
// console.log(data);

async function getName() {
    const {default: _} = await import(/* webpackChunkName: "lodash" */ "lodash");
    const data = _.join(["hello","min","today"],"~");
    console.log(data);
}

getName();

const person =  { name: "min",age: 21 };
const min = { class: "English" };
console.log(Object.assign({},person,min));

const arr = ["h","h","m"];
console.log(Array.from(arr));
