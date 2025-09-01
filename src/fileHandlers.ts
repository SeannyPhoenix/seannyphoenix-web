import { processCSV } from "csv";

/**
 * Handles the file input change event, processes the CSV file, and updates the DOM.
 * @param event - The file input change event.
 * @param rawData - The container for raw data display.
 * @param tableData - The container for table data display.
 */
export async function loadFile(
  event: Event,
  rawData: HTMLDivElement,
  tableData: HTMLDivElement
) {
  const { files } = event.target as HTMLInputElement;
  if (files?.length) {
    try {
      const { rawDisplay, structuredDisplay } = await processCSV(files[0]);

      rawData.innerHTML = "";
      rawData.appendChild(rawDisplay);

      tableData.innerHTML = "";
      tableData.appendChild(structuredDisplay);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  }
}
