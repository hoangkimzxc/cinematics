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
        className="text-white z-50 bg-slate-500"
      >
        <div>The content of the Popper.</div>
        <div>The content of the Popper.</div>
        <div>The content of the Popper.</div>
        <div>The content of the Popper.</div>
      </Popper>
    </div>
  );
}
