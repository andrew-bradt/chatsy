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

  addUser(email) {
    const queryString = `
      INSERT INTO users (email)
      VALUES ($1)
      ON CONFLICT (email) DO UPDATE
        SET email=EXCLUDED.email
      RETURNING *
    `;
    const queryParams = [email];
    return db.query(queryString, queryParams)
      .then(res => {
        return res.rows[0];
      });
  },

  updateInterests(interests) {
    let values = '';
    let i = 0;
    while (i < interests.length - 1) {
      values += `(DEFAULT, '${interests[i]}'), `;
      i++;
    }
    values += `(DEFAULT, '${interests[i]}')`;
    const queryString = `
      INSERT INTO interests
      VALUES ${values}
      ON CONFLICT (label) DO UPDATE
        SET label=EXCLUDED.label
      RETURNING *
    `;
    return db.query(queryString)
      .then(res => {
        return res.rows;
      });
  },

  updateTags(tags) {
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
      ON CONFLICT (label) DO UPDATE
        SET label=EXCLUDED.label
      RETURNING *
    `;
    return db.query(queryString)
      .then(res => {
        return res.rows;
      });
  },

  updateUsersTags(userId, tags) {
    const userIdWithTags = tags.map(tag => [userId, tag]);
    const queryString = format(`
      INSERT INTO users_tags
      VALUES %L
      ON CONFLICT (user_id, tag_id) DO UPDATE
        SET user_id=EXCLUDED.user_id, tag_id=EXCLUDED.tag_id
      RETURNING *
    `, userIdWithTags);
    return db.query(queryString)
      .then(res => {
        return res.rows;
    });
  },

  updateUsersInterests(userId, interests) {
    const userIdWithInterests = interests.map(interest => [userId, interest]);
    const queryString = format(`
      INSERT INTO users_interests
      VALUES %L
      ON CONFLICT (user_id, interest_id) DO UPDATE
        SET user_id=EXCLUDED.user_id, interest_id=EXCLUDED.interest_id
      RETURNING *
    `, userIdWithInterests);
    return db.query(queryString)
      .then(res => {
        return res.rows;
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