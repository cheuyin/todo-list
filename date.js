function getDate() {
  const today = new Date();

  const dateFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  
  const day = today.toLocaleDateString("en-US", dateFormatOptions)

  return day;
}

module.exports = getDate;