(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['paymentTmpl'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " src="
    + this.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + " ";
},"3":function(depth0,helpers,partials,data) {
    return " src='images/emptyContact.jpg' ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class='sentByServer'>\n	<div class='payment'>\n		<div class='paymentHeading'>You're ready to pay <span class='whiteText'>"
    + alias3(((helper = (helper = helpers.amount || (depth0 != null ? depth0.amount : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"amount","hash":{},"data":data}) : helper)))
    + "</span> to <span class='whiteText'>"
    + alias3(((helper = (helper = helpers.person || (depth0 != null ? depth0.person : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"person","hash":{},"data":data}) : helper)))
    + "</span>\n			<div class='bigRound'><img "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "></img></div>\n		</div> \n		<div class='paymentFrom'>From "
    + alias3(((helper = (helper = helpers.account || (depth0 != null ? depth0.account : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"account","hash":{},"data":data}) : helper)))
    + " Account</div>\n		<div class='paymentAccountInfo'>\n			<div class='paymentAccountLabels'>\n				<div>A/C#:</div>\n				<div>Bank Name:</div>\n				<div>FCS Code:</div>\n			</div>\n			<div class='paymentAccountData'>\n				<div>"
    + alias3(((helper = (helper = helpers.accountNumber || (depth0 != null ? depth0.accountNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"accountNumber","hash":{},"data":data}) : helper)))
    + "</div>\n				<div>"
    + alias3(((helper = (helper = helpers.bankName || (depth0 != null ? depth0.bankName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"bankName","hash":{},"data":data}) : helper)))
    + "</div>\n				<div>"
    + alias3(((helper = (helper = helpers.fcs || (depth0 != null ? depth0.fcs : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"fcs","hash":{},"data":data}) : helper)))
    + "</div>\n			</div>\n		</div>\n		<div class='paymentOptions'>\n			<div class='payNow'>Pay Now</div>\n			<div class='cancel'>Cancel</div>\n		</div>\n\n	</div >\n</div>";
},"useData":true});
})();
