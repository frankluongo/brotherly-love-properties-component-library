export default function firstLetter(string) {
  if (string && typeof string === "string") {
    return string.charAt(0).toUpperCase();
  }
  return "";
}
