
export const setCookie = (name,value,days) => {
   const expires = new Date()

   expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
   document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

