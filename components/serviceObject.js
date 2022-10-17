import { FcAndroidOs } from "react-icons/fc"
import { FcSupport } from "react-icons/fc" 
import { FcGlobe } from "react-icons/fc"
import { FcServices } from "react-icons/fc"
import { FcShop } from "react-icons/fc"
import { BsWordpress } from "react-icons/bs"

import react from "../image/react.png" 
import node from "../image/nodejs.png"
import netframe from "../image/netframe.png"
import java from "../image/java.png" 
import python from "../image/python.png"
import clang from "../image/clang.png"

export const service_object =  [
	{
		icon: <FcGlobe className="1st:text-4xl 2nd:text-5xl" />, 
		name: "WEB DEVELOPMENT", 
		shortDecscription: `
			A Website is like your Identity
			card of your business, and when you create 
			a Website you have to very sure is your
			Website is sacalable, reliable, secure 
			and fast 
		` 
	},
	{ 
		icon: <FcShop className="1st:text-4xl 2nd:text-5xl" />,
		name: "E-COMMERCE", 
		shortDecscription:  `
			A Website is like your Identity
			card of your business, and when you create 
			a Website you have to very sure is your
			Website is sacalable, reliable, secure 
			and fast
		`  
	},
	{
		icon: <FcSupport className="1st:text-4xl 2nd:text-5xl" />,
		name: "WEB MAINTENANCE", 
		shortDecscription:  `
			A Website is like your Identity
			card of your business, and when you create 
			a Website you have to very sure is your
			Website is sacalable, reliable, secure 
			and fast
		` 
	},
	{
		icon: <FcAndroidOs className="1st:text-4xl 2nd:text-5xl" />,
		name: "APP DEVELOPMENT",
		shortDecscription:  `
			A Website is like your Identity
			card of your business, and when you create 
			a Website you have to very sure is your
			Website is sacalable, reliable, secure 
			and fast
		`
	},
	{
		icon: <FcServices className="1st:text-4xl 2nd:text-5xl" />,
		name: "SOFTWARE DEVELOPMENT",
		shortDecscription:  `
			A Website is like your Identity
			card of your business, and when you create 
			a Website you have to very sure is your
			Website is sacalable, reliable, secure 
			and fast
		` 
	},
	{
		icon: <BsWordpress className="1st:text-4xl 2nd:text-5xl" />,
		name: "WORDPRESS DEVELOPMENT",
		shortDecscription:  `
			A Website is like your Identity
			card of your business, and when you create 
			a Website you have to very sure is your
			Website is sacalable, reliable, secure 
			and fast
		` 
	}
]


export const techstack_object = [ 
	{
		icon: react.src,
		name: "REACT JS"  
	},
	{
		icon: node.src,
		name: "NODE JS"  
	},
	{
		icon: netframe.src,
		name: ".NET"   
	},
	{
		icon: java.src, 
		name: "JAVA"  
	},
	{
		icon: python.src, 
		name: "PYTHON" 
	},
	{
		icon: clang.src,
		name: "C++" 
	}
]

export const count_object = [
	{
		count: "60+",
		name: "EMPLOYEES"   
	},
	{
		count: "10+",
		name: "COSTUMERS"  
	},
	{
		count: "10+",
		name: "PROJECTS"  
	},
	{
		count: "10+",
		name: "5 STAR RATING"  
	}
]