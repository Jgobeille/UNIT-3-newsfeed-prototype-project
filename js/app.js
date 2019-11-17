const $odd = $("a:odd");

const $secureLinks = $('a[href^="https://"]');

const $pdf = $('a[href$=".pdf"]');

const $checkbox = $(
  "<label><input type='checkbox'> Allow PDF downloads</label>"
);

$secureLinks.attr("target", "_blank");

// $odd.css("backgroundColor", "lightgrey");

$secureLinks.addClass("secure");
$pdf.addClass("pdf");

$pdf.on("click", function(e) {
  //check if checkbox has been checked
  if ($(":checked").length === 0) {
    //prevent download
    e.preventDefault();
    //alert the user
    alert("Please check the box to allow PDF downloads.");
  } else {
    //if zero checkboxes are checked
    $pdf.attr("download", true);
    //else allow the download
  }
});

$("#links").append($checkbox);

$("a").each(function() {
  const url = $(this).attr("href");
  $(this)
    .parent()
    .append(`(${url})`);
});
