import {shuffle, sample, reduce} from 'underscore';


export const writers = [{
  name: 'Eno Raud',
  imageUrl: 'https://tnp.ee/wp-content/uploads/2016/04/eno-raud-235x300.jpg',
  books: ['Sipsik', 'Naksitrallid']
},
{
  name: 'Jaan Kross',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Jaan_Kross_%281987%29_by_Guenter_Prust.jpg',
  books: ['Kolme katku vahel', 'Tahtamaa', 'Wikmani poisid']
},
{
  name: 'A. H. Tammsaare',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Anton_Hansen_Tammsaare%2C_000290.jpg',
  imageSource: 'Wikimedia Commons',
  books: ['Tõde ja õigus', 'Kõrboja peremees', "Ma armastasin sakslast"]
},
{
  name: 'Juhan Liiv',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Juhan_Liiv.jpg',
  imageSource: 'Wikimedia Commons',
  books: ['Helin', 'Vari', "Mitte igaühele"]
},
{
  name: 'Fr. Tuglas',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Friedebert_Tuglas_1910.jpg',
  imageSource: 'Wikimedia Commons',
  books: ['Väike Illimar', 'Popi ja Huhuu']
},
{
  name: 'Oskar Luts',
  imageUrl: 'http://admin.entsyklopeedia.ee/Portreed/Luts%20Oskar%20.jpg',
  imageSource: 'Wikimedia Commons',
  books: ['Suvi', 'Kevade', "Tagahoovis"]
},
{
  name: 'Lydia Koidula',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Lydia_Koidula-Sachker.jpg/800px-Lydia_Koidula-Sachker.jpg',
  imageSource: 'Wikimedia Commons',
  books: ['Kodu', 'Sind surmani', 'Säärane mulk', 'Ema']
}
]

export const createSelectionList = (authors) => {

  const randomBooksArray = reduce(authors, (allBooks, author) => {
    let oneRandomBookArray = author.books[Math.floor(Math.random() * author.books.length)];
    return allBooks.concat(oneRandomBookArray);
  }, []);

  let fourRandomBooks = shuffle(randomBooksArray).slice(0, 4); 
  const fourBooksList = sample(fourRandomBooks);
  return {
      books: fourRandomBooks,
      author: authors.find((author)=> author.books.find((title)=>title===fourBooksList)),
      checkAnswer: function(title){
             return this.author.books.some( (t) => {
             return t === title;
          });
       },  
  }
  
}
