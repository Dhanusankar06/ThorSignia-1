'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Node {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
}

interface Connection {
  source: Node
  target: Node
  active: boolean
  progress: number
}

const NeuralNetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const connectionsRef = useRef<Connection[]>([])
  const hoverNodeRef = useRef<Node | null>(null)
  
  // Create particle overlay
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas width and height to match parent
    const setupCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }
    
    setupCanvas()
    window.addEventListener('resize', setupCanvas)
    
    // Create nodes
    const createNodes = () => {
      const nodes: Node[] = []
      // Create 3 layers of nodes
      const layerCount = 3
      const nodesPerLayer = [6, 8, 6] // Adjust node count per layer
      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      
      // Create nodes for each layer
      for (let l = 0; l < layerCount; l++) {
        const x = (l + 1) * (canvasWidth / (layerCount + 1))
        const nodeCount = nodesPerLayer[l]
        
        for (let i = 0; i < nodeCount; i++) {
          const y = (i + 1) * (canvasHeight / (nodeCount + 1))
          nodes.push({
            x,
            y,
            radius: 4,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3
          })
        }
      }
      
      return nodes
    }
    
    // Create connections between nodes
    const createConnections = (nodes: Node[]) => {
      const connections: Connection[] = []
      
      // Find nodes in layers
      const layer1 = nodes.slice(0, 6)
      const layer2 = nodes.slice(6, 14)
      const layer3 = nodes.slice(14)
      
      // Connect layer 1 to layer 2
      for (const node1 of layer1) {
        for (const node2 of layer2) {
          // Create connections with random initial states
          if (Math.random() > 0.5) {
            connections.push({
              source: node1,
              target: node2,
              active: Math.random() > 0.7,
              progress: Math.random()
            })
          }
        }
      }
      
      // Connect layer 2 to layer 3
      for (const node2 of layer2) {
        for (const node3 of layer3) {
          if (Math.random() > 0.5) {
            connections.push({
              source: node2,
              target: node3,
              active: Math.random() > 0.7,
              progress: Math.random()
            })
          }
        }
      }
      
      return connections
    }
    
    // Initialize nodes and connections
    nodesRef.current = createNodes()
    connectionsRef.current = createConnections(nodesRef.current)
    
    // Animation loop
    const animateNetwork = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update nodes with small movement
      nodesRef.current.forEach(node => {
        // Apply slight random movement
        node.x += node.vx
        node.y += node.vy
        
        // Bounce off boundaries with a margin
        const margin = 50
        if (node.x < margin || node.x > canvas.width - margin) {
          node.vx *= -1
        }
        if (node.y < margin || node.y > canvas.height - margin) {
          node.vy *= -1
        }
        
        // Draw nodes
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(136, 191, 66, 0.7)'
        ctx.fill()
        
        // Draw glow effect
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.radius, 
          node.x, node.y, node.radius * 3
        )
        gradient.addColorStop(0, 'rgba(136, 191, 66, 0.3)')
        gradient.addColorStop(1, 'rgba(136, 191, 66, 0)')
        ctx.fillStyle = gradient
        ctx.fill()
      })
      
      // Randomly activate connections
      if (Math.random() > 0.97) {
        const randomConnection = connectionsRef.current[Math.floor(Math.random() * connectionsRef.current.length)]
        randomConnection.active = true
        randomConnection.progress = 0
      }
      
      // Draw and update connections
      connectionsRef.current.forEach(connection => {
        const { source, target, active, progress } = connection
        
        ctx.beginPath()
        ctx.moveTo(source.x, source.y)
        ctx.lineTo(target.x, target.y)
        ctx.strokeStyle = 'rgba(136, 191, 66, 0.15)'
        ctx.lineWidth = 1
        ctx.stroke()
        
        if (active) {
          // Draw active connection with animated pulse
          ctx.beginPath()
          
          // Calculate point along connection based on progress
          const x = source.x + (target.x - source.x) * progress
          const y = source.y + (target.y - source.y) * progress
          
          // Draw pulse particle
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(136, 191, 66, 0.8)'
          ctx.fill()
          
          // Update progress
          connection.progress += 0.01
          
          // Reset when pulse reaches target
          if (connection.progress >= 1) {
            connection.active = Math.random() > 0.7 // 30% chance to remain active
            connection.progress = 0
          }
        }
      })
      
      animationRef.current = requestAnimationFrame(animateNetwork)
    }
    
    // Start animation
    animateNetwork()
    
    // Clean up
    return () => {
      window.removeEventListener('resize', setupCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      
      {/* Particles overlay */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#88bf42]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: 0.3
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
    </div>
  )
}

export default NeuralNetworkAnimation 