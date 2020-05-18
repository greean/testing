const appclass = require('../modules/appclass');

test("should increase health by 1", () => {
    expect(appclass.andy.health).toBe(100);
    appclass.andy.increaseHealth();
    expect(appclass.andy.health).toBe(101);
})