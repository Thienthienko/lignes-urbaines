// Import de la classe AbstractRepository
const AbstractRepository = require("./AbstractRepository");

class CreationsRepository extends AbstractRepository {
  constructor() {
    super({ table: "creations" });
  }

  async create(creation) {
    const [result] = await this.database.query(
      `
      INSERT INTO ${this.table} (title, description, img, dancer_name)
      VALUES (?, ?, ?, ?)
    `,
      [creation.title, creation.description, creation.img, creation.dancer_name]
    );

    return result.insertId;
  }

  // Les opérations de lecture

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
}
//   // Mise à jour d'une création
//   async update(id, updatedFields) {
//     const fields = Object.keys(updatedFields)
//       .map((field) => `${field} = ?`)
//       .join(", ");
//     const values = Object.values(updatedFields);

//     const [result] = await this.database.query(
//       `
//       UPDATE ${this.table}
//       SET ${fields}
//       WHERE id = ?
//     `,
//       [...values, id]
//     );

//     return result.affectedRows;
//   }

//   // Suppression d'une création
//   async delete(id) {
//     const [result] = await this.database.query(
//       `DELETE FROM ${this.table} WHERE id = ?`,
//       [id]
//     );

//     return result.affectedRows;
//   }
// }

module.exports = CreationsRepository;
