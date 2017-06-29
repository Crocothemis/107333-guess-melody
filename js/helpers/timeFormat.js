export default (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60);
  if (minutes) {
    return minutes + `&nbsp;минуту&nbsp;` + seconds + `&nbsp;секунд`;
  } else {
    return time + ` секунд`;
  }
};
