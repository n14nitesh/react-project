import BannerImage from "./bannerImage";

export default function Banner(){
    return(
        <div className="banner">
            <div className="bannerContent">
                <h1>Grow your Skills to Advance Your Career path</h1>
                <p>Educating, Inspiring, & Transforming Young Women. A Tution-Free Private
Meddle School</p>
            </div>
            <div class="buttonSection">
                <button class="button">Get Started</button>
                <button class="button hilighted">
                    <img src="/img/play_icon.png"alt="30px" height="20px"></img>
                Watch Video</button>
            </div>
            <BannerImage />



            
        </div> 

        
    )
}