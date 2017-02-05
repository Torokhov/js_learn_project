describe("range", function() {
  it("генерирует диапазон", function() {
    assert.deepEqual(range(1, 5), [1,2,3,4,5]);
  });
  
  it("генерирует диапазон с заданным шагом", function() {
    assert.deepEqual(range(1, 10, 2), [1,3,5,7,9]);
  });
  
  it("генерирует диапазон с отрицательным шагом", function() {
    assert.deepEqual(range(5, 2, -1), [5, 4, 3, 2]);
  });
});