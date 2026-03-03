import "client-only";

import { useEffect, useState } from "react";

/**
 * Hook to determine which section is currently active based on scrolling.
 * @param sectionIds Array of section IDs to track
 * @returns The ID of the currently active section
 */
export function useActiveSection(sectionIds: string[], offset: number = 200) {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

    useEffect(() => {
        const handleScroll = () => {
            // Find the current section
            let current = activeSection;

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport (with offset)
                    if (rect.top <= offset && rect.bottom >= offset) {
                        current = id;
                        break;
                    }
                }
            }

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sectionIds, activeSection, offset]);

    return activeSection;
}
