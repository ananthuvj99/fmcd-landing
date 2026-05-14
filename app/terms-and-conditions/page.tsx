import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | FixMyCarDude",
  description:
    "The terms governing your use of the FixMyCarDude website and services.",
};

export default function TermsAndConditions() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms and Conditions"
      intro="By accessing or using the FixMyCarDude website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully."
      sections={[
        {
          heading: "1. Introduction",
          paragraphs: [
            'Welcome to the FixMyCarDude website (the "Site"). By accessing or using this Site, you agree to comply with and be bound by these Terms and Conditions ("Terms"). Please read these Terms carefully before using the Site.',
          ],
        },
        {
          heading: "2. Website Use",
          paragraphs: [
            "By accessing the Site, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of the Site. Unauthorized use of this Site may give rise to a claim for damages and/or be a criminal offense.",
          ],
        },
        {
          heading: "3. Intellectual Property",
          paragraphs: [
            "All content, including but not limited to text, graphics, logos, images, and software on this Site, is the property of FixMyCarDude or its content providers and is protected by intellectual property laws. Unauthorized reproduction or use of the content without prior written consent is prohibited.",
          ],
        },
        {
          heading: "4. Ordering Services",
          bullets: [
            "When ordering services through our Site, you are required to provide accurate and complete information. Any false or misleading information may result in cancellation of the order.",
            "Prices for services are subject to change without notice, and any changes will be reflected on the Site at the time of ordering.",
            "By placing an order through the Site, you agree to pay the indicated fees for the selected services.",
          ],
        },
        {
          heading: "5. Communication Opt-Out",
          bullets: [
            "You may receive service-related messages, including order confirmations and updates. Reply STOP to opt out of future messages, and reply HELP for assistance.",
            "Message frequency may vary based on your activity.",
            "Data rates may apply, depending on your carrier.",
            "Carriers are not liable for undelivered messages.",
          ],
        },
        {
          heading: "6. Privacy",
          paragraphs: [
            "Your use of the Site is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the Site, you consent to the practices described in the Privacy Policy.",
          ],
        },
        {
          heading: "7. Third-Party Links",
          paragraphs: [
            "The Site may contain links to third-party websites. These links are provided for your convenience only, and FixMyCarDude does not endorse or assume responsibility for the content or practices of these third-party sites. Accessing third-party links is at your own risk.",
          ],
        },
        {
          heading: "8. Limitation of Liability",
          paragraphs: [
            "FixMyCarDude does not guarantee that the Site will be error-free, uninterrupted, or free of viruses or other harmful components. We are not liable for any damages arising from your use of the Site, including but not limited to direct, indirect, incidental, or consequential damages.",
          ],
        },
        {
          heading: "9. Changes to the Site and Terms",
          paragraphs: [
            "FixMyCarDude reserves the right to make changes or updates to the Site and these Terms at any time without prior notice. Your continued use of the Site following any changes indicates acceptance of the updated Terms.",
          ],
        },
        {
          heading: "10. User Accounts",
          paragraphs: [
            "If you create an account on our Site, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.",
          ],
        },
      ]}
    />
  );
}
