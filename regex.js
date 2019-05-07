const div = (/<div class="lister-item-content">(.*?)<\/div>\n\s*<\/div>\n\s*<div class="lister-item mode-advanced">/gms);
const title= (/<a href="\/title\/.*?\/\?ref_=adv_li_tt"\n?>(.*?)<\/a>/);
const year= (/<span class="lister-item-year text-muted unbold">\((.*?)\)<\/span>/);
const certificate = (/<span class="certificate">(.*?)<\/span>/);
const runtime= (/<span class="runtime">(\d{2,3}) min<\/span>/)
const genreGlobal =(/<span class="genre">\n(\w*),\s(\w*),\s(\w*).*?\s*?<\/span>/);
const genree=(/<span class="genre">\n(\w*),\s(\w*).*?\s*?<\/span>/);
const genre=(/<span class="genre">\n(\w*).*?\s*?<\/span>/);
const description=(/<p class="text-muted\s?">\n(.*?)<\/p>/);
const hrefDescription= (/<a href=\"\/title\/tt\d+\">/);
const lienDescription=(/<a href=\"\/name\/nm\d+\">/);
const aDecription=(/<\/a>/);
const rating=(/data-value=\"(.*?)\"/i);
const metascore= (/"metascore  (favorable|mixed|unfavorable)">(.*?)\s*?<\/span>/);
const directorGlobal=(/Directors?:\n<a href="\/name\/.*?\/?ref_=adv_li_dr_0"\n>(.*?)<\/a>/);
const director = (/Directors?:\n<a href="\/name\/.*?\/?ref_=adv_li_dr_0"\n>(.*?)<\/a>,\n*\s*<a href="\/\w*\/\w*\d*\/\?\w*_=\w*_\w*_\w*_\d*"\n*>(.*?)<\/a>/);
const stars =(/Stars?:\n<a href="\/name\/nm[0-9]+\/\?ref_=adv_li_st_\d"\n>(.*?)<\/a>,*\s*<a.*\n?\s*>(.*?)<\/a>,*\s*<a.*?\s*>(.*?)<\/a>,\n*\s*<a.*?\s*>(.*?)<\/a>/);
const votes =(/Votes:<\/span>\s*?<span name="nv" data-value="(\d*?)">/);
const gross = (/Gross:<\/span>\s*?<span name="nv" data-value=".*?">\$(\d*\.\d*)M<\/span>/si);

module.exports = {div,title,year,certificate,genre,genree,description,runtime,rating,metascore,directorGlobal,stars,votes,gross,lienDescription,aDecription,hrefDescription,genreGlobal,director}