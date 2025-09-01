import { CSVData } from "csv/csv";

/**
 * Generates a <pre> element to display raw CSV data.
 * @param data - The raw CSV data as a string.
 * @returns An HTMLPreElement containing the raw data.
 */
export function getRawDisplay(data: string): HTMLPreElement {
  const pre = document.createElement("pre");
  pre.textContent = data;
  return pre;
}

/**
 * Generates a <table> element to display structured CSV data.
 * @param data - The parsed CSV data.
 * @returns An HTMLTableElement containing the structured data.
 */
export function getTableDisplay(data: CSVData): HTMLTableElement {
  const table = document.createElement("table");
  const { headers, rows } = data;

  table.appendChild(getHeaders(headers));
  table.append(...getRows(rows));

  return table;
}

function getHeaders(names: string[]): HTMLTableSectionElement {
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headerRow.append(
    ...names.map((name) => {
      const th = document.createElement("th");
      th.textContent = name.trim();
      return th;
    })
  );

  thead.appendChild(headerRow);
  return thead;
}

function getRows(data: string[][]): HTMLTableRowElement[] {
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
