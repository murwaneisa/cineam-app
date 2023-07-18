export function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60); // Calculate the number of hours
  const remainingMinutes = minutes % 60; // Calculate the remaining minutes

  // Format the result as "hours:minutes"
  const formattedTime = `${hours}h ${remainingMinutes}m`;

  return formattedTime;
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "long", // "long" specifies the full month name
    day: "numeric",
  };

  const englishFormatter = new Intl.DateTimeFormat("en-US", options);
  return englishFormatter.format(date);
};

export const languageCodeToName = (languageCode, targetLocale) => {
  try {
    // Create an Intl.DisplayNames object with the desired language display names.
    const displayNames = new Intl.DisplayNames([targetLocale], {
      type: "language",
    });
    return displayNames.of(languageCode);
  } catch (error) {
    // If the provided language code is not valid or not recognized, return the code itself.
    return languageCode;
  }
};
