import { NeuralNetworkBackground } from "@/components/neural-network-background"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"
import Link from "next/link"
import { getProjectsByCategory } from "@/lib/projects-data"

export default function ProjectsPage() {
  const professionalProjects = getProjectsByCategory("Professional")
  const academicProjects = getProjectsByCategory("Academic")

  return (
    <main className="relative min-h-screen">
      <NeuralNetworkBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 pt-32">
        {/* Professional Projects Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Professional Projects</h1>
          </div>
          <div className="space-y-6">
            {professionalProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02] cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.date}</span>
                  </div>
                  <p className="text-primary/80 mb-3">{project.organization}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description[0]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Academic Projects Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Academic Projects</h1>
          </div>
          <div className="space-y-6">
            {academicProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all hover:scale-[1.02] cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.date}</span>
                  </div>
                  <p className="text-accent/80 mb-3">{project.organization}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description[0]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
