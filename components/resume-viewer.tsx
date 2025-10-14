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
              <Button variant="ghost" size="sm" asChild>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={resumeUrl} download="Aparna_Jayakumar_Nair_Resume.pdf" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden rounded-lg border border-border bg-muted">
          <object
            data={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            type="application/pdf"
            className="w-full h-full"
          >
            <iframe src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`} className="w-full h-full" title="Resume PDF">
              <p className="p-4">
                Your browser does not support PDFs.{" "}
                <a href={resumeUrl} className="text-primary underline" download>
                  Download the PDF
                </a>{" "}
                to view it.
              </p>
            </iframe>
          </object>
        </div>
      </DialogContent>
    </Dialog>
  )
}
