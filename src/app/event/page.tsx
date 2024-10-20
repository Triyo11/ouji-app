import Calendar from "@/components/Calendar";
import Sidebar from "@/components/Sidebar";
import { format } from "date-fns";

const Event = () => {
  // TODO: save nowDate in State Management
  const nowDate = format(new Date(), "d MMMM, yyyy");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <div className="max-h-fit w-full p-4">
          <span className="flex float-end text-3xl text-scheme-1-foreground">
            {nowDate}
          </span>
        </div>
        <div className="h-full w-full mx-0 my-auto px-4">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Event;
