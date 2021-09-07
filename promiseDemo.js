// var p = new Promise(function(resolve,reject){
//     if(false){
//         resolve('success');
//     }else{
//         reject('failure');
//     }
// });




// p.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })





// new Promise(function(resolve,reject){

//     setTimeout(() => {
//         resolve(5);
//     },1000)

// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then(function(number){
//     console.log(number);
// })



const isMomHappy = true;


const willGetNewPhone = new Promise((resolve,reject) => {

    if(isMomHappy){
        const phone = {
            name: 'Iphone 8', price: 4000, color: 'silver'
        }
        resolve(phone);
    }else{
        const error = new Error('mom is not happy');
        reject(error);
    }

});


const showToFriends = function(phone){
    
    const message = "hey friends this is my new phone " + phone.name;
    return Promise.resolve(message);

}








const askMom = function(){
    willGetNewPhone
        .then(showToFriends)
        .then(message => console.log(message))
        .catch(err => {
            console.log(err)
        })
}

askMom();