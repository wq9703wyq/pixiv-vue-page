// function sendMessageToContentScript(message, callback) {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
//       if (callback) callback(response);
//     });
//   });
// }
// sendMessageToContentScript({ event: 'test', args: ['你好，我是popup！'] }, function (response) {
//   console.log('来自content的回复：' + response);

// });

class PopupSender {
  constructor() { }
  async getCurrentTab(callback) {
    // this.currentTab = await chrome.tabs.getCurrent(callback);
    this.currentTab = await chrome.tabs.query({ active: true, currentWindow: true });
    return this.currentTab;
  }
  async sendMsgToCurrentTab(event, msg, callback) {
    await this.getCurrentTab();
    let { id } = this.currentTab[0];
    const eventBody = { event, args: [...(msg || [])] }
    return chrome.tabs.sendMessage(id, eventBody, callback)
  }
}

const _popupSender = new PopupSender();

export default _popupSender