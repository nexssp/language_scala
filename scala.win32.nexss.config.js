let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Scala";
languageConfig.description =
  "Scala combines object-oriented and functional programming in one concise, high-level language.";
languageConfig.url = "https://www.scala-lang.org";
languageConfig.founders = ["Martin Odersky"];
languageConfig.developers = [""];
languageConfig.years = ["2003"];
languageConfig.extensions = [".scala", ".sc"];
languageConfig.builders = {};
languageConfig.interactiveShell = "amm";
languageConfig.compilers = {
  amm: {
    install: "scoop install scala sbt ammonite",
    command: "amm",
    args: "--no-remote-logging <file>", //args: "-s <file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.scala.errors");
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
          stdio: "inherit"
        });
        console.log("initialized sbt project.");
      } else {
        console.log("sbt already initialized.");
      }
    },
    else: "sbt"
  }
};

module.exports = languageConfig;
