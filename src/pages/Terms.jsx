import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Terms = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h1>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-700 dark:text-red-300">
                            <strong className="font-bold">CRITICAL DISCLAIMER:</strong> This application is for informational purposes only.
                            It is not a substitute for professional medical advice, diagnosis, or treatment.
                            <span className="block mt-1 font-bold">IF YOU HAVE A MEDICAL EMERGENCY, CALL 911 IMMEDIATELY.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-6 transition-colors duration-200">
                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">1. Acceptance of Terms</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">2. Medical Disclaimer</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        The AI assistant provides general information based on the data it has been trained on.
                        It cannot diagnose conditions or prescribe medications. Always consult with a qualified healthcare provider.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">3. User Responsibilies</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        You agree to use this service responsibly and not to submit false or misleading information.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
