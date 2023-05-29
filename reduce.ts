type logObject = {
  channelId: string;
  userId: string;
  message: string;
};

type logObjectArray = [logObject];

type resultLog = {
  userId: string;
  message: string;
};

type resultLogArray = [resultLog];

type resultObject = {
  [channelId: string]: resultLogArray;
};

const chatLogs = [
  {
    channelId: "123456789",
    userId: "1",
    message: "Hello! How can I help you?",
  },
  {
    channelId: "123456789",
    userId: "97",
    message:
      "I would like to know when my order will be delivered, order #3618",
  },
  undefined,
  {
    channelId: "123456789",
    userId: "1",
    message: "Alright, please stand by while I look up your information.",
  },
  {
    channelId: "99994455",
    userId: "36",
    message: "Thank you for contacting us, please stand by.",
  },
  {
    channelId: "99994455",
    userId: "89",
    message: "Ok",
  },
  {
    channelId: "654654623212",
    userId: "555",
    message: "Hello! How can I help you?",
  },
  {
    channelId: "654654623212",
    userId: "555",
    message: "Please type your question, I'll stand by for a minute or so",
  },
];

let result: resultObject = {
  channelId: [
    {
      userId: "",
      message: "",
    },
  ],
};

let cleanChatLogs = chatLogs.filter((item) => item);

function isKeyOfObject<T extends Object>(
  key: string | number | symbol,
  obj: T
): key is keyof T {
  return key in obj;
}

function isNotUndefinedArray<T>(
  a_arr: Array<T | undefined>
): a_arr is Array<T> {
  return !a_arr.some((a_item) => a_item === undefined);
}

var finalResult: resultObject = {};

if (!isNotUndefinedArray(cleanChatLogs)) {
  console.log("undefined");
} else {
  finalResult = cleanChatLogs.reduce<resultObject>(
    (accumulator: resultObject, currentValue: logObject) => {
      if (currentValue !== undefined && accumulator !== undefined) {
        var respuesta: resultObject = accumulator;
        const llave: string = `channel${currentValue.channelId}`;
        if (isKeyOfObject(`channel${currentValue.channelId}`, accumulator)) {
          console.log("ya existe");
          //ya existe, dale push al arreglo correspondiente
          respuesta[llave].push({
            userId: currentValue.userId,
            message: currentValue.message,
          });
          return respuesta;
        } else {
          //no existe, agrega la key al objeto
          
          respuesta[llave] = [
            { userId: currentValue.userId, message: currentValue.message },
          ];
        }
        return respuesta;
      }
    },
    {} as resultObject
  );
}

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
