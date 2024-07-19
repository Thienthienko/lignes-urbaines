// Import de la classe AbstractRepository
const AbstractRepository = require("./AbstractRepository");

class CreationsRepository extends AbstractRepository {
  constructor() {
    super({ table: "creations" });
  }

  async create(creation) {
    const [result] = await this.database.query(
      `
      INSERT INTO ${this.table} (title, description, img, dancer)
      VALUES (?, ?, ?, ?)
    `,
      [creation.title, creation.description, creation.img, creation.dancer]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async readByUserId(userId) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );

    return rows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = CreationsRepository;
