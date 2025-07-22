import CategoryList from "./categoryList";

export default function Category(){
    return(
        <div class="category">
            <div className="container">
            <div className="category_content">
                <div className="content_left">

                    <h2>Explore <br></br>
                    Our Categories</h2>

                    <p>Look into yourself, get something in return as your
                    AchievementLook into yourself, get something
                    Return as your achievement</p>

                    <button className="lineButton ">Explore Categoties </button>

                </div>
                <div className="content_right">
                            <CategoryList />

                </div>

            </div>
            
        </div>
        </div>

    );
}