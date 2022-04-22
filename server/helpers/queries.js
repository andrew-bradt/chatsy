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