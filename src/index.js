import App from './app'
import './style.css'
import * as ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";

// ReactDOM.render(<App />, document.querySelector("#root"))
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)