```jsx
class User {
  constructor(userData, peerId) {
    userId = Number,
    peerID = Number,
    email = String,
    interests = Set {
      String
    }
};

class ActiveUsers {
  constructor() {
    users = {
      userId: User
    }
  }
  
  removeUser(userId),
  addUser(userData, peerId),
  getUserById(userId),
  getUserBySocketId (socketId)
};

class Call {
  constructor(...User) {
    users = [user]
    userIds = [userId],
    sharedInterests = [String]
  }
  start(io)
}

class Lobby {
  constructor() {
    this.usersByInterest = {
      interest: Set {
        userId
      }
    };
  };

  addUser(user)
  removeUser(user)
  addInterest(interest, userId)
  removeUserInterest(interest, userId)
}
```