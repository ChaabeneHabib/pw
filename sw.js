self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Notification Support';
  const options = {
      body: 'erreur x résolu'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});