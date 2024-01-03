// api/user.js
const PROFILE_API_URL = 'http://localhost:3001/api/v1/user/profile';

export const getUserProfile = async (token) => {
  try {
    const response = await fetch(PROFILE_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du profil utilisateur');
    }

    const userProfile = await response.json();
    return userProfile;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur :', error);
    throw error;
  }
};
