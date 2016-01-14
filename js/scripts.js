$(document).ready(function() {
  $("form").submit(function(event){
    var labels =["flavor1", "flavor2", "flavor3", "flavor4", "flavor5"];

    labels.forEach(function(label) {
      var userInput = $("input#" + label).val();
      $("." + label).text(userInput);
    });

    var favoriteFlavor = $("input#flavor1").val();
    alert('I love ' + favoriteFlavor + ', too!');

    $(".favorite").show();
    event.preventDefault();
  });
});
