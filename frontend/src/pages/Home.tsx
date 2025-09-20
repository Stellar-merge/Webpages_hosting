export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-10 my-16 px-6">
                {/* Left Content */}
                <div className="max-w-lg text-center md:text-left space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">Introducing NoName</h2>
                    <h3 className="text-lg text-gray-600">Your One-stop Solution to all Aadhaar and DBT related Samasyas</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="rounded-full bg-blue-500 text-white px-6 py-2 font-medium hover:bg-blue-600 transition">
                            Check DBT Status
                        </button>
                        <button className="rounded-full bg-gray-300 px-6 py-2 font-medium hover:bg-gray-400 transition">
                            Login to Dashboard
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="h-[40vh] w-[30vw] flex justify-center items-center border-2 border-dashed rounded-lg bg-gray-100">
                    <img src={"https://www.toureiffel.paris/en/the-monument/key-figures"} alt="Placeholder" className="h-32 w-32 opacity-70" />
                </div>
            </section>

            {/* Infotainment Section */}
            <section className="grid md:grid-cols-2 gap-6 px-6 my-12">
                <div className="flex flex-col border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition">
                    <h1 className="text-xl font-semibold text-gray-800 mb-3">Aadhaar Linking</h1>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis in saepe, veniam natus
                        commodi culpa doloremque dolore?
                    </p>
                    <a
                        href="https://uidai.gov.in/"
                        className="text-blue-500 font-medium hover:text-orange-500 transition"
                    >
                        Visit UIDAI website →
                    </a>
                </div>

                <div className="flex flex-col border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition">
                    <h1 className="text-xl font-semibold text-gray-800 mb-3">DBT Linking</h1>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis in saepe, veniam natus
                        commodi culpa doloremque dolore?
                    </p>
                    <a
                        href="https://dbtbharat.gov.in/static-page-content/spagecont?id=3"
                        className="text-blue-500 font-medium hover:text-orange-500 transition"
                    >
                        Visit DBT website →
                    </a>
                </div>
            </section>
        </>
    )
}