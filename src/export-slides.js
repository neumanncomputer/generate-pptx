import { exportToPptx } from 'dom-to-pptx'; // ESM or CJS import

document.getElementById('export-btn').addEventListener('click', async () => {
  const slideElements = document.querySelectorAll('.slide');
  await exportToPptx(Array.from(slideElements), {
    fileName: 'html-presentation.pptx',
  });
});
