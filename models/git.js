var Client = require('node-rest-client').Client;

var client = new Client();

var url = "https://api.github.com/users/bigsis/followers";

const Git ={}

Git.getFollower = function(user, res)
{
    url = "https://api.github.com/users/" + user + "/followers";

    client.registerMethod("jsonMethod", url, "GET");

    var args = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "bigsis"
        }
    };

    client.methods.jsonMethod(args, function (data, response) {
        console.log('getFollower')
        res.send(data)
    });
}


module.exports = Git;