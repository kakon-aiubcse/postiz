import React from "react";

const SMI = () => {
  return (
    <>
      <div
        className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden
      xs:flex xs:flex-col xs:bg-[rgba(14,14,14,1)] xs:p-2 xs:text-white xs:min-h-screen xs:overflow-x-hidden"
      >
        <div
          className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen 
        xs:flex xs:flex-col xs:bg-[rgba(14,14,14,1)] xs:p-2 xs:text-white xs:min-h-screen"
        >
          <h1
            className="flex font-jakarta w-[864px] h-[53px] mb-10 text-[48px] whitespace-nowrap
           text-center font-bold justify-center items-center mx-auto py-8
           xs:flex xs:font-jakarta xs:w-[330px] xs:h-[35px] xs:mb-10 xs:text-[] xs:text-center xs:font-bold xs:justify-center
           xs:items-center xs:mx-auto xs:py-8"
          >
            <p className="xs:text-[33px] xs:leading-[30px]">
              Social Media Inbox
            </p>
          </h1>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[572px] h-[1200px] left-[45px] rounded-[20px] 
          xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative xs:flex-col xs:min-h-auto xs:justify-center
          xs:items-center xs:top-[0px] xs:left-[10px] xs:w-[330px] xs:h-[1100px]  xs:rounded-[20px] "
          >
            <div
              className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-330px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:relative xs:left-[50px] xs:top-[-320px] "
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[325px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] 
              font-jakarta font-bold text-2xl 
              xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:left-[25px] xs:text-[rgba(219,219,219,1)]
              xs:font-jakarta xs:bold xs:text-xl"
              >
                Postiz-Social Media Inbox
              </h1>
            </div>
            {/* essentials*/}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-390px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-390px] xs:left-[80px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[290px] w-[414px] h-[80px] 
              text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
              xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:right-[5px] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Essentials
              </h1>
              <ul
                className="space-y-2 relative right-[-108px] top-[350px]
              xs:space-y-2 xs:relative xs:right-[-112px] xs:top-[]"
              >
                <li className="flex items-center relative top-[10px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Add Labels to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[4px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Create Custom Automations
                  </span>
                </li>
                <li className="flex items-center relative top-[-4px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Bulk Actions
                  </span>
                </li>
              </ul>
            </div>
            {/*facebook */}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[135px] left-[px]
              xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[115px] xs:left-[130px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[43px] top-[-185px] w-[414px] h-[80px] 
              text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:left-[-53px] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Instagram
              </h1>
              <ul
                className="space-y-2 relative left-[67px] top-[-115px]
               xs:space-y-2 xs:relative xs:right-[] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px]  xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px]  xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px]  xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyMention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyReply
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-490px] left-[-48px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-500px] xs:left-[80px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-5px] top-[500px] w-[414px] 
              h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
              xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:left-[-0px] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Facebook
              </h1>
              <ul
                className="space-y-2 relative right-[-120px] top-[527px]
               xs:space-y-2 xs:relative xs:right-[] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px]  xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* twitter */}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-500px] left-[-48px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-500px] xs:left-[80px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-5px] top-[502px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:right-[1px] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Twitter
              </h1>
              <ul
                className="space-y-2 relative right-[-144px] top-[527px]
               xs:space-y-2 xs:relative xs:right-[] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px]  xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to mention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px]  xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* LinkedIn*/}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-10px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[10px] xs:left-[80px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-5px] top-[px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:left-[-1px] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                LinkedIn
              </h1>
              <ul className="space-y-2 relative right-[-128px] top-[10px] xs:space-y-2 xs:relative xs:right-[] xs:top-[]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
              </ul>
            </div>
            {/* googlemybusiness */}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-930px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-900px] xs:left-[70px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[872px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Google My Business
              </h1>
              <ul
                className="space-y-2 relative right-[-29px] top-[885px]
               xs:space-y-2 xs:relative xs:right-[-45px] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to review
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-512px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-470px] xs:left-[70px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[412px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Tiktok
              </h1>
              <ul
                className="space-y-2 relative right-[-155px] top-[420px]
               xs:space-y-2 xs:relative xs:right-[-155px] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* buffer section */}

          <div
            className="flex bg-[rgba(26,25,25,1)]  relative flex-col max-h-screen justify-center min-h-[1200px]
         items-center top-[-1205px] w-[572px]  left-[622px] rounded-[20px]
           xs:flex xs:bg-[rgba(26,25,25,1)] xs:relative xs:flex-col xs:min-h-auto xs:justify-center
          xs:items-center xs:top-[10px] xs:left-[10px] xs:w-[330px] xs:h-[1050px]  xs:rounded-[20px] "
          >
            <div
              className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-330px] left-[-45px]
               xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[65px]
            "
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[325px] w-[414px] h-[80px] 
              text-[rgba(219,219,219,1)] font-jakarta font-bold text-2xl 
              xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)]
              xs:font-jakarta xs:bold xs:text-xl
              "
              >
                Buffer-Social Media <br className="hidden xs:block" /> Inbox
              </h1>
            </div>
            {/* essentials*/}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-390px] left-[-45px]
            xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-380px] xs:left-[65px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative top-[290px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Essentials
              </h1>
              <ul
                className="space-y-2 relative right-[-108px] top-[350px]
               xs:space-y-2 xs:relative xs:right-[-118px] xs:top-[]"
              >
                <li
                  className="flex items-center relative top-[10px] w-[414px] h-[34px] left-[-200px] gap-[12px]
                "
                >
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Add Labels to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[4px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Create Custom Automations
                  </span>
                </li>
                <li className="flex items-center relative top-[-4px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Bulk Actions
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[135px] left-[px]
             xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[110px]
            "
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[43px] top-[-185px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Instagram
              </h1>
              <ul
                className="space-y-2 relative left-[67px] top-[-115px]
            xs:flex-grow   xs:space-y-2 xs:relative xs:left-[75px] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyMention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyReply
                  </span>
                </li>
              </ul>
            </div>

            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-490px] left-[-48px]
             xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[66px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-5px] top-[500px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:right-[1px] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Facebook
              </h1>
              <ul
                className="space-y-2 relative right-[-120px] top-[527px]
               xs:space-y-2 xs:relative xs:right-[] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Mark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* twitter */}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-500px] left-[-48px]
             xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[-500px] xs:left-[65px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-5px] top-[502px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:left-[-2px] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Twitter
              </h1>
              <ul
                className="space-y-2 relative right-[-144px] top-[527px]
               xs:space-y-2 xs:relative xs:right-[] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to mention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* LinkedIn*/}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-10px] left-[-45px]
             xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[58px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-5px] top-[px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                LinkedIn
              </h1>
              <ul
                className="space-y-2 relative right-[-128px] top-[10px]
               xs:space-y-2 xs:relative xs:right-[-135px] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
              </ul>
            </div>
            {/* googlemybusiness */}
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-930px] left-[-45px]
             xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[57px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[872px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Google My Business
              </h1>
              <ul
                className="space-y-2 relative right-[-29px] top-[885px]
               xs:space-y-2 xs:relative xs:right-[-47px] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to review
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="flex items-center justify-between w-[414px] h-[163px] relative top-[-512px] left-[-45px]
             xs:flex xs:items-center xs:justify-between xs:w-[] xs:h-[] xs:relative xs:top-[] xs:left-[57px]"
            >
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[412px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg 
               xs:flex-grow xs:relative xs:top-[] xs:w-[] xs:h-[] xs:text-[rgba(219,219,219,1)] xs:font-jakarta
              xs:font-bold xs:text-base"
              >
                Tiktok
              </h1>
              <ul
                className="space-y-2 relative right-[-155px] top-[420px]
               xs:space-y-2 xs:relative xs:right-[-157px] xs:top-[]"
              >
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img
                    src="/Redmark.svg"
                    className="w-[34px] h-[34px] xs:w-[24px] xs:has-[24px]"
                  />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SMI;
