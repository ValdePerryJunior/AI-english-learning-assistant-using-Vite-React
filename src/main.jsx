import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from "./context/Themecontext.jsx";
import { SidebarProvider } from './context/Sidebarcontext.jsx';
import './index.css';
import App from './App.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key!");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider> 
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ClerkProvider>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
)
