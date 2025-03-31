import { Button } from "./ui/button";
import { Wallet } from "@/types";

interface ConnectionSuccessProps {
    wallet: Wallet;
    resetConnection: () => void;
}

export default function ConnectionSuccess({ wallet, resetConnection }: ConnectionSuccessProps) {
    return (
        <div className="text-center max-w-md mx-auto px-6 py-12">
            <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 w-20 h-20 flex items-center justify-center">
                    <svg
                        className="h-10 w-10 text-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22 4L12 14.01L9 11.01"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Verification Successful</h2>
            <p className="text-slate-300 mb-2">
                {wallet ? `Successfully connected to ${wallet.name}` : "Your ID has been verified"}
            </p>
            <p className="text-slate-400 mb-6">
                Your airdrop eligibility has been confirmed. You can now claim your tokens.
            </p>

            <div className="w-full bg-slate-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Claim Status</span>
                    <span className="text-sm text-green-400 flex items-center">Ready to Claim</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full"
                        style={{ width: "100%" }}
                    ></div>
                </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mb-4">
                Claim Tokens
            </Button>

            <Button
                variant="outline"
                onClick={resetConnection}
                className="w-full border-slate-600 text-slate-400 hover:bg-slate-800 hover:text-white"
            >
                Disconnect
            </Button>
        </div>
    );
}
