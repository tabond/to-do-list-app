function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Add a list item!");
  } else {
    $("#list").append(li);
  }
  function crossout() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossout() {
    li.toggleClass("strike");
  });
  let crossOutButton = $("<crossOutButton>X</crossOutButton>");
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }
  $("#list").sortable();
}
