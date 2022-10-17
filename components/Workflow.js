import React from 'react'
import image from "../image/work.jpg" 

const Workflow = () => {

	const work = {
		main: `
			1st:p-4
			1st:py-8

			6th:flex 
			6th:items-center
			6th:px-0
		`,
		sub_main: `
			6th:w-full
		`,
		heading: `
			1st:font-bold
			1st:text-center 

            1st:text-[20px]

            2nd:text-[29px]
            3rd:text-[38px]


            6th:text-[37px]
            6th:text-start

            padding:text-[37px]
		`,
		para_div: `
			1st:flex
			1st:flex-col
			1st:items-center
		`,
		para: `
			1st:text-center 
			1st:pt-2
			1st:list-disc

			3rd:text-[18px]

            3rd:w-[380px]
            4th:w-[450px]
            5th:w-[500px] 

            6th:w-full
            6th:text-start
		`,
		image_div: `
			1st:flex 
			1st:items-center
			1st:justify-center 

			

			6th:flex 
			6th:justify-end 
			6th:w-full
			6th:pl-4

			7th:pr-1
		`,
		image: `
			1st:rounded-[8px]
			1st:mt-4
			1st:w-[350px]

			4th:w-[450px]
			5th:w-[500px]

			6th:w-[400px]
			6th:mt-0 
			
            7th:w-[450px]

		`
	}
	return (
		<div className={`${work.main}`}>
			<div className={`${work.sub_main}`}>
				<h1
					className={`${work.heading}`}
					style={{fontFamily: "Josefin Sans"}}
				>
					HOW WE WORK
				</h1>
				<div className={`${work.para_div}`}>
					<p className={`${work.para}`}>
						We handle everything complicated so that you can
						spend your time on what matters.
					</p>

					<p className={`${work.para}`}>
						want your own website and you are thinking
                        about to grow your business online then your are at right 
                        platform.
					</p>

					<p className={`${work.para}`}>
						We handle everything complicated so that you can
						spend your time on what matters.
					</p>					
				</div>
			</div>

			<div className={`${work.image_div}`}> 
				<img src={image.src} alt="" className={`${work.image}`} /> 
			</div>
		</div>
	)
}

export default Workflow
 