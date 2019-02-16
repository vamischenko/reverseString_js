function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString("hello");

function reverseStr(str) {
  return (str === '') ? '' : reverseStr(str.substr(1)) + str.charAt(0);
}

reverseStr("hello");

function revStr(str) {
  if (str === "") // Условие выхода из рекурсии
    return "";
  
  else
    return revStr(str.substr(1)) + str.charAt(0);
}

revStr("hello");

function myrev(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

myrev('hello');