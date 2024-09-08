module.exports =
`
session_name: coding
start_directory: ./
windows:
  - window_name: all
    layout: main-vertical
    options:
      main-pane-width: 50%
    panes:
      - shell_command:
        - vim
      - shell_command:
      - shell_command:
      - shell_command:

  - window_name: frontend
    layout: main-vertical
    options:
      main-pane-width: 50%
    start_directory: ./packages/frontend
    panes:
      - shell_command:
        - vim
      - shell_command:
        - yarn dev
      - shell_command:
      - shell_command:

  - window_name: contracts
    layout: main-vertical
    options:
      main-pane-width: 50%
    start_directory: ./packages/contracts
    panes:
      - shell_command:
        - vim
      - shell_command:
      - shell_command:
      - shell_command:
`;
