export const downloadCanvas = (
  canvas: HTMLCanvasElement,
  filename: string
): void => {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.download = filename;
  link.href = image;
  link.click();
};
