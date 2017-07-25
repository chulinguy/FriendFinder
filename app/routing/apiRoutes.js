var friends = require('../data/friends.json')

const apiRoutes = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(friends)
  });
  app.post('/api/friends', (req, res) => {
    console.log(req.body);
    //compatibility logic
    var user = req.body;  
    var potentials = friends; 
    if (user.preference === 'female') potentials = friends.filter((v) => (v.gender === 'female'))
    else if (user.preference === 'male') potentials = friends.filter((v) => (v.gender === 'male'))
    var potentialCompat = potentials.map((char) => {
      var compatibility = char.scores.reduce((acc, v, i) => (acc + Math.abs(v - user.scores[i])));
      return {name: char.name, compatibility: compatibility, photo: char.photo}
    });
    var bestMatch = potentialCompat.reduce((acc, v) => (acc.compatibility < v.compatibility ? acc : v));
    console.log(`Your Best Match is ${bestMatch.name} with a compatibility of ${bestMatch.compatibility}`)
    res.json(bestMatch);
  });
}

module.exports = apiRoutes; 