if(process.env.NODE_ENV === 'production')
{
    //we are in production environment - reurtn prod keys
    console.log("6666666");module.exports = require('./prod');
}
else
{
    //we are in development environment - return dev keys
    module.exports = require('./dev');
}