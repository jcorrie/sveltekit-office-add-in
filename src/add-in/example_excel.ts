/* global Excel  */

export async function writeToCell() {
	await Excel.run(async function (context) {
		const range = context.workbook.worksheets.getActiveWorksheet().getRange('A1');
		range.values = [['Hello, World!']];

		await context.sync();
	});
}
