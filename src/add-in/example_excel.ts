/* global Excel console */

export async function writeToCell() {
  await Excel.run(async function (context) {
    let range = context.workbook.worksheets.getActiveWorksheet().getRange("A1")
    range.values = [["Hello, World!"]];

    await context.sync();
  });
}