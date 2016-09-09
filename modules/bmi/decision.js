var getDecision  = function (questionnaireAnswers) {
    var decision = {};
    decision.name = "BMI";
    decision.code = "N/A";

    var weight = questionnaireAnswers.getAnswerFor('Weight');
    var height = questionnaireAnswers.getAnswerFor('Height');
    var bmi = (weight * 10000) / (height * height);
    decision.value = String(bmi);

    return [decision];
};

var validate = function(ruleContext) {
    return {passed: true}
};

module.exports = {getDecision: getDecision, validate: validate};