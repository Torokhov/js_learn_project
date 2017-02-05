describe("range", function() {
  it("генерирует диапазон", function() {
    assert.deepEqual(range(1, 5), [1, 2, 3, 4, 5]);
  });
});