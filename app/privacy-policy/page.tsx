import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | FixMyCarDude",
  description:
    "How FixMyCarDude collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="At FixMyCarDude, your privacy is our priority. We are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services."
      sections={[
        {
          heading: "1. Introduction",
          paragraphs: [
            "Welcome to FixMyCarDude. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect the information you provide to us.",
          ],
        },
        {
          heading: "2. Information We Collect",
          paragraphs: [
            "We collect personal information that you voluntarily provide to us when you sign up on our website or communicate with us. The types of personal information we may collect include:",
          ],
          bullets: ["Email Address", "Phone Number"],
        },
        {
          heading: "3. Use of Information",
          paragraphs: ["We use the information we collect for the following purposes:"],
          bullets: [
            "To send you marketing communications, including newsletters, promotions, and updates.",
            "To respond to your inquiries and provide customer support.",
            "To comply with legal requirements.",
          ],
        },
        {
          heading: "4. Information Sharing Practices",
          paragraphs: [
            "We do not sell, trade, or otherwise transfer your personal information to outside parties. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.",
          ],
        },
        {
          heading: "5. How We Share Your Data",
          paragraphs: [
            "We may share your personal information with third-party service providers for the sole purpose of assisting us in operating our website and conducting our business (e.g., processing payments, sending emails, or providing customer service). These third parties are required to protect your information and are not allowed to use it for any other purpose.",
            "We do not sell, trade, or otherwise transfer your personal information to outside parties for marketing or promotional purposes without your explicit consent.",
            "All text messaging originator opt-in data and consent will not be shared with third parties.",
          ],
        },
        {
          heading: "6. Marketing Communications",
          paragraphs: [
            "By providing your email address and phone number, you consent to receive marketing communications from us. Message frequency may vary depending on your interaction with our communications.",
          ],
        },
        {
          heading: "7. Text Messaging Terms",
          bullets: [
            "Message frequency varies per user.",
            "Message and data rates may apply.",
            "Text HELP for help.",
            "Text STOP to unsubscribe.",
            "Carriers are not liable for delayed or undelivered messages.",
          ],
        },
        {
          heading: "8. Data Protection",
          paragraphs: [
            "We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of transmitting or storing data is completely secure, and we cannot guarantee absolute security.",
          ],
        },
        {
          heading: "9. Your Rights",
          paragraphs: ["You have the right to:"],
          bullets: [
            "Opt out of receiving marketing communications by following the instructions provided in our communications.",
            "Request access to the personal information we hold about you.",
            "Request corrections to any inaccurate or incomplete information.",
            "Request deletion of your personal information, subject to certain exceptions.",
          ],
        },
        {
          heading: "10. Changes to This Privacy Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
          ],
        },
        {
          heading: "11. Contact Us",
          paragraphs: [
            "If you have any questions about this Privacy Policy or our practices, please contact us at info@fixmycardude.com.",
          ],
        },
      ]}
    />
  );
}
