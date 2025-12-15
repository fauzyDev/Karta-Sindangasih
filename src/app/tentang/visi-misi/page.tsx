export default function VisiMisiPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-10">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                    Visi & Misi Karang Taruna
                </h1>

                {/* Card */}
                <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-200">

                    {/* Visi */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Visi</h2>
                        <p className="text-gray-700 leading-relaxed">
                            “Terwujudnya generasi muda yang berperan aktif, berkarakter, dan mampu memberikan kontribusi positif bagi masyarakat.”
                        </p>
                    </section>

                    <hr className="my-8" />

                    {/* Misi */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Misi</h2>

                        <ul className="list-decimal ml-6 space-y-3 text-gray-700">
                            <li>
                                Meningkatkan peran serta generasi muda dalam kegiatan pembangunan dan sosial kemasyarakatan.
                            </li>
                            <li>
                                Mengembangkan potensi dan kreativitas pemuda melalui kegiatan yang produktif dan positif.
                            </li>
                            <li>
                                Mendorong jiwa kepemimpinan, kebersamaan, dan gotong royong di kalangan pemuda.
                            </li>
                            <li>
                                Menanggulangi masalah sosial yang terjadi di masyarakat, khususnya yang berkaitan dengan generasi muda.
                            </li>
                            <li>
                                Meningkatkan kesejahteraan sosial masyarakat melalui kegiatan pelayanan sosial dan pemberdayaan.
                            </li>
                            <li>
                                Menjalin kerja sama dengan pemerintah desa, lembaga masyarakat, dan organisasi kepemudaan lainnya.
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}
