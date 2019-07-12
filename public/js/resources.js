$(document).ready(function () {

    var resourceContainer = $(".resource-container");
    var resourceCategorySelect = $("#category");
    $(document).on("click", "button.delete", handleResourceDelete);
    $(document).on("click", "button.edit", handleResourceEdit);
    // Variable to hold our posts
    var notes;

    // The code below handles the case where we want to get blog posts for a specific author
    // Looks for a query param in the url for author_id
    var url = window.location.search;
    var userId;
    if (url.indexOf("?user_id=") !== -1) {
        userId = url.split("=")[1];
        getResource(userId);
    }
    // If there's no authorId we just get all posts as usual
    else {
        getResources();
    }


    // This function grabs posts from the database and updates the view
    function getResources(user) {
        userId = user || "";
        if (userId) {
            userId = "/?user_id=" + userId;
        }
        $.get("/api/resources" + userId, function (data) {
            console.log("Resources", data);
            resources = data;
            if (!resources || !resources.length) {
                displayEmpty(user);
            }
            else {
                initializeRows();
            }
        });
    }

    // This function does an API call to delete posts
    function deleteResource(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/resources/" + id
        })
            .then(function () {
                getResources(resourceCategorySelect.val());
            });
    }

    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
        resourceContainer.empty();
        var resourcesToAdd = [];
        for (var i = 0; i < notes.length; i++) {
            resourcesToAdd.push(createNewRow(resources[i]));
        }
        rescourceContainer.append(resourcesToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(resource) {
        var formattedDate = new Date(resource.createdAt);
        formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
        var newResourceCard = $("<div>");
        newResourceCard.addClass("card");
        var newResourceCardHeading = $("<div>");
        newResourceCardHeading.addClass("card-header");
        var deleteBtnResource = $("<button>");
        deleteBtnResource.text("x");
        deleteBtnResource.addClass("delete btn btn-danger");
        var editBtnResource = $("<button>");
        editBtnResource.text("EDIT");
        editBtnResource.addClass("edit btn btn-info");
        var newResourceTitle = $("<h2>");
        var newResourceDate = $("<small>");
        var newResourceUser = $("<h5>");
        newResourceUser.text("Written by: Author name display is in next activity when we learn joins!");
        newResourceUser.css({
            float: "right",
            color: "blue",
            "margin-top":
                "-10px"
        });
        var newResourceCardBody = $("<div>");
        newResourceCardBody.addClass("card-body");
        var newResourceBody = $("<p>");
        newResourceTitle.text(resource.title + " ");
        newResourceBody.text(resource.body);
        newResourceDate.text(formattedDate);
        newResourceTitle.append(newResourceDate);
        newResourceCardHeading.append(deleteBtnResource);
        newResourceCardHeading.append(editBtnResource);
        newResourceCardHeading.append(newResourceTitle);
        newResourceCardHeading.append(newResourceUser);
        newResourceCardBody.append(newResourceBody);
        newResourceCard.append(newResourceCardHeading);
        newResourceCard.append(newResourceCardBody);
        newResourceCard.data("resource", resource);
        return newResourceCard;
    }

    // This function figures out which post we want to delete and then calls deletePost
    function handleResourceDelete() {
        var currentResource = $(this)
            .parent()
            .parent()
            .data("resource");
        deleteResource(currentResource.id);
    }

    // This function figures out which post we want to edit and takes it to the appropriate url
    function handleResourceEdit() {
        var currentResource = $(this)
            .parent()
            .parent()
            .data("resource");
        window.location.href = "/cms?resource_id=" + currentResource.id;
    }

    // This function displays a message when there are no posts
    function displayEmpty(id) {
        var query = window.location.search;
        var partial = "";
        if (id) {
            partial = " for User #" + id;
        }
        resourceContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({ "text-align": "center", "margin-top": "50px" });
        messageH2.html("No Notes yet" + partial + ", navigate <a href='/cms" + query +
            "'>here</a> in order to get started.");
        resourceContainer.append(messageH2);
    }

});
 * /