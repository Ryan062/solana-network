"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, Award, Users } from "lucide-react";
import Link from "next/link";
import Partners from "@/components/partners";

const features = [
    {
        icon: <Zap className="h-6 w-6 text-purple-400" />,
        title: "High Performance",
        description:
            "Experience lightning-fast transactions with our optimized blockchain infrastructure.",
    },
    {
        icon: <Shield className="h-6 w-6 text-blue-400" />,
        title: "Enterprise Security",
        description:
            "Military-grade encryption and multi-layered security protocols protect your assets.",
    },
    {
        icon: <Award className="h-6 w-6 text-pink-400" />,
        title: "Exclusive Rewards",
        description: "Early adopters receive premium benefits and higher staking rewards.",
    },
    {
        icon: <Users className="h-6 w-6 text-green-400" />,
        title: "Community Governance",
        description:
            "Token holders participate in protocol decisions through decentralized voting.",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-900 text-white">
            <div className="relative">
                {/* Hero section */}
                <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 px-6 py-12 relative">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 rounded-full bg-purple-900/30 text-purple-400 text-sm font-medium mb-4">
                            Airdrop Now Live
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
                                Solana Chain Network
                            </span>
                            <br />
                            <span className="text-white">Next-Gen Blockchain</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-8">
                            Solana Chain Network is revolutionizing DePIN with its advanced,
                            distributed enterprise-grade GPU-based compute infrastructure tailored
                            for AI and gaming. Backed by leading Web3 investors with over $32M in
                            funds raised for the ecosystem, Solana Chain Network is paving the way
                            for the future of decentralized computing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                            >
                                Claim Airdrop
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Link href="/explore" passHref>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                                >
                                    Explore Services
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-8 text-sm text-slate-400">
                            <p>
                                <strong>Note:</strong> Existing badge will remain the same.
                            </p>
                            <p>New Points will be claiming here.</p>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full max-w-md aspect-video bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl overflow-hidden shadow-lg shadow-purple-900/30">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                <div className="w-16 h-16 mb-4">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="white"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M12 6V18"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M6 12H18"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold mb-2">Airdrop claim is live!</h2>
                                <div className="mt-4">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M7.5 12.5L10.5 15.5L16.5 9.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="w-full bg-slate-800/50 backdrop-blur-sm py-12 mt-8">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    $32M+
                                </div>
                                <div className="text-slate-400">Total Funding</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    100K+
                                </div>
                                <div className="text-slate-400">Community Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    10M
                                </div>
                                <div className="text-slate-400">Token Supply</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    24
                                </div>
                                <div className="text-slate-400">Global Partners</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features section */}
                <div className="w-full max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Solana Chain Network</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Our cutting-edge blockchain technology offers unparalleled benefits for
                            developers, investors, and users alike.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors group"
                            >
                                <CardContent className="pt-6">
                                    <div className="rounded-full bg-slate-700/50 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-900/30 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                                    <p className="text-slate-400">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Partners section */}
                <div className="w-full max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Backed By Industry Leaders</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Trusted by top investors and partners in the blockchain ecosystem.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                        <Partners />
                    </div>
                </div>

                {/* CTA section */}
                <div className="w-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-16 mt-8">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Join the Future of Blockchain?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            Don&apos;t miss your chance to be part of the Solana Chain Network
                            ecosystem. Connect your wallet now to claim your tokens.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                        >
                            <Link
                                href="/wallets"
                                className="w-full flex items-center justify-center"
                            >
                                Connect Wallet & Claim Airdrop
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
