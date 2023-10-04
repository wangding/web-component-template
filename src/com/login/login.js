import './login.css';

class LoginBox extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.#html;
    this.#query();

    this.$form.onchange = () => {
      this.$btnLogin.disabled = false;
    };

    this.$form.onsubmit = (e) => {
      const userName = this.$userName.value,
            password = this.$password.value;

      this.$userName.value = '';
      this.$password.value = '';

      e.preventDefault();

      const evt = new CustomEvent('login', {
        detail: { userName, password },
        bubbles: true
      });

      this.dispatchEvent(evt);
    };
  }

  #query() {
    this.$ = this.querySelector;
    this.$userName = this.$('input[name="userName"]'),
    this.$password = this.$('input[name="password"]');
    this.$btnLogin = this.$('input[type="submit"]');
    this.$form = this.$('form');
  }

  #html = ''
    + '<h1>登录</h1>'
    + '<form>'
      + '<label>账户：</label>'
      + '<input name="userName" type="text" autofocus required>'
      + '<span class="required">*</span><br>'
      + '<label>密码：</label>'
      + '<input name="password" type="password" autocomplete="off" required>'
      + '<span class="required">*</span><br>'
      + '<label>&nbsp;</label>'
      + '<input type="submit" value="登 录" disabled>'
    + '</form>';
}

export default LoginBox;
