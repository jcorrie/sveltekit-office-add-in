/* global Word console */


export async function getHighlightedText(): Promise<string | null> {
	let highlightedText: string | null = null;
	try {
		await Word.run(async (context) => {
			// Get the currently selected range in Word
			const range = context.document.getSelection();
			range.load('text, font');

			await context.sync();
			console.log(`The selected range is "${range.text}".`);
			// Extract the highlighted portions
			highlightedText = range.text;
		});
		return highlightedText;
	} catch (error) {
		console.error(error);
		return null;
	}
}
