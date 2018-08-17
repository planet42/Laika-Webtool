package controllers

import laika.api.Parse
import laika.parse.rst.ReStructuredText

object TransformReStructuredText extends TransformMarkup {

  def newParser = Parse as ReStructuredText
  
  def transform = Action(parse.text) { request =>
    Ok(collectTransformerResults(request.body))
  }
    
}