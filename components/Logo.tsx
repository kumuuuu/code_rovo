import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
  variant?: "default" | "footer";
  showWordmark?: boolean;
}

export function Logo({
  className = "h-8 w-auto",
  priority = true,
  variant = "default",
}: LogoProps) {
  if (variant === "footer") {
    return (
      <div className={`relative inline-flex items-center select-none ${className}`}>
        <Image
          src="/images/coderovo-logo-footer.png"
          alt="Coderovo"
          width={1683}
          height={379}
          priority={priority}
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/coderovo-logo-full.png"
        alt="Coderovo"
        width={2400}
        height={800}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

export default Logo;
