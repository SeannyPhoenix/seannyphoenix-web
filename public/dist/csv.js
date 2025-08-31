import { parseCSV } from "csv/csv";
export function processCSV(file) {
    const data = readFile(file);
    const raw = getRawDisplay(data);
    const structured = parseCSV(data);
    return {
        rawDisplay: getRawDisplay(data),
        structuredDisplay: getTableDisplay(structured),
    };
}
function readFile(file) {
    let data = "";
    const reader = new FileReader();
    reader.onload = () => {
        if (reader.result) {
            const fileContent = reader.result;
            data = fileContent;
        }
    };
    reader.onerror = () => {
        console.error("Error reading file:", reader.error);
    };
    reader.readAsText(file);
    return data;
}
function getRawDisplay(data) {
    const pre = document.createElement("pre");
    pre.textContent = data;
    return pre;
}
function getTableDisplay(data) {
    const table = document.createElement("table");
    const { headers, rows } = data;
    table.appendChild(getHeaders(headers));
    table.append(...getRows(rows));
    return table;
}
function getHeaders(names) {
    const header = document
        .createElement("thead")
        .appendChild(document.createElement("tr"));
    header.append(...names.map((name) => {
        const th = document.createElement("th");
        th.textContent = name.trim();
        return th;
    }));
    return header;
}
function getRows(data) {
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
