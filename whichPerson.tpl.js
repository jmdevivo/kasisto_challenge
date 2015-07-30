(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['whichPersonTmpl'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "		<div class='possiblePerson'>\n			<div class='round'>\n				<img class='possiblePersonImage' "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "></img>\n			</div>\n			<div class='possiblePersonInfo'>\n				"
    + alias2(alias1((depth0 != null ? depth0.contactName : depth0), depth0))
    + "\n				<br />\n				<span class='personPhoneNumber' >"
    + alias2(alias1((depth0 != null ? depth0.phoneNumber : depth0), depth0))
    + "</span>\n			</div>\n		</div>\n";
},"2":function(depth0,helpers,partials,data) {
    return " src="
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.url : depth0), depth0))
    + " ";
},"4":function(depth0,helpers,partials,data) {
    return " src='images/emptyContact.jpg' ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class='whichPerson'>\n	<div class='whichPersonName'> Which "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "?</div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	<div id='newPerson' class='possiblePerson'>\n		Add New Payee\n	</div>\n</div>";
},"useData":true});
})();
