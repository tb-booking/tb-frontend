export const sampleHelper = (data) => {
  return data.map(d => {
    return {
      value: d.id,
      text: d.firstName + ' ' + d.lastName
    };
  });
};

/**
 * Format date as date string
 * @param {Date} date - input date
 * @returns {string} - e.g. 2017-01-01
 */
export const formatDateAsDateString = (date) => {
  const y = date.getFullYear();
  const m = ('0' + (date.getMonth() + 1)).slice(-2);
  const d = ('0' + date.getDate()).slice(-2);
  return `${y}-${m}-${d}`;
};

/**
 * Format date for datepicker plugin
 * @param {Date} date - input date
 * @returns {Date} - for datepicker
 */
export const formatDateForDatepicker = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
};

/**
 * Get image url by name
 * @param {string} imgName - image name
 * @returns {string} - image url
 */
export const getImageUrl = (imgName) => {
  try {
    return require(`../../images/${imgName}`);
  } catch (e) {
    return require('../../images/imageNotFound.jpg');
  }
};

/**
 * Converts seconds (from the beginning of the day) to readable time
 * @param {number} sec - seconds amount
 * @returns {string} - readable time (14:25)
 */
export const convertSecToTime = (sec) => {
  const h = String('0' + ~~(sec / 3600)).slice(-2);
  const m = String('0' + ~~((sec - h * 3600) / 60)).slice(-2);
  return `${h}:${m}`;
};

/**
 * Converts time string to seconds amount (from the beginning of the day)
 * @param {string} time - readable time
 * @returns {number} - seconds
 */
export const convertTimeToSec = (time) => {
  const splitTime = time.split(':');
  return (parseInt(splitTime[0]) * 60 + parseInt(splitTime[1])) * 60;
};

/**
 * Chose and sort games schedules
 * @param {array} gamesSchedules - games schedules
 * @param {string} gameId - chosen game id
 * @param {string} pickedDate - chosen date
 * @returns {array} - sorted gamesSchedules for chosen game and date
 */
export const getSortedScheduleForChosenDate = (gamesSchedules, gameId, pickedDate) => {
  const compareSchedules = (a, b) => {
    if (a.startTime < b.startTime) {
      return -1;
    } else if (a.startTime > b.startTime) {
      return 1;
    }
    return 0;
  };

  const gameSchedules = gamesSchedules.reduce((schedules, currentScheduleItem) => {
    if (currentScheduleItem.gameId === gameId && currentScheduleItem.date === formatDateAsDateString(pickedDate)) {
      schedules.push(currentScheduleItem);
    }
    return schedules;
  }, []);

  gameSchedules.sort(compareSchedules);
  return gameSchedules;
};
