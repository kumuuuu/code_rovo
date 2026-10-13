"use client";

import React, { useEffect, useRef } from "react";

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;

    // Get WebGL context with fallback
    const gl =
      (canvas.getContext("webgl", { alpha: true, antialias: true }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl", { alpha: true, antialias: true }) as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported, falling back to CSS background.");
      return;
    }

    const vsSource = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fsSource = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

// Simplex-style noise and subtle flow
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m;
  m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

  // Time evolution
  float t = u_time * 0.15;
  
  // Interactive mouse influence
  vec2 mouseNorm = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
  float mouseDist = length(p - mouseNorm);
  float mouseWave = exp(-mouseDist * 3.5) * 0.15;

  // Gentle swirling fluid motion coordinates
  float n1 = snoise(p * 1.8 + vec2(t * 0.4, -t * 0.2) + mouseWave);
  float n2 = snoise(p * 3.2 - vec2(t * 0.3, t * 0.4) + vec2(n1 * 0.8));
  float n3 = snoise(p * 5.0 + vec2(n2 * 0.6, t * 0.5));

  // Base background: Deep black with very subtle navy (#06080E -> #0A0F1A)
  vec3 bg = mix(vec3(0.024, 0.031, 0.055), vec3(0.039, 0.055, 0.098), uv.y);

  // Spectral brand colors (Cyan -> Electric Blue -> Violet -> Magenta)
  vec3 cCyan = vec3(0.0, 0.94, 1.0);       // #00F0FF
  vec3 cBlue = vec3(0.23, 0.51, 0.96);     // #3B82F6
  vec3 cViolet = vec3(0.55, 0.36, 0.96);   // #8C5CFF
  vec3 cMagenta = vec3(0.92, 0.28, 0.60);  // #EC4899

  // Filament lines & glow paths (delicate nodes & flow)
  float ridge1 = smoothstep(0.18, 0.0, abs(n2));
  float ridge2 = smoothstep(0.12, 0.0, abs(n3));

  // Color mapping along flow
  vec3 flowCol = mix(cCyan, cBlue, clamp(n1 * 0.5 + 0.5, 0.0, 1.0));
  flowCol = mix(flowCol, cViolet, clamp(n2 * 0.5 + 0.5, 0.0, 1.0));
  flowCol = mix(flowCol, cMagenta, clamp(sin(t + p.x * 2.0) * 0.5 + 0.5, 0.0, 1.0));

  // Combine delicately with background: subtle ambient illumination, never harsh neon
  float glowIntensity = (ridge1 * 0.35 + ridge2 * 0.25) * (0.8 + 0.2 * sin(u_time * 0.8));
  
  // Vignette mask to fade gracefully into the pure dark edges
  float vignette = smoothstep(1.2, 0.35, length(p));
  glowIntensity *= vignette;

  vec3 finalColor = bg + flowCol * glowIntensity * 0.45;

  gl_FragColor = vec4(finalColor, 1.0);
}`;

    const createShader = (type: number, src: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad geometry covering viewport
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth || 1280;
      const h = canvas.clientHeight || window.innerHeight || 720;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayW = Math.floor(w * dpr);
      const displayH = Math.floor(h * dpr);

      if (canvas.width !== displayW || canvas.height !== displayH) {
        canvas.width = displayW;
        canvas.height = displayH;
      }
    };

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let isRunning = !(typeof window !== "undefined" && window.__preloaderActive);

    const render = (timeMs: number) => {
      if (!canvas || !isRunning) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, timeMs * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    function startLoop() {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    }

    if (isRunning) {
      animationFrameId = requestAnimationFrame(render);
    }

    const handlePreloaderExit = () => startLoop();
    window.addEventListener("preloader:exit", handlePreloaderExit);
    window.addEventListener("preloader:complete", handlePreloaderExit);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (isRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("preloader:exit", handlePreloaderExit);
      window.removeEventListener("preloader:complete", handlePreloaderExit);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (resizeObserver) resizeObserver.disconnect();
      if (buffer) gl.deleteBuffer(buffer);
      if (vertShader) gl.deleteShader(vertShader);
      if (fragShader) gl.deleteShader(fragShader);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 95%)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 95%)",
      }}
    >
      {/* Real-time WebGL Procedural Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-90 transition-opacity duration-700"
      />
      {/* Top subtle vignette for navbar area */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07090E]/80 to-transparent pointer-events-none" />
    </div>
  );
}
