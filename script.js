// JavaScript function to handle the post action
document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('postButton');
    const textarea = document.getElementById('discussionTextarea');

    // Event listener for Post button click
    postButton.addEventListener('click', () => {
        const postContent = textarea.value.trim();

        if (postContent) {
            alert("Your post has been successfully submitted!");
            textarea.value = "";  // Clear the textarea after submission
        } else {
            alert("Please write something before posting.");
        }
    });
});
