import React from "react"
import Link from 'next/link'
import { service_object, techstack } from "./serviceObject"
import image from "../image/services.png"


const Services = () => {

	const service = {
		main: `
			7th:py-5
		`,
		main_heading_box: `
			1st:p-4
			1st:flex 
			1st:flex-col 
			1st:pt-8

			3rd:p-6
            5th:p-10

            6th:p-0 


		`,

		heading_box: `
			1st:flex
			1st:flex-col
			1st:items-center

			6th:w-full
		`,

		main_heading:`
			1st:font-bold 
			1st:text-center

            1st:text-[22px]

            2nd:text-[30px]
            3rd:text-[38px]


            6th:text-[30px]
		`,

		main_para: `
			1st:text-center 
            1st:my-2

            3rd:text-[18px]

            3rd:w-[380px]
            4th:w-[450px]
            5th:w-[500px]

            6th:hidden
            
		`,

		image_div: `
			1st:flex 
			1st:items-center
			1st:justify-center 

			3rd:hidden
		`,

		image: `
			1st:w-[350px]
			3rd:w-[400px]
			4th:w-[500px]
			5th:w-[600px]
			6th:w-[400px]
            7th:w-[450px]
		`,

		service_main: `
			1st:grid 
			1st:grid-cols-1

			4th:grid-cols-2
			4th:gap-x-4

			7th:grid-cols-3
			
			
		`,
		sub_service: ` 
			1st:my-2
			1st:flex 
			1st:flex-col 
			1st:justify-start
			1st:items-center 
			1st:rounded-[12px] 
			1st:bg-[rgba(255,255,255,.1)]
			1st:p-4
		`,

		heading: `
			1st:font-bold
			1st:mt-2
			1st:text-[13px]
		`,
		para: `
			1st:pt-2
			1st:text-center  
		`
	} 

	console.log(service_object)  

	return (
		<>
			<div className={`${service.main}`}>

				<div className={`${service.main_heading_box}`}>
					<div className={`${service.heading_box}`}>
						<h1 
							style={{fontFamily: "Josefin Sans"}}
							className={`${service.main_heading}`}
						>
							OUR SERVICES 
						</h1>

						<p className={`${service.main_para}`}>
							We handle everything complicated so that you can
							spend your time on what matters.
						</p>

						<p className={`${service.main_para}`}>
							want your own website and you are thinking about 
							to grow your business online then your are at 
							right platform.
						</p>
					</div>

					<div className={`${service.image_div}`}>
						<img src={image.src} alt="" className={`${service.image}`} /> 
					</div>
				</div>
			
							


				<div className={`${service.service_main}`}>
					{
						service_object.map((item, index) => {
							return (
								<div className={`${service.sub_service}`} key={index}>
									{item.icon} 
									<h1
										style={{fontFamily: "Josefin Sans"}}
										className={`${service.heading}`}
									>
										{item.name}
									</h1>  
									<p className={`${service.para}`}>{item.shortDecscription} <Link href="/"><a>more...</a></Link></p>
								</div>
							) 
						})
					}
				</div>
			</div>
		</>
	)
}

export default Services