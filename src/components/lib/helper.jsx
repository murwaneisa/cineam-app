export function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60); // Calculate the number of hours
  const remainingMinutes = minutes % 60; // Calculate the remaining minutes

  // Format the result as "hours:minutes"
  const formattedTime = `${hours}h ${remainingMinutes}m`;

  return formattedTime;
}
