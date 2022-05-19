chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.title && request.playlistLink) {
    const newElement = document.createElement('a');
    newElement.text = request.title;
    newElement.href = request.playlistLink;
    newElement.setAttribute('id', 'playlist');

    document.querySelector('body').appendChild(newElement);
    sendResponse({ status: 'done' });
  }
});
