import LoginBox from './com/login/login.js';
import './css/app.css';

customElements.define('login-box', LoginBox);
document.body.innerHTML = '<login-box></login-box>';
