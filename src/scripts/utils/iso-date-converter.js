function convertDate(isoDate) {
  const date = new Date(isoDate);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  const formattedDate = `${formattedTime} - ${day} ${month} ${year}`;

  return formattedDate;
}

export default convertDate;