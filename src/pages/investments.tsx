import { NextSeo } from "next-seo";
import InvestmentDashboard from "../components/InvestmentDashboard";
import WhatsAppButton from "../components/WhatsAppButton";

export default function InvestmentsPage() {
  return (
    <>
      <NextSeo
        title="Investments | Ramyantara"
        description="View and manage your investments in NCDs, Unlisted Shares, and Insurance Products"
        openGraph={{
          title: "Investments | Ramyantara",
          description:
            "View and manage your investments in NCDs, Unlisted Shares, and Insurance Products",
          url: "https://ramyantara.com/investments",
          type: "website",
        }}
      />
      <InvestmentDashboard />
      <WhatsAppButton />
    </>
  );
}
