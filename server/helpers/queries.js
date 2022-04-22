const format = require('pg-format');

module.exports = (db) => ({
  getUserId(email) {
    const queryString = `
      SELECT *
      FROM users
      WHERE email = $1
    `;
    const queryParams = [email];
    return db.query(queryString, queryParams)
      .then(res => {
        return res.rows[0];
    });
  }, 

  insertUser(email) {
    const queryString = `
      INSERT INTO users (email)
      VALUES ($1)
    `;
    const queryParams = [email];
    return db.query(queryString, queryParams)
      .then(res => {
        return res.rows[0];
      });
  },

  insertTags(tags) {
    let values = '';
    let i = 0;
    while (i < tags.length - 1) {
      values += `(DEFAULT, '${tags[i]}'), `;
      i++;
    }
    values += `(DEFAULT, '${tags[i]}')`;
    const queryString = `
      INSERT INTO tags
      VALUES ${values}
      ON CONFLICT DO NOTHING
    `;
    return db.query(queryString);
  },

  insertUsersTags(userId, tags) {
    const userIdWithTags = tags.map(tag => [userId, tag]);
    const queryString = format(`
      INSERT INTO users_tags
      VALUES %L
      ON CONFLICT DO NOTHING
    `, userIdWithTags);
    return db.query(queryString)
      .then(res => {
        return res.rows[0];
    });
  },

  getUserInterests(email) {
    const queryString = `
      SELECT users.id, email, label
      FROM users
      JOIN users_interests ON users.id = users_interests.user_id
      JOIN interests ON interest_id = interests.id
      WHERE email = $1
    `;
    const queryParams = [email];
    return db.query(queryString, queryParams)
      .then(res => {
        return res.rows;
    });
  },

  getUserTags(email) {
    const queryString = `
      SELECT users.id, email, label
      FROM users
      JOIN users_tags ON users.id = users_tags.user_id
      JOIN tags ON tag_id = tags.id
      WHERE email = $1
    `;
    const queryParams = [email];
    return db.query(queryString, queryParams)
      .then(res => {
        return res.rows;
    });
  }
});