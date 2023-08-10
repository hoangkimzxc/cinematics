import { Popper } from "@mui/material";
import { useState } from "react";
import { auth } from "../../../firebase";

export default function CustomDropdownsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

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
        open={open}
        anchorEl={anchorEl}
        placement={"bottom-end"}
        className="text-white z-50 bg-slate-600 rounded-lg border border-black"
      >
        <div className="p-3">Profile</div>
        <div className="p-3 flex items-center gap-2 border-t border-t-black">
          <div>Log out</div>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </Popper>
    </div>
  );
}
