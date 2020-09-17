const tenMinuteWalk = (directionsArray) => {
  const n = directionsArray.filter((direction) => direction === "n");
  const s = directionsArray.filter((direction) => direction === "s");
  const w = directionsArray.filter((direction) => direction === "w");
  const e = directionsArray.filter((direction) => direction === "e");

  if (
    n.length === s.length &&
    e.length === w.length &&
    directionsArray.length === 10
  ) {
    return true;
  } else return false;
};

module.exports = tenMinuteWalk;
