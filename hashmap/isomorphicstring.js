function isomorphicString(s, t) {
  if (s.length !== t.length) return false;

  const mapFrom1To2 = {};
  const mapFrom2To1 = {};

  for (let i = 0; i < s.length; i++) {
    const charOfS = s[i];
    const charOfT = t[i];

    if (mapFrom1To2[charOfS]) {
      if (mapFrom1To2[charOfS] !== charOfT) return false;
    } else {
      mapFrom1To2[charOfS] = charOfT; 
    }

    if (mapFrom2To1[charOfT]) {
      if (mapFrom2To1[charOfT] !== charOfS) return false;
    } else {
      mapFrom2To1[charOfT] = charOfS; 
    }
  }

  return true;
}
