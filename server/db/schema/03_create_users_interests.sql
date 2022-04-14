DROP TABLE IF EXISTS users_interests CASCADE;

CREATE TABLE users_interests (
  user_id INT NOT NULL REFERENCES users(id)  ON DELETE CASCADE,
  interest_id INT NOT NULL REFERENCES interests(id) ON DELETE CASCADE,
  PRIMARY KEY(user_id, interest_id)
);