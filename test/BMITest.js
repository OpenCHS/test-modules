import {expect} from 'chai';
import RuleContext from './RuleContext';

describe('Make Decision', () => {
    it('Test for BMI', () => {
        var questionnaireAnswers = new RuleContext();
        questionnaireAnswers.set("Height", 100);
        questionnaireAnswers.set("Weight", 10);
        var getDecision = require('../modules/bmi/decision');
        expect(getDecision(questionnaireAnswers).length).is.equal(1);
    });
});