import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper "
      }`}
    >
      <di className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            return (
              <article key={index}>
                <h4>{link.page}</h4>
                <div className="sidebar-sublinks">
                  {link.links.map((item, index) => {
                    return (
                      <a href={item.url} key={index}>
                        {item.icon}
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </di>
    </div>
  );
};

export default Sidebar;
