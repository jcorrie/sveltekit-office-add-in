/* global Word console */
Office.onReady(() => {
  // If needed, Office.js is ready to be called
});

export async function getHighlightedText(): Promise<String | null> {
  let highlightedText: String | null = null;
  Word.run(async (context) => {
    // Get the currently selected range in Word
    const range = context.document.getSelection();
    range.load("text, font");

    await context.sync();

    // Extract the highlighted portions
    const highlightedText = range.text


  })
  try {
    return highlightedText;
  }
  catch (error) {
    console.error(error);
    return null
  }
}