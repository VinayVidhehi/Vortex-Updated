import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex items-center justify-center py-28">
      <div className="w-11/12 md:w-10/12">
        <h1 className="text-3xl font-medium mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last Updated: 10th February 2025
        </p>

        <h2 className="text-xl font-medium mb-4">Introduction</h2>
        <p className="mb-6 text-sm leading-6">
          Vortex Media Management ("Company," "we," "our," or "us") values your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your personal information when you visit our website. By
          accessing or using our Website, you consent to the practices described
          in this Privacy Policy.
        </p>

        <h2 className="text-xl font-medium mb-4">1. Information We Collect</h2>
        <p className="mb-6 text-sm leading-6">
          We only collect personal information that you voluntarily provide,
          including:
        </p>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>Name, email address, and phone number when you contact us.</li>
          <li>
            Any other details you choose to share when reaching out to us.
          </li>
        </ul>

        <h2 className="text-xl font-medium mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-6 text-sm leading-6">
          We use the collected information to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>Respond to your inquiries and provide customer support.</li>
          <li>Communicate with you about our services.</li>
        </ul>

        <h2 className="text-xl font-medium mb-4">
          3. How We Share Your Information
        </h2>
        <p className="mb-6 text-sm leading-6">
          We do not sell or share your personal data with third parties, except:
        </p>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>
            Legal Authorities: If required by law, court order, or legal
            process.
          </li>
        </ul>

        <h2 className="text-xl font-medium mb-4">4. Data Security</h2>
        <p className="mb-6 text-sm leading-6">
          We take reasonable precautions to protect your information. However,
          no online platform is 100% secure, and we cannot guarantee absolute
          security.
        </p>

        <h2 className="text-xl font-medium mb-4">5. Your Rights and Choices</h2>
        <p className="mb-6 text-sm leading-6">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6 text-sm text-muted-foreground tracking-wide">
          <li>
            Request access to, correction, or deletion of your personal data.
          </li>
          <li>Withdraw consent for data collection.</li>
        </ul>
        <p className="text-sm leading-6">
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:vortexprivatelimited@gmail.com"
            className="text-blue-600"
          >
            vortexprivatelimited@gmail.com
          </a>
          .
        </p>

        <h2 className="text-xl font-medium mb-4">6. Third-Party Links</h2>
        <p className="mb-6 text-sm leading-6">
          Our Website may contain links to third-party websites. We are not
          responsible for their privacy policies or practices.
        </p>

        <h2 className="text-xl font-medium mb-4">7. Children's Privacy</h2>
        <p className="mb-6 text-sm leading-6">
          Our services are not intended for individuals under 18. We do not
          knowingly collect data from minors.
        </p>

        <h2 className="text-xl font-medium mb-4">
          8. Changes to This Privacy Policy
        </h2>
        <p className="mb-6 text-sm leading-6">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised "Last Updated" date.
        </p>

        <h2 className="text-xl font-medium mb-4">9. Contact Us</h2>
        <p className="mb-6 text-sm leading-6">
          If you have any questions about this Privacy Policy, please contact us
          at:
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
          and understood this Privacy Policy and agree to its terms.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
