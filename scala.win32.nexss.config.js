let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Scala";
languageConfig.description =
  "Scala combines object-oriented and functional programming in one concise, high-level language.";
languageConfig.url = "https://www.scala-lang.org/";
languageConfig.extensions = [".scala"];
languageConfig.builders = {};
languageConfig.compilers = {
  php7: {
    install: "scoop install scala sbt",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "scala",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.scala.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "PowerShell.exe -File installComposer.ps1",
    messageAfterInstallation: "",
    installed: "composer installed <args>",
    search: "composer search <args>",
    install: "composer require <args>",
    uninstall: "composer remove <args>",
    help: "composer <args>",
    version: "composer version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "build.sbt")
        )
      ) {
        require("child_process").execSync("npm init -y", { stdio: "inherit" });
        console.log("initialized npm project.");
      } else {
        console.log("npm already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "composer <default> <args>"
  }
};

module.exports = languageConfig;
