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
  
  def newParser: Parse[Document]
  
  
  /** Note that in application code the transformation is usually done
   *  in one line. Here we want to first obtain the raw document tree
   *  and then rewrite it manually (which is usually performed automatically)
   *  as we want to show both in the result.
   */
  def collectTransformerResults (input: String) = {
    val rawTree = (newParser asRawDocument) fromString input
    val rules = RewriteRules chain (rawTree.rewriteRules ::: List(RewriteRules(rawTree.document)))
    val rewrittenTree = rawTree.document rewrite rules
    val html = render from rewrittenTree toString
    
    toJson(Map(
      "rawTree"       -> toJson(rawTree.document.toString.trim),
      "rewrittenTree" -> toJson(rewrittenTree.toString.trim),
      "html"          -> toJson(html.trim)
     ))
  }
  
  
}