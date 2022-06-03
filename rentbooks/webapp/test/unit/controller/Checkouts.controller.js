/*global QUnit*/

sap.ui.define([
	"books/rentbooks/controller/Checkouts.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Checkouts Controller");

	QUnit.test("I should test the Checkouts controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
