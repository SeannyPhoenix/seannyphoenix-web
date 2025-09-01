export type CSVData = {
  headers: string[];
  rows: string[][];
};

export function parseCSV(raw: string): CSVData {
  if (!raw.trim()) {
    return { headers: [], rows: [] }; // Early return for empty input
  }

  const rawRows = raw.split("\n").map(trim);
  const [headerRow, ...dataRows] = rawRows.map(split);

  return {
    headers: headerRow || [],
    rows: dataRows,
  };
}

function split(row: string): string[] {
  return row.split(",").map(trim);
}
function trim(s: string): string {
  return s.trim();
}
