"use client";

import React, { useEffect, useRef } from "react";

export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;

    function syncSize() {
      if (!canvas) return;
      const w = window.innerWidth || 1280;
      const h = window.innerHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    syncSize();

    const gl =
      (canvas.getContext("webgl") as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;
    const glCtx: WebGLRenderingContext = gl;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

// Smooth minimum for organic metaball blending
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

// Simplex-style noise for organic surface ripple & iridescence
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

  float t = u_time * 0.28;

  // Normalized mouse position with gentle parallax pull
  vec2 mouseNorm = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);
  vec2 mouseOffset = mouseNorm * 0.15;

  // Procedural drifting metaball liquid orbs (6 organic floating spheres)
  // Orb 1: Cyan primary orb
  vec2 c1 = vec2(sin(t * 0.8) * 0.45, cos(t * 0.6) * 0.35) + mouseOffset * 0.6;
  float d1 = length(p - c1) - (0.34 + 0.04 * sin(t * 1.4));

  // Orb 2: Electric Blue companion
  vec2 c2 = vec2(cos(t * 0.7 + 1.8) * 0.52, sin(t * 0.9 + 0.8) * 0.38) + mouseOffset * 0.4;
  float d2 = length(p - c2) - (0.38 + 0.05 * cos(t * 1.1));

  // Orb 3: Violet / Purple deep floater
  vec2 c3 = vec2(sin(t * 0.6 + 3.2) * 0.58, cos(t * 0.75 + 2.1) * 0.42) - mouseOffset * 0.5;
  float d3 = length(p - c3) - (0.42 + 0.04 * sin(t * 0.9));

  // Orb 4: Magenta / Pink radiant orb
  vec2 c4 = vec2(cos(t * 0.85 + 4.5) * 0.48, sin(t * 0.65 + 3.9) * 0.34) + mouseOffset * 0.7;
  float d4 = length(p - c4) - (0.32 + 0.05 * cos(t * 1.3));

  // Orb 5: Ambient floating micro-bubble (Cyan/Blue)
  vec2 c5 = vec2(sin(t * 1.1 + 0.5) * 0.65, cos(t * 1.0 + 4.8) * 0.46);
  float d5 = length(p - c5) - 0.20;

  // Orb 6: Soft magenta micro-bubble
  vec2 c6 = vec2(cos(t * 1.0 + 2.4) * 0.62, sin(t * 1.2 + 1.5) * 0.44);
  float d6 = length(p - c6) - 0.22;

  // Smoothly blend liquid fields together (organic metaballs)
  float blendK = 0.32;
  float d = smin(d1, d2, blendK);
  d = smin(d, d3, blendK);
  d = smin(d, d4, blendK);
  d = smin(d, d5, blendK);
  d = smin(d, d6, blendK);

  // Subtle organic fluid surface ripple
  float ripple = snoise(p * 2.8 + vec2(t * 0.3, -t * 0.2)) * 0.07;
  d += ripple;

  // Soft field falloff: perfect for glassmorphism refraction & frosted backdrops
  float coreGlow = 1.0 - smoothstep(-0.25, 0.45, d);
  float outerAura = 1.0 - smoothstep(-0.1, 0.9, d);

  // CodeRovo Brand Gradient Palette:
  // Cyan (#00F0FF) -> Electric Blue (#3B82F6) -> Violet (#8B5CF6) -> Magenta (#EC4899)
  vec3 cCyan    = vec3(0.00, 0.94, 1.00);
  vec3 cBlue    = vec3(0.23, 0.51, 0.96);
  vec3 cViolet  = vec3(0.55, 0.36, 0.96);
  vec3 cMagenta = vec3(0.92, 0.28, 0.60);

  // Color distribution influenced by position & orb dominance
  float colPhase1 = clamp((p.x + 0.6) * 0.8 + sin(t * 0.5) * 0.2, 0.0, 1.0);
  float colPhase2 = clamp((p.y + 0.5) * 0.9 + cos(t * 0.4) * 0.2, 0.0, 1.0);

  vec3 orbColor = mix(cCyan, cBlue, colPhase1);
  orbColor = mix(orbColor, cViolet, colPhase2);
  orbColor = mix(orbColor, cMagenta, clamp(sin(d * 3.0 + t) * 0.5 + 0.5, 0.0, 1.0) * 0.5);

  // Iridescent specular highlight on the bubble crest (subtle glassy sheen)
  float sheen = pow(max(0.0, 1.0 - abs(d + 0.05) * 3.2), 3.0) * 0.45;
  sheen *= (0.7 + 0.3 * snoise(p * 4.5 + t));

  // Deep Obsidian Navy Background: #05070B to #080C14 (Deep & Moody)
  vec3 bgNavy = mix(vec3(0.020, 0.027, 0.043), vec3(0.031, 0.045, 0.078), uv.y);

  // Compose liquid orb lighting with ambient soft aura
  vec3 fluidLight = orbColor * (coreGlow * 0.70 + outerAura * 0.35) + vec3(sheen * 0.8);

  // Gentle radial vignette toward the viewport edges to dissolve into deep background
  float vignette = 1.0 - smoothstep(0.40, 1.30, length(p));
  fluidLight *= vignette;

  // VISIBILITY INTENSITY CONTROL:
  // Change 0.42 to adjust shader brightness (e.g. 0.25 = very dark/subtle, 0.42 = moody balanced, 0.85 = bright)
  vec3 finalColor = bgNavy + fluidLight * 0.42;

  gl_FragColor = vec4(finalColor, 1.0);
}`;

    function cs(type: number, src: string) {
      const s = glCtx.createShader(type);
      if (!s) return null;
      glCtx.shaderSource(s, src);
      glCtx.compileShader(s);
      return s;
    }

    const vertShader = cs(glCtx.VERTEX_SHADER, vs);
    const fragShader = cs(glCtx.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = glCtx.createProgram();
    if (!prog) return;

    glCtx.attachShader(prog, vertShader);
    glCtx.attachShader(prog, fragShader);
    glCtx.linkProgram(prog);
    glCtx.useProgram(prog);

    const buf = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);
    glCtx.bufferData(
      glCtx.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      glCtx.STATIC_DRAW
    );

    const pos = glCtx.getAttribLocation(prog, "a_position");
    glCtx.enableVertexAttribArray(pos);
    glCtx.vertexAttribPointer(pos, 2, glCtx.FLOAT, false, 0, 0);

    const uTime = glCtx.getUniformLocation(prog, "u_time");
    const uRes = glCtx.getUniformLocation(prog, "u_resolution");
    const uMouse = glCtx.getUniformLocation(prog, "u_mouse");

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

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
    window.addEventListener("resize", syncSize, { passive: true });

    function render(t: number) {
      if (!canvas) return;
      syncSize();
      glCtx.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) glCtx.uniform1f(uTime, t * 0.001);
      if (uRes) glCtx.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) glCtx.uniform2f(uMouse, mouse.x, mouse.y);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", syncSize);
      glCtx.deleteProgram(prog);
      glCtx.deleteShader(vertShader);
      glCtx.deleteShader(fragShader);
      glCtx.deleteBuffer(buf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none"
    >
      {/* 
        VISIBILITY CONTROL (Quick CSS tweak):
        You can change 'opacity-85' below to any Tailwind opacity value:
        e.g., 'opacity-40' (very subtle/dark), 'opacity-60' (medium), 'opacity-85' (balanced), 'opacity-100' (full)
      */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover opacity-85 transition-opacity duration-700"
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default GlobalBackground;
