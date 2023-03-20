// import { EventEmitter } from "events";
// export default new EventEmitter();

function EventBus() {
  const subscriptions = {};
  this.subscribe = (eventType, callback) => {
    const id = Symbol("id");
    if (!subscriptions[eventType]) subscriptions[eventType] = {};
    subscriptions[eventType][id] = callback;
    return {
      unsubscribe: function unsubscribe() {
        delete subscriptions[eventType][id];
        if (
          Object.getOwnPropertySymbols(subscriptions[eventType]).length === 0
        ) {
          delete subscriptions[eventType];
        }
      },
    };
  };

  this.publish = (eventType, arg) => {
    if (!subscriptions[eventType]) return;
    console.log(
      subscriptions[eventType],
      eventType,
      arg,
      "subscriptions[eventType]"
    );
    Object.getOwnPropertySymbols(subscriptions[eventType]).forEach((key) =>
      subscriptions[eventType][key](arg)
    );
  };
}
export default new EventBus();
