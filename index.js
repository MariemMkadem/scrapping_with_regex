const fetch =require ('node-fetch');
const fs = require('fs');
const { get, trim, map } = require('lodash');
const {
  div, title, year, runtime, genre, description, rating, metascore, directorGlobal, stars, votes, gross,genree,lienDescription,aDecription,hrefDescription,genreGlobal,director
} = require('./regex.js');


(async function fetchData() {

  
  const url= "https://www.imdb.com/search/title?title_type=feature,tv_series&count=250&start=0&ref_=adv_nxt"
  try {
    
    const response = await fetch(url);
    const data = await response.text();
    const body = data.match(div).map(item => ({
      title: item.match(title)[1],
      year: parseInt(trim(get(item.match(year), 1, null))),
      runtime: parseInt(trim(get(item.match(runtime), 1, null))),
      genre: map([1,2,3], x=>trim(get(item.match(genreGlobal),x,trim(get(item.match(genree),x,trim(get(item.match(genre),x,""))))))),
      description: trim(get(item.match(description), 1, null)).replace(hrefDescription,'').replace(aDecription,'').replace(lienDescription,'').replace(aDecription,'').replace(lienDescription,'').replace(aDecription,''),  
      rating: parseFloat(trim(get(item.match(rating), 1, null))),
      metascore: parseInt(trim(get(item.match(metascore), 2, null))),
      directors:map([1,2],x=> trim(get(item.match(directorGlobal), x, trim(get(item.match(director), x, null))))),
      stars: map([1, 2, 3, 4], x => trim(get(item.match(stars), x, null))),
      votes: parseInt(trim(get(item.match(votes), 1, null))),
      gross: parseFloat(trim(get(item.match(gross), 1, null))),
    }));
    
    fs.writeFile('movies.json', JSON.stringify(body, null, 2), (err) => {
      if (err) throw err;
      console.log('Saved!');

    });
  } catch (err) {
    console.log(err);
  }
}());


