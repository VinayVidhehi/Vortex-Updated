import React from "react";

const TermsConditions = () => {
  return (
    <div className="flex items-center justify-center py-28">
      <div className="w-11/12 md:w-10/12">
        <h1 className="text-3xl font-medium mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last Updated: 10th February 2025
        </p>

        <h2 className="text-xl font-medium mb-4">Legal Disclaimer</h2>
        <p className="mb-6 text-sm leading-6">
          The explanations and information provided on this page are only
          general and high-level explanations on how to write your own document
          of Terms & Conditions. You should not rely on this article as legal
          advice or recommendations regarding what you should actually do, as we
          cannot know in advance the specific terms you wish to establish
          between your business and customers. We recommend that you seek legal
          advice to help you understand and create your own Terms & Conditions.
        </p>

        <h2 className="text-xl font-medium mb-4">Terms & Conditions</h2>
        <p className="mb-6 text-sm leading-6">
          Welcome to Vortex Media Management! These Terms and Conditions
          ("Terms") govern your use of our website and services. By accessing or
          using our Website, you agree to be bound by these Terms. If you do not
          agree, please refrain from using our services.
        </p>

        <h3 className="text-xl font-medium mb-4">1. Use of Website</h3>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>You must be at least 18 years old to use our Website.</li>
          <li>You agree to use this Website only for lawful purposes.</li>
          <li>
            Unauthorized use, including hacking, data mining, or distributing
            malware, is strictly prohibited.
          </li>
        </ul>

        <h3 className="text-xl font-medium mb-4">
          2. Intellectual Property Rights
        </h3>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>
            All content on this Website, including text, images, logos, and
            software, is the property of Vortex Media Management or its
            licensors.
          </li>
          <li>
            You may not copy, modify, distribute, or use any content without
            prior written consent.
          </li>
        </ul>

        <h3 className="text-xl font-medium mb-4">3. Service Availability</h3>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>
            We reserve the right to modify, suspend, or discontinue any part of
            our services at any time without prior notice.
          </li>
          <li>
            We are not responsible for any interruptions or downtime of the
            Website.
          </li>
        </ul>

        <h3 className="text-xl font-medium mb-4">4. Limitation of Liability</h3>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>
            Vortex Media Management is not liable for any direct, indirect,
            incidental, or consequential damages arising from your use of the
            Website or services.
          </li>
          <li>
            We do not guarantee that our Website will be error-free or
            uninterrupted.
          </li>
        </ul>

        <h3 className="text-xl font-medium mb-4">5. Third-Party Links</h3>
        <p className="mb-6 text-sm leading-6">
          Our Website may contain links to third-party websites. We are not
          responsible for their content or practices.
        </p>

        <h3 className="text-xl font-medium mb-4">6. Termination</h3>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>
            We reserve the right to terminate or restrict your access to our
            Website at any time without notice if you violate these Terms.
          </li>
        </ul>

        <h3 className="text-xl font-medium mb-4">7. Changes to These Terms</h3>
        <p className="mb-6 text-sm leading-6">
          We may update these Terms from time to time. Any changes will be
          posted on this page with a revised "Last Updated" date.
        </p>

        <h3 className="text-xl font-medium mb-4">8. Governing Law</h3>
        <p className="mb-6 text-sm leading-6">
          These Terms are governed by and interpreted in accordance with the
          laws of Bangalore, Karnataka, India.
        </p>

        <h3 className="text-xl font-medium mb-4">9. Contact Us</h3>
        <p className="mb-6 text-sm leading-6">
          If you have any questions about these Terms and Conditions, please
          contact us at:
        </p>
        <p className="text-sm leading-6">
          <strong>Vortex Media Management</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:vortexprivatelimited@gmail.com"
            className="text-blue-600"
          >
            vortexprivatelimited@gmail.com
          </a>
          <br />
          Phone: 9945389666
        </p>

        <p className="mt-6 text-sm leading-6">
          By using our Website and services, you acknowledge that you have read
          and understood these Terms and agree to comply with them.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
