/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let loveTrianglesCounter = 0;

  preferences.forEach(function(firstPersonPreference, i, preferences){
    
    if (i < 0) return;
    
    firstPerson = i;
    secondPerson = firstPersonPreference - 1;
    thirdPerson = preferences[secondPerson] - 1;
    thirdPersonPreference = preferences[thirdPerson] - 1;

    if (preferences[firstPerson] == preferences[secondPerson] || 
        preferences[secondPerson] == preferences[thirdPerson] || 
        preferences[thirdPerson] == preferences[firstPerson]) 
        return;

    if (firstPerson == thirdPersonPreference){
      loveTrianglesCounter++;
      preferences[firstPerson] = preferences[secondPerson] = preferences[thirdPerson] = -1;
    } else {
      preferences[firstPerson] = -1;
    }

  });

return loveTrianglesCounter;

};
