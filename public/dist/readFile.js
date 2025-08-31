export default async function readFile(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
        reader.onload = () => {
            if (reader.result) {
                resolve(reader.result);
            }
            else {
                reject(new Error("Failed to read file"));
            }
        };
        reader.onerror = () => {
            reject(new Error("Error reading file"));
        };
        reader.readAsText(file);
    });
}
