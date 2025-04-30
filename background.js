// This background script is kept minimal as our extension is simple
// It just logs when the extension is installed

chrome.runtime.onInstalled.addListener(() => {
  console.log('Random Content Generator extension installed!');
});
