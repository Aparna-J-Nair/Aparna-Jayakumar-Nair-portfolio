"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  z: number // Added z-axis for 3D depth
  vx: number
  vy: number
  vz: number // Added z velocity
  radius: number
  pulse: number // Added pulse animation
}

interface Particle {
  x: number
  y: number
  z: number // Added z-axis
  vx: number
  vy: number
  vz: number // Added z velocity
  life: number
  maxLife: number
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodeCount = 200
    const nodes: Node[] = []
    const particles: Particle[] = []
    const maxDistance = 200
    const zDepth = 1000 // Depth range for 3D effect

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * zDepth,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const createParticle = () => {
      if (particles.length < 50 && Math.random() < 0.05) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * zDepth,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          vz: (Math.random() - 0.5) * 1,
          life: 0,
          maxLife: 150 + Math.random() * 150,
        })
      }
    }

    // Animation loop
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.01

      ctx.fillStyle = "rgba(10, 15, 30, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const sortedNodes = [...nodes].sort((a, b) => a.z - b.z)

      // Update and draw nodes
      sortedNodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy
        node.z += node.vz
        node.pulse += 0.02

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        if (node.z < 0 || node.z > zDepth) node.vz *= -1

        const scale = 1 - (node.z / zDepth) * 0.6
        const scaledRadius = node.radius * scale

        const pulseScale = 1 + Math.sin(node.pulse) * 0.3
        const finalRadius = scaledRadius * pulseScale

        const depthFactor = 1 - (node.z / zDepth) * 0.5
        const blueIntensity = Math.floor(180 + depthFactor * 75)
        const alpha = 0.6 + depthFactor * 0.4

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, finalRadius * 4)
        gradient.addColorStop(0, `rgba(80, 150, ${blueIntensity}, ${alpha * 0.8})`)
        gradient.addColorStop(0.4, `rgba(60, 120, ${blueIntensity - 30}, ${alpha * 0.4})`)
        gradient.addColorStop(1, "rgba(40, 80, 180, 0)")

        ctx.beginPath()
        ctx.arc(node.x, node.y, finalRadius * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, finalRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120, 180, ${blueIntensity}, ${alpha})`
        ctx.fill()

        for (let j = i + 1; j < sortedNodes.length; j++) {
          const other = sortedNodes[j]
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dz = other.z - node.z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.25 * depthFactor
            const avgDepth = (node.z + other.z) / 2
            const depthOpacity = 1 - (avgDepth / zDepth) * 0.4

            const lineGradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y)
            lineGradient.addColorStop(0, `rgba(80, 160, 255, ${opacity * depthOpacity})`)
            lineGradient.addColorStop(0.5, `rgba(100, 180, 255, ${opacity * depthOpacity * 1.3})`)
            lineGradient.addColorStop(1, `rgba(80, 160, 255, ${opacity * depthOpacity})`)

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 1.2 * depthOpacity
            ctx.stroke()
          }
        }
      })

      createParticle()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz
        p.life++

        if (p.life > p.maxLife || p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          particles.splice(i, 1)
          continue
        }

        const lifeRatio = p.life / p.maxLife
        const opacity = Math.sin(lifeRatio * Math.PI) * 0.5
        const scale = 1 - (p.z / zDepth) * 0.5

        const particleGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12 * scale)
        particleGradient.addColorStop(0, `rgba(150, 200, 255, ${opacity * scale})`)
        particleGradient.addColorStop(0.5, `rgba(100, 180, 255, ${opacity * scale * 0.5})`)
        particleGradient.addColorStop(1, "rgba(80, 160, 255, 0)")

        ctx.beginPath()
        ctx.arc(p.x, p.y, 12 * scale, 0, Math.PI * 2)
        ctx.fillStyle = particleGradient
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "linear-gradient(to bottom, #0a0f1e, #0f1428, #0a0f1e)" }}
    />
  )
}
