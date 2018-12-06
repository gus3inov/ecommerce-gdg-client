export const getAccessToken = () => localStorage.getItem('access-token');

export const setAccessToken = (accessToken: string) => localStorage.setItem('access-token', accessToken);

export const removeAccessToken = () => localStorage.removeItem('access-token');
