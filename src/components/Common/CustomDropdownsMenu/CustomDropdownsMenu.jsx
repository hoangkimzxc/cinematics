import { Popper } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { auth } from "../../../firebase";

function CustomDropdownsMenu({ handleLogoutClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const popperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popperRef.current && !popperRef.current.contains(event.target)) {
        setAnchorEl(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-circle-user text-white text-[2rem]"></i>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </button>
      <Popper
        id={id}
        ref={popperRef}
        open={open}
        anchorEl={anchorEl}
        placement={"bottom-end"}
        className="text-white z-50 bg-slate-600 rounded-lg border border-black "
      >
        <div className="p-3 border-b border-b-black">
          {auth?.currentUser?.email}
        </div>
        <div className="p-3 hover:bg-slate-500 hover:rounded-lg hover:cursor-pointer ">
          Profile
        </div>
        <div
          onClick={() => handleLogoutClick()}
          className="hover:bg-slate-500 hover:rounded-lg p-3 flex items-center gap-2 hover:cursor-pointer "
        >
          <div>Log out</div>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </Popper>
    </div>
  );
}

export default React.memo(CustomDropdownsMenu);
