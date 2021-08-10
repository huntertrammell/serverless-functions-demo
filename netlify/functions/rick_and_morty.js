const fetch = require('node-fetch')
// Our serverless functions are exported via this handler
// the event parameter will hold our query data
exports.handler = async function(event){
    // Get value of search parameter from the event
    const {query} = JSON.parse(event.body)
    // Build our query URL
    const URL = `https://rickandmortyapi.com/api/character/?name=${query}`
    
    // Fetch our data
    const response = await fetch(URL)
    const data = await response.json()
    
    console.log(data)
    // This is what is returned to our client
    return {
        statusCode: 200,
        body: JSON.stringify({
            data: data.results
        })
    }
}