package controllers

import laika.api.Parse
import laika.tree.RewriteRules
import laika.api.Render
import laika.render.HTML
import play.api.libs.json.Json._
import play.api.libs.json._
import laika.tree.Elements.Document

trait TransformMarkup {

  val render = Render as HTML using { out => {
    case Document(content) => out <<| content // TODO - remove once default renderer stops wrapping the result in a div
  }}
  
  def newParser: Parse
  
  
  def collectTransformerResults (input: String) = {
    val rawTree = (newParser asRawDocument) fromString input
    val rewrittenTree = RewriteRules.applyDefaults(rawTree)
    val html = render from rewrittenTree toString
    
    toJson(Map(
      "rawTree"       -> toJson(rawTree.toString.trim),
      "rewrittenTree" -> toJson(rewrittenTree.toString.trim),
      "html"          -> toJson(html.trim)
     ))
  }
  
  
}