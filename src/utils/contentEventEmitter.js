export default class EventEmitter {
  constructor() {
    this.eventList = [];
  }

  on(event, callback) {
    (this.eventList[event] || (this.eventList[event] = [])) &&
      this.eventList[event].push(callback);
  }

  emit(event, args, sender) {
    const fnList = this.eventList[event] || [];
    if (!fnList.length) {
      return false;
    }
    return Promise.all(fnList.map((fn) => fn(args, sender)));
  }
}
