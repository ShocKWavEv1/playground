import cn from "clsx";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import s from "./cursor.module.scss";

const Cursor = () => {
  const cursor: any = useRef();
  const [isGrab, setIsGrab] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const router = useRouter();

  const onMouseMove = useCallback(
    ({ clientX, clientY }: { clientX: any; clientY: any }) => {
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: hasMoved ? 0.6 : 0,
        ease: "expo.out",
      });
      setHasMoved(true);
    },
    [hasMoved]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
    };
  }, [hasMoved]);

  useEffect(() => {
    customCursorTracker();
  }, [router]);

  useEffect(() => {
    console.log(isPointer);
  }, [isPointer]);

  useEffect(() => {
    customCursorTracker();
  }, []);

  const customCursorTracker = () => {
    let elements: any = [];

    const onMouseEnter = () => {
      setIsPointer(true);
    };
    const onMouseLeave = () => {
      setIsPointer(false);
    };

    elements = [
      ...document.querySelectorAll(
        "button,a,input,label,[data-cursor='pointer']"
      ),
    ];

    elements.forEach((element: any) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element: any) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  };

  return (
    <div style={{ opacity: hasMoved ? 1 : 0 }} className={s.container}>
      <div ref={cursor}>
        <div
          className={cn(s.cursor, isGrab && s.grab, isPointer && s.pointer)}
        />
      </div>
    </div>
  );
};

export { Cursor };
