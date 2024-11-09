// main.jsx
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestUrl = 'https://github.com/mghhrn/FundApp/blob/main/public/manifest.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
);
