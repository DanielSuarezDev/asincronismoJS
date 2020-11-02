const doSomeThingAsync = () => {
  return new Promise ((resolve,reject) => {
    (true)
    ? setTimeout (() => resolve('Do Something Async'), 4000)
    :reject(new Error ('Test Error'))
  });
}

const doSomeThig = async () => {
  const someThin = await doSomeThingAsync()
  console.log(someThin);
}

console.log('Before');
doSomeThig();
console.log('affter');

const anotherFunction = async () => {
  try {
const someThin = await doSomeThingAsync();
console.log(someThin);
  }catch(error){
    console.error(error)
  }
}

console.log('Before');
anotherFunction();
console.log('affter');