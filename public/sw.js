self.addEventListener('push', (event) => {
  console.log('Push event received:', event);
  console.log(event.data.text());

  event.waitUntil(
    self.registration.showNotification('push notification', {
      body: event.data.text(),
      icon: 'images/new-notification.png',
      tag: 'simple-push-demo-notification',
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.preventDefault();
  console.log('Notification clicked:', event);
  clients.openWindow('https://dev-blog-omega-nine.vercel.app/');
});