const appclass = require('../modules/appclass');

test("should increase health by 1", () => {
    expect(appclass.andy.health).toBe(100);
    appclass.andy.increaseHealth();
    expect(appclass.andy.health).toBe(101);
})
test("should decrease health by 1", () => {
    appclass.andy.decreaseHealth();
    expect(appclass.andy.health).toBe(100);
})

test("should return a message indicating the name", () => {
    appclass.message();
    expect(appclass.message("Andy")).toContain("Andy");
})