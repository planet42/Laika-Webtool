package controllers

import play.api._
import play.api.mvc._
import laika.api.Parse
import laika.parse.rst.ReStructuredText

object TransformReStructuredText extends Controller with TransformMarkup {

  def newParser = Parse as ReStructuredText
  
  def transform = Action(parse.text) { request =>
    Ok(collectTransformerResults(request.body))
  }
    
}