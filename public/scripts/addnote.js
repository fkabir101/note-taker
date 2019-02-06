$("#add").on("click", function(event){
  event.preventDefault();
  const form = $("<form>");
  //create title div
  const titleDiv = $(`<div class = "form-group">`);
  titleDiv.append(`<label for="titleInput">Title</label>`);
  titleDiv.append(`<input type="text" class="form-control" id="titleInput" placeholder="Title">`);

  // create note div
  const noteDiv = $(`<div class = "form-group">`);
  noteDiv.append(`<label for="noteInput">Note</label>`);
  noteDiv.append(`<input type="text" class="form-control" id="noteInput" placeholder="Note">`);

  //create button
  const addButton = $(`<button type="button" class="btn btn-outline-primary" id = "add">Add Note</button>`);

  //append form to page
  form.append(titleDiv);
  form.append(noteDiv);
  form.append(addButton);
  $("#display").html(form);
});

$("#display").on("click","#add", function(event){
  event.preventDefault();
  const noteData = {
    title : $("#titleInput").val().trim(),
    note : $("#noteInput").val().trim()
  }
  $.ajax({
    url: "/api",
    method: "POST",
    data: noteData
  }).then(function(data) {
    $("#display").html("");
    if(data){
      location.reload();
    }
  });
});