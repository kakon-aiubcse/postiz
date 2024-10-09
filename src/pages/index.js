import React from "react";
import Header from "../pages/component/header";
import Homepage from "./homepage";
import PC from "./platformcomparison";
import PP from "./priceandplan";
import SP from "./schedulingandpublish";
import AR from "./analysisandreporting";
import TA from "./teamsandapprovals";
import SMI from "./socialmediainbox";
import Summary from "./summary";
import CA from "./comparealt";
import FQ from "./faq";
import GS from "./getstart";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />

        <section className="bg-[rgba(14,14,14,1)] relative  xs:relative xs:top-[-10px]">
          <Homepage />
        </section>

        <div className=" bg-[rgba(14,14,14,1)] relative h-screen">
          <section className="absolute top-[-500px] xs:relative xs:top-[-100px] w-full z-10 ">
            <PC />
          </section>

          <section className="absolute top-[-20px] xs:relative xs:top-[-200px] bottom-0 w-full z-10">
            <PP />
          </section>
          <section className="absolute top-[1600px] bottom-0 w-full z-10">
            <SP />
          </section>
          <section className="absolute top-[4080px] bottom-0 w-full z-10">
            <AR />
          </section>
          <section className="absolute top-[6350px] bottom-0 w-full z-10">
            <TA />
          </section>
          <section className="absolute top-[6950px] bottom-0 w-full z-10">
            <SMI />
          </section>
          <section className="absolute top-[8400px] bottom-0 w-full z-10">
            <Summary />
          </section>
          <section className="absolute top-[8800px] bottom-0 w-full z-10">
            <CA />
          </section>
          <section className="absolute top-[9500px] bottom-0 w-full z-10">
            <FQ />
          </section>
          <section className="absolute top-[10400px] bottom-0 w-full z-10">
            <GS />
          </section>
          <section className="absolute top-[11120px] bottom-0 w-full z-10">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
