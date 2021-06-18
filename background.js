let current_URL;

chrome.action.onClicked.addListener(load_archive);

function load_archive() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, tabs => {
        current_URL = tabs[0].url;
        let go_to = "https://web.archive.org/web/2/" + current_URL
        chrome.tabs.update({
            url: go_to
        });
    });
}
