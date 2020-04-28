const speeds = [{ '0.5x': 0.5 }, { '1x': 1 }, { '1.5x': 1.5 }, { '2x': 2 }];
let currentSpeed = speeds[1];

function getKeyValue(currentSpeed) {
  return Object.keys(currentSpeed);
}

const interval = setInterval(() => {
  const header = document.querySelector('._3auIg');

  if (header) {
    clearInterval(interval);

    const button = document.createElement('button');

    button.innerHTML = getKeyValue(currentSpeed);
    button.classList.add('twoTimesButton');

    button.addEventListener('click', () => {
      const audios = document.querySelectorAll('audio');
      const indexOfCurrtentSpeed = speeds.findIndex(
        (speed) => speed === currentSpeed
      );

      if (audios.length) {
        currentSpeed =
          speeds.length - 1 !== indexOfCurrtentSpeed
            ? speeds[indexOfCurrtentSpeed + 1]
            : speeds[0];

        button.innerHTML = getKeyValue(currentSpeed);

        audios.forEach((audio) => {
          audio.onplay = () =>
            (audio.playbackRate = currentSpeed[getKeyValue(currentSpeed)]);

          audio.playbackRate = currentSpeed[getKeyValue(currentSpeed)];
        });
      }
    });

    header.appendChild(button);
  }
}, 1000);
