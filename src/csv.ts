import { CSVData, parseCSV } from "csv/csv";
import readFile from "readFile";
import { getRawDisplay, getTableDisplay } from "./htmlGenerators";

export async function processCSV(file: File) {
  const data = await readFile(file);

  console.log(data);

  const structured = parseCSV(data);

  return {
    rawDisplay: getRawDisplay(data),
    structuredDisplay: getTableDisplay(structured),
  };
}
