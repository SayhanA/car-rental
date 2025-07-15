export const dateFormate = (dateStr) => {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const weekday = date.toLocaleString("en-US", { weekday: "long" });

  const formattedDate = `${day} ${month} ${year}, ${weekday}`;

  return formattedDate;
};
