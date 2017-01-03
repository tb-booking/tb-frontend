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
  return date.toISOString().substr(0, 10);
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
