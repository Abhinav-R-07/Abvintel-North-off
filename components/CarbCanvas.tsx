"use client";

import React, { useEffect, useRef } from "react";

export default function CarbCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    // Animation variables
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;

      // Clear canvas
      ctx.fillStyle = "#080808";
      ctx.fillRect(0, 0, width, height);

      // Draw three orbital rings with nodes
      const rings = [
        { radius: 60, speed: 0.02, nodeCount: 6 },
        { radius: 100, speed: 0.015, nodeCount: 8 },
        { radius: 140, speed: -0.012, nodeCount: 10 },
      ];

      const goldColor = "#C8A96E";
      const nodePositions: Array<{ x: number; y: number }[]> = [];

      rings.forEach((ring) => {
        // Draw ring
        ctx.strokeStyle = goldColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Draw nodes
        const nodes: { x: number; y: number }[] = [];
        for (let i = 0; i < ring.nodeCount; i++) {
          const angle =
            (i / ring.nodeCount) * Math.PI * 2 + time * ring.speed;
          const x = centerX + Math.cos(angle) * ring.radius;
          const y = centerY + Math.sin(angle) * ring.radius;

          // Draw node
          ctx.fillStyle = goldColor;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();

          nodes.push({ x, y });
        }

        nodePositions.push(nodes);
      });

      // Draw connecting lines between adjacent rings
      for (let ringIdx = 0; ringIdx < rings.length - 1; ringIdx++) {
        const currentRingNodes = nodePositions[ringIdx];
        const nextRingNodes = nodePositions[ringIdx + 1];

        ctx.strokeStyle = goldColor;
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 0.5;

        // Connect each node to nearest nodes in next ring
        currentRingNodes.forEach((node) => {
          const nearestNode = nextRingNodes[0];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nearestNode.x, nearestNode.y);
          ctx.stroke();
        });

        ctx.globalAlpha = 1;
      }

      // Draw central CO₂ pulse glow
      const pulseSize = 8 + Math.sin(time * 0.05) * 3;
      const glowSize = 20 + Math.sin(time * 0.05) * 10;

      // Outer glow
      ctx.fillStyle = goldColor;
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Middle glow
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowSize * 0.7, 0, Math.PI * 2);
      ctx.fill();

      // Center circle
      ctx.globalAlpha = 1;
      ctx.fillStyle = goldColor;
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full h-96 bg-surface border border-border">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
