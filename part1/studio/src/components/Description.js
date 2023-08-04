import React from "react";
import styles from "./Description.module.css";


class RecipeDescription extends React.Component{
    render() {
        return(
            <div> 
                <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }

}

function RecipeAuthor(){
    let authorLink = "https://www.recipetineats.com/vietnamese-pho-recipe/";
    let authorPhoto = "https://www.recipetineats.com/wp-content/uploads/2018/12/nagi.jpg?resize=125,125";
    let authorName = "Nagi"; 


    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Nagi smiling" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Recipe Tin Eats</a> 
           </div>
        </div>
     )
}

export default RecipeDescription;