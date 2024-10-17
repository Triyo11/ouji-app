import { auth } from "@/auth";
// import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
// import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

const Dashboard = async () => {
  const session = await auth();

  if (!session) return redirect("/login");

  // const paths = [
  //   { name: "Home", href: "/dashboard" },
  //   { name: "Project", href: "/project" },
  //   { name: "Task", href: "/task" },
  //   { name: "Group", href: "/group" },
  // ];

  return (
    <div>
      {/* <Navbar />
      <div className="w-full h-full flex flex-col px-8 mb-8">
        <Breadcrumb paths={paths} />
      </div> */}
      <Sidebar />
    </div>
  );
};

export default Dashboard;
