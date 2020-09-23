let languageConfig = Object.assign({}, require("./scala.win32.nexss.config"));

const os = require("@nexssp/os");
const sudo = os.sudo();

const distName = os.name();
languageConfig.dist = distName;

languageConfig.compilers = {
  scala: {
    install: "apt-get install -y scala",
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``,
  },
};

switch (distName) {
  case os.distros.ARCH:
    languageConfig.compilers.scala.install = "pacman -S --noconfirm ammonite"; // error: package org.json does not exist
    break;
  default:
    languageConfig.compilers.scala.install = os.replacePMByDistro(
      languageConfig.compilers.scala.install
    );
    break;
}

module.exports = languageConfig;
