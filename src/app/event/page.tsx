import Calendar from "@/components/Calendar";
import Sidebar from "@/components/Sidebar";
import { format } from "date-fns";

const Event = () => {
  // TODO: save nowDate in State Management
  const nowDate = format(new Date(), "d MMMM, yyyy");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col h-screen w-full mx-0 my-auto pr-2">
        <div className="basis-[50%] my-2">
          <Calendar />
        </div>
        <div className="basis-[50%] flex flex-col w-full my-2">
          <h2 className="text-2xl font-bold">List event</h2>
        </div>
      </div>
    </div>
  );
};

export default Event;
