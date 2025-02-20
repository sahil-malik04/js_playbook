function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  console.log(time);
}

setInterval(() => {
  showTime();
}, 1000);
