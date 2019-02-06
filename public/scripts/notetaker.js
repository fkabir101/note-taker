// get notes on load
$(document).ready(function(){
  $.ajax({
    url: "/api",
    method: "GET"
  }).then(function(data){
    data.forEach(function(index){
      const listItem = $("<li class='list-group-item'>");

      listItem.append(`<h4>${index.id}. ${index.title}</h4>`);
      listItem.append(`<p>${index.note.substring(0, 35)}...</p>`);
      listItem.append(`<button type="button" class="btn btn-outline-danger delete">Delete</button>`);

      listItem.attr("id", index.id);

      $("#list").append(listItem);
    })
  })
});

// function to run to display single note
$(".list-group").on("click",".list-group-item", function(event){
  event.preventDefault();
  id = ($(this).attr('id'));
  $.ajax({
    url: `/api/${id}`,
    method: "GET",
  }).then(function(data){
    const noteDiv = $(`<div>`)
    const heading = $(`<h2>${data[0].id}. ${data[0].title}</h2>`)
    const note = $(`<p>${data[0].note}</p>`);
    noteDiv.append(heading);
    noteDiv.append(note);

    $("#display").html(noteDiv);
  });
});

// used to delete note
$(".list-group").on("click",".delete", function(event){
  event.preventDefault();
  id = ($(this).parent().attr('id'));
  $.ajax({
    url: `/api/${id}`,
    method: "DELETE",
  }).then(function(data){
    if(data){
      location.reload();
    }
  });
});

