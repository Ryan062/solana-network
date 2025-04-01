import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full py-4 px-6 flex justify-between items-center relative z-10">
            <Link href="/" className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.5 12H16.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 7.5V16.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                    Solana Chain Network
                </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
                <Link
                    href="/"
                    className="text-white hover:text-purple-400 transition-colors font-medium"
                >
                    Home
                </Link>
                <Link
                    href="/wallets"
                    className="text-white hover:text-purple-400 transition-colors"
                >
                    Connect Wallet
                </Link>
                <Link
                    href="/explore"
                    className="text-white hover:text-purple-400 transition-colors"
                >
                    Explore
                </Link>
            </nav>
            <Link
                href="/wallets"
                className="hidden md:flex items-center justify-center bg-gradient-to-r from-purple-600 px-4 py-2 rounded-lg to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
            >
                Connect
            </Link>
        </header>
    );
}
