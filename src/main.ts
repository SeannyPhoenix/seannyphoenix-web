import { loadFile } from "./fileHandlers";

const fileInput = document.getElementById("csvFileInput") as HTMLInputElement;

const tableSelector = document.getElementById(
  "tableSelector"
) as HTMLDivElement;
const rawSelector = document.getElementById("rawSelector") as HTMLDivElement;

const rawData = document.getElementById("rawDataContainer") as HTMLDivElement;
const tableData = document.getElementById(
  "tableDataContainer"
) as HTMLDivElement;

if (!fileInput || !tableSelector || !rawSelector || !rawData || !tableData) {
  console.error("One or more elements not found");
} else {
  fileInput.addEventListener("change", (event) =>
    loadFile(event, rawData, tableData)
  );

  tableSelector.addEventListener("click", () => {
    tableData.style.display = "block";
    rawData.style.display = "none";
  });

  rawSelector.addEventListener("click", () => {
    tableData.style.display = "none";
    rawData.style.display = "block";
  });
}
