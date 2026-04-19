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
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
            <h1 className="text-3xl font-bold mb-6">My Resumes</h1>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
                You can view or download my CVs below based on the role:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="/Emre_Uçmaz_CV_SE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow hover:bg-primary/90 transition text-center"
                >
                    Software Engineering CV
                </a>
                <a
                    href="/Emre_Uçmaz_CV_GD.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-accent text-accent-foreground rounded-lg shadow hover:bg-accent/90 transition text-center"
                >
                    Game Development CV
                </a>
            </div>
        </div>
    );
};

export default Resume;
