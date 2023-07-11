export default function PageError() {
    return (
        <div className="bg-gradient-to-t from-fuchsia-700 via-fuchsia-900 to-current h-screen flex items-center justify-center">
            <div className="flex justify-center flex-col content-center items-center">
                <h1 className="text-white text-6xl">404</h1>
                <h1 className="text-white text-4xl">Erro ao carregar a página</h1>
            </div>
        </div>
    );
}