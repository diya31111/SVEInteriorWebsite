export default function ShinyText({ text, disabled = false, speed = 3, className = '' }) {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`bg-clip-text text-transparent bg-[linear-gradient(110deg,#a1a1aa,45%,#fff,55%,#a1a1aa)] bg-[length:250%_100%] inline-block ${className}`}
            style={{
                animation: disabled ? 'none' : `shine ${animationDuration} linear infinite`,
            }}
        >
            {text}
            <style>{`
            @keyframes shine {
                0% { background-position: 100% 0; }
                100% { background-position: -200% 0; }
            }
        `}</style>
        </div>
    );
}
