const information = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello i'm ${information.name} from ${information.campus} campus!`,
    e: "oO",
    T: "U "
}));