// ---------------------------
// 🚀 API BASE URL
// ---------------------------
// GitHub Pages → Render backend
export const API_BASE_URL = "https://happyhomes.onrender.com/api";

// Helper for GET requests
export async function apiGet(path: string) {
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

// Helper for POST requests
export async function apiPost(path: string, data: any) {
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

// Helper for authenticated requests (Bearer token)
export async function apiAuth(path: string, token: string) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`AUTH ${path} failed with status ${response.status}`);
  }

  return response.json();
}
