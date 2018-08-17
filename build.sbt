
name := "Planet 42"

version := "0.9.0-SNAPSHOT"

scalaVersion := "2.12.6"

libraryDependencies ++= Seq(
  "org.planet42" %% "laika-core" % "0.8.0",
  "com.typesafe.play" %% "play-json" % "2.6.3",
  "com.typesafe.akka" %% "akka-http" % "10.0.10",
  "de.heikoseeberger" %% "akka-http-play-json" % "1.18.0"
)
