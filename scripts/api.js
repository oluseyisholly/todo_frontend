
const BASE_URL = 'http://localhost:3300/api';



    const token = JSON.parse(localStorage.getItem('token') || '{"token" : ""}').token
    const headerObject = {
        'Content-Type': 'application/json',
        'Authorization' :   token
        }

    async function post(data, url) {

        
    const response = await  fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            body: JSON.stringify(data), // string or object
            headers: headerObject
        });

        console.log(response)
    
        const jsonresponse = await  response.json();
    
        return jsonresponse;
    }

    async function  get(url){
        console.log(token)
        const response = await fetch(`${BASE_URL}${url}`, {method: 'GET', headers: headerObject});
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse
    }

    async function update(data, url) {
        console.log(data)
        const response = await  fetch(`${BASE_URL}${url}`, {
            method: 'PUT',
            body: JSON.stringify(data), // string or object
            headers: headerObject
        });
    
        const jsonresponse = await  response.json();
    
        return jsonresponse;
    }


    async function remove( url) {
        const response = await fetch(`${BASE_URL}${url}`, {method: 'DELETE', headers: headerObject});
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse
    }


