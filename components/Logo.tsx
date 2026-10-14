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
          width={360}
          height={81}
          sizes="(max-width: 640px) 160px, 220px"
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
        width={280}
        height={93}
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

export default Logo;
