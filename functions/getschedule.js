const headers = {
    'content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
};
exports.handler = async (event) => {
    if (event.queryStringParameters.year==2023){
           data = require('./schedule2023.json');
    }
    // else if(event.queryStringParameters.year==2024){
    //     data = require('./schedule2024.json');
    // }
    return {
        body: JSON.stringify(data),
        statusCode: 200,
        headers: headers
    }
}