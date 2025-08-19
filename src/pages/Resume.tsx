import { useEffect } from "react";

const Resume = () => {
    useEffect(() => {
        document.title = "Emre Uçmaz - Resume";

        // favicon'u değiştirme
        const link =
            document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.setAttribute("rel", "icon");
        link.setAttribute("type", "image/png");
        link.setAttribute("href", "/favicon.png");
        document.head.appendChild(link);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
        </div>
    );
};

export default Resume;
