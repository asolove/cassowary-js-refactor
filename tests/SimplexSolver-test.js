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
      var a = new c.Variable({ name: "a", value: 0 });
      var b = new c.Variable({ name: "b", value: 0 });
  
      solver.addConstraint(new c.Equation(c.times(2, a), b, c.Strength.required, 0));
      solver.resolve();

      solver.addEditVar(a, c.Strength.required)
        .beginEdit()
        .suggestValue(a, 2).resolve();

      t.is(2, a.value);
      t.is(4, b.value);
    });
  });
});
