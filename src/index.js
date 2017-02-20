// Load file of questions and answers
var quest_ans = require('../data/quest-ans.js');

module.exports = {
	answer: function(question, params){
		// check question is not empty
		if (question && question.length > 2) {
			// intialize answer
			var answer = 'Thinking ...';
			// check if the question exists
			if (quest_ans.hasOwnProperty(question)) {
				// check if the answer is a string or a query. If a query, then collect query inputs
				if (typeof question === 'function') {
					answer = quest_ans[question](params);
				} else {
					answer = quest_ans[question];
				}
			} else {
				answer = 'I did not find an answer. Maybe try re-phrasing your query.'; 
			}
			return answer;
		}
	},
	allQuestions: function(){
		return Object.keys(quest_ans)
	},
	allQuestionsAndAnswers: function(){
		return quest_ans
	}
}