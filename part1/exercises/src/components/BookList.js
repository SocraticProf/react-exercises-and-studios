export default function BookList() {
   let pageTitle = "Books I Need to Read Before Purchasing More Books";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Andromeda_Evolution.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51dR2AFYDSL._SL500_.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/5/56/The_Volunteer_%28book%29.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Cover image of The Andromeda Evolution" />
         <img src={book2} alt="Cover image of Anthem" />
         <img src={book3} alt="Cover image of The Volunteer: One Man, an Underground Army, and the Secret Mission to Destroy Auschwitz" />
      </div>      
   );
}