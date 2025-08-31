import { processCSV } from "csv";

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

async function loadFile(event: Event) {
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
