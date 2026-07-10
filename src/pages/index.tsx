import Layout from "@/components/layout";
import HomeSection from "@/section/home";
import PresentationSection from "@/section/presentation";
import GeothermalSection from "@/section/geothermal";
import ServiceSection from "@/section/services";
import PermitSection from "@/section/permit";
import PhotoSection from "@/section/photo";
import ContactSection from "@/section/contact";

export default function Home() {
  return (
    <Layout>
      <HomeSection id="home" />
      <PresentationSection id="presentation" />
      <GeothermalSection id="geothermal" />
      <ServiceSection id="services" />
      <PermitSection id="permit" />
      <PhotoSection id="photo" />
      <ContactSection id="contact" />
    </Layout>
  );
}
