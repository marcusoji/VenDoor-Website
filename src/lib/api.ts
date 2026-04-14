const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const getToken = () => localStorage.getItem("vendoor_token");

const request = async (path: string, options: RequestInit = {}) => {
  const token = getToken();
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

export const registerUser  = (body: object) => request("/api/auth/register", { method: "POST", body: JSON.stringify(body) });
export const loginUser     = (body: object) => request("/api/auth/login",    { method: "POST", body: JSON.stringify(body) });
export const getMe         = ()             => request("/api/auth/me");
export const registerVendor = (body: object) => request("/api/vendors",      { method: "POST", body: JSON.stringify(body) });

export const uploadImage = async (file: File, folder = "general") => {
  const token = getToken();
  const form = new FormData();
  form.append("image", file);
  const res = await fetch(`${BASE_URL}/api/upload/image?folder=${folder}`, {
    method: "POST",
    headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    body: form,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Upload failed");
  return data;
};