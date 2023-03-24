import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbCom = () => {
  const breadcrumbNameMap = {
    "/user_dashboard": "User Dashboard",
    "/user_dashboard/attendance": "Attendance",
  };

  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: (
        <Link style={{ color: "white" }} to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      ),
    };
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "self-start",
          flexDirection: "column",
        }}
      >
        <Breadcrumb items={extraBreadcrumbItems} />
        <b style={{ lineHeight: "23px" }}>
          {breadcrumbNameMap[location.pathname]}
        </b>
      </div>
    </>
  );
};

export default BreadcrumbCom;
