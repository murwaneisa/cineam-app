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

function getRandomDateAndTime() {
  const today = new Date();
  const futureDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Adding a week (7 days) to today's date
  const randomTimestamp =
    today.getTime() + Math.random() * (futureDate.getTime() - today.getTime());
  const randomDate = new Date(randomTimestamp);
  // Generate a random time between 14:00 and 20:00
  const randomHour = 14 + Math.floor(Math.random() * 7); // Random hour between 14 and 20
  randomDate.setHours(randomHour, 0, 0, 0);
  return randomDate.toString().slice(0, 21);
}

export const screening = (movies) => {
  const screenings = [];
  for (const movie of movies) {
    screenings.push({
      auditoriumId: Math.floor(Math.random() * 2) + 1,
      time: getRandomDateAndTime(),
      movieId: movie.id,
    });
  }

  return screenings;
};
