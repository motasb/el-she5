"use client";
import { useEffect, useState } from "react";

type ToggleProps = {
    nameTogleInLocal: string;
};

export default function Toggle({ nameTogleInLocal }: ToggleProps) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked((prev: boolean) => !prev);
    };

    useEffect(() => {
        // جلب الحالة المحفوظة من localStorage عند تحميل المكون لأول مرة
        if (typeof window !== 'undefined') {
            const savedToggleState = window.localStorage.getItem(nameTogleInLocal);
            const isLightMode = savedToggleState === 'true';
            setIsChecked(isLightMode);
            document.body.classList.toggle("dark-mode", !isLightMode);
        }
    }, [nameTogleInLocal]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // حفظ الحالة الجديدة في localStorage وتحديث وضع الصفحة
            window.localStorage.setItem(nameTogleInLocal, JSON.stringify(isChecked));
            document.body.classList.toggle("dark-mode", !isChecked);
        }
    }, [isChecked, nameTogleInLocal]);

    return (
        <label>
            <input
                className="toggle-checkbox"
                type="checkbox"
                id="theme-toggle"
                onChange={handleCheckboxChange}
                checked={isChecked}
            />
            <div className="toggle-switch"></div>
        </label>
    );
}
