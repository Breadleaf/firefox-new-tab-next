chrome.commands.onCommand.addListener((command) => {
  if (command === "openNewTabAfterCurrent") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.tabs.create({
        index: currentTab.index + 1,
        active: true
      });
    });
  }
});