package controllers

import play.api._
import play.api.mvc._
import laika.api.Parse
import laika.parse.markdown.Markdown

object TransformMarkdown extends Controller with TransformMarkup {

  def newParser = Parse as Markdown
  
  def transform = Action(parse.text) { request =>
    Ok(collectTransformerResults(request.body))
  }
    
}