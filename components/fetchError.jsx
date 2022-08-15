export default function FetchError() {
    return (
        <>
            <main className="flex items-center justify-center h-screen text-gray-200">
                <div className="p-4 space-y-4">
                    <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
                        <svg aria-hidden="true" className="w-20 h-20 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                        </svg>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-medium sm:text-2xl text-gray-200">
                                    There was an error fetching the data.
                                </span>
                            </div>
                            <p className="text-base font-normaltext-gray-300">
                                Please reload the page or try again later.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}