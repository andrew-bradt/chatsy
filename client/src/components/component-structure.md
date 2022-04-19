- All App Modes
  - Not Logged In
  - Logged In Not In Lobby
  - In Lobby Waiting
  - In Chat

# CallControllers
- Rendered During
  - Logged In Not In Lobby
  - In Lobby Waiting
  - In Chat

- Two Modes
  - In Call - Buttons
    - End Call
    - End and Next
    - Send Info
    
  - Not In Call - Buttons
    - Stop Matching / Start Matching

# Chat
- State:
  - messages - [{msg: String, fromPeer: Bool}]
- Rendered During
  - In Chat
  - fromPeer used to determine which side the msg is rendered

# ChatListItem
- Prop: msg

# ContactList
- state:
  - contacts - [email]


# ContactListItem
  - props
    - email

# InterestsList
  - Prop:
    - list of interests
  - Rendered During
    - In Lobby Waiting
    - Logged In Not In Lobby
  
# SharedInterests
- Rendered During
  - In Call

- Props
  - Shared Interests

# InterestsListItem
  - Props
    - interest: string
  - State:
    - isCriteria: default to true

  When clicked, change the state and send either remove-criteria or add-criteria socket event

# LoginForm
  - Rendered During
    - Not Logged In
  - State
    - email
# Video
- props: stream, defaultDisplay
