export const registerServiceWorker = async () => {
 const registration = await navigator.serviceWorker.register('/sw.js', {
   scope: '/',
   updateViaCache: 'none',
  });
  const  sub = await registration.pushManager.getSubscription();
  return sub;
}