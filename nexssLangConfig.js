module.exports = {
  description: "Scala",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "scala",
  extension: ".scala",
  executeCommandLine: "",
  InteractiveShell: "",
  installOnError: {
    win32: "scoop install scala",
    darwin: "brew install scala",
    linux: "apt install scala -y"
  },
  errors: {
    "Uncaught Error: Class '(.*?)'": {
      win32: "nexss install scala <package>",
      darwin: "nexss install scala <package>",
      linux: "nexss install scala <package>"
    },
    "'scala'": {
      win32: "scoop install scala sbt",
      darwin: "brew install scala sbt",
      linux: "apt install scala sbt -y"
    }
  },
  url: ""
};
