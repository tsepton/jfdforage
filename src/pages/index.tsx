import Layout from "@/components/layout";
import ContactSection from "@/section/contact";
import HomeSection from "@/section/home";
import PresentationSection from "@/section/presentation";
import UnderConstructionSection from "@/section/under_construction";

export default function Home(props: any) {
  return (
    <Layout>
      <div className="flex flex-col justify-center ">
        <HomeSection id="#home" className="bg-slate-200" />
        <PresentationSection id="#presentation" className="bg-slate-100" />
        <UnderConstructionSection className="bg-slate-200" />
        {/* <GeothermalSection id="#geothermal" />
        <ServiceSection id="#services" /> */}
        {/* <PhotoSection id="#photo" className="bg-slate-100" /> */}
        <ContactSection id="#contact" className="bg-slate-100" />
      </div>
    </Layout>
  );
}
