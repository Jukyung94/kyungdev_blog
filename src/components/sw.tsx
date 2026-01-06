'use client';

import { askPermission, checkPermission, subscribeToPush } from "@/lib/notification";
import { getCookie } from "@/lib/utils";
import { useEffect } from "react";
import { analytics } from "../../firebase.config";

//service worker registration
export default function ServiceWorker() {
  const user = getCookie('user');
  useEffect(() => {
    if('serviceWorker' in navigator && 'PushManager' in window) {
      registration();
    }
    if(window) {
      analyticsRun();
    }
  }, []);

  async function analyticsRun() {
    const res = await analytics
    // console.log('Firebase Analytics supported:', res);
  }

  async function registration() {
    const check = await checkRegistration();
    if(!check) {
      registerServiceWorker();
    } else {
      console.log('service worker is already activated', check);
      if(user === 'Jukyung') {
        const permission = await checkPermission();
        if(permission === 'granted') {
          subscribeToPush();
        } else {
          askPermission()
        }
      }
    }
  }

  //check is registerd
  async function checkRegistration() {
    const res = await navigator.serviceWorker.getRegistration()
    // console.log(res)
    return res?.active?.state
  };

  //register service worker
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
  };

  return null;
};