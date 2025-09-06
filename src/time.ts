import { glyphsV2 } from "svg/svg";

type BinaryTimeNowResponse = {
  binaryTime: string;
};

export default async function getCurrentTime() {
  const res = await fetch(
    "https://ducnwydx33hrvdd3a5urwnjlm40fhbtw.lambda-url.us-west-2.on.aws?format=base64"
  );
  const data = (await res.json()) as BinaryTimeNowResponse;
  return fromBase64(data.binaryTime).slice(1);
}

function fromBase64(base64: string) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function toBase64(uint8Array: Uint8Array) {
  let binary = "";
  for (let i = 0; i < uint8Array.length; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
}
