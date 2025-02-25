"use client";

import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { useState } from "react";
import { FileCheck, Bell, Shield, UserCheck } from "lucide-react";
import type { JSX } from "react";

interface CardData {
    id: number;
    title: string;
    price: string;
    features: string[];
    icon: JSX.Element;
}

const cards: CardData[] = [
    {
        id: 1,
        title: "AML and Background Checks",
        price: "$0.30",
        features: [
            "Screen users across more than 250 global watchlist, PEP, and adverse media databases.",
            "Real-time notifications through webhooks for instant updates.",
        ],
        icon: <FileCheck className="h-6 w-6" />,
    },
    {
        id: 2,
        title: "Identity Verification",
        price: "$0.50",
        features: [
            "Verify user identity with document scanning.",
            "Biometric face matching technology.",
        ],
        icon: <UserCheck className="h-6 w-6" />,
    },
    {
        id: 3,
        title: "Fraud Prevention",
        price: "$0.40",
        features: [
            "Advanced fraud detection algorithms.",
            "Real-time risk scoring and assessment.",
        ],
        icon: <Shield className="h-6 w-6" />,
    },
    {
        id: 4,
        title: "Compliance Monitoring",
        price: "$0.35",
        features: [
            "Continuous compliance monitoring.",
            "Automated regulatory reporting.",
        ],
        icon: <Bell className="h-6 w-6" />,
    },
    {
        id: 5,
        title: "Compliance Monitoring",
        price: "$0.35",
        features: [
            "Continuous compliance monitoring.",
            "Automated regulatory reporting.",
        ],
        icon: <Bell className="h-6 w-6" />,
    },
    {
        id: 6,
        title: "Compliance Monitoring",
        price: "$0.35",
        features: [
            "Continuous compliance monitoring.",
            "Automated regulatory reporting.",
        ],
        icon: <Bell className="h-6 w-6" />,
    },
    {
        id: 7,
        title: "Compliance Monitoring",
        price: "$0.35",
        features: [
            "Continuous compliance monitoring.",
            "Automated regulatory reporting.",
        ],
        icon: <Bell className="h-6 w-6" />,
    },
    {
        id: 8,
        title: "Compliance Monitoring",
        price: "$0.35",
        features: [
            "Continuous compliance monitoring.",
            "Automated regulatory reporting.",
        ],
        icon: <Bell className="h-6 w-6" />,
    },
    {
        id: 9,
        title: "Compliance Monitoring",
        price: "$0.35",
        features: [
            "Continuous compliance monitoring.",
            "Automated regulatory reporting.",
        ],
        icon: <Bell className="h-6 w-6" />,
    },
    {
        id: 10,
        title: "Compliance Monitoring",
        price: "$0.35",
        features: [
            "Continuous compliance monitoring.",
            "Automated regulatory reporting.",
        ],
        icon: <Bell className="h-6 w-6" />,
    },
];

export default function CardStack() {
    const [stack, setStack] = useState(cards);

    const handleDragEnd = (info: PanInfo) => {
        const xOffset = info.offset.x;
        const threshold = 100;

        if (Math.abs(xOffset) > threshold) {
            setStack((prev) => {
                const newStack = [...prev];
                if (xOffset > 0) {
                    // Swipe right
                    const lastCard = newStack.pop();
                    if (lastCard) newStack.unshift(lastCard);
                } else {
                    // Swipe left
                    const firstCard = newStack.shift();
                    if (firstCard) newStack.push(firstCard);
                }
                return newStack;
            });
        }
    };

    return (
        <div className="border w-full h-[100vh] flex justify-center items-center bg-slate-300">
            <div
                className="relative w-full max-w-md mx-auto border"
                // style={{ height: "400px" }}
            >
                <AnimatePresence mode="popLayout">
                    {stack.map((card, index) => (
                        <motion.div
                            key={card.id}
                            layoutId={`card-${card.id}`}
                            initial={
                                index === 0 ? { scale: 0.8, opacity: 0 } : {}
                            }
                            animate={{
                                scale: 1,
                                x:
                                    index === 0
                                        ? 0
                                        : index % 2 === 0
                                        ? -40 - index * 10
                                        : 40 + index * 10,
                                zIndex: stack.length - index,
                                opacity: index === 0 ? 1 : 0.5 - index * 0.1,
                            }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            drag={index === 0 ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) =>
                                index === 0 && handleDragEnd(info)
                            }
                            className={`absolute inset-x-0 top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing ${
                                index === 0 ? "hover:scale-105" : ""
                            }`}
                            style={{
                                width: "100%",
                                height: "320px", // Fixed height for all cards
                            }}
                        >
                            <div className="w-full h-full p-6 bg-white shadow-lg rounded-xl overflow-hidden">
                                <div className="h-full flex flex-col justify-between">
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="p-2 bg-blue-100 rounded-lg">
                                                {card.icon}
                                            </div>
                                            <div className="bg-blue-50 px-4 py-1 rounded-full">
                                                <span className="text-blue-600 font-medium">
                                                    {card.price} per
                                                    verification
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold">
                                            {card.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {card.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2 text-gray-600 text-sm"
                                                >
                                                    <svg
                                                        className="h-5 w-5 flex-shrink-0 text-gray-400 mt-0.5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button className="w-full mt-4 bg-black p-5 rounded-xl">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
