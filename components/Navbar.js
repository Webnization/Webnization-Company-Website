import React, { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FcGlobe } from "react-icons/fc"


const Navbar = () => {

    const [list, setList] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflowY = list ? 'hidden' : 'scroll';
        body.style.overflowX = 'hidden'
    }, [list])

   const navbar = {
        main: `
            1st:flex 
            1st:justify-between 
            1st:items-center
            1st:py-2
            

            5th:py-4

            7th:py-8
            
        `,
        name_heading:`
            text-fuchsia-600
            font-bold 
            1st:text-[25px]
        `, 
        menu_bar: `
            1st:text-[20px]
            5th:hidden 
        `,

        ul: `
            ${list ? "1st:block" : "1st:hidden"}
            1st:absolute 
            1st:top-0 
            1st:right-0 
            1st:left-0 
            1st:bottom-0
            1st:bg-[#131227]
            1st:p-3
            1st:text-[13px]

             
            5th:static 
            5th:bg-inherit 
            5th:flex
            5th:items-center 
            5th:p-0
        `,

        cut: `
            1st:text-[20px]
            5th:hidden
        `,
        li:`
            1st:pt-2

            5th:pt-0
            5th:px-2
        `,
        button: `
            1st:mt-2 
            1st:bg-fuchsia-800
            1st:py-2
            1st:px-4
            1st:rounded 

            5th:mt-0
            5th:ml-2 
            5th:py-3
            5th:px-6


        `,
        
    }

    return (
        <div className={`${navbar.main}`}>
            

            
            <h1 
                className={`${navbar.name_heading}`}
            > 
                webnization    
            </h1>
            

            <HiMenuAlt3 className={`${navbar.menu_bar}`} onClick={() => setList(true)}/>

            <ul className={`${navbar.ul}`}>
                <HiX className={`${navbar.cut}`} onClick={()=>setList(false)}/>
                {
                    ["HOME", "BLOGS", "SERVICES", "PROJECTS", "ABOUT US"] 
                    .map((item, index) => <li key={index} style={{fontFamily:"Josefin Sans"}} className={`${navbar.li}`}>{item}</li>)
                }
                <button className={`${navbar.button}`}>CONTACT</button>
            </ul>
        </div>
    )
} 

export default Navbar 
