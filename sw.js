self.addEventListener('notificationclick', function(event) {

  // here data you access from event using event.notification.data
   console.log('On notification click: ', event.notification.tag);
 
 });