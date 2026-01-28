"use client"

import { NeuralNetworkBackground } from "@/components/neural-network-background"
import { ResumeViewer } from "@/components/resume-viewer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Award,
  Heart,
  MapPin,
  Phone,
  Send,
  BookOpen,
  FileText,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NeuralNetworkBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 pt-32">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex flex-col items-center text-center mb-12">
            {/* Profile Photo */}
            <div className="relative w-48 h-48 mb-6">
              <Image
                src="/appz.jpg"
                alt="Aparna Jayakumar Nair"
                fill
                className="rounded-full object-cover border-4 border-primary/20"
                priority
              />
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-balance">Aparna Jayakumar Nair</h1>

            {/* Title */}
            <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">AI/ML Engineer & Data Scientist</p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I design adaptive AI solutions that transform data into decisions and intelligence into action.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            <ResumeViewer resumeUrl="/Aparna_Jayakumar_Nair_Resume.pdf" />
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Aparna-J-Nair" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/aparna-jayakumar-nair/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Data Scientist and AI Researcher based in United States, specializing in Machine Learning, Natural Language Processing, and AI-driven solutions. With over 4 years of expertise in designing and deploying cutting-edge AI applications, I bring a unique blend of academic research and industry experience to solve complex data challenges
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
            As an AI engineer working at the intersection of language, vision, and intelligence, I design systems powered by LLMs, LangChain, and OpenAI that unify structured data, natural language, and deep reasoning. My focus is on building explainable, multimodal AI solutions that make information more accessible, interactive, and meaningful.
             </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm passionate about pushing the boundaries of AI technologies and developing solutions that drive operational excellence and innovation. My multifaceted background in electrical engineering, data science, and AI research allows me to approach problems with a unique perspective, consistently delivering scalable and efficient solutions. Outside of tech, I'm a trained classical dancer and singer, bringing creativity and precision from the arts to my professional work in data science and AI.

         
            </p>
          </Card>
        </section>

        {/* Education Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">MS in Data Analytics</h3>
                  <p className="text-primary font-medium">New Mexico State University, USA</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Jan 2024 - Present</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                <li>• GPA: 3.85/4.00</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border/30">
                <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                  <li>• Machine Learning</li>
                  <li>• Deep Learning</li>
                  <li>• Statistical Analysis</li>
                  <li>• Data Mining</li>
                  <li>• Big Data Analytics</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Time Series Analysis</li>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">MTech in Data Science</h3>
                  <p className="text-primary font-medium">Amrita Vishwa Vidyapeetham, India</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Aug 2020 – Jul 2022</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed mb-4">
                <li>• GPA: 8.64/10.00</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border/30">
                <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                  <li> Deep learning for visual recognition </li>
                  <li> Data Structures & Algorithms</li>
                  <li> Statistical Computing</li>
                  <li> Algorithms and Structures for Data Science</li>
                  <li> Deep learning for NLP</li>
                  <li> Probabilistic Graphical Models</li>
                  <li> Big Data Framework for Data Science</li>
                  <li> Computational Linear Algebra and Optimization for Data Sciences</li>
                  <li> Machine learning for signal processing and pattern classification</li>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">BTech in Electrical and Electronics Engineering</h3>
                  <p className="text-primary font-medium">NSS College of Engineering, India</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Aug 2015 – Aug 2019</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• GPA: 7.27/10.00</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-primary">Programming</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python, R, C, SQL, Julia</li>
              </ul>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-primary">AI-ML Technologies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• TensorFlow, Keras, PyTorch</li>
                <li>• Scikit-learn, NLTK, spaCy</li>
                <li>• OpenCV, OCR</li>
                <li>• Generative AI, LangChain</li>
              </ul>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-primary">Frameworks & Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Flask API, ONNX</li>
                <li>• Databricks, Palantir</li>
                <li>• RAG, LlamaIndex</li>
                <li>• ElasticIndex</li>
              </ul>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-primary">Cloud Platforms</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Azure OpenAI Service</li>
                <li>• Google Vertex AI</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Publications Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Publications</h2>
          </div>
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-99-1410-4_37"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary hover:underline">
                Continuous Authentication Using Gait Patterns
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Proceedings of the second International Conference on Signal and Data Processing, 2023
              </p>
              <p className="text-sm text-muted-foreground">
                Springer Nature Singapore, Page: 447–459, ISBN: 978-981-99-1410-4
              </p>
            </a>
          </Card>
        </section>

        {/* Achievements Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
              <a
                href="https://engr.nmsu.edu/news-events/2024/04/nmsu-announces-34th-annual-werc-environmental-design-contest-winners.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src="/werc-logo.jpg" alt="WERC Contest" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary hover:underline">
                      WERC Environmental Design Contest 2024
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      First prize for load optimization project
                    </p>
                  </div>
                </div>
              </a>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src="/cummins.jpg" alt="Cummins" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">IT Intern Challenge - Cummins</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Won third place in IT Intern Challenge competition at Cummins
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-3 text-primary">Best Undergraduate Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                Best project of the Electrical Engineering department
              </p>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
              <a
                href="https://www.credly.com/badges/8a57fffe-639d-48f0-9c99-418ced016eb0/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image src="/gen_certificate.png" alt="Google Cloud Certified" fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary hover:underline">
                      Google Cloud Certified Generative AI Leader
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A Generative AI Leader drives innovation by leveraging Google Cloud's AI tools to identify
                      opportunities and lead responsible AI adoption across industries.
                    </p>
                  </div>
                </div>
              </a>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src="/google.png" alt="Google Vertex AI" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Generative AI Explorer - Vertex AI</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Google Cloud Platform</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src="/google.png" alt="Google AI Agents" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">
                    Gen AI Agents: Transform Your Organization
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Google</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src="/IBM_Cert_org.png" alt="IBM" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Data Analysis with Python</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">IBM, Coursera</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src="/IBM_Cert_org.png" alt="IBM" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">SQL for Data Science</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">IBM, Coursera</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src="/coursera.png" alt="Coursera" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Neural Networks & Deep Learning</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Coursera</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Hobbies & Interests Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Hobbies & Interests</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI Research</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exploring latest developments in LLMs and generative AI
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Traveling</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Exploring new cultures and broadening perspectives
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Working on solar energy and AgriVoltaics projects
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Analyzing complex datasets and building predictive models
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Send className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Get In Touch</h2>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, collaborations, or just chatting about AI/ML.
              Feel free to reach out through any of the channels below!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:aparnajjn@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aparnajjn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+15756507378" className="text-muted-foreground hover:text-primary transition-colors">
                    575-650-7378
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/aparna-jayakumar-nair/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/aparna-jayakumar-nair
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">GitHub</h3>
                  <a
                    href="https://github.com/Aparna-J-Nair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/Aparna-J-Nair
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Las Cruces, NM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:aparnajjn@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/aparna-jayakumar-nair/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}
