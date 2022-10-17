import React, { useState } from 'react'
import ether from "../image/ether.png"
import { FiArrowRight } from "react-icons/fi"
import { ImCheckboxUnchecked, ImCheckboxChecked} from "react-icons/im"

const Welcome = () => {
    
    const welcome = {
        main: `
            1st:bg-[rgba(255,255,255,.1)]
            1st:rounded 

            1st:p-4
            3rd:p-6
            5th:p-10

            6th:p-0
            6th:flex
            6th:items-center 
            6th:justify-betwwen 

            6th:bg-inherit  
        `,
        heading_div: `
        	1st:flex
        	1st:justify-center
        	1st:flex-col
        	1st:items-center

            6th:w-full
            r 
        `,
        heading: ` 
            1st:font-bold
            1st:text-center  
            1st:text-[22px]

            2nd:text-[30px]
            3rd:text-[38px]


            6th:text-[37px]
            6th:text-start
            6th:w-full
            7th:text-[42px] 
        `,
        para: `
            1st:text-center 
            1st:my-2

            3rd:text-[18px]

            3rd:w-[380px]
            4th:w-[450px]
            5th:w-[500px]

            6th:text-start
            6th:w-full 
        `,

        button_div: ` 
            1st:flex
            1st:justify-center 

            6th:w-full
            6th:justify-start
        `,
        button1: `
            1st:bg-fuchsia-800
            1st:rounded
            1st:py-1
            1st:px-2 
            1st:mt-2

            2nd:py-2
            2nd:px-4
        `,

        image_div: `
            1st:hidden  

            6th:block
            6th:w-full
            6th:flex
            6th:items-center 
            6th:justify-end  

        `,
        image: `
            6th:w-[400px]
            7th:w-[450px]
        `,
    }

    return (
        <>
            <div className={`${welcome.main}`}>
                <div className={`${welcome.heading_div}`}>
                    <h1 
                        style={{fontFamily: "Josefin Sans"}}
                        className={`${welcome.heading}`}
                    >
                        WANT TO GROW <br/> BUSINESS ONLINE? 
                    </h1>

                    <p 
                        className={`${welcome.para}`}
                    >
                        We handle everything complicated so that you can
                        spend your time on what matters. 
                    </p> 

                    <p 
                        className={`${welcome.para}`}
                    >
                        want your own website and you are thinking
                        about to grow your business online then your are at right 
                        platform. 
                    </p>

                     

                    <div className={`${welcome.button_div}`}>
                       <button className={`${welcome.button1}`}>GET STARTED</button>     
                    </div>
                </div>

                <div className={`${welcome.image_div}`}>
                    <img 
                        src={ether.src}  
                        alt="" 
                        className={`${welcome.image}`}
                    />
                </div>
            </div>
        </>
    )
}

export default Welcome