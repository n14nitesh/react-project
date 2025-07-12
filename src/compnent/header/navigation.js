export default function Navigation({

 data = [
	{
		name: "Home",
		link: "#",
	},
	{
		name: "Yash",
		link: "#",
	},
	{
		name: "Raj",
		link: "#",
	},
	{
		name: "Rohan",
		link: "#"
	},
	{
		name: "Puneet",
		link: "#",
	},
	{
		name: "Vivek",
		link: "#",
	},
	{
		name: "Aman",
		link: "#",
	}
]
}){
    return(
        <nav className="navLink">
            <ul>
                {data.map((item, i) => (
                    <li className={item.cls} key={i}> 
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}