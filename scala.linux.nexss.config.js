let languageConfig = Object.assign({}, require("./scala.win32.nexss.config"));
const sudo = process.sudo;
const distName = process.distro;
languageConfig.dist = distName;

languageConfig.compilers = {
  scala:{
    install: `${sudo} nexss java install --progress
${sudo}sh -c '(echo "#!/usr/bin/env sh" && curl -L https://github.com/com-lihaoyi/Ammonite/releases/download/2.3.8/2.12-2.3.8) > /usr/local/bin/amm && chmod +x /usr/local/bin/amm'`,
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``,
  },
  scala22: {
    install: `${sudo}sh -c '(echo "#!/usr/bin/env sh" && curl -L https://github.com/lihaoyi/Ammonite/releases/download/2.2.0/2.13-2.2.0) > /usr/local/bin/amm && chmod +x /usr/local/bin/amm'`,
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``,
  },
};

switch (distName) {
  case process.distros.ARCH:
    languageConfig.compilers.scala.install = `${sudo}pacman -S --noconfirm ammonite`; // error: package org.json does not exist
    break;
  default:
    languageConfig.compilers.scala.install = process.replacePMByDistro(
      languageConfig.compilers.scala.install
    );
    break;
}

module.exports = languageConfig;
