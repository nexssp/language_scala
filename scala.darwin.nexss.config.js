let languageConfig = Object.assign({}, require("./scala.win32.nexss.config"));
languageConfig.compilers = {
  brew: {
    install: "brew update && brew install scala",
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``,
  },
  amm: {
    install: "scoop install scala sbt ammonite",
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``,
  },
};
languageConfig.languagePackageManagers = {
  sbt: {
    installation: "scoop install sbt",
    messageAfterInstallation: "",
    installed: "sbt installed",
    search: "sbt search",
    install: "sbt install",
    uninstall: "sbt remove",
    help: "sbt",
    version: "sbt version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "build.sbt")
        )
      ) {
        require("child_process").execSync("sbt new myapp -c", {
          stdio: "inherit",
        });
        console.log("initialized sbt project.");
      } else {
        console.log("sbt already initialized.");
      }
    },
    else: "sbt",
  },
};

module.exports = languageConfig;
