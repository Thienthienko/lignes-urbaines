const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  async run() {
    const users = [
      {
        pseudo: "admin",
        email: "admin@admin.com",
        hashed_password: "admin123",
        role: "admin",
      },
      {
        pseudo: "user1",
        email: "user1@example.com",
        hashed_password: "user123",
        role: "user",
      },
      {
        pseudo: "user2",
        email: "user2@example.com",
        hashed_password: "user456",
        role: "user",
      },
    ];

    // Utilisez Promise.all pour insérer tous les utilisateurs de manière asynchrone
    await Promise.all(
      users.map(async (user) => {
        await this.insert(user);
      })
    );
  }
}

module.exports = UserSeeder;
