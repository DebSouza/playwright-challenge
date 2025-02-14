class Utils {
  constructor(page) {
    this.page = page;
    this.pageHeading = page.locator(".page-heading");
    this.signOutButton = page.locator(".logout");
  }

  async signOut() {
    await this.signOutButton.click();
  }

  async userData() {
    const email = "atproject@test.com";
    const password = "a1b2c3";
    const userFirstName = "AT";
    const userLastName = "Project";
    return {
      email,
      userFirstName,
      userLastName,
      password,
    };
  }

  async generateRandomUserData() {
    const randomInfo = this.generateRandomString(8);
    const firstName = `User${randomInfo}`;
    const lastName = `Test${randomInfo}`;
    const email = `${lastName}-${firstName}@test.com`;
    const password = randomInfo;

    return {
      email,
      firstName,
      lastName,
      password,
    };
  }

  generateRandomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }
}

module.exports = { Utils };
