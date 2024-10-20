import { auth } from "@/auth";
// import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
// import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import TabView from "@/components/TabView";
// import Calendar from "@/components/Calendar";
import { format } from "date-fns";
// import { tabs } from "@/components/TabView/tabOptions";
import Task from "@/components/Task";
import Project from "@/components/Project";

const Dashboard = async () => {
  const session = await auth();

  if (!session) return redirect("/login");

  const nowDate = format(new Date(), "d MMMM, yyyy")

  const tabs = [
    { id: 0, label: "Tasks", content: <Task /> },
    { id: 1, label: "Projects", content: <Project /> },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full h-screen">
        <div className="max-h-fit w-full p-4">
          <span className="flex float-end text-3xl text-scheme-1-foreground">{nowDate}</span>
        </div>
        <div className="h-full w-full mx-0 my-auto px-4">
          <div className="w-full h-full">
            <TabView tabs={tabs} />
          </div>
        </div>
        {/* <div className="basis-[75%] flex flex-col bg-blue-500 p-4 gap-4">
          <div className="basis-[50%] bg-yellow-500">

          </div>
          <div className="basis-[50%] bg-green-500">

          </div>
        </div>
        <div className="basis-[25%] bg-red-500 flex flex-col p-4 gap-4">
          <div className="w-full max-h-fit p-2 bg-purple-500">
            <h2 className="flex float-end text-3xl">18 October, 2022</h2>
          </div>
          <div className="grid grid-rows-[1fr_1fr] w-full h-full p-2 bg-orange-500">
            <div className="h-auto bg-pink-500">
              <h2>Space</h2>
            </div>
            <div className="h-auto bg-blue-500">
              <Calendar />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
