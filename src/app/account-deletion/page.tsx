import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Account Deletion | Third & Manageable",
  description:
    "How to request deletion of your Third & Manageable account and associated user data.",
};

const inAppSteps = [
  "Open the Third & Manageable app.",
  "Go to Profile.",
  "Tap Delete Account.",
  "Confirm the deletion prompts.",
];

const deletedData = [
  "Profile record and account-linked app data.",
  "Check-ins, completion logs, chat messages, support requests, and notifications data.",
  "Community-related records tied to your user ID (including reports and block records).",
  "AI chat sessions and messages.",
  "Push notification token and profile photo stored for your account.",
  "Active sessions are revoked.",
];

const retainedData = [
  "Limited records that may be required for legal compliance.",
  "Limited records needed for security and fraud prevention.",
  "Backup data that may persist for a short retention period before final purge.",
];

export default function AccountDeletionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-sm font-medium tracking-widest uppercase text-white/40 mb-4 block">
              User Data
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Account Deletion
            </h1>
            <p className="text-white/50 text-lg max-w-3xl mx-auto">
              This page explains how users of Third & Manageable can request
              account deletion and understand what data is deleted or retained.
            </p>
            <p className="text-white/35 mt-4">
              Last updated: March 4, 2026
            </p>
          </div>

          <div className="space-y-10">
            <section className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                App and Developer Reference
              </h2>
              <div className="space-y-2 text-white/60 leading-relaxed">
                <p>
                  Developer: <strong className="text-white">Third &amp; Manageable</strong>
                </p>
                <p>
                  App name: <strong className="text-white">Third &amp; Manageable</strong>
                </p>
                <p>
                  Android package: <strong className="text-white">com.thirdandmanageable.app</strong>
                </p>
              </div>
            </section>

            <section className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white">
                Option 1: Delete Account In-App
              </h2>
              <div className="space-y-3">
                {inAppSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 text-white/60">
                    <div className="w-6 h-6 rounded-full bg-white/15 text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-6 bg-[#040485] rounded-xl border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Option 2: Request Deletion on the Web
              </h2>
              <p className="text-white/75 leading-relaxed mb-5">
                If you cannot access the app (for example, you already uninstalled it),
                you can request deletion by contacting support through the link below.
              </p>
              <a
                href="mailto:support@thirdandmanageable.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20Third%20%26%20Manageable%20account.%0A%0AAccount%20email%3A%20%0AReason%20(optional)%3A%20"
                className="inline-flex items-center justify-center px-5 py-3 bg-white text-[#040485] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Account Deletion
              </a>
              <p className="text-white/60 text-sm mt-4">
                Include the email address associated with your account so we can process your request.
              </p>
            </section>

            <section className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white">
                Data Deleted After Request
              </h2>
              <ul className="space-y-3">
                {deletedData.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-white/50 rounded-full mt-2.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-5 text-white">
                Data That May Be Retained
              </h2>
              <ul className="space-y-3">
                {retainedData.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/60">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-amber-300 rounded-full mt-2.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Processing Time
              </h2>
              <p className="text-white/60 leading-relaxed">
                In-app requests are processed immediately for app-access removal and user-data cleanup.
                Web support requests are reviewed and processed as quickly as possible, typically within 30 days.
              </p>
            </section>

            <section className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Related Policies
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Terms and Conditions
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Support
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
