### This project requires two tokens
- npm token
- github token

Each of these tokesn will be provided to the Project's setting's `Security and variables/actions` page.

#### Github Token
Based on [this article](https://www.tevpro.com/blog/calibrating-permissions-using-fine-grained-tokens), we need
specific permissions when using the Granular-access tokens from Github. Specifically:
- Actions - Access: Read/Write
- Commit Statuses - Access: Read-only
- Contents - Access: Read/Write
- Issues - Access: Read/Write
- Metadata - Access: Read-only
- Pull Requests - Access: Read-only
