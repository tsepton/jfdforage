import ContactSection from "@/section/contaxt";
import GeothermalSection from "@/section/geothermal";
import HomeSection from "@/section/home";
import PhotoSection from "@/section/photo";
import PresentationSection from "@/section/presentation";
import ServiceSection from "@/section/services";

export default function Home(props: any) {
  return (
    <div className="flex flex-col justify-center">
      <HomeSection id="#home" />
      <PresentationSection id="#presentation" />
      <GeothermalSection id="#geothermal" />
      <ServiceSection id="#services" />
      <PhotoSection id="#photo" />
      <ContactSection id="#contact" />
    </div>
  );
}
