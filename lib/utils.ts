export const triggerEffect = (color: string, soundPath: string) => {
    const effectElement = document.createElement('div');
    effectElement.style.position = 'fixed';
    effectElement.style.top = '0';
    effectElement.style.left = '0';
    effectElement.style.width = '100%';
    effectElement.style.height = '100%';
    effectElement.style.backgroundColor = color;
    effectElement.style.opacity = '0.5';
    effectElement.style.zIndex = '1000';
    effectElement.style.transition = 'opacity 0.8s ease-out';
    document.body.appendChild(effectElement);

    const audio = new Audio(soundPath);
    audio.play();

    setTimeout(() => {
      effectElement.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(effectElement);
      }, 500);
    }, 200);
  };

export const handleCountingPoint = (event: KeyboardEvent, point: number,points: React.Dispatch<React.SetStateAction<[number,number,number]>>) => {
    switch (event.key) {
      case "i":
        points((prev) => [prev[0] + point, prev[1], prev[2]]);
        break;
      case "o":
        points((prev) => [prev[0], prev[1] + point, prev[2]]);
        break;
      case "p":
        points((prev) => [prev[0], prev[1], prev[2] + point]);
        break;
      case "I":
        points((prev) => [prev[0] - point, prev[1], prev[2]]);
        break;
      case "O":
        points((prev) => [prev[0], prev[1] - point, prev[2]]);
        break;
      case "P":
        points((prev) => [prev[0], prev[1], prev[2] - point]);
        break;
      default:
        break;
    }
  }