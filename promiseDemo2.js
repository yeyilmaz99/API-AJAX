let myObj = {
    url : "https://randomuser.me/api/?results=5"
}

let request = obj => {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET" , obj.url);

        if(xhr.headers){
            Object.keys[obj.headers]
            .forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key]);
            })
        }

        xhr.onload = ()=>{
            if(xhr.status >= 200 && xhr.status<300){
                resolve(xhr.response);
            }else{
                reject(xhr.statusText);
            }
        }

        xhr.onerror = () => {
            reject(xhr.statusText);
        }

        xhr.send();

    });
}


let builtHtml = function(data){

    let users = JSON.parse(data);

    let html = "";

    users.results.forEach(user => {
        html +=`
        <div>
            <img src="${user.picture.large}">
            <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
            </div>
        </div>  
        `
    })
    document.querySelector('#users').innerHTML =html;
    
    return Promise.resolve("HTML is loaded");
}


request(myObj)
    .then(builtHtml)
    .then(msg => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err);
    })
