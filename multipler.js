module.exports = (factor) => {
  return (req, res, next) => {
    if (req.body.number === undefined) {
      return next();
    }
    const num = parseFloat(req.body.number, 10);
    if (isNaN(num)) {
      const err = new Error('Input was not a number');
      next(err);
    }
    const result = num * factor;
    req.doubled = result;
    next();
  }
}