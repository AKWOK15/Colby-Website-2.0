const r2023 = require('./roster.json')
const headers = {
    'content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
};
exports.handler = async (event) => {
    const year = 'r' + event.queryStringParameters.year;
    return {
        body: JSON.stringify(year),
        statusCode: 200,
        headers: headers
    }
}