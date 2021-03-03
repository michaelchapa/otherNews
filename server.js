const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const Parser = require('rss-parser');

const app = express();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;

// Middleware prints incoming requests tot he server's console
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
}); 

// Middleware parses body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Middleware to handle Cross-Origin Requests
app.use(cors());

app.get('/cors-proxy/:feedURL([\\/\\w\\.-]*)', function(req, res, next) {
    const endpoint = req.params.feedURL;
    console.log("Retrieving feed from:", endpoint);
    axios.get(endpoint).then((response) => {
        // Convert XML to JSON
        let parser = new Parser();
        parser.parseString(response.data).then((result) => {
            // Return JSON
            res.status(200).json([
                result.items[0],
                result.items[1],
                result.items[2],
                result.items[3]]);
        });

    }).catch((error) => {
        console.log(error);
    });
});

// Middleware informs the Express App to serve our compiled React files
if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));