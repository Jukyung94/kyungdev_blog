self.addEventListener('push', (event) => {
  console.log('Push event received:', event);
  console.log(event.data.text());

  if(event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'new comment added',
      icon: data.icon || '/icon-96.png',
      badge: data.badge || '/icon-96.png',
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      }
    }
    event.waitUntil(self.registration.showNotification(data.title || 'New Notification', options));
  };
  // console.log(event);
});

self.addEventListener('notificationclick', (event) => {
  event.preventDefault();
  console.log('Notification clicked:', event);
  clients.openWindow('https://dev-blog-omega-nine.vercel.app/');
});