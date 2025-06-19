"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Smartphone,
  Award,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
  Moon,
  Sun,
  Database,
  Globe,
  Server,
  Palette,
  Layout,
  Monitor,
  Layers,
  Target,
  Link,
  Brain,
  Clipboard,
  Clock,
  Coffee,
  Flame,
  FileCode,
  Brush,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const [showBackToTop, setShowBackToTop] = useState(false)

  const projects = [
    {
      title: "Bangkit Academy Capstone Project",
      description:
        "Innovative technology-based solution developed as part of Bangkit Academy program. Achieved Top 50 ranking among all capstone projects with collaborative cross-disciplinary approach.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Kotlin", "Android Studio", "Firebase", "Machine Learning", "UI/UX Design"],
      category: "Mobile Development",
      duration: "3 months",
      teamSize: "6 members",
      status: "Completed",
      highlights: ["Top 50 Achievement", "Cross-disciplinary Collaboration", "Real-world Problem Solving"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Stunting Detection Web Application",
      description:
        "Research-based web application for early detection of stunting cases in children. Focused on data collection, system implementation, and user-friendly interface design for healthcare professionals.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
      category: "Web Development",
      duration: "6 months",
      teamSize: "Research Team",
      status: "Research Phase",
      highlights: ["Healthcare Impact", "Data Visualization", "Research Contribution"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Point of Sale (PoS) Desktop Application",
      description:
        "Comprehensive desktop application for retail management with inventory tracking, sales processing, and reporting features. Built with Java Swing and integrated with database systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java", "Java Swing", "PostgreSQL", "MySQL", "JDBC"],
      category: "Desktop Development",
      duration: "2 months",
      teamSize: "Development Team",
      status: "Deployed",
      highlights: ["Client Implementation", "Database Integration", "User Training"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Government Website Interface",
      description:
        "Modern and responsive front-end interface for government institution website. Developed using HTML, CSS, JavaScript, and CodeIgniter framework with focus on accessibility and user experience.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML", "CSS", "JavaScript", "CodeIgniter", "Bootstrap", "PHP"],
      category: "Web Development",
      duration: "3 months",
      teamSize: "Development Team",
      status: "Live",
      highlights: ["Government Project", "Accessibility Focus", "Team Collaboration"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Flutter Mobile Application",
      description:
        "Award-winning mobile application developed for national competition by SMKDEV. Achieved 2nd place with innovative features and excellent user interface design using Flutter framework.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "Material Design"],
      category: "Mobile Development",
      duration: "1 month",
      teamSize: "3 members",
      status: "Competition Entry",
      highlights: ["National 2nd Place", "SMKDEV Competition", "Team Achievement"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Web Design Competition Entry",
      description:
        "Creative and responsive web design created for city-level competition. Focused on aesthetics, navigation flow, and user experience principles with modern design trends.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      category: "Web Design",
      duration: "2 weeks",
      teamSize: "Individual",
      status: "Competition Entry",
      highlights: ["City Competition", "Design Excellence", "UX Focus"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getSkillIcon = (skill: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      JavaScript: <FileCode className="w-6 h-6 text-white" />,
      Kotlin: <Smartphone className="w-6 h-6 text-white" />,
      PHP: <Server className="w-6 h-6 text-white" />,
      Java: <Coffee className="w-6 h-6 text-white" />,
      Laravel: <Server className="w-6 h-6 text-white" />,
      Bootstrap: <Layout className="w-6 h-6 text-white" />,
      MySQL: <Database className="w-6 h-6 text-white" />,
      "Mobile Development": <Smartphone className="w-6 h-6 text-white" />,
      "Web Development": <Globe className="w-6 h-6 text-white" />,
      "Android Studio": <Smartphone className="w-6 h-6 text-white" />,
      Firebase: <Flame className="w-6 h-6 text-white" />,
      CodeIgniter: <Server className="w-6 h-6 text-white" />,
      HTML: <FileCode className="w-6 h-6 text-white" />,
      CSS: <Palette className="w-6 h-6 text-white" />,
      PostgreSQL: <Database className="w-6 h-6 text-white" />,
      "Java Swing": <Monitor className="w-6 h-6 text-white" />,
      Flutter: <Smartphone className="w-6 h-6 text-white" />,
      Dart: <Target className="w-6 h-6 text-white" />,
      "REST API": <Link className="w-6 h-6 text-white" />,
      "Material Design": <Layers className="w-6 h-6 text-white" />,
      "UI/UX Design": <Brush className="w-6 h-6 text-white" />,
      "Object-Oriented Programming (OOP)": <Code className="w-6 h-6 text-white" />,
      "Logic Programming": <Brain className="w-6 h-6 text-white" />,
      "Project Management": <Clipboard className="w-6 h-6 text-white" />,
      "Time Management": <Clock className="w-6 h-6 text-white" />,
      "Visual Studio Code": <FileCode className="w-6 h-6 text-white" />,
    }

    return iconMap[skill] || <Code className="w-6 h-6 text-white" />
  }

  const skills = [
    "JavaScript",
    "Kotlin",
    "PHP",
    "Java",
    "Laravel",
    "Bootstrap",
    "MySQL",
    "Mobile Development",
    "Web Development",
    "Firebase",
    "CodeIgniter",
    "HTML",
    "CSS",
    "PostgreSQL",
    "REST API",
    "UI/UX Design",
    "Object-Oriented Programming (OOP)",
    "Logic Programming",
    "Project Management",
    "Time Management",
  ]

  const experiences = [
    {
      title: "Front-End Web Developer Intern",
      company: "Dinas Komunikasi dan Informatika Kabupaten Batang",
      period: "Jul 2023 - Sep 2023",
      location: "Batang, Indonesia",
      description:
        "Developed front-end interfaces using HTML, CSS, JavaScript, and CodeIgniter framework. Collaborated with development team for optimal integration.",
      technologies: ["HTML", "CSS", "JavaScript", "CodeIgniter", "PHP"],
    },
    {
      title: "Java Developer Intern",
      company: "CV. Cipta Graha Software",
      period: "Dec 2019 - Feb 2020",
      location: "Pekalongan, Indonesia",
      description:
        "Contributed to Point of Sale (PoS) desktop application development using Java Swing with PostgreSQL/MySQL integration.",
      technologies: ["Java", "Java Swing", "PostgreSQL", "MySQL"],
    },
  ]

  const achievements = [
    {
      title: "Bangkit Academy Graduate",
      description: "Top 50 Capstone Project Achievement",
      year: "2023",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "IT Software Application Competition",
      description: "3rd Place - City Level Pekalongan",
      year: "2020",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Mobile App Development Challenge",
      description: "2nd Place (Team) - National Level by SMKDEV",
      year: "2020",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "IT Software Solutions Competition",
      description: "2nd Place - City Level Pekalongan",
      year: "2021",
      icon: <Code className="w-6 h-6" />,
    },
  ]

  const projectCategories = ["All", "Web Development", "Mobile Development", "Desktop Development", "Web Design"]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation with Scroll Progress */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
            style={{ scaleX: scrollYProgress }}
          />

          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-xl font-bold">
              Farros Ilman
            </motion.div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <div className="hidden md:flex gap-6">
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About
                </a>
                <a href="#education" className="hover:text-blue-600 transition-colors">
                  Education
                </a>
                <a href="#experience" className="hover:text-blue-600 transition-colors">
                  Experience
                </a>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  Skills
                </a>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Projects
                </a>
                <a href="#achievements" className="hover:text-blue-600 transition-colors">
                  Achievements
                </a>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
          <motion.div
            style={{ y }}
            className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative mb-8"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  {/* Animated background rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                  </motion.div>

                  {/* Secondary rotating ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 opacity-75"
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                  </motion.div>

                  {/* Profile photo dengan efek artistic untuk menyamarkan inconsistency */}
                  {/* Profile photo dengan efek yang lebih bersih */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-4 rounded-full overflow-hidden shadow-2xl"
                  >
                    <div className="relative w-full h-full">
                      {/* Background gradient yang subtle */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full"></div>

                      {/* Photo dengan filter yang lebih ringan */}
                      <img
                        src="/images/profile-photo.png"
                        alt="Muchammad Farros Ilman Haq"
                        className="w-full h-full object-cover"
                        style={{
                          filter: "brightness(1.05) contrast(1.1) saturate(1.1)",
                        }}
                      />

                      {/* Border gradient yang subtle */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-blue-600/20"></div>

                      {/* Shine effect yang lebih halus */}
                      <motion.div
                        animate={{
                          x: [-100, 200],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 6,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 rounded-full"
                      />

                      {/* Hover overlay yang ringan */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/20 rounded-full"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-12 h-12 border-2 border-white/40 border-t-white/80 rounded-full"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Floating particles */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{
                      y: [10, -10, 10],
                      x: [5, -5, 5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{
                      y: [-8, 8, -8],
                      x: [8, -8, 8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                    className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full opacity-60"
                  />
                </div>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">Muchammad Farros Ilman Haq</h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                Junior Front-End Web Developer & Android Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
                <MapPin className="w-5 h-5" />
                <span>Kota Pekalongan, Indonesia</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-6"
            >
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/Curriculum%20Vitae%20-%20Farros%20Ilman.pdf" download rel="noopener noreferrer">
                  Download CV <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center gap-6 mb-8"
            >
              <a href="mailto:rosilman000@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/farrosilman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="tel:+6281903411015" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <User className="w-8 h-8 text-blue-600 mt-1" />
                    <div>
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        Junior Front-End Web Developer dan Android Developer dengan pengalaman membangun aplikasi web
                        dan mobile yang responsif dan ramah pengguna. Terbiasa bekerja dalam proyek nyata serta
                        mengikuti program pengembangan kompetensi seperti Bangkit Academy jalur Mobile Development.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                        Memiliki semangat belajar tinggi, pemahaman yang baik dalam desain antarmuka, dan siap
                        berkontribusi di tim pengembang yang dinamis. Latar belakang pendidikan saya di bidang
                        Informatika mendukung pemahaman teknis dan logika pemrograman yang kuat.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <CardTitle>Bachelor of Informatika</CardTitle>
                    </div>
                    <CardDescription>
                      Universitas Muhammadiyah Pekajangan Pekalongan • Sep 2021 - Apr 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-2">
                        GPA: 3.88/4.00
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Mengikuti program Bangkit Academy jalur Mobile Development</li>
                      <li>• Top 50 dalam kompetisi Capstone Project Bangkit Academy</li>
                      <li>• Berkontribusi dalam penelitian aplikasi deteksi dini stunting</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <CardTitle>Rekayasa Perangkat Lunak</CardTitle>
                    </div>
                    <CardDescription>SMK Syafi'i Akrom Pekalongan • Jul 2018 - Jul 2021</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Badge variant="secondary" className="mb-2">
                        Score: 8.14/10.00
                      </Badge>
                    </div>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• Partisipasi dalam lomba desain web tingkat kota</li>
                      <li>• Juara 3 kompetisi aplikasi perangkat lunak</li>
                      <li>• Juara 2 kompetisi pengembangan solusi perangkat lunak</li>
                      <li>• Juara 2 kompetisi mobile app development nasional (SMKDEV)</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-6 h-6 text-blue-600" />
                        <CardTitle>{exp.title}</CardTitle>
                      </div>
                      <CardDescription>
                        {exp.company} • {exp.period} • {exp.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600">
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
                          {getSkillIcon(skill)}
                        </div>
                        <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors duration-300">
                          {skill}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileCode className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">JavaScript, Kotlin, PHP, Java</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layout className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Frameworks & Tools</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Laravel, Bootstrap, CodeIgniter, Android Studio, Visual Studio Code
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Databases & Others</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    MySQL, PostgreSQL, Firebase, UI/UX Design, Project Management
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A showcase of my development projects, from academic research to competition entries and professional
                work.
              </p>
            </motion.div>

            {/* Project Categories Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Code className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{project.duration}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <Badge key={highlightIndex} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span>Team: {project.teamSize}</span>
                        <span>{project.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* No Projects Message */}
            {filteredProjects.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        {achievement.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
                      <Badge variant="secondary">{achievement.year}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects. Let's connect!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:rosilman000@gmail.com" className="text-blue-600 hover:underline">
                      rosilman000@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a href="tel:+6281903411015" className="text-blue-600 hover:underline">
                      +62 819 0341 1015
                    </a>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/farrosilman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      farrosilman
                    </a>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="w-6 h-6 transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Muchammad Farros Ilman Haq. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
