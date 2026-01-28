"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FileText, Download, ExternalLink } from "lucide-react"

interface ResumeViewerProps {
  resumeUrl: string
  className?: string
}

export function ResumeViewer({ resumeUrl, className }: ResumeViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className={className} size="lg">
          <FileText className="mr-2 h-5 w-5" />
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Resume</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleOpenInNewTab} className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Open in New Tab
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDownload} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden rounded-lg border border-border bg-background">
          <embed
            src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            type="application/pdf"
            className="w-full h-full"
          />
        </div>
        <div className="text-center text-sm text-muted-foreground pt-2">
          {"If the PDF doesn't display, use the buttons above to open or download it."}
        </div>
      </DialogContent>
    </Dialog>
  )
}
