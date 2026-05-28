const createMessage = require('../utils/utils.js');

test('Returns a hello world message', () => {
    expect(createMessage()).toBe("Hello world! \n");
});