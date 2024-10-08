import React from 'react'
import Footer from "../componentes/Footer/Footer"
import "../styles/Lab.css"
import { LuFlaskRound } from "react-icons/lu";
import LabScroller from '../componentes/LabScroller/LabScroller'
const OurLab = () => {
  return (
    <>
    <main data-bs-theme="dark" id="main" >
      <p className="text-end"><kbd className="display-1"><LuFlaskRound />The Lab</kbd></p>
      <div id="divider"><div id="lineA"></div></div>
      <div id="dividerA"><div id="lineB"></div></div>
      <div className="row">

      <div className="col ms-3 container text-bg-dark">
          <p className="pt-3 pb-3">
        <kbd className="pt-2 pb-2">
        Our Labs Contain promising Experiments That can be use for future projects. The team of Noyau is constantly exploring new technologies. Try to manage All cool ideas in our lab.
        </kbd>
          </p>
      </div>
      <div className="col-4"></div>
      </div>


    </main>
      <LabScroller />
      <div className="bg-primary" id="row">
        .
      </div>
    <Footer id="footer"/>
    
    </>
  )
}

export default OurLab