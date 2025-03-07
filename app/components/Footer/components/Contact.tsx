import Link from "next/link";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mb-5 md:mb-10 gap-5">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="col-span-6"
      >
        <p className="font-mono text-2xl">FIN</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="col-span-6 flex flex-col gap-5"
      >
        <p className="text-primary text-4xl uppercase">¿Hablamos?</p>
        <Link href="" className="font-sans underline">
          +52 812 3697 420
        </Link>

        <Link href="" className="font-sans underline text-xl mdtext-3xl">
          edeldev25@gmail.com
        </Link>
      </motion.div>
    </div>
  );
};
