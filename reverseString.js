// Reverse a String – Enter a string and the program will reverse it and print it out. Can't use reverse()
var str = process.argv[2];
function reverse() {
  var o = [];
  for (var i = 0; i <= str.length; i++)
    o.push(str.charAt(str.length - i));
  console.log(o.join(''));
}
reverse();
