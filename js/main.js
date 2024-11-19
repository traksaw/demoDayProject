  // Add a new recording
  function addRecording() {
    const recordingsList = document.getElementById("recordingsList");
    const newRecording = document.createElement("div");
    newRecording.className = "recording-item";
    newRecording.innerHTML = `
        <span>New Recording - BPM: 100, Key: A Minor</span>
        <button class="button red" onclick="deleteRecording(this)">Delete</button>
    `;
    recordingsList.appendChild(newRecording);
}

// Delete a recording
function deleteRecording(button) {
    const recordingItem = button.parentElement;
    recordingItem.remove();
}

// Add a new comment
function addComment() {
    const commentText = document.getElementById("newComment").value;
    if (commentText.trim() === "") {
        alert("Comment cannot be empty!");
        return;
    }
    const commentsList = document.getElementById("commentsList");
    const newComment = document.createElement("div");
    newComment.className = "comment-item";
    newComment.innerHTML = `<span>"${commentText}"</span>`;
    commentsList.appendChild(newComment);
    document.getElementById("newComment").value = ""; // Clear the textarea
}

// Share the song
function shareSong() {
    const email = document.getElementById("shareEmail").value;
    if (!email.trim()) {
        alert("Please enter an email address!");
        return;
    }
    alert(`Song has been shared with ${email}`);
    document.getElementById("shareEmail").value = ""; // Clear the input field
}



//routes will go here

// get - listen to a song

//post - post a new song

//favorite and sort new songs 

//delete new songs 