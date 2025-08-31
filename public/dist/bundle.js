"use strict";
(() => {
  // src/csv/csv.ts
  function parseCSV(raw) {
    if (!raw.trim()) {
      return { headers: [], rows: [] };
    }
    const rawRows = raw.split("\n").map(trim);
    const [headerRow, ...dataRows] = rawRows.map(split);
    return {
      headers: headerRow || [],
      rows: dataRows
    };
  }
  function split(row) {
    return row.split(",").map(trim);
  }
  function trim(s) {
    return s.trim();
  }

  // src/readFile.ts
  async function readFile(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result);
        } else {
          reject(new Error("Failed to read file"));
        }
      };
      reader.onerror = () => {
        reject(new Error("Error reading file"));
      };
      reader.readAsText(file);
    });
  }

  // src/csv.ts
  async function processCSV(file) {
    const data = await readFile(file);
    console.log(data);
    const raw = getRawDisplay(data);
    const structured = parseCSV(data);
    return {
      rawDisplay: getRawDisplay(data),
      structuredDisplay: getTableDisplay(structured)
    };
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
    const header = document.createElement("thead").appendChild(document.createElement("tr"));
    header.append(
      ...names.map((name) => {
        const th = document.createElement("th");
        th.textContent = name.trim();
        return th;
      })
    );
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

  // src/main.ts
  var fileInput = document.getElementById("csvFileInput");
  var tableSelector = document.getElementById(
    "tableSelector"
  );
  var rawSelector = document.getElementById("rawSelector");
  var rawData = document.getElementById("rawDataContainer");
  var tableData = document.getElementById(
    "tableDataContainer"
  );
  if (!fileInput || !tableSelector || !rawSelector || !rawData || !tableData) {
    console.error("One or more elements not found");
  } else {
    fileInput.addEventListener("change", loadFile);
    tableSelector.addEventListener("click", () => {
      tableData.style.display = "block";
      rawData.style.display = "none";
    });
    rawSelector.addEventListener("click", () => {
      tableData.style.display = "none";
      rawData.style.display = "block";
    });
  }
  async function loadFile(event) {
    const { files } = event.target;
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
})();
//# sourceMappingURL=bundle.js.map
