
name := "planet42"

version := "0.0.4"

scalaVersion := "2.12.6"

libraryDependencies ++= Seq(
  "org.planet42" %% "laika-core" % "0.8.0",
  "com.typesafe.play" %% "play-json" % "2.6.3",
  "com.typesafe.akka" %% "akka-http" % "10.0.10"
)

enablePlugins(sbtdocker.DockerPlugin, JavaAppPackaging)

javaOptions in Universal ++= Seq(
  "-J-Xms512M",
  "-J-Xmx896M"
)

buildOptions in docker := BuildOptions (
  cache = false,
  removeIntermediateContainers = BuildOptions.Remove.Always,
  pullBaseImage = BuildOptions.Pull.Always
)

dockerfile in docker := {
  val appDir: File = stage.value
  val targetDir = "/app"

  new Dockerfile {
    from("openjdk:8")
    expose(8080)
    env("VERSION", version.value)
    entryPoint(s"$targetDir/bin/${executableScriptName.value}")
    copy(appDir, targetDir)
  }
}

imageNames in docker := Seq(ImageName(
  namespace = None,
  repository = name.value,
  tag = Some(version.value)
))
