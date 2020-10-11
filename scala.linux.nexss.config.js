let languageConfig = Object.assign({}, require("./scala.win32.nexss.config"));
const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();
// const os = require("@nexssp/os");

const distName = os.name();
languageConfig.dist = distName;

languageConfig.compilers = {
  scala: {
    install: `${sudo}sh -c '(echo "#!/usr/bin/env sh" && curl -L https://github.com/lihaoyi/Ammonite/releases/download/2.2.0/2.13-2.2.0) > /usr/local/bin/amm && chmod +x /usr/local/bin/amm'`,
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``,
  },
};

switch (distName) {
  case os.distros.ARCH:
    languageConfig.compilers.scala.install = `${sudo}pacman -S --noconfirm ammonite`; // error: package org.json does not exist
    break;
  default:
    languageConfig.compilers.scala.install = os.replacePMByDistro(
      languageConfig.compilers.scala.install
    );
    break;
}

module.exports = languageConfig;
