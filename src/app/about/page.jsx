import AboutUs from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam";

const CompanyPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-10">
      <div className="flex flex-col gap-12 items-center w-11/12 md:w-10/12">
       
        <AboutUs />
        <OurTeam />
      </div>
    </div>
  );
};

export default CompanyPage;
