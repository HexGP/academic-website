import { browser } from '$app/environment';

// Add export here
export type Theme = 'light' | 'dark';

export const getTheme = (): Theme => {
  if (!browser) return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

export const setTheme = (theme: Theme) => {
  if (!browser) return;
  
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
};

export const toggleTheme = (): Theme => { // Add return type
  const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
};