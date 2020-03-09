function getCount(str) {
    var vowelsCount = 0;
    ([...str]).map((vowels) => vowels.match(/[aieou]/) ? vowelsCount++ : null );
    return vowelsCount;
  }

  console.log(getCount("abrabraeeeegahtuuu"));
  console.log(getCount("haminikehakljhohst"));
  console.log(getCount("borobabaaaaa"));

  