$(document).ready(function () {
    /* global moment */

    // blogContainer holds all of our posts
    var noteContainer = $(".note-container");
    var noteCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleNoteDelete);
    $(document).on("click", "button.edit", handleNoteEdit);
    // Variable to hold our posts
    var notes;

    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var userId;
    if (url.indexOf("?user_id=") !== -1) {
        userId = url.split("=")[1];
        getNotes(userId);
    }
    // If there's no authorId we just get all posts as usual
    else {
        getNotes();
    }


    // This function grabs posts from the database and updates the view
    function getNotes(user) {
        userId = user || "";
        if (userId) {
            userId = "/?user_id=" + userId;
        }
        $.get("/api/notes" + userId, function (data) {
            console.log("Notes", data);
            notes = data;
            if (!notes || !notes.length) {
                displayEmpty(user);
            }
            else {
                initializeRows();
            }
        });
    }

    // This function does an API call to delete posts
    function deleteNote(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/notes/" + id
        })
            .then(function () {
                getNotes(noteCategorySelect.val());
            });
    }

    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
        noteContainer.empty();
        var notesToAdd = [];
        for (var i = 0; i < notes.length; i++) {
            notesToAdd.push(createNewRow(notes[i]));
        }
        noteContainer.append(notesToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(note) {
        var formattedDate = new Date(note.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        var newNoteCard = $("<div>");
        newNoteCard.addClass("card");
        var newNoteCardHeading = $("<div>");
        newNoteCardHeading.addClass("card-header");
        var deleteBtnNote = $("<button>");
        deleteBtnNote.text("x");
        deleteBtnNote.addClass("delete btn btn-danger");
        var editBtnNote = $("<button>");
        editBtnNote.text("EDIT");
        editBtnNote.addClass("edit btn btn-info");
        var newNoteTitle = $("<h2>");
        var newNoteDate = $("<small>");
        var newNoteUser = $("<h5>");
        newNoteUser.text("Written by: Author name display is in next activity when we learn joins!");
        newNoteUser.css({
            float: "right",
            color: "blue",
            "margin-top":
                "-10px"
        });
        var newNoteCardBody = $("<div>");
        newNoteCardBody.addClass("card-body");
        var newNoteBody = $("<p>");
        newNoteTitle.text(note.title + " ");
        newNoteBody.text(note.body);
        newNoteDate.text(formattedDate);
        newNoteTitle.append(newNoteDate);
        newNoteCardHeading.append(deleteBtnNote);
        newNoteCardHeading.append(editBtnNote);
        newNoteCardHeading.append(newNoteTitle);
        newNoteCardHeading.append(newNoteUser);
        newNoteCardBody.append(newNoteBody);
        newNoteCard.append(newNoteCardHeading);
        newNoteCard.append(newNoteCardBody);
        newNoteCard.data("note", note);
        return newNoteCard;
    }

    // This function figures out which post we want to delete and then calls deletePost
    function handleNoteDelete() {
        var currentNote = $(this)
            .parent()
            .parent()
            .data("note");
        deleteNote(currentNote.id);
    }

    // This function figures out which post we want to edit and takes it to the appropriate url
    function handleNoteEdit() {
        var currentNote = $(this)
            .parent()
            .parent()
            .data("note");
        window.location.href = "/cms?note_id=" + currentNote.id;
    }

    // This function displays a message when there are no posts
    function displayEmpty(id) {
        var query = window.location.search;
        var partial = "";
        if (id) {
            partial = " for User #" + id;
        }
        noteContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No Notes yet" + partial + ", navigate <a href='/cms" + query +
            "'>here</a> in order to get started.");
        noteContainer.append(messageH2);
    }

});
