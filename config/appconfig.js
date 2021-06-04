// Define My Application Confiruation

// Server Config
const serverConfig ={
    port: 3000,
    hostname: '120.0.0.1'
}

//Database Config

const dbConfig={
    mongourl: 'mongodb://localhost/contactmanager'
}

module.exports ={
    serverConfig, dbConfig
}