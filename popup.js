function handleClick(event) {
  event.target.parentNode.remove();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.title && request.playlistLink) {
    const div = document.createElement('div');
    div.setAttribute('class', 'playlist-item');

    const newElement = document.createElement('a');
    newElement.setAttribute('class', 'playlist-title');
    newElement.text = request.title;
    newElement.href = request.playlistLink;

    const deleteButton = document.createElement('img');
    deleteButton.setAttribute('class', 'delete-icon');
    deleteButton.setAttribute('src', 'images/delete.svg');
    deleteButton.setAttribute('alt', 'Delete Icon');
    deleteButton.addEventListener('click', handleClick);
    div.appendChild(newElement);
    div.appendChild(deleteButton);

    document.querySelector('body').appendChild(div);
    sendResponse({ status: 'done' });
  }
});
