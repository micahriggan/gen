module.exports =
`
session_name: watchthis
windows:
- window_name: vim
  shell_command_before:
  - cd ~
  panes:
  - vim
- window_name: npm/git
  shell_command_before:
  - cd ~
  panes:
  - git status
  - npm start
- window_name: karma
  shell_command_before:
  - cd ~
  panes:
  - karma start
`;
