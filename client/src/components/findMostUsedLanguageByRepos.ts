interface ObjectOfLanguages {
  [key: string]: number
}

const findMostUsedLanguageByRepos = (array: string[] | []) => {
  let language:ObjectOfLanguages = {};
  let object: ObjectOfLanguages = {};
  if (!array.length) { language = {"not found" : 0}
  }
  array.forEach((l) => {
    if (l in object) object[l] = object[l] + 1;
    else object[l] = 1;
  });
  const total = Object.values(object).reduce((a, b) => a + b, 0);
  for (let i in object) {
    object[i] = Math.floor((object[i] / total) * 100);
  }
  for (let i in object) {
    if (object[i] === Math.max(...Object.values(object)))
      language[i] = object[i];
  }
  return language;
};

export default findMostUsedLanguageByRepos;