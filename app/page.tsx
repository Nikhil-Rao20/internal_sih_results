"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, Search, Mail } from "lucide-react"
import Image from "next/image"

// Hackathon results data
const resultsData = [
  { rank: 1, teamName: "AI_ALCHEMISTS_RGUKTN", leader: "MAHAMKALI GOPI JAGADHEESH", psId: "SIH25066" },
  { rank: 2, teamName: "AQUANOVA_RGUKTN", leader: "VADAGA VINEETH KUMAR", psId: "SIH25016,SIH25041" },
  { rank: 3, teamName: "HEXANOVA_RGUKTN", leader: "MACHARA SAI MANIKANTA ESWAR", psId: "SIH25039" },
  { rank: 4, teamName: "THE ASCENDANTS_RGUKTN", leader: "CHAKKA TEJA ABHINAYASRI", psId: "SIH25069,SIH25040" },
  { rank: 5, teamName: "CP0_RGUKTN", leader: "HARIKA AMUJURI", psId: "SIH25061" },
  { rank: 6, teamName: "BINARY_BRAINS_RGUKTN", leader: "P INDUMATHI", psId: "SIH25052" },
  { rank: 7, teamName: "HACKERTROUPE_RGUKTN", leader: "UDAY CHERRI", psId: "SIH25127" },
  { rank: 8, teamName: "NovaSparks_RGUKTN", leader: "Subash Reddy Balupunuri", psId: "SIH12508" },
  { rank: 9, teamName: "TEAM ALPHA_RGUKTN", leader: "M THARUN", psId: "SIH25102" },
  { rank: 10, teamName: "TECH SPARKS_RGUKTN", leader: "G.N.V.PRADEEP", psId: "SIH25115" },
  { rank: 11, teamName: "ECLIPSERA_RGUKTN", leader: "VENKATESH PONNURU", psId: "SIH25081" },
  { rank: 12, teamName: "TOURNEXUS_RGUKTN", leader: "KARTHIK CHALLAGUNDLA", psId: "SIH25002" },
  { rank: 13, teamName: "NEXUS_RGUKTN", leader: "THALLAM VENKATA KARTHIK", psId: "SIH25022" },
  { rank: 14, teamName: "VEGAVERSE _RGUKTN", leader: "SUDHARSHAN PAUL GANTA", psId: "SIH25073" },
  { rank: 15, teamName: "DRISTI_RGUKTN", leader: "K THARUN", psId: "SIH25047" },
  { rank: 16, teamName: "AQUANOVA_RGUKTN", leader: "VADAGA VINEETH KUMAR", psId: "SIH25041" },
  { rank: 17, teamName: "OMNITRIX_RGUKTN", leader: "V.MOHAN SAI SANTOSH", psId: "SIH25063" },
  { rank: 18, teamName: "StrawWhats_RGUKTN", leader: "DIVIJA", psId: "SIH25008" },
  { rank: 19, teamName: "Arch Sparks_RGUKTN", leader: "M. Yuktesh", psId: "SIH25098" },
  { rank: 20, teamName: "IGNOVA_RGUKTN", leader: "AFSHEEN MOHAMMAD", psId: "SIH25061" },
  { rank: 21, teamName: "IGNOVA_RGUKTN", leader: "AFSHEEN MOHAMMAD", psId: "SIH25061" },
  { rank: 22, teamName: "RUNTIME_REBELS_RGUKTN", leader: "MUMMANA RAKESH", psId: "SIH25081,SIH25083" },
  { rank: 23, teamName: "ALGOGANG_RGUKTN", leader: "MUNESHWAR AKASH", psId: "SIH25039" },
  { rank: 24, teamName: "CRAZYCODERS_RGUKTN", leader: "P. NAVYA SRI", psId: "SIH25139" },
  { rank: 25, teamName: "VISIONARY MINDS_RGUKTN", leader: "B.SATISH", psId: "SIH25044" },
  { rank: 26, teamName: "METAMINDS_RGUKTN", leader: "IMANDI PRASANNA", psId: "SIH25031" },
  { rank: 27, teamName: "CIVIC_CREW_RGUKTN", leader: "NAGA GOWTHAMI", psId: "SIH25135" },
  { rank: 28, teamName: "NEXTGENCODERS_RGUKTN", leader: "JONATHAN PULIPAKA", psId: "SIH25002,SIH25092" },
  { rank: 29, teamName: "AQUARAY_RGUKTN", leader: "NAVADEEP", psId: "SIH25072" },
  { rank: 30, teamName: "ESPADA_RGUKTN", leader: "P D V V NAGULU", psId: "SIH25032" },
  { rank: 31, teamName: "HACK4HOPE_RGUKTN", leader: "KATRU RAMYASRI", psId: "SIH25071" },
  { rank: 32, teamName: "TEAMNOTFOUND_RGUKTN", leader: "BALAVARDHANTUMMALACHERLA", psId: "SIH12508" },
  { rank: 33, teamName: "INNOVISTAS_RGUKTN", leader: "CHINNI ROJA SRIYA AISWARYA LAKSHMI", psId: "SIH25042" },
  { rank: 34, teamName: "MAGNUM_RGUKTN", leader: "PALAGANI RAGHAVENDRA RAJU", psId: "SIH25042" },
  { rank: 35, teamName: "VAMPIRE CODERS_RGUKTN", leader: "MOHITHA ADIVARAPUPETA", psId: "SIH25048" },
  { rank: 36, teamName: "VISIONX_RGUKTN", leader: "HANSHITA DOSURI", psId: "SIH25092" },
  { rank: 37, teamName: "INNOSPARK_RGUKTN", leader: "SHAIK.RAHAMATH", psId: "SIH25069" },
  { rank: 38, teamName: "NYXION_RGUKTN", leader: "R.MANI RATHNAM", psId: "SIH25036" },
  { rank: 39, teamName: "TARA_RGUKTN", leader: "DURGA RAMA KRISHNA KAPA", psId: "SIH25049" },
  { rank: 40, teamName: "DATA PIRATES", leader: "M. SOWMYA", psId: "SIH25071" },
  { rank: 41, teamName: "INNOVEXA_RGUKTN", leader: "G.POORNENDRA SREERAJU", psId: "SIH25026" },
  { rank: 42, teamName: "ALGOGANG_RGUKTN", leader: "MUNESHWAR AKASH", psId: "SIH25040" },
  { rank: 43, teamName: "AVENGERS_RGUKTN", leader: "ENDLURU MANASA", psId: "SIH25081" },
  { rank: 44, teamName: "SMART INNOVATORS_RGUKTN", leader: "S PHANINDRA RAMA KRISHNA", psId: "SIH25051" },
  { rank: 45, teamName: "JERN_RGUKTN", leader: "KARA RANJIT KUMAR", psId: "SIH25021" },
  { rank: 46, teamName: "CODERS4EARTH_RGUKTN", leader: "K PARDHASARADHI", psId: "SIH25031" },
  { rank: 47, teamName: "BAMBOOCOPTER_RGUKTN", leader: "REPUDI ARISTOTLE", psId: "SIH25117" },
  { rank: 48, teamName: "INNOVENTURES_RGUKTN", leader: "D PAVITHRA", psId: "SIH25036" },
  { rank: 49, teamName: "ALGOGANG_RGUKTN", leader: "MUNESHWAR AKASH", psId: "SIH25039" },
  { rank: 50, teamName: "ASTRAMINDS_RGUKTN", leader: "EESALEE HARIDASU", psId: "SIH25043" },
]

// Process data for visualizations
const problemStatementData = resultsData.reduce(
  (acc, team) => {
    const psIds = team.psId.split(",")
    psIds.forEach((psId) => {
      const existing = acc.find((item) => item.psId === psId.trim())
      if (existing) {
        existing.count += 1
      } else {
        acc.push({ psId: psId.trim(), count: 1 })
      }
    })
    return acc
  },
  [] as { psId: string; count: number }[],
)

const topProblemStatements = problemStatementData.sort((a, b) => b.count - a.count).slice(0, 10)

export default function SIHResults() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredResults = resultsData.filter(
    (team) =>
      team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.leader.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.psId.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedResults = filteredResults.slice(startIndex, startIndex + itemsPerPage)

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Award className="h-5 w-5 text-amber-600" />
    return <span className="h-5 w-5 flex items-center justify-center text-sm font-bold">{rank}</span>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 md:py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Image
              src="/rgukt-logo.png"
              alt="RGUKT Logo"
              width={60}
              height={60}
              className="sm:w-20 sm:h-20 rounded-lg"
            />
            <div className="text-center">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-balance leading-tight">
                Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh, Nuzvid Campus
              </h1>
              <p className="text-xs sm:text-sm opacity-80 mt-1">
                Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-8">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4 text-balance">Smart India Hackathon 2025</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">Internal Hackathon Results</p>
          <p className="text-base md:text-lg text-muted-foreground">RGUKT Nuzvid Campus</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl md:text-2xl font-bold text-primary">50</CardTitle>
              <CardDescription className="text-xs md:text-sm">Total Teams</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl md:text-2xl font-bold text-primary">135</CardTitle>
              <CardDescription className="text-xs md:text-sm">Problem Statements</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl md:text-2xl font-bold text-primary">200+</CardTitle>
              <CardDescription className="text-xs md:text-sm">Team Leaders</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl md:text-2xl font-bold text-primary">2025</CardTitle>
              <CardDescription className="text-xs md:text-sm">Competition Year</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Problem Statement Analysis */}
        <div className="mb-8 md:mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-bold text-primary">Top Problem Statements</CardTitle>
              <CardDescription>Most popular problem statements by team participation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Problem Statement Statistics */}
                <div className="space-y-4">
                  <h3 className="text-base md:text-lg font-semibold">Problem Statement Statistics</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-3 md:p-4">
                      <div className="text-xl md:text-2xl font-bold text-primary">{problemStatementData.length}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Unique Problem Statements</div>
                    </Card>
                    <Card className="p-3 md:p-4">
                      <div className="text-xl md:text-2xl font-bold text-primary">
                        {Math.max(...problemStatementData.map((ps) => ps.count))}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">Max Teams per Problem</div>
                    </Card>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-sm md:text-base">Top 10 Problem Statements</h4>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto">
                      {topProblemStatements.map((ps, index) => (
                        <div
                          key={ps.psId}
                          className="flex items-center justify-between p-2 md:p-3 bg-muted/30 rounded-lg"
                        >
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            <Badge variant="outline" className="font-mono text-xs">
                              {ps.psId}
                            </Badge>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-sm">{ps.count} teams</div>
                            <div className="text-xs text-muted-foreground">
                              {((ps.count / resultsData.length) * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Team Rankings</CardTitle>
            <CardDescription>Complete results of Smart India Hackathon 2025</CardDescription>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search teams, leaders, or problem statements..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full md:max-w-sm"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-2 md:p-4 font-semibold text-sm md:text-base">Rank</th>
                    <th className="text-left p-2 md:p-4 font-semibold text-sm md:text-base">Team Name</th>
                    <th className="text-left p-2 md:p-4 font-semibold text-sm md:text-base">Team Leader</th>
                    <th className="text-left p-2 md:p-4 font-semibold text-sm md:text-base">Problem Statement ID</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedResults.map((team, index) => (
                    <tr
                      key={`${team.rank}-${index}`}
                      className={`border-b hover:bg-muted/30 transition-colors ${team.rank <= 3 ? "bg-accent/10" : ""}`}
                    >
                      <td className="p-2 md:p-4">
                        <div className="flex items-center space-x-2">
                          {getRankIcon(team.rank)}
                          <span className="font-semibold text-sm md:text-base">{team.rank}</span>
                        </div>
                      </td>
                      <td className="p-2 md:p-4">
                        <div className="font-medium text-sm md:text-base">{team.teamName}</div>
                        {team.rank <= 10 && (
                          <Badge variant="secondary" className="mt-1 text-xs">
                            Top 10
                          </Badge>
                        )}
                      </td>
                      <td className="p-2 md:p-4 text-muted-foreground text-sm md:text-base">{team.leader}</td>
                      <td className="p-2 md:p-4">
                        <div className="flex flex-wrap gap-1">
                          {team.psId.split(",").map((psId, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {psId.trim()}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0">
                <p className="text-xs md:text-sm text-muted-foreground">
                  Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredResults.length)} of{" "}
                  {filteredResults.length} results
                </p>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span className="text-xs md:text-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-8 md:mt-12">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Contact Information</CardTitle>
            <CardDescription>For queries regarding the hackathon results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Dean of Academics */}
              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-sm md:text-base">Dean of Academics</h4>
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5603AQGMEQ3tiC60IQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714803123003?e=1761177600&v=beta&t=sgYXsOlzVaYGO2ZuVM454dWDT5voboOOLuXez8rjo1c"
                    alt="Dr. Chiranjeevi Sadu"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-primary/20"
                  />
                  <div className="space-y-2">
                    <div className="font-medium text-sm md:text-base">Dr. Chiranjeevi Sadu</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Dean of Academics, RGUKT Nuzvid</div>
                  </div>
                </div>
              </div>
              {/* Single Point of Contact */}
              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-sm md:text-base">Single Point of Contact</h4>
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5603AQGoJKVdHBcjzA/profile-displayphoto-scale_400_400/B56Zk8t.xpH8Ag-/0/1757660312590?e=1761177600&v=beta&t=3rzmd5kbLt4BTIsjlpWWYP30vBKgkADTxrFOpnOKHaM"
                    alt="Srinivasu"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-primary/20"
                  />
                  <div className="space-y-2">
                    <div className="font-medium text-sm md:text-base">Srinivasu Ch</div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="mailto:vasuch9959@rguktn.ac.in"
                        className="text-primary hover:underline text-sm md:text-base"
                      >
                        vasuch9959@rguktn.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Lead Organiser */}
              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-sm md:text-base">Lead Organiser</h4>
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D5603AQFe3vOw_HlzUg/profile-displayphoto-shrink_400_400/B56Zhg8hdDG0Ak-/0/1753973136417?e=1761177600&v=beta&t=ddIUnhaj5BJBENl0I5HILc5kPnegY_VKOkRgfYEusxc"
                    alt="Nikhileswara Rao Sulake"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-primary/20"
                  />
                  <div className="space-y-2">
                    <div className="font-medium text-sm md:text-base">Nikhileswara Rao Sulake</div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="mailto:n210153@rguktn.ac.in"
                        className="text-primary hover:underline text-sm md:text-base"
                      >
                        n210153@rguktn.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      {/* Hackhub Thank You Note */}
      <div className="container mx-auto px-4 text-center mt-12">
        <div className="flex flex-col items-center justify-center mb-6">
          <Image src="/rgukt-logo.png" alt="Hackhub Club Logo" width={60} height={60} className="rounded-lg mb-2" />
          <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Hackhub - Coded for Hackathons</h3>
          <p className="text-sm md:text-base text-muted-foreground mb-2">Head: Srinivasu Ch</p>
          <p className="text-base md:text-lg font-semibold text-primary">Thank you to Hackhub Club for organizing and supporting the Smart India Hackathon 2025 Internal Hackathon at RGUKT Nuzvid. Your dedication and efforts made this event a grand success!</p>
        </div>
      </div>
      {/* Non-selected Teams Note */}
      <div className="container mx-auto px-4 text-center mb-8">
        <div className="bg-muted/30 rounded-lg p-6 md:p-8">
          <h4 className="text-lg md:text-xl font-bold text-primary mb-2">Note for Non-Selected Teams</h4>
          <p className="text-base md:text-lg text-muted-foreground">
            Selecting the top 50 teams from 210 presentations in the Internal Hackathon for Smart India Hackathon 2025 was a truly challenging task. With participants working on diverse themes and problem statements, the jury had to consider multiple factors—such as average scores, relevance of problem statements, number of teams attempting similar ideas, financial feasibility for building hardware or IoT prototypes, and many more. After much effort, the top 50 teams were shortlisted. We realized that while organizing such an event is itself a huge challenge, judging and bringing out the very best ideas is even more demanding. The remaining promising teams will also be considered for other opportunities and recommended for future project expos like Teckzite 2025 and other external expos.
          </p>
        </div>
      </div>
      <footer className="bg-primary text-primary-foreground py-6 md:py-8 mt-8 md:mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base md:text-lg font-semibold mb-2">
            Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh
          </p>
          <p className="opacity-90 text-sm md:text-base">Nuzvid Campus</p>
          <p className="text-xs md:text-sm opacity-80 mt-2">
            Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f) of UGC Act, 1956
          </p>
          <p className="text-xs md:text-sm opacity-80">Accredited by 'NAAC' with 'B+' Grade</p>
        </div>
      </footer>
    </div>
  )
}
