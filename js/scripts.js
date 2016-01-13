$(document).ready(function() {
  $("form").submit(function(event){
    var blanks =["flavor1", "flavor2", "flavor3", "flavor4", "flavor5"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    $(".favorite").show();
    event.preventDefault();
  });
});
