// Text

function getText(){
    fetch('text.txt')
     .then(response =>{
        return response.text();
     }).then(data =>{
         console.log(data);
     }).catch(err => {
         console.log(err);
     })
}

getText();

//JSON


function getJson(){
    fetch('products.json')
        .then(response => {
            return response.json();
        }).then(data =>{
            console.log(data);
        }).catch(err =>{
            console.log(err);
        })
}

getJson();



//external API


function getExternalAPI(){
    fetch('https://randomuser.me/api/?results=5')
     .then(data => {
         return data.json();
     }).then(users => {

        var html = "";
         users.results.forEach(user => {
             html += `
             <div>
                 <img src="${user.picture.large}">
                 <div>
                     ${user.name.title}
                     ${user.name.first}
                     ${user.name.last}
                 </div>
             </div>  
             `
         });
         document.querySelector('#users').innerHTML = html;
     }).catch(err =>{
         console.log(err);
     })
}

// getExternalAPI();


function postExternalApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    var data = {
        method : "POST",
        body : JSON.stringify({
            userId : 1,
            title : "sampletitle",
            body : "sample body"
        }),
        headers : new Headers({
            'content-type' : 'application/json'
        })
    }

    fetch(url,data)
     .then(res => {
        console.log(res)
     })

}

postExternalApi();