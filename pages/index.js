import Navbar from "../components/Navbar" 
import Welcome from "../components/Welcome" 
import Services from "../components/Services"
import Techstack from "../components/Techstack"
import Workflow from "../components/Workflow"
import Head from "next/head" 

export default function Home() {
  return (
    <div>
      <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app"/>
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet" />
          <title>LEDGER</title>
      </Head>

      <div className="gradient text-white 1st:px-4 padding:px-[40px] 7th:px-[80px]"> 
        <Navbar /> 
        <div className="1st:py-4 6th:py-8">
          <Welcome />
        </div> 
        <Services />
        <Workflow />
        {/*<Techstack />*/}
      </div>
    </div>
  )
}