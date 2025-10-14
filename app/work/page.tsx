import { NeuralNetworkBackground } from "@/components/neural-network-background"
import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export default function WorkPage() {
  return (
    <main className="relative min-h-screen">
      <NeuralNetworkBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 pt-32">
        {/* Experience Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Work Experience</h1>
          </div>
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">AI Intern</h3>
                  <p className="text-primary font-medium">Cummins Inc.</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">May 2025 - Aug 2025</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Developed a framework for clustering Voice of Customers (VOC) data to extract actionable insights.</li>
                <li>• Built a Retrieval-Augmented Generation (RAG) application for a safety-focused chatbot using large language
models (LLMs), earning 3rd place in an internal competition</li>
                <li>• Applied semantic mapping techniques to enhance data interpretation and model performance.</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Research Assistant</h3>
                  <p className="text-primary font-medium">New Mexico State University</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Jan 2024 - Present</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Designed and implemented a Modbus TCP data pipeline that collects, logs, and decodes solar power plant
data with real-time processing and configurable endianness for analytics.</li>
                <li>• Collected and processed solar power system data via Modbus TCP, applying decoding, statistical analysis,
and machine learning techniques for visualization and insights.</li>
                <li>•Developed an algorithm to analyze shading effects in single-axis solar panels.</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Software Engineer (Data Science)</h3>
                  <p className="text-primary font-medium">LTI Mindtree</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Aug 2022 – Dec 2023</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Built predictive APIs for real-time text completion and data correlation using Generative AI models,
reducing manual efforts by 40%.</li>
                <li>• Developed an OCR-based system for extracting and structuring image content with 95% accuracy.</li>
                <li>• Led a topic modeling project, and developed API for extracting key topics from unstructured data and
fine-tuning an LLM to generate precise topic names for each cluster, improving interpretability.</li>
                <li>• Led projects on image/audio-to-text conversion and correlated extracted data with SDLC.</li>
                <li>• Designed a text completion API leveraging LLMs similar to Google’s Smart Compose.</li>
                <li>• Developed an API for Natural Language Generation (NLG) to automate text creation from structured
data, ensuring coherence and contextual relevance.</li>

              </ul>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Data Science Intern</h3>
                  <p className="text-primary font-medium">L&T Infotech</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">Jan 2022 – Jul 2022</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Developed Knowledge Graphs to model relationships between entities, using PostgreSQL for efficient storage, querying, and management of graph-structured data.</li>
                <li>• Implemented Named Entity Recognition (NER) techniques using both traditional NLP methods and Large Language Models (LLMs) to extract key entities from unstructured text, significantly enhancing information retrieval and classification accuracy.</li>
                <li>• Applied Centrality Theorems to identify influential nodes within the knowledge graph, optimizing graph traversal and entity importance ranking. </li>

                
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Research Assistant</h3>
                  <p className="text-primary font-medium">University of Wyoming</p>
                </div>
                <span className="text-muted-foreground mt-2 md:mt-0">May 2021 – Jan 2022</span>
              </div>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Developed a novel attack system on motion sensor data by leveraging correlations between motion sensor
readings and gait video analysis.</li>
                <li>• Explored security vulnerabilities in gait authentication systems, demonstrating potential risks in motion
sensor-based authentication.</li>
                <li>• Published findings in a research paper, presenting insights into adversarial attacks on gait-based authentication
at an international conference.</li>
                
              </ul>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
