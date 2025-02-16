/* global Excel  */

export async function writeToCell() {
	await Excel.run(async function (context) {
		const range = context.workbook.worksheets.getActiveWorksheet().getRange('A1');
		range.values = [['Hello, World!']];

		await context.sync();
	});
}


Office.onReady(() => {
	Office.actions.associate('getButton', yellowHighlight);
});
export async function yellowHighlight() {
	Excel.run(async (context) => {
		const range = context.workbook.getSelectedRange();
		range.format.fill.color = 'yellow';
		await context.sync();
	}).catch(console.error);
}
