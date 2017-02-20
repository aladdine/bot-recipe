// sample questions and answers

module.exports = {
	'question 1': 'ans1', // answer is a string
	'question 2': function(params) { // answer is boolean (yes(true) or no(false))
		if (params === true) { // test if value is true or false
			return true
		} else {
			return false
		}
	},
	'question 3': { // answer has multiple answer choices
		'1': 'option 1 content',
		'2': 'option 2 content',
		'3': {
			'3.1': 'option 3.1',
			'3.2': 'option 3.2'
		}
	},
	'question 4': function(params){ // queries can be run here (remote API call, math operation, etc)
		return params
	}
}