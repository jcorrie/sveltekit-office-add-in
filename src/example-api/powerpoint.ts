/* global PowerPoint console */

export async function addSlide() {
    await PowerPoint.run(async function(context) {
      context.presentation.slides.add();
  
      await context.sync();
    });
  }