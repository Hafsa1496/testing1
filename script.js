// Handles comments
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    // Add a comment
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from reloading the page

        // Get the input value
        const commentText = commentInput.value.trim();

        if (commentText) {
            // Create a new comment element
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.textContent = commentText;

            // Append the comment to the comments list
            commentsList.appendChild(comment);

            // Clear the input field
            commentInput.value = '';
        }
    });
});
