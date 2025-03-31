import Image from "next/image";
import {
    Gift,
    RefreshCw,
    Settings,
    Layers,
    Repeat,
    Package,
    Database,
    Coins,
    ShieldCheck,
    BanknoteArrowDown,
} from "lucide-react";

// Service options
const services = [
    {
        id: "stake",
        name: "Stake/Unstake",
        icon: <RefreshCw className="h-16 w-16 text-white" />,
        description: "Stake your tokens to earn rewards and participate in network governance.",
    },
    {
        id: "synchronize",
        name: "Synchronize",
        icon: <Repeat className="h-16 w-16 text-white" />,
        description: "Sync your wallet with the latest blockchain data for accurate balances.",
    },
    {
        id: "claim",
        name: "Claim",
        icon: <Gift className="h-16 w-16 text-white" />,
        description: "Claim your airdrop tokens and other rewards from the Nexus ecosystem.",
    },
    {
        id: "swap",
        name: "SWAP",
        icon: <Layers className="h-16 w-16 text-white" />,
        description: "Exchange tokens directly within the Nexus Protocol with minimal fees.",
    },
    {
        id: "nfts",
        name: "NFTs",
        icon: <Package className="h-16 w-16 text-white" />,
        description: "Explore and manage your NFT collection on the Nexus Protocol.",
    },
    {
        id: "withdrawals",
        name: "Withdrawals",
        icon: <BanknoteArrowDown className="h-16 w-16 text-white" />,
        description: "Withdraw your assets securely to external wallets or exchanges.",
    },
    {
        id: "validator",
        name: "Validator",
        icon: <Database className="h-16 w-16 text-white" />,
        description: "Run a validator node to help secure the network and earn rewards.",
    },
    {
        id: "gas-fees",
        name: "High Gas Fees",
        icon: <Coins className="h-16 w-16 text-white" />,
        description: "Optimize your transactions during high network congestion periods.",
    },
];

// Feature highlights
const features = [
    {
        id: "open-protocol",
        name: "Open Protocol",
        icon: <ShieldCheck className="h-16 w-16 text-white" />,
        color: "bg-pink-500",
        description: "Open protocol to communicate securely between Wallets and Dapps (Web3 Apps).",
    },
    {
        id: "secure-connections",
        name: "Best & Secured Connections",
        icon: <ShieldCheck className="h-16 w-16 text-white" />,
        color: "bg-orange-500",
        description:
            "The protocol establishes a remote connection between two apps and/or devices.",
    },
];

// Advanced features
const advancedFeatures = [
    {
        id: "one-time-pairing",
        name: "One-Time Pairing",
        icon: <Gift className="h-6 w-6 text-white" />,
        description:
            "Establishes multiple sessions from a single pairing. Only one connection for an infinite number of sessions.",
    },
    {
        id: "reduced-bandwidth",
        name: "Reduced Bandwidth",
        icon: <Settings className="h-6 w-6 text-white" />,
        description:
            "Websocket management efficiently re-uses resources to multiplex all messages through a single socket without interruption.",
    },
    {
        id: "multi-chain",
        name: "Multi-chain",
        icon: <Layers className="h-6 w-6 text-white" />,
        description:
            "Connect to a wallet with one or more chains simultaneously and send transactions to different chains at the same time. No more chain switching.",
    },
];

// Header component

export default function ExplorePage() {
    return (
        <div className="min-h-screen">
            <main className="container mx-auto px-4 py-8">
                {/* Hero section */}
                <div className="text-center my-20">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Services</h1>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-16">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-xl bg-gradient-to-br border border-slate-700 flex items-center justify-center mb-3 shadow-md">
                                {service.icon}
                            </div>
                            <h3 className="text-center font-medium mb-2">{service.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Feature highlights */}
                <div className=" my-40">
                    <h2 className="text-3xl md:text-5xl font-bold flex justify-center items-center my-20">
                        Protocol Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex flex-col items-center">
                                <div
                                    className={`w-30 h-30 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-center">
                                    {feature.name}
                                </h3>
                                <p className="text-slate-600 text-center text-base max-w-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Illustration section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="md:w-1/2">
                        <Image
                            src="/images/blockchain.jpg"
                            alt="Blockchain connection illustration"
                            width={500}
                            height={600}
                            className="w-full max-w-lg mx-auto rounded-lg"
                        />
                    </div>

                    <div className="md:w-1/2 space-y-6">
                        {advancedFeatures.map((feature) => (
                            <div key={feature.id} className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-400 flex-shrink-0 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">{feature.name}</h3>
                                    <p className="text-slate-600 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
