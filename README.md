# Chatsy
A web application for enabling video and text chat between random users based on their interests.

## Authors
[Andrew Bradt](https://github.com/andrew-bradt), [Roy Liu](https://github.com/Roy7384)

## Screenshots

### Lobby
!["while-matching"](docs/while-matching.png)

### Connected
!["in-chat"](docs/in-chat.png)

### Logged Out
!["landing-page"](/docs/landing-page.png)

### Login
<p align="center">
  <img src="/docs/login-demo.gif" width='750'/>
</p>

## Directions

[Visit the application](https://chatsy-client2.herokuapp.com/) and enter one of the following email addresses into the *Email Address* field and click *Sign In*:
  - <span>rick.sandchez</span>@gmail.com
  - <span>lisa.simpson</span>@gmail.com
  - <span>link</span>@yahoo.com
  - <span>simon_bel123</span>@mail.ca
  - <span>all_might</span>@academia.jp
  - <span>mario</span>@mushroomkindom.jp
  - <span>test1</span>@test.com
  - <span>test2</span>@test.com
  - <span>test3</span>@test.com

*Disclaimer: This app is hosted using free dynamos on Heroku and may be in a sleep state when you first navigate to the application or sign in. This may initially impact loading times at these stages.*

## Features
  - Logging in with a gmail account via Oauth 2.0
  - Automatically profile users by interest by leveraging Meaning Cloud's Natural Language Processing API
  - Utilize the Youtube Data API to obtain a keyword list from a user's liked videos to use as an input to the NLP API
  - Establish live stream and text sessions between users who have common interests
  - Toggling whether a particular interest will be used in the matching algorithm
  - Repeatedly attempting to connect users waiting in the lobby for a peer
  - Back-to-Back pairing capability when a connection ends between two users
  - Sending contact info to a connected peer and maintaining a history of received contact info during a session
  
## Future Features
  - Leverage more data API's to gain further insights of user interests
  - Group matchmaking
  - Make received contact info persistant
