const somethingWillHappen = () => {
  return new Promise((resolve, reject) =>{
    if (true){
      resolve('Muy Bien!');
    }else{
      reject('Upps no cumplio lo esperado');
    }
  });
};


somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err));


const somethingWillHappen2 = () => {
  return new Promise((resolve,reject) =>{
    if(true){
      setTimeout(() => {
        resolve('true');
      }, 2000)
    }else{
      const error = new Error ('no funciona')
      reject(error);
    }
  });
} 

somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err)); 

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => {
  console.log('Array of result', response)
})
.catch(err => {
  console.error(err);
})