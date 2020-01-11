# Scala implementation for Nexss Programmer

**Nexss Programmer** is using **Ammonite** to compile and run Scala Scripts.
More about ammonite: <https://ammonite.io> and ammonite's author blog <http://www.lihaoyi.com>

NOTE: However if for any reason you would like to use native scala, please change config in file **scala.win32.nexss.config.js**

**languageConfig.compilers** -> command from `amm` to `scala`. that's it!

## Nexss Programmer Example

```sh
nexss file add myfile.scala # This will display templates list to choice.
nexss myfile.scala
```

## Ivy Import with Ammonite

```scala
import $ivy.`com.atlassian.commonmark:commonmark:0.5.1`
```

is equal to 

```xml
<dependency>
    <groupId>com.atlassian.commonmark</groupId>
    <artifactId>commonmark</artifactId>
    <version>0.5.1</version>
</dependency>
```

## Interesting Links



[Build Your Own Programming Lanugage with Scala (www.lihaoyi.com)](http://www.lihaoyi.com/post/BuildyourownProgrammingLanguagewithScala.html)