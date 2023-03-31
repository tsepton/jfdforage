import Layout from "@/components/layout";
import ContactSection from "@/section/contact";
import GeothermalSection from "@/section/geothermal";
import PhotoSection from "@/section/photo";
import PresentationSection from "@/section/presentation";
import ServiceSection from "@/section/services";
import UnderConstructionSection from "@/section/under_construction";

export default function Home(props: any) {
  return (
    <Layout>
      <div className="flex flex-col justify-center ">
        {/* <HomeSection id="#home" /> */}
        <div className="h-[12vh] bg-slate-200">
          {/* -- "Oh no you can't use html to add spacing !" -- Duh */}
        </div>
        <PresentationSection
          id="#presentation"
          className="bg-slate-200 before:block"
        />

        <UnderConstructionSection className="bg-slate-100" />

        {/* <GeothermalSection id="#geothermal" />
        <ServiceSection id="#services" /> */}
        {/* <PhotoSection id="#photo" className="bg-slate-100" /> */}
        <ContactSection id="#contact" className="bg-slate-200" />
      </div>
    </Layout>
  );
}
