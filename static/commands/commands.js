Office.onReady(() => {
    Office.actions.associate('yellowHighlight', yellowHighlight);
});

async function yellowHighlight(event) {
    try {
        await Excel.run(async (context) => {
            const range = context.workbook.getSelectedRange();
            range.format.fill.color = 'yellow';
            await context.sync();
        });
    } catch (error) {
        console.error(error);
    }
    event.completed();
}