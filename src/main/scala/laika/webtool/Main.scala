/*
 * Copyright 2013-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package laika.webtool

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Route
import akka.stream.ActorMaterializer

/**
  * @author Jens Halm
  */
class Main {

  def main (args: Array[String]): Unit = {

    val serviceName = "Laika Webtool"

    implicit val system = ActorSystem(serviceName)
    implicit val mat = ActorMaterializer()

    implicit val ec = system.dispatcher

    val route: Route = ???

    Http().bindAndHandle(route, "localhost", 8080)

  }

}
