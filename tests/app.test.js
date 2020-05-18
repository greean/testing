const app = require('../modules/app');

test("must return 8 when 5 and 3 are passed", () => {
    expect(app.add(5,3)).not.toBe(7);
});

test("must return 2 when 4 subtracted from 6", () => {
    expect(app.subtract(6,4)).toBe(2);
});