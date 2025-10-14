import { NeuralNetworkBackground } from "@/components/neural-network-background"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Building2, Award, Github } from "lucide-react"
import Link from "next/link"
import { getProjectById, projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative min-h-screen">
      <NeuralNetworkBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/projects">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <div className="mb-6">
              <span
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                  project.category === "Professional" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                }`}
              >
                {project.category} Project
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{project.title}</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Organization</p>
                  <p className="font-medium">{project.organization}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-medium">{project.date}</p>
                </div>
              </div>
            </div>

            {project.impact && (
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <Award className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Impact</p>
                  <p className="font-medium text-primary">{project.impact}</p>
                </div>
              </div>
            )}
          </Card>

          {/* GitHub repository link section */}
          {project.github && (
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 mb-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">View Source Code</p>
                  <p className="font-medium hover:underline">GitHub Repository</p>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </a>
            </Card>
          )}

          {/* Project Description */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <ul className="space-y-4">
              {project.description.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-muted-foreground leading-relaxed flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Technologies Used */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    project.category === "Professional"
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-accent/20 text-accent border border-accent/30"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
