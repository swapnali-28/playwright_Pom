export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.getByLabel("Username");
    this.password_textbox = page.getByLabel("Password");
    this.logn_button = page.getByRole("button", { name: "Login" });
  }

  async goToLoginPage(){

await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(Username, password) {
    await this.username_textbox.fill(Username);
    await this.password_textbox.fill(password);
    await this.logn_button.click();
  }
}
