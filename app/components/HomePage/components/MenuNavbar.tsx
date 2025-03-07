import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { MENU_ITEMS } from "@/app/utils/Menu";
import { FlowingMenu } from "../../ui";
import { IMenuNavbar } from "./types";
import { IconSquareRoundedXFilled } from "@tabler/icons-react";

export const MenuNavbar = ({ open, setOpen }: IMenuNavbar) => {
  return (
    <Fragment>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden z-20"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: open ? 1 : 0, x: open ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <IconSquareRoundedXFilled
          className="text-red-500 absolute z-20 top-5 right-5 cursor-pointer hover:text-red-800"
          size={30}
          stroke={1}
          onClick={() => setOpen(false)}
        />
        <FlowingMenu items={MENU_ITEMS} setOpen={setOpen} />
      </motion.div>
    </Fragment>
  );
};
