# rootdomain-cli

[![Version npm](https://img.shields.io/npm/v/rootdomain-cli)](https://www.npmjs.com/package/rootdomain-cli)
[![node.js version](https://img.shields.io/node/v/rootdomain-cli)](https://www.npmjs.com/package/rootdomain-cli)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard)

Read hostname list from STDIN and dump root-domains on STDOUT.

This package intended to call from CLI.

**BEWARE**, this tool writen under influence of a bottle of vodka.

![vodka](./images/vodka-meme.jpeg)

## Requirements
- node.js >= 16.x

## How to install
```shell
sudo npm i --global rootdomain-cli
```

## Usage
Create a file that contains hostname list to convert. Let say it's name is 'hostnames.txt'. Just run this:

```shell
cat hostnames.txt | rootdomain-cli
```

For more parameters, just run
```shell
rootdomain-cli --help
```

```
Options:
  --help               Show help                                       [boolean]
  --version            Show version number                             [boolean]
  --exclude-non-icann  Exclude domain whose not a valid ICANN TLD
                                                      [boolean] [default: false]
  --exclude-private    Exclude private domain from result
                                                      [boolean] [default: false]
  --sort               Sort result using hostname natural order
                                                      [boolean] [default: false]
```

## License
Licensed under MIT License. See [LICENSE](LICENSE) file.
