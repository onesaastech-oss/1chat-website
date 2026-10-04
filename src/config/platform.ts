const trim = (value: string | undefined, fallback: string) =>
  (value || fallback).replace(/\/$/, "");

export const PLATFORM_URL = trim(process.env.REACT_APP_PLATFORM_URL, "https://app.onechatting.com");
export const LOGIN_URL = `${PLATFORM_URL}/login`;
export const REGISTER_URL = `${PLATFORM_URL}/register`;
export const API_DOCS_URL = trim(process.env.REACT_APP_API_DOCS_URL, "https://docs.onechatting.com");
