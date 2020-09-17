const tenMinuteWalk = (directionsArray) => {
  let n = [];
  let s = [];
  let e = [];
  let w = [];
  directionsArray.forEach((direction) => {
    if (direction === "n") {
      n.push(direction);
    } else if (direction === "s") {
      s.push(direction);
    } else if (direction === "e") {
      e.push(direction);
    } else w.push(direction);
  });
  if (
    n.length === s.length &&
    e.length === w.length &&
    directionsArray.length === 10
  ) {
    return true;
  } else return false;
};

module.exports = tenMinuteWalk;
