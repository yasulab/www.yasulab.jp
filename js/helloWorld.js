(function() {
  var hello;
  hello = function() {
    var name;
    name = "Yohei Okada";
    return console.log("My name is " + name);
  };
  hello();
}).call(this);
