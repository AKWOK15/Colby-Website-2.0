const headers = {
    'content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
};
const years = [2023, 2024];
exports.handler = async (event) => {
    if (years.includes(event.queryStringParameters.year)){
           data = require(`./schedule${event.queryStringParameters.year}.json`);
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