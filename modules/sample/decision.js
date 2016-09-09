var getDecision = function (ruleContext) {
    var decision = {};
    decision.name = "Treatment";
    decision.code = "ABC001";
    decision.value = "The patient should be referred to the hospital immediately as he may having tuberculosis";
    decision.alert = "ALERT MESSAGE";
    return [decision];
};

var validate = function(ruleContext) {
    return {passed: true}
};

module.exports = {getDecision: getDecision, validate: validate};