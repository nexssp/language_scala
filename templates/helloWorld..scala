import scala.io.StdIn
import ujson._

// Below needs to be to avoid argument issues with eg --test
// https://github.com/nexssp/language_scala/wiki/Script-scala-does-not-take-arguments-error---ammonite
@main
def main(s: String*): Unit = {
//   println(s)
}

val NexssStdin = StdIn.readLine()

val NexssStdout = ujson.read(NexssStdin)
NexssStdout("HelloFromScala") = scala.util.Properties.versionString

println(NexssStdout)
