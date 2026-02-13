"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import type { Project } from "../../lib/data"
import type { ImagePosition } from "./types"
import { MenuButton } from "./menu-button"
import { Sparkles } from "./sparkles"

import { Download } from "lucide-react"

// Rauno-style easing: smooth deceleration
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

const TRANSITION_DURATION = 0.3 // Declare TRANSITION_DURATION
const TRANSITION_EASE = EASE_OUT_EXPO // Declare TRANSITION_EASE

interface DefaultProjectProps {
  project: Project
  isHovered: boolean
  setIsHovered: (value: boolean) => void
  isGenerating: boolean
  generationComplete: boolean
  progress: number
  sparklesFading: boolean
  showImages: boolean
  showGeneratingFooter: boolean
  imagePositions: ImagePosition[]
  clipCount: number
  remainingEta: string
  formattedDate: string
  onRemove?: () => void
  onCancel?: () => void
  onRename?: (newTitle: string) => void
}

export function DefaultProject({
  project,
  isHovered,
  setIsHovered,
  isGenerating,
  generationComplete,
  progress,
  sparklesFading,
  showImages,
  showGeneratingFooter,
  imagePositions,
  clipCount,
  remainingEta,
  formattedDate,
  onRemove,
  onCancel,
  onRename,
}: DefaultProjectProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const handleMenuOpenChange = (open: boolean) => {
    setIsMenuOpen(open)
    // When menu closes, reset hover state since mouse likely moved outside
    if (!open) {
      setIsHovered(false)
    }
  }
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(project.title)
  const [editCooldown, setEditCooldown] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteProgress, setDeleteProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [exitAnimationType, setExitAnimationType] = useState(0)
  
  // Determine animation type based on project id (0-4 for 5 different animations)
  const animationType = typeof project.id === 'number' ? project.id % 5 : parseInt(project.id, 10) % 5 || 0
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const deleteTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const deleteIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Focus textarea when editing starts and move cursor to end
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      const textarea = textareaRef.current
      textarea.focus()
      // Move cursor to end of text
      const length = textarea.value.length
      textarea.setSelectionRange(length, length)
    }
  }, [isEditing])

  // Sync editTitle when project title changes
  useEffect(() => {
    setEditTitle(project.title)
  }, [project.title])

  // Close editing when clicking outside - use ref to track the container
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleCancelEdit()
      }
    }
    if (isEditing) {
      // Delay adding listener to avoid immediate trigger
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 10)
      return () => {
        clearTimeout(timer)
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isEditing])

  // Close delete confirmation when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        cancelDeleteCountdown()
      }
    }
    if (showDeleteConfirm && !isDeleting) {
      const timer = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside)
      }, 10)
      return () => {
        clearTimeout(timer)
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [showDeleteConfirm, isDeleting])

  const handleEditClick = () => {
    setEditTitle(project.title)
    setIsEditing(true)
  }

  const handleConfirmEdit = () => {
    const trimmedTitle = editTitle.trim()
    if (trimmedTitle && trimmedTitle !== project.title) {
      onRename?.(trimmedTitle)
    }
    setIsEditing(false)
    setIsMenuOpen(false)
    setIsHovered(false)
    // Set cooldown to prevent immediate re-hover
    setEditCooldown(true)
    setTimeout(() => setEditCooldown(false), 300)
  }

  const handleCancelEdit = () => {
    setEditTitle(project.title)
    setIsEditing(false)
    setIsMenuOpen(false)
    setIsHovered(false)
    // Set cooldown to prevent immediate re-hover
    setEditCooldown(true)
    setTimeout(() => setEditCooldown(false), 300)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleConfirmEdit()
    } else if (e.key === "Escape") {
      handleCancelEdit()
    }
  }

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true)
    setIsMenuOpen(false)
  }

  const startDeleteCountdown = () => {
    setIsDeleting(true)
    setDeleteProgress(0)
    
    const duration = 3000
    const interval = 50
    let elapsed = 0
    
    deleteIntervalRef.current = setInterval(() => {
      elapsed += interval
      setDeleteProgress((elapsed / duration) * 100)
    }, interval)
    
    deleteTimeoutRef.current = setTimeout(() => {
      if (deleteIntervalRef.current) clearInterval(deleteIntervalRef.current)
      setExitAnimationType(animationType)
      setIsExiting(true)
      setTimeout(() => {
        onRemove?.()
      }, 200) // Instant exit - matches ease-out animation
    }, duration)
  }

  const cancelDeleteCountdown = () => {
    if (deleteTimeoutRef.current) {
      clearTimeout(deleteTimeoutRef.current)
      deleteTimeoutRef.current = null
    }
    if (deleteIntervalRef.current) {
      clearInterval(deleteIntervalRef.current)
      deleteIntervalRef.current = null
    }
    setIsDeleting(false)
    setDeleteProgress(0)
    setShowDeleteConfirm(false)
    setIsHovered(false)
  }

  const isActive = isHovered && !isGenerating && !isEditing && !isMenuOpen && !showDeleteConfirm && !isDeleting

  return (
    <motion.div
      ref={containerRef}
      className={`group relative w-[360px]  ${isGenerating ? "cursor-default" : "cursor-pointer"}`}
      animate={{
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 0.95 : 1,
        rotateX: isExiting ? 15 : 0,
        y: isExiting ? -20 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        perspective: "1200px",
        zIndex: isActive || isEditing || isMenuOpen || showDeleteConfirm || isDeleting ? 50 : 1,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => !editCooldown && !showDeleteConfirm && !isDeleting && setIsHovered(true)}
      onMouseLeave={() => !isMenuOpen && !isEditing && !showDeleteConfirm && !isDeleting && setIsHovered(false)}
    >
      <div
        className="relative w-[370px]"
        style={{ perspective: "1200px" }}
      >
        {/* Back panel */}
        <motion.div
          className="relative z-0 rounded-2xl"
          animate={{
            rotateX: isActive ? 15 : 0,
            backgroundColor: isGenerating ? "#111111" : "#1e1e1e",
          }}
          transition={{
            rotateX: {
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.8,
            },
            backgroundColor: {
              duration: TRANSITION_DURATION,
              ease: TRANSITION_EASE,
            },
          }}
          style={{
            height: "280px",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          {project.isGenerating && <Sparkles count={16} fading={sparklesFading} variant="generating" />}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotateX: isActive ? -15 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.8,
            }}
            style={{
              transformStyle: "flat",
              transformOrigin: "center bottom",
            }}
          >
            {[...Array(5)].map((_, imgIndex) => {
              const pos = imagePositions[imgIndex]
              const imageUrl = project.images?.[imgIndex % (project.images?.length || 1)] || "/placeholder.svg"
              const shouldShowImages = !project.isGenerating || showImages

              const centerIndex = 2
              const distanceFromCenter = Math.abs(imgIndex - centerIndex)
              const zIndex = 10 - distanceFromCenter

              const brightness = distanceFromCenter === 0 ? 1 : distanceFromCenter === 1 ? 0.55 : 0.3
              const blurAmount = distanceFromCenter === 0 ? 0 : distanceFromCenter === 1 ? 0.5 : 1.5
              const yOffset = -16 * (1 - distanceFromCenter / centerIndex) || 0
              const scale = distanceFromCenter === 0 ? 1.05 : distanceFromCenter === 1 ? 0.95 : 0.88

              // Final positions (where images should be when visible)
              // Menu open, editing, or delete confirm = closed folder with scaled down previews
              const isCompact = isEditing || isMenuOpen || showDeleteConfirm || isDeleting
              const xPos = isCompact ? pos.x * 0.85 : isActive ? pos.x * 1.4 : pos.x
              const yPos = isCompact ? 18 + yOffset : isActive ? -8 + yOffset : 8 + yOffset
              const rotation = isCompact ? pos.rotate * 0.8 : isActive ? pos.rotate * 1.3 : pos.rotate
              const finalScale = isCompact ? scale * 0.98 : isActive ? scale * 1.02 : scale

              // Center-out stagger: center card (index 2) first, then adjacent, then outer
              const staggerDelay = distanceFromCenter * 0.08

              return (
                <motion.div
                  key={imgIndex}
                  className="absolute left-1/2 top-[-7px]"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${xPos}px)`,
                    y: yPos,
                    rotate: rotation,
                    scale: shouldShowImages ? finalScale : 0.8,
                    opacity: shouldShowImages ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 16,
                    mass: 1,
                    delay: shouldShowImages ? staggerDelay : 0,
                    opacity: { duration: 0.4, ease: "easeOut", delay: shouldShowImages ? staggerDelay : 0 },
                  }}
                  style={{ zIndex }}
                >
                  <div className="h-[230px] w-[180px] overflow-hidden rounded-xl">
                    <motion.img
                      src={imageUrl || "/placeholder.svg"}
                      alt={"Preview " + (imgIndex + 1)}
                      className="h-full w-full object-cover"
                      animate={{
                        filter: `brightness(${isActive ? Math.min(1, brightness + 0.2) : brightness}) contrast(1.08) saturate(${1 - distanceFromCenter * 0.2}) blur(${isActive ? 0 : blurAmount}px)`,
                      }}
                      transition={{
                        duration: TRANSITION_DURATION,
                        ease: TRANSITION_EASE,
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Front panel */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 rounded-2xl overflow-hidden"
          animate={{
            rotateX: isActive ? -25 : 0,
            backgroundColor: isGenerating ? "rgba(20, 20, 20, 0.85)" : "rgba(26, 26, 26, 0.8)",
          }}
          transition={{
            rotateX: {
              type: "spring",
              stiffness: 180,
              damping: 22,
              mass: 0.8,
            },
            backgroundColor: {
              duration: TRANSITION_DURATION,
              ease: TRANSITION_EASE,
            },
          }}
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <div className="relative py-4 px-4 min-h-[2.75rem]">
            {/* Edit mode glow effect - Rauno style */}
            <div 
              className="absolute -inset-2 transition-all duration-500 rounded-t-2xl pointer-events-none"
              style={{
                opacity: isEditing ? 1 : 0,
                background: 'radial-gradient(ellipse 100% 80% at 50% 0%, rgba(120,180,255,0.15) 0%, transparent 60%)',
                filter: 'blur(12px)',
              }}
            />
            <div 
              className="absolute -inset-px transition-all duration-500 rounded-t-lg pointer-events-none overflow-hidden"
              style={{
                opacity: isEditing ? 1 : 0,
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
              }}
            />
            <div 
              className="absolute inset-x-2 -top-1 h-px transition-all duration-500 pointer-events-none"
              style={{
                opacity: isEditing ? 1 : 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                filter: 'blur(0.5px)',
              }}
            />
            <h3
              className={`font-semibold text-white/70 text-base leading-snug line-clamp-2 min-h-[2.75rem] relative z-0 transition-all duration-200 ${!isGenerating ? "group-hover:text-white" : ""}`}
              style={{ opacity: isEditing ? 0 : 1, pointerEvents: isEditing ? "none" : "auto" }}
            >
              {project.title}
            </h3>
            <textarea
              ref={textareaRef}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
              className="absolute inset-0 w-full h-full py-4 px-4 bg-transparent border-none rounded-none text-white text-base font-semibold leading-snug focus:outline-none caret-white resize-none transition-opacity duration-200"
              style={{ opacity: isEditing ? 1 : 0, pointerEvents: isEditing ? "auto" : "none" }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          {/* project info "myproject" */}
          <div className="relative h-[50px]"> 
            {/* Top border */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/[0.04]" />
            
      
            
            {/* Footer content - derive from showImages for reliability */}
            <div className="relative h-full">
              
                <motion.div
                  key="default"
                  className="absolute inset-0 flex items-center justify-between px-2 pl-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    mass: 1,
                    opacity: { duration: 0.35, ease: "easeOut" },
                  }}
                >
                
                  <div className="flex items-center justify-between w-full gap-2">
                    <span className="text-xs text-white/50">Latest Update : 2025 Feb</span>

                    <div className="flex gap-2 items-center">
                        <a href="/files/aarab-abderrahmane-cv.pdf" download className=" text-black rounded-full p-1 hover:scale-110 hover:bg-lime-500 duration-300 cursor-pointer ">
                             <Download className="w-6 h-6 text-white hover:text-black"/>

                        </a>
                      <MenuButton  project={project} onOpenChange={handleMenuOpenChange} onRemove={handleDeleteClick} onCancel={onCancel} onRename={handleEditClick} isVisible={true} />
                    </div>
                  </div>
                </motion.div>
             
            </div>
          </div>
        </motion.div>
      </div>

  

    </motion.div>
  )
}
