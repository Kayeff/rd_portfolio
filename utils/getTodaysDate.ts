function getTodaysDate() {
  const today = new Date();
  const date = String(today.getDate()).padStart(2, "0");
  const month = String(today.getUTCMonth()).padStart(2, "0");
  const year = today.getUTCFullYear();

  return `${date}-${month}-${year}`;
}

export { getTodaysDate };
