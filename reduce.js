var chatLogs = [
    {
        channelId: "123456789",
        userId: "1",
        message: "Hello! How can I help you?"
    },
    {
        channelId: "123456789",
        userId: "97",
        message: "I would like to know when my order will be delivered, order #3618"
    },
    undefined,
    {
        channelId: "123456789",
        userId: "1",
        message: "Alright, please stand by while I look up your information."
    },
    {
        channelId: "99994455",
        userId: "36",
        message: "Thank you for contacting us, please stand by."
    },
    {
        channelId: "99994455",
        userId: "89",
        message: "Ok"
    },
    {
        channelId: "654654623212",
        userId: "555",
        message: "Hello! How can I help you?"
    },
    {
        channelId: "654654623212",
        userId: "555",
        message: "Please type your question, I'll stand by for a minute or so"
    }
];
var finalResult = "Result";
console.log(finalResult);
// Desired format: 
/*
{
  "Channel[ID]": [
   {
   userId: "123",
   message: "foo"
   },
   { ... }
  ]
}
*/
var inputArray = ["aba", "aa", "ad", "vcd", "aba"];
var finalArray = inputArray.filter(function (n) { return n.length == Math.max.apply(Math, inputArray.map(function (el) { return el.length; })); });
//console.log(maxLength);
console.log(finalArray);
