"use client";
import { InlineWidget } from "react-calendly";

const CalendlyBox = () => {

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        Schedule A Meeting
      </h3>
      <InlineWidget
        url="https://calendly.com/neatsheetsbk/30min?hide_event_type_details=1&hide_gdpr_banner=1"
        styles={{minWidth:'320px', height:'825px'}}
        data-resize={true}
      />
    </div>
  );
};

export default CalendlyBox;
