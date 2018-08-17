package controllers

import laika.api.Parse
import laika.parse.markdown.Markdown

object TransformMarkdown extends TransformMarkup {

  def newParser = Parse as Markdown
  
  def transform = Action(parse.text) { request =>
    Ok(collectTransformerResults(request.body))
  }
    
}