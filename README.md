# Express application - Full Stack JavaScript Techdegree

### Number doubler application
This project is a simple app that takes a number and doubles it. The project was built using the Express web framework.

***
<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1554485395/portfolio/expressDoubler.png" width="700px">

## To view project
1. Download project.
2. Run 'npm install' in the command line.
3. Run 'npm start' in the command line.
4. Go to 'localhost:3000' in your browser.

<!-- ## Project objective -->
<!-- To complete this project I created JavaScript classes (Game, Board, Space, Player, Token) to organize the code. Each class, with its constructor function, methods, getters and setters is in its own .js file, and the app.js file handles the interaction with DOM elements. -->

## Techniques and concepts
- Express web framework

## Code example
```javascript
module.exports = (config) => {
	return (req, res, next) => {
		if (req.body.number === undefined) {
			return next();
		}
		const num = parseFloat(req.body.number);
		if (isNaN(num)) {
			const err = new Error('submitted value is not a number');
			return next(err);
		}
		const result = num * config.by;
		req.multiplied = result;
		next();
	}
}
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:
