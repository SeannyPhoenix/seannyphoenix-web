import clock from "components/clock";
import { loadFile } from "./fileHandlers";
import { glyph } from "svg/svg";

const fileInput = document.getElementById("csvFileInput") as HTMLInputElement;

const tableSelector = document.getElementById(
  "tableSelector"
) as HTMLDivElement;
const rawSelector = document.getElementById("rawSelector") as HTMLDivElement;

const rawData = document.getElementById("rawDataContainer") as HTMLDivElement;
const tableData = document.getElementById(
  "tableDataContainer"
) as HTMLDivElement;

const currentTime = document.getElementById("currentTime") as HTMLDivElement;

if (
  !fileInput ||
  !tableSelector ||
  !rawSelector ||
  !rawData ||
  !tableData ||
  !currentTime
) {
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

  clock(currentTime);
}
