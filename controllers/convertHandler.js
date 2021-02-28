/*
*
*
*       Complete the handler logic below
*
*
*/

function isNotNumeric(str) {
  if (typeof str != "string") return false
  return !/^[0-9]+((\/|\.)[0-9]+(\.[0-9])?)?$/.test(str);
}

function ConvertHandler() {

  this.getNum = function(input) {
    let inputArr = input.split(/[a-z]+/gi) || [];
    if (inputArr[0].length === 0) {
      return "no number";
    }
    if (isNotNumeric(inputArr[0])) {
      return "invalid number";
    }
    return parseFloat(eval(inputArr[0]));
  };

  this.getUnit = function(input) {
    let inputArr = input.split(/[^a-z]+/gi);
    const unit = inputArr[inputArr.length - 1] || "";
    const units = ["gal", "l", "mi", "km", "lbs", "kg"];

    const newUnit = new Set(units);

    if(!newUnit.has(unit.toLowerCase())) {
      return "invalid unit";
    }

    return unit;

  };

  this.getReturnUnit = function(initUnit) {
    if(initUnit === "gal") {
      return "l";
    } else if (initUnit === "l") {
      return "gal";
    } else if(initUnit === "mi") {
      return "km"
    } else if(initUnit === "km") {
      return "mi"
    } else if(initUnit === "lbs") {
      return "kg"
    } else if(initUnit === "kg") {
      return "lbs"
    }
  };

  this.spellOutUnit = function(unit) {
    if(unit === "mi") {
      return "miles"
    } else if(unit === "kg") {
      return "kilograms"
    } else if(unit === "lbs") {
      return "pounds"
    } else if(unit === "l") {
      return "liters"
    } else if(unit === "km") {
      return "kilometers";
    } else if(unit === "gal") {
      return "gallons"
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if (initUnit === "mi") {
      return parseFloat((initNum * miToKm).toFixed(5))
    } else if (initUnit === "kg") {
      return parseFloat((initNum / lbsToKg).toFixed(5))
    } else if (initUnit === "lbs") {
      return parseFloat((initNum * lbsToKg).toFixed(5))
    } else if (initUnit === "l") {
      return parseFloat((initNum / galToL).toFixed(5))
    } else if (initUnit === "km") {
      return parseFloat((initNum / miToKm).toFixed(5))
    } else if (initUnit === "gal") {
      return parseFloat((initNum * galToL).toFixed(5))
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
  };

}

module.exports = ConvertHandler;
