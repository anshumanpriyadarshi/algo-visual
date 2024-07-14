"use client"

import { useEffect, useState } from "react";
import { NumberCard } from "../NumberCard/NumberCard";
import styles from "./sortingDashboard.module.scss";

export const SortingDashboard = () => {
    const [numbers, setNumbers] = useState<number[]>([])
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const nums = Array.from({ length: 20 }, () => Math.floor(Math.random() * 40));
        setNumbers(nums);
    }, [])

    // Function to swap the first and last elements of `numbers`
    const swap = () => {
        let temp = [...numbers]; // Create a copy of the array
        let first = temp[0];
        temp[0] = temp[temp.length - 1];
        temp[temp.length - 1] = first;
        setNumbers(temp); // Update `numbers` with the swapped array
        setAnimate(true)

    };

    return (
        <div className={styles.dashboardContainer}>
            {numbers.map((num, index) => (
                <NumberCard key={index} className={ index === 0 ? styles.fadeInAnimation : ""} value={num} />
            ))}
            <button onClick={swap}>SWAP</button>
        </div>
    );
};
