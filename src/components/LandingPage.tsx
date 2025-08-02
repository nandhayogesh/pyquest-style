
import { Button } from "@/components/ui/button";
import { Code, ArrowRight } from "lucide-react";

interface LandingPageProps {
  onStartQuiz: () => void;
}

const LandingPage = ({ onStartQuiz }: LandingPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50/30 px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="bg-[#6695b2] p-6 rounded-full shadow-lg">
            <Code className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <h1 
          className="text-6xl md:text-7xl font-bold mb-6 text-black tracking-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          PyQuiz
        </h1>
        
        <p className="text-xl md:text-2xl text-[#a9a9a9] mb-8 leading-relaxed">
          Test Your Python Knowledge with an Interactive Quiz Experience
        </p>
        
        <p className="text-lg text-[#a9a9a9] mb-12 max-w-lg mx-auto">
          Challenge yourself with carefully crafted questions across five Python topics. 
          Track your progress and celebrate your achievements!
        </p>
        
        <Button 
          onClick={onStartQuiz}
          size="lg"
          className="bg-[#6695b2] hover:bg-[#5a8199] text-white px-12 py-4 text-xl rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
        >
          Start Quiz
          <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
        </Button>
        
        <div className="mt-16 text-sm text-[#a9a9a9]">
          5 Topics • 10 Questions Each • Real-time Scoring
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
