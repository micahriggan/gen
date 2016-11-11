module.exports = 
`
session_name: watchthis
windows:
- window_name: vim frontend
  shell_command_before:
  - cd ~/Documents/Projects/watchthis-frontend
  panes:
  - vim
- window_name: npm/git frontend
  shell_command_before:
  - cd ~/Documents/Projects/watchthis-frontend
  panes:
  - git status
  - npm start
- window_name: vim loopback
  shell_command_before:
  - cd ~/Documents/Projects/watchthis-loopback
  panes:
  - vim
- window_name: npm/git loopback
  shell_command_before:
  - cd ~/Documents/Projects/watchthis-loopback
  panes:
  - git status
  - npm start
`;
