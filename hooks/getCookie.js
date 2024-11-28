

// eslint-disable-next-line no-unused-vars
export const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
}