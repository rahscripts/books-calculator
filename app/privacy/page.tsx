import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-neutral-50 px-6 py-20">
            <div className="mx-auto max-w-5xl space-y-12 text-neutral-900">
                {/* Header */}
                <header className="space-y-4 text-center">
                    <h1 className="text-4xl font-semibold tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-neutral-500 tracking-wide">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </header>

                {/* Intro */}
                <section className="space-y-6 text-sm leading-relaxed tracking-wide">
                    <p>
                        At <strong>booksofme.com</strong> (“Booksofme”, “we”, “our”, or “us”),
                        your privacy matters. This Privacy Policy explains how we collect,
                        use, store, and protect your information when you use our platform.
                    </p>

                    <p>
                        By using Booksofme, you agree to the practices described in this
                        policy. If you do not agree, please discontinue use of the service.
                    </p>
                </section>

                {/* Information Collected */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        1. Information We Collect
                    </h2>

                    <div className="space-y-3 text-sm tracking-wide leading-relaxed">
                        <p>
                            <strong>Account Information:</strong> When you sign in, we may
                            collect basic details such as your name, email address, and profile
                            image (depending on your authentication provider).
                        </p>

                        <p>
                            <strong>Reading Data:</strong> Books you add, page counts, reading
                            progress, and profile details you choose to store.
                        </p>

                        <p>
                            <strong>Usage Information:</strong> Basic analytics such as page
                            visits, feature usage, and interaction data to improve the
                            platform.
                        </p>
                    </div>
                </section>

                {/* How We Use Data */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        2. How We Use Your Information
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-sm tracking-wide">
                        <li>To operate and maintain the Booksofme platform</li>
                        <li>To personalize your reading experience</li>
                        <li>To generate your public reading profile (if enabled)</li>
                        <li>To improve performance, reliability, and features</li>
                        <li>To communicate important updates or changes</li>
                    </ul>
                </section>

                {/* Public Profiles */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        3. Public Profiles & Sharing
                    </h2>

                    <p className="text-sm leading-relaxed tracking-wide">
                        Booksofme allows you to create a <strong>public profile link</strong>
                        that displays selected reading information. You control what data is
                        shared publicly.
                    </p>

                    <p className="text-sm leading-relaxed tracking-wide">
                        Any information made public can be viewed by anyone with the link.
                        We are not responsible for how third parties use publicly shared
                        information.
                    </p>
                </section>

                {/* Cookies */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        4. Cookies & Tracking
                    </h2>

                    <p className="text-sm leading-relaxed tracking-wide">
                        We may use cookies or similar technologies to keep you signed in,
                        remember preferences, and understand how the platform is used.
                    </p>

                    <p className="text-sm leading-relaxed tracking-wide">
                        You can disable cookies through your browser settings, but some
                        features may not function correctly.
                    </p>
                </section>

                {/* Data Storage */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        5. Data Storage & Security
                    </h2>

                    <p className="text-sm leading-relaxed tracking-wide">
                        We implement reasonable technical and organizational measures to
                        protect your data. However, <strong>no system is completely
                            secure</strong>, and we cannot guarantee absolute security.
                    </p>
                </section>

                {/* Third Parties */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        6. Third-Party Services
                    </h2>

                    <p className="text-sm leading-relaxed tracking-wide">
                        Booksofme may rely on third-party services (such as authentication
                        providers or book data APIs). These services have their own privacy
                        policies, and we are not responsible for their practices.
                    </p>
                </section>

                {/* Data Deletion */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        7. Data Retention & Deletion
                    </h2>

                    <p className="text-sm leading-relaxed tracking-wide">
                        We retain your data only as long as necessary to provide the service.
                        You may request deletion of your account and associated data by
                        contacting us.
                    </p>
                </section>

                {/* Changes */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        8. Changes to This Policy
                    </h2>

                    <p className="text-sm leading-relaxed tracking-wide">
                        We may update this Privacy Policy from time to time. Continued use of
                        Booksofme after changes means you accept the updated policy.
                    </p>
                </section>

                {/* Contact */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        9. Contact Us
                    </h2>

                    <p className="text-sm leading-relaxed tracking-wide">
                        If you have questions, concerns, or requests regarding your privacy,
                        you can reach us at:
                    </p>

                    <p className="text-sm font-medium tracking-wide">
                        📩 Email: <strong>rahscripts@gmail.com</strong>
                    </p>
                </section>

                {/* Footer */}
                <footer className="pt-10 text-center text-xs text-neutral-500 tracking-widest">
                    © {new Date().getFullYear()} <Link href={"/dashboard"}>booksofme.com</Link> — Privacy comes first.
                </footer>
            </div>
        </main>
    );
}
