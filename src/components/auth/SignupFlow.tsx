import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, Lock, User, ChevronLeft, ChevronRight, Delete, Send, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Step = "EMAIL" | "OTP" | "SET_PIN" | "CONFIRM_PIN" | "NICKNAME" | "INVITE";

const SignupFlow = () => {
    const [step, setStep] = useState<Step>("EMAIL");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    const [nickname, setNickname] = useState("");
    const [inviteCode] = useState(() => Math.random().toString(36).substring(2, 8).toUpperCase());
    const navigate = useNavigate();

    const handleNext = () => {
        if (step === "EMAIL") setStep("OTP");
        else if (step === "OTP") setStep("SET_PIN");
        else if (step === "SET_PIN") setStep("CONFIRM_PIN");
        else if (step === "CONFIRM_PIN") setStep("NICKNAME");
        else if (step === "NICKNAME") setStep("INVITE");
        else if (step === "INVITE") {
            // Finalize
            console.log("Signup complete", { email, pin, nickname });
            navigate("/");
        }
    };

    const handleBack = () => {
        if (step === "OTP") setStep("EMAIL");
        else if (step === "SET_PIN") setStep("OTP");
        else if (step === "CONFIRM_PIN") setStep("SET_PIN");
        else if (step === "NICKNAME") setStep("CONFIRM_PIN");
        else if (step === "INVITE") setStep("NICKNAME");
        else navigate("/");
    };

    const addPinDigit = (digit: string) => {
        if (step === "SET_PIN") {
            if (pin.length < 4) {
                const newPin = pin + digit;
                setPin(newPin);
                if (newPin.length === 4) {
                    setTimeout(() => setStep("CONFIRM_PIN"), 300);
                }
            }
        } else if (step === "CONFIRM_PIN") {
            if (confirmPin.length < 4) {
                const newPin = confirmPin + digit;
                setConfirmPin(newPin);
                if (newPin.length === 4) {
                    setTimeout(() => setStep("NICKNAME"), 300);
                }
            }
        }
    };

    const removePinDigit = () => {
        if (step === "SET_PIN") setPin(pin.slice(0, -1));
        else if (step === "CONFIRM_PIN") setConfirmPin(confirmPin.slice(0, -1));
    };


    const renderHeader = (title: string = "Between") => (
        <div className="flex flex-col items-center gap-2 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#FDF2F2] flex items-center justify-center mb-2">
                <Heart className="w-8 h-8 text-[#D4B4B4] fill-current" />
            </div>
            <h1 className="text-2xl font-bold text-[#1A1A1A] font-sans">{title}</h1>
            <p className="text-[#A1A1A1] text-sm">Your private space</p>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-start p-6 font-sans">
            <div className="w-full max-w-md flex flex-col h-full grow">
                <button onClick={handleBack} className="self-start mb-8 p-2 rounded-full hover:bg-black/5 transition-colors">
                    <ChevronLeft className="w-6 h-6 text-[#1A1A1A]" />
                </button>

                <AnimatePresence mode="wait">
                    {step === "EMAIL" && (
                        <motion.div
                            key="email"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            {renderHeader("Between")}

                            <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-[#A1A1A1]" />
                            </div>

                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Enter your email</h2>
                            <p className="text-[#A1A1A1] text-sm mb-10 max-w-[280px]">
                                We'll send you an OTP to sign in. No passwords to remember.
                            </p>

                            <div className="w-full space-y-4">
                                <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-14 bg-[#F3F4F6] border-none rounded-2xl text-center text-lg placeholder:text-[#BABABA]"
                                />
                                <Button
                                    onClick={handleNext}
                                    disabled={!email.includes("@")}
                                    className="w-full h-14 bg-[#D4B4B4] hover:bg-[#C4A4A4] text-white rounded-2xl text-lg font-medium transition-colors"
                                >
                                    Continue <ChevronRight className="ml-2 w-5 h-5" />
                                </Button>
                                <p className="text-[#BABABA] text-[11px] mt-4">
                                    Your email stays private. We never share it.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {step === "OTP" && (
                        <motion.div
                            key="otp"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            {renderHeader("Between")}

                            <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-[#A1A1A1]" />
                            </div>

                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Enter verification code</h2>
                            <p className="text-[#A1A1A1] text-sm mb-10">
                                We sent a 6-digit code to<br />
                                <span className="text-[#1A1A1A] font-medium">{email}</span>
                            </p>

                            <div className="w-full space-y-8 flex flex-col items-center">
                                <InputOTP
                                    maxLength={6}
                                    value={otp}
                                    onChange={setOtp}
                                    onComplete={handleNext}
                                >
                                    <InputOTPGroup className="gap-2">
                                        {[0, 1, 2, 3, 4, 5].map((i) => (
                                            <InputOTPSlot
                                                key={i}
                                                index={i}
                                                className="w-12 h-14 bg-[#F3F4F6] border-none rounded-xl text-xl text-[#1A1A1A] focus:ring-2 focus:ring-[#D4B4B4]"
                                            />
                                        ))}
                                    </InputOTPGroup>
                                </InputOTP>

                                <button className="text-[#D4B4B4] text-sm font-medium hover:underline">
                                    Didn't receive code? <span className="opacity-70">Resend</span>
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {(step === "SET_PIN" || step === "CONFIRM_PIN") && (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            {renderHeader("LoveTemple")}

                            <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-6">
                                <Lock className="w-6 h-6 text-[#A1A1A1]" />
                            </div>

                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                                {step === "SET_PIN" ? "Set your privacy code" : "Confirm your passcode"}
                            </h2>
                            <p className="text-[#A1A1A1] text-sm mb-10">
                                {step === "SET_PIN"
                                    ? "A 4-digit code to keep your space safe."
                                    : "Enter your 4-digit code again to confirm."}
                            </p>

                            <div className="flex gap-4 mb-12">
                                {[0, 1, 2, 3].map((i) => {
                                    const currentPin = step === "SET_PIN" ? pin : confirmPin;
                                    return (
                                        <div
                                            key={i}
                                            className={`w-3 h-3 rounded-full transition-all duration-200 ${i < currentPin.length ? "bg-[#D4B4B4]" : "bg-[#E5E7EB]"
                                                }`}
                                        />
                                    );
                                })}
                            </div>

                            <div className="grid grid-cols-3 gap-6 w-full max-w-[280px]">
                                {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "delete"].map((key, i) => {
                                    if (key === "") return <div key={i} />;
                                    if (key === "delete") {
                                        return (
                                            <button
                                                key={i}
                                                onClick={removePinDigit}
                                                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-black/5 active:bg-black/10 transition-colors"
                                            >
                                                <Delete className="w-6 h-6 text-[#1A1A1A]" />
                                            </button>
                                        );
                                    }
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => addPinDigit(key)}
                                            className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center text-2xl font-medium text-[#1A1A1A] hover:bg-[#EAEBED] active:bg-[#E2E3E5] transition-colors"
                                        >
                                            {key}
                                        </button>
                                    );
                                })}
                            </div>

                            <button className="mt-8 text-[#A1A1A1] text-xs">
                                Forgot your passcode? We can help.
                            </button>
                        </motion.div>
                    )}

                    {step === "NICKNAME" && (
                        <motion.div
                            key="nickname"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            {renderHeader("LoveTemple")}

                            <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center mb-6">
                                <User className="w-6 h-6 text-[#A1A1A1]" />
                            </div>

                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">What should we call you?</h2>
                            <p className="text-[#A1A1A1] text-sm mb-10 max-w-[240px]">
                                A nickname for your partner to see. You can always change this later.
                            </p>

                            <div className="w-full space-y-4">
                                <Input
                                    placeholder="Your nickname"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value)}
                                    className="h-14 bg-[#F3F4F6] border-none rounded-2xl text-center text-lg placeholder:text-[#BABABA]"
                                />
                                <Button
                                    onClick={handleNext}
                                    disabled={nickname.length < 2}
                                    className="w-full h-14 bg-[#D4B4B4] hover:bg-[#C4A4A4] text-white rounded-2xl text-lg font-medium transition-colors"
                                >
                                    Continue <ChevronRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {step === "INVITE" && (
                        <motion.div
                            key="invite"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex flex-col items-center text-center w-full min-h-[500px]"
                        >
                            <div className="relative w-full max-w-[280px] aspect-[9/19.5] mb-8 group">
                                <div className="absolute inset-0 border-[8px] border-charcoal rounded-[2.5rem] bg-card shadow-xl overflow-hidden z-10">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-charcoal rounded-b-xl z-30" />
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key="invite-ui"
                                            src="/Invite/4.jpg"
                                            className="w-full h-full object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </AnimatePresence>

                                    {/* Overlay for the actual dynamic code if needed, but here we use the image look */}
                                    <div className="absolute inset-x-0 top-[38%] flex flex-col items-center z-20">
                                        <span className="text-2xl font-bold tracking-wider text-[#4A4A4A] font-mono">
                                            {inviteCode.slice(0, 3)}-{inviteCode.slice(3)}
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full -z-10 animate-pulse" />
                            </div>

                            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Connect with your person</h2>
                            <p className="text-[#A1A1A1] text-sm mb-8 max-w-[280px]">
                                Share your secret code or enter theirs to start your private journey together.
                            </p>

                            <div className="w-full space-y-4">
                                <div className="flex gap-3">
                                    <Button
                                        onClick={() => {
                                            navigator.clipboard.writeText(inviteCode);
                                            toast.success("Code copied!");
                                        }}
                                        className="flex-1 h-14 bg-[#D4B4B4] hover:bg-[#C4A4A4] text-white rounded-2xl text-lg font-medium shadow-sm transition-all active:scale-[0.98]"
                                    >
                                        <Share2 className="mr-2 w-5 h-5" /> Copy & Share
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-gray-200" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-[#FAF9F6] px-2 text-[#BABABA]">or</span>
                                    </div>
                                </div>

                                <Button
                                    variant="outline"
                                    onClick={() => toast.info("Enter code feature coming soon!")}
                                    className="w-full h-14 border-2 border-dashed border-[#D4B4B4]/30 text-[#A1A1A1] hover:bg-white hover:border-[#D4B4B4] rounded-2xl text-lg font-medium transition-all"
                                >
                                    I have a code
                                </Button>

                                <button
                                    onClick={handleNext}
                                    className="text-[#D4B4B4] text-sm font-semibold mt-4 hover:underline underline-offset-4"
                                >
                                    I'll do this later
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex justify-center gap-2 mt-auto pb-8">
                    {["EMAIL", "OTP", "SET_PIN", "NICKNAME", "INVITE"].map((_, i) => {
                        let activeIndex = ["EMAIL", "OTP", "SET_PIN", "CONFIRM_PIN", "NICKNAME", "INVITE"].indexOf(step);
                        // Adjust index because SET_PIN and CONFIRM_PIN share the 3rd dot (index 2)
                        if (activeIndex === 3) activeIndex = 2; // CONFIRM_PIN stays at 2
                        if (activeIndex > 3) activeIndex -= 1; // NICKNAME becomes 3, INVITE becomes 4

                        return (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-[#D4B4B4]" : "w-2 bg-[#E5E7EB]"
                                    }`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SignupFlow;
