import {expect} from 'chai';
import _ from 'lodash';
import RuleContext from './RuleContext';

describe('Make Decision', () => {
    it('Test for BMI', () => {
        var questionnaireAnswers = new RuleContext();
        questionnaireAnswers.set("Height", 100);
        questionnaireAnswers.set("Weight", 10);
        // eval('../modules/bmi/decision.js');
        // getDecision(questionnaireAnswers);
    });
});