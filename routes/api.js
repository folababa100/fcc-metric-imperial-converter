/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      if (initNum === "invalid number" && initUnit === "invalid unit") {
        return res.send("invalid number and unit")
      } else if (initNum === "invalid number") {
        return res.send("invalid number")
      } else if (initUnit === "invalid unit") {
        return res.send("invalid unit")
      }
      if (initNum === "no number") {
        return res.send("no number")
      }
      const lowerInitUnit = initUnit.toLowerCase()
      let returnNum = convertHandler.convert(initNum, lowerInitUnit);
      let returnUnit = convertHandler.getReturnUnit(lowerInitUnit);
      let spellOutUnitInit = convertHandler.spellOutUnit(lowerInitUnit)
      let spellOutUnitReturn = convertHandler.spellOutUnit(returnUnit)
      let toString = convertHandler.getString(initNum, spellOutUnitInit, returnNum, spellOutUnitReturn);

      res.json({
        initNum,
        initUnit: lowerInitUnit,
        returnNum,
        returnUnit,
        string: toString
      })
    });

};
