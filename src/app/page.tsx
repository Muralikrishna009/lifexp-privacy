import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-100">
      <Head>
        <title>Privacy Policy - LifeXp</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900 text-center">Privacy Policy</h1>
        
        <div className="space-y-2 text-gray-900 mb-8 text-center">
          <p className="text-lg"><strong>Effective Date:</strong> March 15, 2025</p>
          <p className="text-lg"><strong>Last Updated:</strong> March 15, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-gray-900">
            LifeXp: Habit Tracker ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application ("App").
          </p>

          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-black">1. Information We Collect</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-2xl font-medium text-black">a) Information You Provide</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li className="text-lg text-gray-900"><strong>Account Information:</strong> Name, email, and profile details when you create an account</li>
                  <li className="text-lg text-gray-900"><strong>Habit Data:</strong> Your habit progress, preferences, and activity logs</li>
                  <li className="text-lg text-gray-900"><strong>User Settings:</strong> Customization preferences and app configurations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-black">b) Automatically Collected Information</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li className="text-lg text-gray-900"><strong>Device & Usage Data:</strong> IP address, device type, operating system, and app version</li>
                  <li className="text-lg text-gray-900"><strong>Analytics Data:</strong> App usage patterns via Firebase Analytics</li>
                  <li className="text-lg text-gray-900"><strong>Performance Data:</strong> App performance metrics and error logs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium text-black">c) Third-Party Integrations</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li className="text-lg text-gray-900">Google and Apple Sign-In (optional)</li>
                  <li className="text-lg text-gray-900">Firebase services for authentication, analytics, and notifications</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-gray-800">2. How We Use Your Information</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Provide and maintain app functionality",
                "Personalize your experience",
                "Send notifications and reminders",
                "Analyze usage trends",
                "Improve app performance",
                "Ensure security and prevent fraud"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg shadow">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-lg text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-gray-800">3. Data Security & Retention</h2>
            <div className="mt-4 bg-blue-50 p-6 rounded-lg shadow">
              <p className="flex items-center text-lg text-gray-900"><span className="mr-2 text-2xl">🔒</span> Your data is securely stored using Firebase with industry-standard encryption.</p>
              <p className="mt-2 flex items-center text-lg text-gray-900"><span className="mr-2 text-2xl">🗑️</span> You can request complete data deletion by contacting <a href="mailto:termux405@gmail.com" className="text-blue-600 hover:text-blue-800">termux405@gmail.com</a></p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-3xl font-semibold text-gray-800">4. Contact Us</h2>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow">
              <p className="flex items-center text-lg text-gray-900">
                <span className="mr-2 text-2xl">📧</span>
                Email: <a href="mailto:termux405@gmail.com" className="ml-2 text-blue-600 hover:text-blue-800">termux405@gmail.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
