export const statSort = (statObj) => {
  return statObj.filter(isPoints).sort(compare);
};

export const getLowerResultPlayers = (statObj, pointsCount) => {
  return statObj.filter((item) => {
    if (item.points < pointsCount) {
      return statObj;
    }
    return null;
  });
};

const compare = (a, b) => {
  if (a.points < b.points) {
    return -1;
  }

  if (a.points > b.points) {
    return 1;
  }

  return 0;
};

const isPoints = (value) => {
  if (`points` in value) {
    return value;
  }
  return null;
};


