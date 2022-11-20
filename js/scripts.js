// function newitem() {}

// let input = $("input");
// input.parent(); // Get the parent element
// input.children(); // Get all children
// input.closest(".container"); // Go up the hierarchy of parents until the selector matches
// input.siblings();

// li.on("click", function () {
//   li.addclass("strike");
// });

// $("body").append(newElement);

// $("input").each(function (i) {
//   let inputValue = $(this).val();
//   let inputName = $(this).attr("name");
//   if (inputValue().length < 1) {
//     console.log("Please fill out the" + inputName + " field");
//   }
// });

// inputs.get(0);

// $("input").on("click", function (event) {});
// $("input").off("click");

// li.addClass("delete");

//////////////////////////////////////
function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Add a list item!");
  } else {
    $("#list").appendChild(li);
  }

  li.on("dblclick", function () {
    li.addClass("strike");
  });
  let crossOutButton = $('<Button class="crossOutButton">X</button>');
  li.appendChild(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }
  $("#list").sortable();
}
