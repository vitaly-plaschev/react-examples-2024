import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { statuses } from "../../requests/todosRequests";
import catalogStyle from "../catalog/catalog.module.css";
import { useLinkClassName } from "../../hooks/useLinkClassName";

function StatusPage() {
  const catalogNavLinkClassName = useLinkClassName(catalogStyle);  
  return (
    <div className="container">
      <nav>
        {statuses.map((status) => (
          <NavLink className={catalogNavLinkClassName} key={status.name} to={`${status.name}`}>
            {status.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default StatusPage;
