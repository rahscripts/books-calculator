import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background px-6 py-20">
            <div className="mx-auto max-w-5xl space-y-10 text-foreground">
                <header className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-sm text-muted-foreground tracking-wide">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </header>

                <section className="space-y-6 text-sm leading-relaxed tracking-wide">
                    <p>
                        Welcome to <strong>booksofme.com</strong> (“Booksofme”, “we”, “our”, or “us”).
                        By accessing or using our website, services, and features, you agree
                        to be bound by these <strong>Terms & Conditions</strong>. If you do not
                        agree with any part of these terms, please do not use the platform.
                    </p>

                    <p>
                        Booksofme is a platform that allows users to <strong>track their reading
                            progress</strong>, <strong>organize books</strong>, and <strong>share a
                                public reading profile via a single link</strong>.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        1. Eligibility
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        You must be at least <strong>13 years old</strong> to use Booksofme.
                        By using this service, you confirm that you meet this requirement
                        and that all information you provide is accurate.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        2. User Accounts
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-sm tracking-wide">
                        <li>You are responsible for maintaining the security of your account.</li>
                        <li>You are responsible for all activity that occurs under your account.</li>
                        <li>You must not share your login credentials with others.</li>
                        <li>
                            We reserve the right to suspend or terminate accounts that violate
                            these terms.
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        3. User Content
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        You retain ownership of any content you add, including book lists,
                        reading progress, notes, and profile details.
                    </p>
                    <p className="text-sm leading-relaxed tracking-wide">
                        By using Booksofme, you grant us a <strong>non-exclusive, royalty-free,
                            worldwide license</strong> to display and distribute your content
                        solely for the purpose of operating and improving the platform.
                    </p>
                    <p className="text-sm leading-relaxed tracking-wide">
                        You agree not to upload content that is illegal, harmful, misleading,
                        abusive, or violates intellectual property rights.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        4. Public Profiles & Sharing
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        Booksofme allows you to generate a <strong>public shareable link</strong>
                        displaying your reading activity. You are fully responsible for what
                        information you choose to make public.
                    </p>
                    <p className="text-sm leading-relaxed tracking-wide">
                        We are not responsible for how third parties use or interpret your
                        publicly shared content.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        5. Data & Privacy
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        We care about your privacy. Any personal data is handled according to
                        our <strong>Privacy Policy</strong>. While we take reasonable measures
                        to protect your data, no system is 100% secure.
                    </p>
                    <p className="text-sm leading-relaxed tracking-wide">
                        By using Booksofme, you acknowledge and accept these risks.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        6. Third-Party Services
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        Booksofme may use third-party APIs (such as book databases) to fetch
                        book information. We do not guarantee the accuracy, availability, or
                        completeness of third-party data.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        7. Prohibited Use
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-sm tracking-wide">
                        <li>Attempting to hack, scrape, or disrupt the service</li>
                        <li>Using the platform for illegal or unauthorized purposes</li>
                        <li>Impersonating others or providing false information</li>
                        <li>Abusing or harassing other users</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        8. Termination
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        We reserve the right to suspend or terminate your access to Booksofme
                        at any time, without notice, if you violate these terms or misuse the
                        platform.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        9. Disclaimer
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        Booksofme is provided on an <strong>“as is”</strong> and
                        <strong> “as available”</strong> basis. We make no warranties regarding
                        reliability, accuracy, or availability.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        10. Limitation of Liability
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        To the maximum extent permitted by law, Booksofme shall not be liable
                        for any indirect, incidental, or consequential damages resulting from
                        your use of the service.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        11. Changes to These Terms
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        We may update these Terms & Conditions at any time. Continued use of
                        the platform after changes implies acceptance of the updated terms.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold tracking-tight">
                        12. Contact
                    </h2>
                    <p className="text-sm leading-relaxed tracking-wide">
                        If you have any questions, concerns, or feedback regarding these
                        Terms & Conditions, you can contact us at:
                    </p>
                    <p className="text-sm font-medium tracking-wide">
                        📩 Email: <strong>rahscripts@gmail.com</strong>
                    </p>
                </section>

                <footer className="pt-10 text-center text-xs text-muted-foreground tracking-widest">
                    © {new Date().getFullYear()} <Link className="underline hover:text-black transition-colors" href={"/dashboard"}>booksofme.com</Link> — All rights reserved.
                </footer>
            </div>
        </main>
    );
}
