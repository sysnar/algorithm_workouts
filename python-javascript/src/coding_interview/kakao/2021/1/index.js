export function RecomendName(userInput) {
  userInput = userInput.toLowerCase();
  userInput = filterWhiteList(userInput);
  userInput = replaceMultiDots(userInput);
  userInput = removeFistLastDot(userInput);
  userInput = addDefaultChar(userInput);
  userInput = removeOver15(userInput);
  userInput = makeLength3(userInput);

  return userInput;
}

function filterWhiteList(userInput) {
  let result = "";
  for (let char of userInput) {
    if (/[a-z0-9-_.]/.test(char)) {
      result += char;
    }
  }

  return result;
}

function replaceMultiDots(userInput) {
  while (userInput.includes("..")) {
    userInput = userInput.replace("..", ".");
  }
  return userInput;
}

function removeFistLastDot(userInput) {
  if (userInput[0] === ".") {
    userInput = userInput.substring(1);
  }

  if (userInput[userInput.length - 1] === ".") {
    userInput = userInput.substring(0, userInput.length - 1);
  }

  return userInput;
}

function addDefaultChar(userInput) {
  if (userInput.length === 0) {
    userInput = "a";
  }
  return userInput;
}

function removeOver15(userInput) {
  userInput = userInput.substring(0, 15);
  return removeFistLastDot(userInput);
}

function makeLength3(userInput) {
  while (userInput.length < 3) {
    userInput += userInput[userInput.length - 1];
  }
  return userInput;
}
