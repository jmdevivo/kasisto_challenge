(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['whichPersonTmpl'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "		<div class='possiblePerson'>\n			<img class='possiblePersonImage' src="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.url : stack1), depth0))
    + "></img>\n			<div class='possiblePersonInfo'>\n				"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.contactName : stack1), depth0))
    + "\n				<br />\n				"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.phoneNumber : stack1), depth0))
    + "\n			</div>\n		</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class='whichPerson'>\n	<div class='whichPersonName'> Which "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "?</div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.person : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	<div id='newPerson' class='whichPerson'>\n\n	</div>\n</div>";
},"useData":true});
})();
