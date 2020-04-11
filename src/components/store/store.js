import { writable, readable } from "svelte/store";
export const count = writable(0);
export const base_url = readable(new Date(), function (set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return () => clearInterval(interval);
});
