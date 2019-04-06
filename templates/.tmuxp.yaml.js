module.exports =
`
session_name: coding
windows:
- window_name: vim
  shell_command_before:
  - cd .
  panes:
  - vim
- window_name: npm/git
  shell_command_before:
  - cd .
  panes:
  - git status
  - npm start
- window_name: testing
  shell_command_before:
  - cd .
  panes:
  - echo "tests"
  - echo "tests"
`;
