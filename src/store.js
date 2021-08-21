import { writable } from 'svelte-persistent-store/local.js';

export const name = writable('name', "Dashclicker");
export const editorSpeed = writable('editorSpeed', 1);
