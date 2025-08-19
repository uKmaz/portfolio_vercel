import Head from "next/head";

export default function ResumePage() {
    return (
        <>
            <Head>
                <title>Emre Uçmaz - Resume</title>
                <meta name="description" content="Resume" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">My Resume</h1>
                <p className="text-lg text-gray-600 mb-4">
                    You can view or download my CV below:
                </p>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    View Resume
                </a>
            </main>
        </>
    );
}
