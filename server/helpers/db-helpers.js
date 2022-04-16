module.exports = (db) => ({
  getUserId(email) {
    const queryString = `
    SELECT *
    FROM users
    WHERE email = $1
  `;
  const queryParams = [email];
  return db.query(queryString, queryParams)
    .then(res => console.log(res.rows));
  }
});