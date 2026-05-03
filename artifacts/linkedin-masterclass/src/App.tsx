/**
 * Platform contract file — do not restructure.
 *
 * This file is part of the contract between the slides artifact and
 * the surrounding workspace tooling (preview, thumbnails, exports).
 * Reorganizing it, swapping the router, or changing the structure
 * of `AllSlides` can quietly break that tooling even when the page
 * still looks correct in the preview.
 *
 * Agents: see the slides skill `<workspace_contract>` for the full
 * rules, and `references/visual_qa.md` → "Platform contract sanity
 * check" if this file has been hand-edited and needs repair.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";

import { slides } from "@/slideLoader";

function getSlideIndex(pathname: string): number {
  const match = pathname.match(/^\/slide(\d+)$/);
  if (!match) return -1;
  const position = parseInt(match[1], 10);
  return slides.findIndex((s) => s.position === position);
}

function SlideEditor() {
  const [location, navigate] = useLocation();
  const currentIndex = getSlideIndex(location);

  // In the workspace, the slide iframe is nested inside another iframe,
  // so window.parent !== window.parent.parent. In the deployed SlideViewer,
  // the parent is the top-level window, so they're equal. Disable local
  // navigation only in the workspace — the parent owns it there.
  const navigationDisabledRef = useRef(window.parent !== window.parent.parent);
  const touchHandledRefStable = useRef(false);

  useEffect(() => {
    if (currentIndex === -1) return;

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (navigationDisabledRef.current) return;
      if (event.key === " ") {
        event.preventDefault();
      }
      if ((event.key === "ArrowLeft" || event.key === "ArrowUp") && currentIndex > 0) {
        navigate(`/slide${slides[currentIndex - 1].position}`);
      }
      if (
        (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === " ") &&
        currentIndex < slides.length - 1
      ) {
        navigate(`/slide${slides[currentIndex + 1].position}`);
      }
    };

    const INTERACTIVE =
      "a,button,video,audio,input,select,textarea,details,summary,iframe,svg,canvas," +
      '[role="button"],[contenteditable="true"]';

    const isInteractive = (target: EventTarget | null) =>
      (target as HTMLElement | null)?.closest?.(INTERACTIVE);

    const touchHandledRef = touchHandledRefStable;

    const onClick = (event: MouseEvent) => {
      if (touchHandledRef.current) {
        touchHandledRef.current = false;
        return;
      }
      if (event.button !== 0 || event.metaKey || event.ctrlKey) return;
      if (isInteractive(event.target)) return;

      if (navigationDisabledRef.current) {
        window.parent.postMessage({ type: "advanceSlide" }, "*");
        return;
      }

      if (currentIndex < slides.length - 1) {
        navigate(`/slide${slides[currentIndex + 1].position}`);
      }
    };

    let touchStartX = 0;
    let touchStartY = 0;
    let touchTarget: EventTarget | null = null;

    const onTouchStart = (event: TouchEvent) => {
      touchHandledRef.current = false;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      touchTarget = event.target;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const dx = event.changedTouches[0].clientX - touchStartX;
      const dy = event.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) >= 10 || Math.abs(dy) >= 10) return;
      if (isInteractive(touchTarget)) return;
      touchHandledRef.current = true;

      if (navigationDisabledRef.current) {
        window.parent.postMessage({ type: "advanceSlide" }, "*");
        return;
      }

      const fraction = touchStartX / window.innerWidth;
      if (fraction < 0.4 && currentIndex > 0) {
        navigate(`/slide${slides[currentIndex - 1].position}`);
      } else if (fraction >= 0.4 && currentIndex < slides.length - 1) {
        navigate(`/slide${slides[currentIndex + 1].position}`);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("click", onClick);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [currentIndex, navigate]);

  return (
    <div className="select-none">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          <slide.Component />
        </div>
      ))}
    </div>
  );
}

// Do not rewrite this component. Each slide must remain wrapped in
// `<div className="slide">` sized 1920×1080 — the class name and
// dimensions are part of the platform contract. See the file-level
// banner above for context.
function AllSlides() {
  return (
    <div className="bg-black">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="slide relative aspect-video overflow-hidden"
          style={{ width: "1920px", height: "1080px" }}
        >
          <div className="h-full w-full [&_.h-screen]:!h-full [&_.w-screen]:!w-full">
            <slide.Component />
          </div>
        </div>
      ))}
    </div>
  );
}

// This component is used for the deployed view at `/`
function SlideViewer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [dims, setDims] = useState(() => ({
    width: Math.min(window.innerWidth, window.innerHeight * (16 / 9)),
    height: Math.min(window.innerHeight, window.innerWidth * (9 / 16)),
  }));

  useEffect(() => {
    const update = () => {
      setDims({
        width: Math.min(window.innerWidth, window.innerHeight * (16 / 9)),
        height: Math.min(window.innerHeight, window.innerWidth * (9 / 16)),
      });
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== " ") return;
      if (event.key === " ") event.preventDefault();
      iframeRef.current?.contentWindow?.dispatchEvent(
        new KeyboardEvent("keydown", { key: event.key, code: event.code, bubbles: true }),
      );
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const firstPosition = slides.length > 0 ? slides[0].position : 1;

  return (
    <div
      className="slide-viewer h-screen w-screen overflow-hidden bg-black flex items-center justify-center"
      onClick={() => iframeRef.current?.focus()}
    >
      <iframe
        ref={iframeRef}
        src={`${base}/slide${firstPosition}`}
        style={{ width: dims.width, height: dims.height, border: "none" }}
        onLoad={() => iframeRef.current?.focus()}
        title="Slide viewer"
      />
    </div>
  );
}

// Slides with dark backgrounds — slide number overlay uses light text on these
const DARK_SLIDE_POSITIONS = new Set([8, 22, 24]);

// Animated background layer injected behind every slide's content
function SlideBackground() {
  return (
    <div className="slide-bg" aria-hidden="true">
      {/* Floating organic blobs */}
      <div className="slide-bg-blob slide-bg-blob-1" />
      <div className="slide-bg-blob slide-bg-blob-2" />
      <div className="slide-bg-blob slide-bg-blob-3" />
      {/* Thin connector lines */}
      <div className="slide-bg-line slide-bg-line-v" />
      <div className="slide-bg-line slide-bg-line-h" />
      {/* Micro LinkedIn UI stickers floating in the distance */}
      <div className="slide-bg-sticker slide-bg-sticker-1">
        <svg width="0.8vw" height="0.8vw" viewBox="0 0 16 16" fill="currentColor" style={{ flexShrink: 0 }}>
          <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm.75 10.5h-1.5v-4.5h1.5v4.5zm-.75-5.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z"/>
        </svg>
        Connect
      </div>
      <div className="slide-bg-sticker slide-bg-sticker-2">
        <svg width="0.8vw" height="0.8vw" viewBox="0 0 16 16" fill="currentColor" style={{ flexShrink: 0 }}>
          <circle cx="8" cy="8" r="7"/>
        </svg>
        Open to Work
      </div>
      <div className="slide-bg-sticker slide-bg-sticker-3">
        ✦ 500+ connections
      </div>
    </div>
  );
}

function PortraitFallback() {
  return (
    <div className="portrait-fallback">
      <div style={{ textAlign: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: "2rem" }}>
        <div
          style={{
            width: "3.5rem",
            height: "3.5rem",
            background: "#0A66C2",
            borderRadius: "0.6rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1 }}>in</span>
        </div>
        <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111", marginBottom: "0.75rem" }}>
          LinkedIn Masterclass
        </div>
        <div style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.65, marginBottom: "1.5rem" }}>
          This presentation is designed for<br />desktop or laptop in landscape mode.
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 1.4rem",
            borderRadius: "100px",
            background: "#F7F9FB",
            border: "1px solid #E5E7EB",
            fontSize: "0.85rem",
            color: "#9CA3AF",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"><path d="M21 12H3"/><path d="M21 6H3"/><path d="M21 18H3"/></svg>
          Rotate device or open on a wider screen
        </div>
      </div>
    </div>
  );
}

// Stagger-animate direct content children of a slide when it enters viewport.
// Skips absolutely-positioned decorative overlays (badges, labels, etc.).
function animateSlideContent(slideEl: HTMLDivElement) {
  const contentRoot = slideEl.querySelector<HTMLElement>(".h-full.w-full > *");
  if (!contentRoot) return;
  const children = Array.from(contentRoot.children) as HTMLElement[];
  const animatable = children.filter(
    (c) => window.getComputedStyle(c).position !== "absolute",
  );
  animatable.forEach((child, i) => {
    child.classList.add("stagger-child");
    setTimeout(() => {
      requestAnimationFrame(() => child.classList.add("is-animated"));
    }, i * 130);
  });
}

function SlideShell() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = slides.length;
  const progress = useMemo(() => slides.map((slide) => slide.position), []);

  // Seed first slide as immediately visible (no flicker on load)
  useEffect(() => {
    const first = sectionRefs.current[0];
    if (first) {
      first.classList.add("is-entered");
      setTimeout(() => animateSlideContent(first), 180);
    }
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    const sections = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!root || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersection ratio
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!best) return;

        const slideEl = best.target as HTMLDivElement;
        const index = Number(slideEl.dataset.index ?? "0");
        setActiveIndex(index);

        // Mark this slide (and all previous ones) as entered so they stay visible
        for (let i = 0; i <= index; i++) {
          sectionRefs.current[i]?.classList.add("is-entered");
        }

        // Stagger-animate content children the first time a slide enters
        if (!slideEl.dataset.animated) {
          slideEl.dataset.animated = "true";
          animateSlideContent(slideEl);
        }
      },
      { root, threshold: [0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Parallax: background layer moves at 6% of scroll delta — creates depth
  useEffect(() => {
    const shell = scrollRef.current;
    if (!shell) return;

    const onScroll = () => {
      const scrollTop = shell.scrollTop;
      const viewH = shell.clientHeight || window.innerHeight;
      sectionRefs.current.forEach((section, i) => {
        if (!section) return;
        const slideTop = i * viewH;
        const offset = (scrollTop - slideTop) * 0.06;
        const bg = section.querySelector<HTMLElement>(".slide-bg");
        if (bg) bg.style.transform = `translateY(${offset}px)`;
      });
    };

    shell.addEventListener("scroll", onScroll, { passive: true });
    return () => shell.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "PageDown" && event.key !== "PageUp") return;
      event.preventDefault();
      const nextIndex =
        event.key === "ArrowUp" || event.key === "PageUp"
          ? Math.max(0, activeIndex - 1)
          : Math.min(slideCount - 1, activeIndex + 1);
      sectionRefs.current[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, slideCount]);

  return (
    <>
      <PortraitFallback />
      <div className="slide-shell" ref={scrollRef}>
        <nav className="slide-progress" aria-label="Slide progress">
          {progress.map((position, index) => (
            <button
              key={position}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`Go to slide ${position}`}
              onClick={() => sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" })}
            />
          ))}
          <div className="slide-nav-hint">↑↓</div>
        </nav>
        {slides.map((slide, index) => {
          const isDark = DARK_SLIDE_POSITIONS.has(slide.position);
          return (
            <div
              key={slide.id}
              className={`slide${isDark ? " slide--dark" : ""}`}
              data-index={index}
              ref={(node) => {
                sectionRefs.current[index] = node;
              }}
            >
              <SlideBackground />
              <div className="slide-num" aria-hidden="true">
                {String(slide.position).padStart(2, "0")} / {slideCount}
              </div>
              <div className="h-full w-full">
                <slide.Component />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default function App() {
  const [location, navigate] = useLocation();

  // DO NOT edit this useEffect - redirects unknown routes to the first slide.
  // The "/" and "/allslides" routes are handled separately below.
  useEffect(() => {
    if (
      location !== "/" &&
      location !== "/allslides" &&
      getSlideIndex(location) === -1
    ) {
      if (slides.length > 0) {
        navigate(`/slide${slides[0].position}`, { replace: true });
      }
    }
  }, [location, navigate]);

  // DO NOT edit this useEffect - allows the parent frame to navigate
  // between slides via postMessage so it can avoid changing the iframe
  // src (which causes a white flash).
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (
        event.data?.type === "navigateToSlide" &&
        typeof event.data.position === "number" &&
        slides.some((s) => s.position === event.data.position)
      ) {
        navigate(`/slide${event.data.position}`);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [navigate]);

  if (location === "/") return <SlideShell />;
  if (location === "/allslides") return <AllSlides />;
  return <SlideEditor />;
}
