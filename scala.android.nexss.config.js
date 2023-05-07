let languageConfig = Object.assign({}, require("./scala.win32.nexss.config"));
const sudo = process.sudo;
const distName = process.distro;
languageConfig.dist = distName;

languageConfig.compilers = {
  scala: {
    install: `pkg install -y scala`,
    command: "scala",
    args: "<file>", //args: "-s <file>",
    help: ``,
  },
};

module.exports = languageConfig;
