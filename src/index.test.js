var expect = require('chai').expect;
var botRecipe = require('./index');

describe('bot recipe', function(){
	
	describe('answer', function(){
		it('should return a string or object', function(){	
			expect(botRecipe.answer('question','param')).to.satisfy(isString);
			function isString(answer){
				if (typeof answer === 'string' || typeof answer === 'object') {
					return true
				} else {
					return false
				}
			}
		})
	})

	describe('allQuestions', function(){
		it('should return an array of strings', function(){
			expect(botRecipe.allQuestions()).to.satisfy(isArrayOfStrings);
			function isArrayOfStrings(array){
				for (var i = 0; i < array.length; i++){
					if (typeof array[i] != 'string') {
						return false
					}
				}
				return true
			}
		})
	})

	describe('allQuestionsAndAnswers', function(){
		it('should return an object', function(){	
			expect(botRecipe.allQuestionsAndAnswers()).to.satisfy(isValidObject);
			function isValidObject(answers){
				if (typeof answers === 'object') {
					return true
				} else {
					return false
				}
			}
		})
	})


	
})