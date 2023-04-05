import Layout from "@/components/layout";
import PermitSection from "@/section/permit";
import ContactSection from "@/section/contact";
import GeothermalSection from "@/section/geothermal";
import HomeSection from "@/section/home";
import PhotoSection from "@/section/photo";
import PresentationSection from "@/section/presentation";
import ServiceSection from "@/section/services";
import UnderConstructionSection from "@/section/under_construction";

export default function Home(props: any) {
  return (
    <Layout>
      <div className="flex flex-col justify-center ">
        <HomeSection id="#" className="bg-slate-200" />
        <PresentationSection id="#presentation" className="bg-slate-100" />
        {/* <UnderConstructionSection className="bg-slate-200" /> */}
        <GeothermalSection id="#geothermal" className="bg-slate-200" />
        <ServiceSection id="#services" className="bg-slate-100" />
        <PermitSection id="#permit" className="bg-slate-200" />
        <PhotoSection id="#photo" className="bg-slate-100" />
        <ContactSection id="#contact" className="bg-slate-200" />
      </div>
    </Layout>
  );
}
