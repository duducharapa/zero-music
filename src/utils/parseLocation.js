module.exports = function parseLocation(location){
    return location.split('/').reverse()[0];
}