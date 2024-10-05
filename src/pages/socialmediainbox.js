import React from "react";

const SMI = () => {
  return (
    <>
      <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen overflow-x-hidden">
        <div className="flex flex-col bg-[rgba(14,14,14,1)] p-2 text-white min-h-screen ">
          <h1 className="flex font-jakarta w-[864px] h-[53px] mb-10 text-[48px] whitespace-nowrap text-center font-bold justify-center items-center mx-auto py-8">
            <p className="">Social Media Inbox</p>
          </h1>

          <div
            className="flex bg-[rgba(26,25,25,1)] relative flex-col min-h-auto 
          justify-center items-center top-[-5px] w-[572px] h-[1200px] left-[45px] rounded-[20px] "
          >
            <div className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-330px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[325px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-2xl ">
                Postiz-Social Media Inbox
              </h1>
            </div>
            {/* essentials*/}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-390px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[290px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Essentials
              </h1>
              <ul className="space-y-2 relative right-[-108px] top-[350px]">
                <li className="flex items-center relative top-[10px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Add Labels to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[4px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Create Custom Automations
                  </span>
                </li>
                <li className="flex items-center relative top-[-4px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Bulk Actions
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[135px] left-[px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[43px] top-[-185px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Instagram
              </h1>
              <ul className="space-y-2 relative left-[67px] top-[-115px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyMention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyReply
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-490px] left-[-48px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[-5px] top-[500px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Facebook
              </h1>
              <ul className="space-y-2 relative right-[-120px] top-[527px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* twitter */}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-500px] left-[-48px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[-5px] top-[502px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Twitter
              </h1>
              <ul className="space-y-2 relative right-[-144px] top-[527px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to mention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* LinkedIn*/}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-10px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[-5px] top-[px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                LinkedIn
              </h1>
              <ul className="space-y-2 relative right-[-128px] top-[10px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
              </ul>
            </div>
            {/* googlemybusiness */}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-930px] left-[-45px]">
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[872px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg "
              >
                Google My Business
              </h1>
              <ul className="space-y-2 relative right-[-29px] top-[885px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to review
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-512px] left-[-45px]">
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[412px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg "
              >
                Tiktok
              </h1>
              <ul className="space-y-2 relative right-[-155px] top-[420px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
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
         items-center top-[-1205px] w-[572px]  left-[622px] rounded-[20px]"
          >
            <div className="flex  items-center justify-between w-[414px] h-[163px] relative top-[-330px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[325px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-2xl ">
                Postiz-Social Media Inbox
              </h1>
            </div>
            {/* essentials*/}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-390px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative top-[290px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Essentials
              </h1>
              <ul className="space-y-2 relative right-[-108px] top-[350px]">
                <li className="flex items-center relative top-[10px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Add Labels to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[4px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Assign Users to Messages
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Create Custom Automations
                  </span>
                </li>
                <li className="flex items-center relative top-[-4px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Bulk Actions
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[135px] left-[px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[43px] top-[-185px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Instagram
              </h1>
              <ul className="space-y-2 relative left-[67px] top-[-115px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyMention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px]  gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to storyReply
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-490px] left-[-48px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[-5px] top-[500px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Facebook
              </h1>
              <ul className="space-y-2 relative right-[-120px] top-[527px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Mark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* twitter */}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-500px] left-[-48px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[-5px] top-[502px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                Twitter
              </h1>
              <ul className="space-y-2 relative right-[-144px] top-[527px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to mention
                  </span>
                </li>
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to dm
                  </span>
                </li>
              </ul>
            </div>
            {/* LinkedIn*/}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-10px] left-[-45px]">
              <h1 className="flex-grow whitespace-nowrap relative right-[-5px] top-[px] w-[414px] h-[80px] text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg ">
                LinkedIn
              </h1>
              <ul className="space-y-2 relative right-[-128px] top-[10px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to comment
                  </span>
                </li>
              </ul>
            </div>
            {/* googlemybusiness */}
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-930px] left-[-45px]">
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[872px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg "
              >
                Google My Business
              </h1>
              <ul className="space-y-2 relative right-[-29px] top-[885px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
                  <span className="font-dm flex-grow font-normal text-[rgba(219,219,219,1)] whitespace-nowrap">
                    Reply to review
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between w-[414px] h-[163px] relative top-[-512px] left-[-45px]">
              <h1
                className="flex-grow whitespace-nowrap relative right-[-8px] top-[412px] w-[414px] h-[80px]
               text-[rgba(219,219,219,1)] font-jakarta font-bold text-lg "
              >
                Tiktok
              </h1>
              <ul className="space-y-2 relative right-[-155px] top-[420px]">
                <li className="flex items-center relative top-[1px] w-[414px] h-[34px] left-[-200px] gap-[12px]">
                  <img src="/Redmark.svg" className="w-[34px] h-[34px]" />
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
