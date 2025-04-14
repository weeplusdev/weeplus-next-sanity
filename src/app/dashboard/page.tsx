import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {session.user.image && (
            <img
              src={session.user.image}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
          )}
          <div>
            <p className="font-medium">{session.user.name}</p>
            <p className="text-gray-500">{session.user.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <form action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}