export const optOutPlausible = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('plausible_ignore', 'true');
  }
};

export const optInPlausible = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('plausible_ignore');
  }
};

export const isOptedOutPlausible = (): boolean => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('plausible_ignore') === 'true';
  }
  return false;
};
