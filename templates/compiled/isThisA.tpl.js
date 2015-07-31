(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['isThisATmpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class='sentByServer'>\n	<div class='isThisA'>\n		<div class='booleanQuery'>Is this a "
    + this.escapeExpression(((helper = (helper = helpers.query || (depth0 != null ? depth0.query : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"query","hash":{},"data":data}) : helper)))
    + "?</div>\n		<div class='yes'>Yes</div>\n		<div class='no'>No</div>\n	</div>\n</div>";
},"useData":true});
})();
