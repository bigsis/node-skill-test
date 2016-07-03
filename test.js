var Client = require('node-rest-client').Client;

var client = new Client();

var url = "https://api.github.com/users/bigsis/followers";

client.setUrl = function (user) {
    url = "https://api.github.com/users/" + user + "/followers";
}

// registering remote methods
client.registerMethod("jsonMethod", url, "GET");

var args = {
    // data: { test: "hello" },
    headers: {
                "Content-Type": "application/json",
                        "User-Agent": "bigsis"
             }
};

client.methods.jsonMethod(args, function (data, response) {
    // parsed response body as js object
    console.log(data);
    // raw response
    // console.log(response);
});