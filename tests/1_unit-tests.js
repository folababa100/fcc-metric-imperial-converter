/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {

  suite('Function convertHandler.getNum(input)', function () {

    test('Whole number input', function (done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test('Decimal Input', function (done) {
      let input = '32.3L';
      assert.equal(convertHandler.getNum(input), 32.3);
      done();
    });

    test('Fractional Input', function (done) {
      let input = "23/4L";
      assert.equal(convertHandler.getNum(input), 5.75);
      done();
    });

    test('Fractional Input w/ Decimal', function (done) {
      let input = '32/3.2L';
      assert.equal(convertHandler.getNum(input), 10);
      done();
    });

    test('Invalid Input (double fraction)', function (done) {
      let input = '32/3/2L';
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test('No Numerical Input', function (done) {
      let input = '';
      assert.equal(convertHandler.getNum(input), "no number");
      done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function () {

    test('', function (done) {
      let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];
      input.forEach(function (ele) {
        assert.equal(convertHandler.getUnit(ele), ele);
      });
      done();
    });

    test('Unknown Unit Input', function (done) {
      let input = "kgs";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function () {

    test('For Each Valid Unit Inputs', function (done) {
      let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      let expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function () {

    test('For Each Valid Unit Inputs', function (done) {
      let input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      let expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.convert(num, unit)', function () {

    test('Gal to L', function (done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function (done) {
      let input = [18.9271, 'l'];
      let expected = 5;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Mi to Km', function (done) {
      let input = [9, 'mi'];
      let expected = 14.48406;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Km to Mi', function (done) {
      let input = [14.48406, 'km'];
      let expected = 9;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Lbs to Kg', function (done) {
      let input = [10, 'lbs'];
      let expected = 4.53592;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

    test('Kg to Lbs', function (done) {
      let input = [4.53592, 'kg'];
      let expected = 10;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });

  });

});