import ReactGA from 'react-ga';

export const initGA = () => {
  // console.log('GA init');
  ReactGA.initialize('UA-128217401-1');
};

export const logPageView = () => {
  if (process.env.NODE_ENV === 'development') return null;

  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '', label, value) => {
  if (process.env.NODE_ENV === 'development') return null;

  if (category && action) {
    // console.log(`category: ${category}, action: ${action}, label: ${label}, value: ${value}`);
    ReactGA.event({
      category, action, label, value,
    });
  }
};
