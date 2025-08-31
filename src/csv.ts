import { CSVData, parseCSV } from "csv/csv";
import readFile from "readFile";

export async function processCSV(file: File) {
  const data = await readFile(file);

  console.log(data);

  const raw = getRawDisplay(data);
  const structured = parseCSV(data);

  return {
    rawDisplay: getRawDisplay(data),
    structuredDisplay: getTableDisplay(structured),
  };
}

function getRawDisplay(data: string): HTMLPreElement {
  const pre = document.createElement("pre");
  pre.textContent = data;
  return pre;
}

function getTableDisplay(data: CSVData): HTMLTableElement {
  const table = document.createElement("table");
  const { headers, rows } = data;

  table.appendChild(getHeaders(headers));
  table.append(...getRows(rows));

  return table;
}

function getHeaders(names: string[]) {
  const header = document
    .createElement("thead")
    .appendChild(document.createElement("tr"));
  header.append(
    ...names.map((name) => {
      const th = document.createElement("th");
      th.textContent = name.trim();
      return th;
    })
  );

  return header;
}

function getRows(data: string[][]) {
  return data.map((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell.trim();
      tr.appendChild(td);
    });
    return tr;
  });
}
