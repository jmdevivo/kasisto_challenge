(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['okPersonTmpl'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class='okPerson'> Ok, "
    + this.escapeExpression(((helper = (helper = helpers.person || (depth0 != null ? depth0.person : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"person","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});
})();
