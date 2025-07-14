import { saveSubscriptionData } from "./actions";

//initialize notification permission
export async function checkPermission() {
  const permissionState = Notification.permission;
  return permissionState;
};

export async function askPermission() {
  const permission = await Notification.requestPermission();
  if(permission === 'granted') {
    console.log('Notification permission granted.');
    subscribeToPush();
  } else {
    console.warn('Notification permission denied.');
  }
};

//push manager subscription
export async function subscribeToPush() {
  const registration = await navigator.serviceWorker.ready;
  const sub = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!),
  });
  const serializedSubscription = JSON.parse(JSON.stringify(sub));
  //add data to firestore via actions.ts
  await saveSubscriptionData(serializedSubscription);
};

//parsing base64 to Unit8array
function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

