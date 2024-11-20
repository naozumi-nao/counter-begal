function convertDate(isoDate) {
  const date = new Date(isoDate);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${formattedHours}:${formattedMinutes} ${ampm} at ${day}/${month}/${year}`;

  return formattedDate;
}

export default convertDate;