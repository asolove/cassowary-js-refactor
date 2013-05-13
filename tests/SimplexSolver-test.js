/* global c */

// Copyright (C) 1998-2000 Greg J. Badros
// Use of this source code is governed by http://www.apache.org/licenses/LICENSE-2.0
//
// Parts Copyright (C) 2012, Alex Russell (slightlyoff@chromium.org)

define([
	'intern!bdd',
	'intern/chai!assert',
	'./deps'
], function (bdd, assert) {
	'use strict';

	var describe = bdd.describe,
		it = bdd.it;

	describe('c.SimplexSolver', function () {
		it('should be constructable without args', function () {
			new c.SimplexSolver();
		});
    });

  describe("addEditVar", function() {
    it("works with required strength", function() {
      var solver = new c.SimplexSolver();
      var thingy = new c.Variable({ name: "thingy", value: 0 });
      solver.addConstraint(new c.StayConstraint(thingy, c.Strength.strong, 0));
      solver.resolve();

      solver.addEditVar(thingy, c.Strength.required)
        .beginEdit()
        .suggestValue(thingy, 2).resolve();

      t.is(2, thingy.value);
    });
  });
});