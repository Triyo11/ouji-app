import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import TabView from "@/components/TabView";
import { format } from "date-fns";
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
      </div>
    </div>
  );
};

export default Dashboard;
