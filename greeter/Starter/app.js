var g = G$("Lena", "Meow");
g.greet();
console.log(g);

$("#login").click(function () {
  var loginGrtr = G$("Lena", "Meow");

  $("#logindiv").hide();
  loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});
