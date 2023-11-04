import Link from "next/link";

function AdminNav() {
  return (
    <nav className="nav justify-content-center mb-3">
      <Link className="nav-link" href="/dashboard/admin">
        Admin
      </Link>
      <Link className="nav-link" href="/dashboard/admin/category">
        Create Category
      </Link>
    </nav>
  );
}

export default AdminNav;
