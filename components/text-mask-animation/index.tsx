"use client";

// import styles from "../../app/globals.css";

const phrases: string[] = [
    "It is a long established fact",
    "that a reader will be distracted",
    "by the readable content of a page",
    "when looking at its layout.",
];

export default function Home(): JSX.Element {
    return (
        // <div className={styles.container}>
        <div className="container">
            <MaskText />
            <MaskText />
            <MaskText />
            <MaskText />
            <MaskText />
        </div>
    );
}

export function MaskText(): JSX.Element {
    return (
        <div className="body">
            {phrases.map((phrase: string, index: number) => {
                return (
                    <div key={index} className="lineMask">
                        <p>{phrase}</p>
                    </div>
                );
            })}
        </div>
    );
}
