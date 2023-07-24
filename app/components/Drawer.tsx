"use client";

import cn from "classnames";
import { useEffect, useRef } from "react";

const Drawer = ({
    isOpen,
    onClose,
    children,
    className,
	position = 'left'
} : any ) => {
    const bodyRef = useRef(document.querySelector('body'));

	useEffect(() => {
        const updatePageScroll = () => {
        if (isOpen) {
            bodyRef.current!!.style.overflow = 'hidden';
        } else {
            bodyRef.current!!.style.overflow = '';
        }
        };

        updatePageScroll();
    }, [isOpen]);

    return (
        <div 
            aria-hidden={isOpen? false : true}
                className={cn("drawer-container", {
                open: isOpen,
                className
            })}>
                <div
                    className={cn("drawer", position)}
                    role="dialog">
                    {children}
                </div>
                <div className="backdrop" onClick={onClose} />
        </div>
    );
}
 
export default Drawer;