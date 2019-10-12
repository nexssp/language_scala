#!/bin/sh
exec scala -savecompiled "$0" "$@"
!#

import scala.io.StdIn

var line = ""
while ({line = StdIn.readLine(); line != null}) {
    println(line)
}