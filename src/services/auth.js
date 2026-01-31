const API_BASE_URL = 'http://api.onepointup.site/v1/oauth2';

/**
 * Login with Google ID token
 * @param {string} idToken - Google ID token
 * @returns {Promise<{email: string, isRegister: boolean}>}
 */
export async function login(idToken) {
    const response = await fetch(`${API_BASE_URL}/google`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idToken }),
        credentials: 'include'
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Login failed: ${error}`);
    }

    return await response.json();
}

/**
 * Submit signup data
 * @param {Object} data - Signup data
 * @param {string} data.email
 * @param {string} data.nickname
 * @param {string} data.gender - 'male' or 'female'
 * @param {number} data.height
 * @param {number} data.weight
 * @returns {Promise<any>}
 */
export async function signup(data) {
    const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Signup failed: ${error}`);
    }

    return await response.json();
}
