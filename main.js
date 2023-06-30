function searchblogs() {
  var input = document.getElementById("blogsearchInput");
  var filter = input.value.toUpperCase();
  var blogPosts = document.getElementsByClassName("blogpost");
  var noResults = document.getElementsByClassName("no-results")[0];

  var hasResults = false;

  for (var i = 0; i < blogPosts.length; i++) {
    var nameAttr = blogPosts[i].getAttribute("name");
    if (nameAttr.toUpperCase().indexOf(filter) > -1) {
      blogPosts[i].style.display = "";
      hasResults = true;
    } else {
      blogPosts[i].style.display = "none";
    }
  }

  if (hasResults) {
    noResults.style.display = "none";
  } else {
    noResults.style.display = "flex";
  }
}