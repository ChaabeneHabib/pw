self.addEventListener('push', function(event) {
  event.waitUntil( runtime.register().then(registration => {
    registration.showNotification("Hello, World");
}))
 });