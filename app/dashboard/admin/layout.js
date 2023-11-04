import AdminNav from "@/components/nav/AdminNav";

function AdminDashboard({ children }) {
  return (
    <>
      {/* => AdminNav */}
      <AdminNav />
      {children}
    </>
  );
}

export default AdminDashboard;
