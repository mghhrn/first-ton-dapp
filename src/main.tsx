// main.jsx
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const manifestUrl = 'https://mghhrn.github.io/first-ton-dapp/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <App />
    </TonConnectUIProvider>
);
