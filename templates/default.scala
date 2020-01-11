import scala.io.StdIn
import ujson._

val NexssStdin = StdIn.readLine()

val NexssStdout = ujson.read(NexssStdin)
NexssStdout("test") = "test"

println(NexssStdout)
