(() => {
  function handleButtonClick(event) {
    const parentNode = event.target.parentNode;
    const title = parentNode.querySelector(
      'span#video-title.style-scope.ytd-playlist-renderer'
    ).title;
    const playlistLink = parentNode.querySelector(
      'a.yt-simple-endpoint.style-scope.ytd-playlist-renderer'
    ).href;

    chrome.runtime.sendMessage({ title, playlistLink }, (response) => {
      if (!window.chrome.runtime.lastError) {
        // message processing code goes here
        console.log(response.status);
      } else {
        // error handling code goes here
        console.log('error!');
      }
    });
    // console.log(title, playlistLink);
  }

  const main = () => {
    const playlists = Object.values(
      document.querySelectorAll('div#content.style-scope.ytd-playlist-renderer')
    );

    for (const div of playlists) {
      const btn = document.createElement('div');
      btn.setAttribute('id', 'add-button');
      btn.innerText = 'Add Playlist';
      btn.addEventListener('click', handleButtonClick);
      div.appendChild(btn);
    }
  };

  const timeoutId = setTimeout(main, 3000);
  //   clearTimeout(timeoutId);
})();

/*
   "page_action": {
        "default_icon" : {
            "16": "./images/icon.png",
            "48": "./images/icon.png",
            "128": "./images/icon.png"
        }
    },
*/
