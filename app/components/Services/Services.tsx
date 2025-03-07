import { CardService } from "./components";
import { SERVICES } from "@/app/utils/Services";

export const Services = () => {
  return (
    <main id="services" className="bg-primary p-5 md:p-10 scroll-mt-12">
      <h2 className="text-5xl text-center mb-10">Servicios</h2>

      <div className="flex justify-center items-center gap-10 flex-wrap">
        {SERVICES.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
};
