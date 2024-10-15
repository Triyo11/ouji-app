import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth()

  if (!session) return redirect("/login")

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard;