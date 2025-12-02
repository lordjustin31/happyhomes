// src/api.ts

// ---------------------------
// 🚀 API BASE URL from Vite env
// ---------------------------
export const API_BASE_URL = import.meta.env.VITE_API_URL;

// ---------------------------
// Helper for GET requests
// ---------------------------
export async function apiGet<T = any>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`GET ${path} failed with status ${response.status}`);
  }

  return response.json();
}

// ---------------------------
// Helper for POST requests
// ---------------------------
export async function apiPost<T = any>(path: string, data: any): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`POST ${path} failed with status ${response.status}`);
  }

  return response.json();
}

// ---------------------------
// Helper for authenticated GET requests
// ---------------------------
export async function apiAuth<T = any>(path: string, token: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`AUTH ${path} failed with status ${response.status}`);
  }

  return response.json();
}
