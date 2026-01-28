"use client"

import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink } from "lucide-react"

interface ResumeViewerProps {
  resumeUrl: string
  className?: string
}

export function ResumeViewer({ resumeUrl, className }: ResumeViewerProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Aparna_Jayakumar_Nair_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      <Button variant="default" size="lg" onClick={handleOpenInNewTab}>
        <FileText className="mr-2 h-5 w-5" />
        View Resume
      </Button>
      <Button variant="outline" size="lg" onClick={handleDownload}>
        <Download className="mr-2 h-5 w-5" />
        Download
      </Button>
    </div>
  )
}
