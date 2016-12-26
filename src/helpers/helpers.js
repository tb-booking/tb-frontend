export const sampleHelper = (data) => {
  return data.map(d => {
    return {
      value: d.id,
      text: d.firstName + ' ' + d.lastName
    };
  });
};

export const loadImage = (imgName) => {
  try {
    return require(`../../images/${imgName}`);
  } catch (e) {
    return require('../../images/imageNotFound.jpg');
  }
};
