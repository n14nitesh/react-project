import Navigation from "./navigation";

export default function Headers({
   navLinksJson = [
	{
		name: "Home",
		link: "#",
	},
	{
		name: "Course",
		link: "#",
	},
	{
		name: "Blogs",
		link: "#",
        cls:"afjafjl"
	},
	{
		name: "About US",
		link: "#"
	},
	{
		name: "Contact Us ",
		link: "#",
	},
],
loginJson = [
	{
		name: "Register",
		link: "#",
	},
	{
		name: "Login",
		link: "#",
        cls:"loginClass"
	},
	
]
}){
    return(
        <header className="headerComp">
            <div className="container">
            <div className="headerInner">
                <div className="logo">
                    <a href="#"><img src="/img/education_logo.png" /></a>
                </div>
                    <Navigation data={navLinksJson} />
                    <Navigation data={loginJson} />
            </div>
            </div>
        </header>
    );
}
