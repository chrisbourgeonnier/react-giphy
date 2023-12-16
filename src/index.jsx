import '../assets/stylesheets/application.scss';
import { createRoot } from "react-dom/client";
import React from 'react';
import App from './components/App';

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
