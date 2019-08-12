const a = 5;

export const getPromise = () => {
  return new Promise((resolve, reject) => {
    if (a > 2) {
      resolve('true')
    } else {
      reject('false')
    }
  });
};

