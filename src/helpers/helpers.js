export const sampleHelper = (data) => {
  return data.map(d => {
    return {
      value: d.id,
      text: d.firstName + ' ' + d.lastName
    };
  });
};
