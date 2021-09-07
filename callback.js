var products = [
    {id:1, name: 'samsung s8', price:3000},
    {id:2, name: 'samsung s7', price:200},
    {id:3, name: 'samsung s6', price:1000}
]


let added = true;

function addProduct (prd,callback){

    if(added){
        setTimeout(()=>{
            products.push(prd);
            callback(null,prd);
        },2000)
    }else{ 
        callback('500',prd);
    }


}

function getProducts(){


    setTimeout(()=>{
        products.forEach((p) => {   
            console.log(p.name)
        })
    },1000)


}

addProduct({id:4,name:'samsung s5',price:500},
function(err,data){
    if(err){
        console.log('hata : ' +err);
    }else{
        console.log(data);
    }
});
