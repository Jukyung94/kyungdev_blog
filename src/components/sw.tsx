'use client';

import { subscribe } from "@/lib/actions";
import { useEffect, useState } from "react";

export default function ServiceWorker() {
  const [isSupported, setIsSupported] = useState(false);
  // const [subscription, setSubscription] = useState<PushSubscription | null>(null);

  useEffect(() => {
    if('serviceWorker' in navigator && 'PushManager' in window) {
      setIsSupported(true);
      registerServiceWorker();
      askPermission();
    }
  }, []);

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

  async function registerServiceWorker() {
    return await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    }).then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
      return registration;
    }).catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
  }

  async function askPermission() {
    const permission = await Notification.requestPermission();
    if(permission === 'granted') {
      console.log('Notification permission granted.');
      subscribeToPush();
    } else {
      console.warn('Notification permission denied.');
    }
  }


  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!),
    });
    // setSubscription(sub);
    const serializedSubscription = JSON.parse(JSON.stringify(sub));
    await subscribe(serializedSubscription)
  };
  if(!isSupported) {
    console.warn('Push notifications are not supported in this browser.');
  }
  return null;
};