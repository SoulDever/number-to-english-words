const { isSafeNumber, toEnglishWords } = require('../core');

module.exports = (app) => {
	// Get the name of the number
  app.get('/api/numberToEnglishWords/:number', (req, res) => {
  	let model;

  	if(isSafeNumber(+req.params.number)) {
		  model = {
			  statusCode: 200,
			  data: toEnglishWords(req.params.number)
		  };
	  } else {
		  model = {
			  statusCode: 400,
			  data: 'Please check value. Number allowed between ±2 ​Quadrillion'
		  };
	  }

    return res.send(model);
  });
}
