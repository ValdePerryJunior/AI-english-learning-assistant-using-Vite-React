
# AI English Learning assistant using Vite+React

This project is AI English Learning assistant app using AI power.
## Acknowledgements

 - [Vite](https://vite.dev/) is a modern build tool and development server designed to enhance the web development experience. It offers several advantages over traditional bundlers like Webpack, particularly in terms of speed and efficiency.
 - [Clerk](https://dashboard.clerk.com/) is a comprehensive user authentication and management platform that streamlines the integration of secure and customizable authentication features into web applications. By leveraging Clerk, developers can enhance security, improve user experience, and accelerate development processes.

## Authors

- [ValdePerryJunior](https://github.com/ValdePerryJunior)


## Run Locally

Clone the project

```bash
  git clone https://github.com/ValdePerryJunior/AI-app-using-Vite-React.git
```

Go to the project directory

```bash
  cd AI-app-using-Vite-React
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Documentation

Vite+React Project Setup
```bash
  npm create vite@latest [project-name] -- --template react
```

## Clerk usage

```javascript
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

```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

`VITE_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY`

`VITE_SAPLING_API_KEY='YOUR_SAPLING_AI_API_KEY'`

`VITE_GOOGLE_API_KEY='YOUR_GOOGLE_API_KEY'`
## Support

For support, give star to project.

