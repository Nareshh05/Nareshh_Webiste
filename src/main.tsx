import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Error logging
const logError = (error: Error) => {
  const loadingElement = rootElement.querySelector('.loading');
  if (loadingElement instanceof HTMLElement) {
    loadingElement.textContent = 'Error loading application. Check console for details.';
    loadingElement.style.color = '#ff6b6b';
  }
  console.error('Application Error:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
};

// Wrap the entire app in error boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    logError(error);
  }

  render() {
    if ((this.state as { hasError: boolean }).hasError) {
      return null;
    }
    return this.props.children;
  }
}

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  logError(error as Error);
}
