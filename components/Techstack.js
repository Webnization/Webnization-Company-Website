import React from 'react'
import { techstack_object } from "./serviceObject"

const Techstack = () => {

	const techstack = { 
		main: ` 
			1st:py-2
		`,
		main_heading:`
			1st:font-bold 
			1st:text-center

            1st:text-[22px]

            2nd:text-[30px]
            3rd:text-[38px]


            6th:text-[30px] 
		`,
		techstack_main: `
			1st:grid 
			1st:grid-cols-2
			1st:gap-x-4

			2nd:grid-cols-3

			7th:grid-cols-6
			
			
		`,
		sub_techstack: ` 
			1st:my-2
			1st:flex 
			1st:flex-col 
			1st:justify-start
			1st:items-center
			1st:rounded-[8px] 
			1st:bg-[rgba(255,255,255,.1)]
			1st:p-3  
		`,
		image: `
			1st:w-[50px]
			2nd:w-[60px]
			3rd:w-[70px]

			6th:w-[80px]

			7th:w-[50px]
		`,
		heading: `
			1st:font-bold
			1st:mt-2
			1st:text-[11px]
		`,
		para: `
			1st:pt-2
			1st:text-center  
		`
	}  

	return (
		<>
			<div className={`${techstack.main}`}>

				
				<h1 
					style={{fontFamily: "Josefin Sans"}}
					className={`${techstack.main_heading}`}
				>
					OUR TECH STACK   
				</h1>

				<div className={`${techstack.techstack_main}`}>
					{
						techstack_object.map((item, index) => {
							return (
								<div className={`${techstack.sub_techstack}`}>
									<img src={item.icon} alt="" className={`${techstack.image}`}/> 
									<h1
										style={{fontFamily: "Josefin Sans"}}
										className={`${techstack.heading}`}
									>
										{item.name}
									</h1>  
								</div>
							) 
						})
					}
				</div>
			</div>
		</>
	)
}

export default Techstack