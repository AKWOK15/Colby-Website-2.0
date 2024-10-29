const headers = {
    'content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
};
const years = [2023, 2024];
exports.handler = async (event) => {
    if(event.queryStringParameters.year==2024){
        data = require('./schedule2024.json');
    }
    // if (years.includes(parseInt(event.queryStringParameters.year))){    
    //     url = `./schedule${event.queryStringParameters.year}.json`;
    //     data = require(url);
    // }
    else if(event.queryStringParameters.year==2023){
        data = require('./schedule2023.json');
    }
    return {
        body: JSON.stringify(data),
        statusCode: 200,
        headers: headers
    }
}