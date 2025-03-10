import Link from "next/link";

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mb-5 md:mb-10 gap-5">
      <div className="col-span-6">
        <p className="font-mono text-2xl">FIN</p>
      </div>

      <div className="col-span-6 flex flex-col gap-5">
        <p className="text-primary text-4xl uppercase">¿Hablamos?</p>
        <Link
          href="https://wa.me/8123697420/?text=Hola,%20quiero%20una%20página%20web"
          target="_blank"
          className="font-sans underline"
        >
          +52 812 3697 420
        </Link>

        <Link
          href="mailto:edeldev25@gmail.com"
          target="_blank"
          className="font-sans underline text-xl mdtext-3xl"
        >
          edeldev25@gmail.com
        </Link>
      </div>
    </div>
  );
};
