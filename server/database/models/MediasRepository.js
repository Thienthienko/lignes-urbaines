// Import de la classe AbstractRepository
const AbstractRepository = require("./AbstractRepository");

class MediasRepository extends AbstractRepository {
  constructor() {
    super({ table: "medias" });
  }

  async create(media) {
    const [result] = await this.database.query(
      `
      INSERT INTO ${this.table} (title, img)
      VALUES (?, ?)
    `,
      [media.title, media.img]
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

  async update(id, updatedFields) {
    const fields = Object.keys(updatedFields)
      .map((field) => `${field} = ?`)
      .join(", ");
    const values = Object.values(updatedFields);

    const [result] = await this.database.query(
      `
      UPDATE ${this.table}
      SET ${fields}
      WHERE id = ?
    `,
      [...values, id]
    );

    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = MediasRepository;
