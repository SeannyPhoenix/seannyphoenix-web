import { glyphsV2 } from "svg/svg";
import getCurrentTime from "time";

export default function clock(root: HTMLElement) {
  const clockBox = document.createElement("div");
  const stopButton = document.createElement("button");

  const i = setInterval(() => {
    getCurrentTime().then((time) => {
      clockBox.innerHTML = glyphsV2(time);
    });
  }, 300);

  window.addEventListener("unload", () => clearInterval(i));
  stopButton.onclick = () => {
    clearInterval(i);
    stopButton.disabled = true;
  };
  stopButton.textContent = "Stop Clock";

  root.appendChild(clockBox);
  root.appendChild(stopButton);
}
