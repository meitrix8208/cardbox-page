import { withBase } from "ufo";
const { baseURL } = useRuntimeConfig().app;
export const getURL = (p: string) => withBase(p, baseURL);
