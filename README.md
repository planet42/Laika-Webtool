Laika-Webtool
=============

Online Tool for trying out the Laika transformer.

The server is built with Akka HTTP, the client with React.


Trying the Webtool online
-------------------------

The webtool is currently hosted at `http://www.planet42.org/laika/webtool`.

At the moment this is a free Heroku Dyno, so it will be put to sleep when idle.
In this case it might take a few seconds to wake up.
In the coming months it might get redeployed without these retrictions.
This is also currently a very old version of the tool, built with a different stack.


Running the Webtool locally
---------------------------

* Clone the repository and cd into its root folder

* Start the server with `sbt run`

* Start the client with `cd client` and `npm start`

* The browser will automatically open `http://localhost:3000`
