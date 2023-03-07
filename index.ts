class Algorithm {
  private timestamp: string;
  constructor(timestamp: string) {
    this.timestamp = timestamp;
  }
  public Work(): string {
    let result: string = this.Hash(this.timestamp);
    return result.replaceAll(",", "");
  }
  private randomWord(): string {
    let wordsOrKeys: string[] = ["0x29a1", "0x80", "0x81"];
    return wordsOrKeys[Math.floor(Math.random() * wordsOrKeys.length)];
  }
  private randomNumber(): string {
    return Math.floor(
      Math.random() * Math.floor(Math.random() * 8000)
    ).toString();
  }
  private Hash = (timestamp: string): string => {
    let timeStampToArray: string[] = timestamp.split("");
    let newTimeStamp: string[] = [];
    let generated: number = Math.floor(Math.random() * timeStampToArray.length);
    if (generated === 0 || generated === 1) {
      generated++;
    }
    for (let i: number = 0; i < timeStampToArray.length; i++) {
      if (i === generated) {
        newTimeStamp.push(this.randomWord());
      } else {
        newTimeStamp.push(timeStampToArray[i]);
      }
    }

    // Reverse
    generated = Math.floor(Math.random() * newTimeStamp.length);
    for (let i: number = newTimeStamp.length; i > 0; i--) {
      if (i === generated) {
        newTimeStamp.push(this.randomWord());
      } else {
        newTimeStamp.push(newTimeStamp[i]);
      }
    }

    // Additional

    let random: number = Math.floor(Math.random() * newTimeStamp.length);
    newTimeStamp[random] = this.randomNumber();

    return newTimeStamp.toString();
  };
}

let hash: Algorithm = new Algorithm("victor");

console.log(hash.Work());
