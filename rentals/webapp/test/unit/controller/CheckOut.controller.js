/*global QUnit*/

sap.ui.define([
	"rentals/rentals/controller/CheckOut.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CheckOut Controller");

	QUnit.test("I should test the CheckOut controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
