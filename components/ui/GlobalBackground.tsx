"use client";

import React, { useEffect, useRef } from "react";

export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;

    const gl =
      (canvas.getContext("webgl", { powerPreference: "high-performance", alpha: false }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl", { powerPreference: "high-performance", alpha: false }) as WebGLRenderingContext | null);

    if (!gl) return;
    const glCtx: WebGLRenderingContext = gl;

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Multi-blob shader using dynamic Coderovo logo colors with continuous color morphing
    const fsSource = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;

      // Soft spatial dither to eliminate 8-bit banding in deep dark transitions
      float dither(vec2 coord) {
        return fract(sin(dot(coord, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
      }

      // Smooth Gaussian radial falloff with aspect ratio correction
      float softBlob(vec2 uv, vec2 center, float radius, float aspect) {
        vec2 d = uv - center;
        d.x *= aspect;
        float distSq = dot(d, d);
        return exp(-distSq / (2.0 * radius * radius));
      }

      // EXACT CODEROVO LOGO SPECTRUM:
      // 0: Cyan / Aqua      #00e5ff
      // 1: Azure Sky Blue   #0088ff
      // 2: Royal Cobalt     #0044ff
      // 3: Electric Indigo  #4524f5
      // 4: Neon Violet      #8f22f7
      // 5: Vivid Magenta    #d72bf0
      vec3 getLogoColor(float phase) {
        float p = mod(phase, 6.0);
        int idx = int(floor(p));
        float f = fract(p);

        // Cosine smoothing between color stops
        f = smoothstep(0.0, 1.0, f);

        vec3 c0 = vec3(0.00, 0.90, 1.00); // 0: Cyan
        vec3 c1 = vec3(0.00, 0.53, 1.00); // 1: Azure
        vec3 c2 = vec3(0.00, 0.27, 1.00); // 2: Royal Cobalt
        vec3 c3 = vec3(0.27, 0.14, 0.96); // 3: Electric Indigo
        vec3 c4 = vec3(0.56, 0.13, 0.97); // 4: Neon Violet
        vec3 c5 = vec3(0.84, 0.17, 0.94); // 5: Vivid Magenta

        if (idx == 0) return mix(c0, c1, f);
        if (idx == 1) return mix(c1, c2, f);
        if (idx == 2) return mix(c2, c3, f);
        if (idx == 3) return mix(c3, c4, f);
        if (idx == 4) return mix(c4, c5, f);
        return mix(c5, c0, f);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;

        // Base time for movement and color morphing
        float t = u_time * 0.38;

        // Color time: independent speeds so colors shift continuously on every blob
        float ct = u_time * 0.22;

        // 6 DISTINCT BLOBS TRAVELING AROUND THE FRAME:
        // Blob 1: Top-Left & Top Edge
        vec2 pos1 = vec2(
          0.25 + cos(t * 0.55) * 0.18,
          0.75 + sin(t * 0.42) * 0.15
        );
        float b1 = softBlob(uv, pos1, 0.22, aspect);
        vec3 col1 = getLogoColor(ct * 1.10 + 0.0);

        // Blob 2: Top-Right & Right Edge
        vec2 pos2 = vec2(
          0.78 + sin(t * 0.48 + 1.2) * 0.16,
          0.70 + cos(t * 0.60 + 0.5) * 0.18
        );
        float b2 = softBlob(uv, pos2, 0.24, aspect);
        vec3 col2 = getLogoColor(ct * 0.85 + 2.1);

        // Blob 3: Bottom-Right Corner
        vec2 pos3 = vec2(
          0.75 + cos(t * 0.50 + 2.4) * 0.17,
          0.25 + sin(t * 0.38 + 1.8) * 0.16
        );
        float b3 = softBlob(uv, pos3, 0.23, aspect);
        vec3 col3 = getLogoColor(ct * 1.25 + 4.2);

        // Blob 4: Bottom-Left Corner
        vec2 pos4 = vec2(
          0.22 + sin(t * 0.44 + 3.1) * 0.16,
          0.28 + cos(t * 0.52 + 2.0) * 0.17
        );
        float b4 = softBlob(uv, pos4, 0.22, aspect);
        vec3 col4 = getLogoColor(ct * 0.95 + 1.3);

        // Blob 5: Perimeter Runner (Full frame circuit)
        vec2 pos5 = vec2(
          0.50 + cos(t * 0.35 + 4.0) * 0.40,
          0.50 + sin(t * 0.35 + 4.0) * 0.36
        );
        float b5 = softBlob(uv, pos5, 0.20, aspect);
        vec3 col5 = getLogoColor(ct * 1.40 + 3.5);

        // Blob 6: Diagonal wanderer
        vec2 pos6 = vec2(
          0.50 + sin(t * 0.30) * 0.35,
          0.50 + cos(t * 0.60) * 0.32
        );
        float b6 = softBlob(uv, pos6, 0.19, aspect);
        vec3 col6 = getLogoColor(ct * 0.70 + 5.1);

        // Combine colored light emissions additively with soft tone response
        vec3 accumulatedColor = col1 * b1
                              + col2 * b2
                              + col3 * b3
                              + col4 * b4
                              + col5 * b5
                              + col6 * b6;

        // Base background: Deep Obsidian Navy #07090E
        vec3 bgObsidian = vec3(0.027, 0.035, 0.055);

        // Calculate total light intensity for contrast & deep black cutoff
        float totalIntensity = b1 + b2 + b3 + b4 + b5 + b6;

        // Smooth roll-off curve: preserves deep velvet obsidian in negative space
        float toneCurve = smoothstep(0.06, 0.92, totalIntensity);
        vec3 finalColor = bgObsidian + accumulatedColor * toneCurve * 0.35;

        // Add 1-bit subtle spatial dither to eliminate banding
        finalColor += (dither(gl_FragCoord.xy) / 255.0);

        gl_FragColor = vec4(max(finalColor, vec3(0.0)), 1.0);
      }
    `;

    function createShader(glContext: WebGLRenderingContext, type: number, src: string) {
      const s = glContext.createShader(type);
      if (!s) return null;
      glContext.shaderSource(s, src);
      glContext.compileShader(s);
      return s;
    }

    const vertShader = createShader(glCtx, glCtx.VERTEX_SHADER, vsSource);
    const fragShader = createShader(glCtx, glCtx.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = glCtx.createProgram();
    if (!program) return;

    glCtx.attachShader(program, vertShader);
    glCtx.attachShader(program, fragShader);
    glCtx.linkProgram(program);
    glCtx.useProgram(program);

    const buffer = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buffer);
    glCtx.bufferData(
      glCtx.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      glCtx.STATIC_DRAW
    );

    const aPos = glCtx.getAttribLocation(program, "a_position");
    glCtx.enableVertexAttribArray(aPos);
    glCtx.vertexAttribPointer(aPos, 2, glCtx.FLOAT, false, 0, 0);

    const uRes = glCtx.getUniformLocation(program, "u_resolution");
    const uTime = glCtx.getUniformLocation(program, "u_time");

    function syncSize() {
      if (!canvas) return;
      // Ambient blurred background does not require high DPR oversampling
      const dpr = Math.min(window.devicePixelRatio || 1, 1.0);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        glCtx.viewport(0, 0, w, h);
      }
    }

    syncSize();
    window.addEventListener("resize", syncSize, { passive: true });

    let startTime = performance.now();
    let isRunning = !(typeof window !== "undefined" && window.__preloaderActive);
    let lastRenderTime = 0;
    const targetInterval = 1000 / 32; // ~32 FPS is visually indistinguishable for slow ambient blobs and cuts GPU/CPU overhead in half

    function render(currentTime: number) {
      if (!canvas || !isRunning || document.hidden) return;
      animationFrameId = requestAnimationFrame(render);

      const delta = currentTime - lastRenderTime;
      if (delta < targetInterval) return;
      lastRenderTime = currentTime - (delta % targetInterval);

      const elapsed = (currentTime - startTime) * 0.001;

      if (uRes) glCtx.uniform2f(uRes, canvas.width, canvas.height);
      if (uTime) glCtx.uniform1f(uTime, elapsed);

      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
    }

    function startLoop() {
      if (!isRunning) {
        isRunning = true;
        startTime = performance.now();
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    }

    // Defer start until browser is idle or after initial frame
    if (isRunning) {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(() => {
          animationFrameId = requestAnimationFrame(render);
        });
      } else {
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(render);
        }, 100);
      }
    }

    const handlePreloaderExit = () => startLoop();
    window.addEventListener("preloader:exit", handlePreloaderExit);
    window.addEventListener("preloader:complete", handlePreloaderExit);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (isRunning) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", syncSize);
      window.removeEventListener("preloader:exit", handlePreloaderExit);
      window.removeEventListener("preloader:complete", handlePreloaderExit);
      document.removeEventListener("visibilitychange", handleVisibility);
      glCtx.deleteProgram(program);
      glCtx.deleteShader(vertShader);
      glCtx.deleteShader(fragShader);
      if (buffer) glCtx.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover opacity-70 transition-opacity duration-700"
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default GlobalBackground;
