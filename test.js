const expect = require('chai').expect;
const myapp = require(".");

describe('Testing printMsg function, should return "Keep Support Tea Project" ', () => {
	it('Should Return Keep Suport Tea Project', () => {
         	expect(myapp.printMsg()).to.equal("Keep Support Tea Project");
	});
});