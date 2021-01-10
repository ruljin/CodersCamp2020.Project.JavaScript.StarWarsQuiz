const createTR = require('./ranking.js');

test('Testing if the function adds a row table and highlights the result', function () {
  expect(createTR(1, 'Ada', 20, true))
    .toBe(`<tr class="table__row table__row--highlighted">
<td class="table__data">1st</td>
<td class="table__data">Ada</td>
<td class="table__data">20</td>
</tr>`);
});

test('Testing if the function adds a row table without highlighting the result', function () {
  expect(createTR(4, 'Ania', 25, false)).toBe(`<tr class="table__row ">
<td class="table__data">4th</td>
<td class="table__data">Ania</td>
<td class="table__data">25</td>
</tr>`);
});
