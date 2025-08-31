import readFile from "readFile";
console.log("loaded");
// Select the file input element
const fileInput = document.getElementById("csvFileInput");
const rawData = document.getElementById("rawData");
const tableData = document.getElementById("csvTableContainer");
if (fileInput) {
    fileInput.addEventListener("change", async (event) => {
        console.log({ event });
        const { files } = event.target;
        if (files === null || files === void 0 ? void 0 : files.length) {
            try {
                const raw = await readFile(files[0]);
                console.log(raw);
            }
            catch (error) {
                console.error("Error reading file:", error);
            }
            // const res = processCSV(files[0]);
            // rawData.appendChild(res.rawDisplay);
            // tableData.appendChild(res.structuredDisplay);
        }
    });
}
else {
    console.error("File input element not found");
}
