const Base44EmbeddedPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <iframe
                src="https://base44.com"
                title="Embedded Page"
                width="800"
                height="600"
                className="border rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Base44EmbeddedPage;