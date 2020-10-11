let languageConfig = Object.assign({}, require("./scala.win32.nexss.config"));
languageConfig.compilers = {
  brew: {
    install: "brew install ammonite-repl",
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``,
  },
};

module.exports = languageConfig;
