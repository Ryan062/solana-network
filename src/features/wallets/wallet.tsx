import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { wallets } from "@/lib/data";

interface IWallet {
    selectWallet: (walletId: string) => void;
}

export default function Wallet({ selectWallet }: IWallet) {
    return (
        <div className="grid grid-cols-4 gap-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {wallets.map((wallet) => (
                    <button
                        key={wallet.id}
                        className="bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-purple-500/50 rounded-lg p-4 text-left transition-all flex items-center justify-between group"
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
    );
}
