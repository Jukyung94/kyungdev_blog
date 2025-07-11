'use client';

export function getCookie(name: string) {
  let matches;
  if(process.browser) {
    matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)',
      ),
    );
  }
  return matches ? decodeURIComponent(matches[1]) : undefined;
}