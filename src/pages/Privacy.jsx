import React from 'react';

const Privacy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>

            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-6 transition-colors duration-200">
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">1. Data Collection</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We collect information you provide directly to us when using our chat services.
                        This includes health-related information you choose to share with the AI assistant.
                        All data is encrypted in transit and at rest.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">2. Use of Information</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We use the information to provide, maintain, and improve our services.
                        We do not sell your personal data to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">3. Patient Rights (HIPAA/GDPR)</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        You have the right to access, correct, or delete your personal information.
                        Please contact us if you wish to exercise these rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">4. Contact Us</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        If you have any questions about this Privacy Policy, please contact us at contact@goodhealth247.com.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
