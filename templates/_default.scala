import scala.io.StdIn
// import scala.util.parsing.combinator._

val s = StdIn.readLine()
//val parsed = JSON.parseFull(s).getOrElse(0).asInstanceOf[Map[String,String]]
val parsed = Json.parse(s)

// val innerMap = jsonMap("result").asInstanceOf[Map[String,String]]
// println(innerMap.keys) //will give keys
// innerMap("anykey") //will give value for any key anykey

//val json = s.asInstanceOf[Option[Map[String,List[Map[String,String]]]]]

// val ids = json.map(_("Locations")("list").map(_("id"))).getOrElse(List())
println(s)
// println("xxxxxxx");