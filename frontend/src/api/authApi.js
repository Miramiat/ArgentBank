// src/api/authApi.js

// Fonction pour effectuer l'appel API de connexion
export const login = async (email, password) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};


