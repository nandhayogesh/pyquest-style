
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Home, RotateCcw, Crown, Sparkles } from "lucide-react";

interface ResultsPageProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onBackHome: () => void;
}

const ResultsPage = ({ score, totalQuestions, onRestart, onBackHome }: ResultsPageProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [animateScore, setAnimateScore] = useState(false);
  const [displayScore, setDisplayScore] = useState(0);
  
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage === 100) return "Perfect! You are the absolute best! 🏆";
    if (percentage >= 90) return "Outstanding! You're a Python master! ⭐";
    if (percentage >= 80) return "Excellent work! You're doing great! 🎉";
    if (percentage >= 70) return "Great job! Keep up the good work! 👏";
    if (percentage >= 60) return "Good effort! You're on the right track! 💪";
    return "Keep practicing! You're learning and improving! 📚";
  };

  const getPerformanceColor = () => {
    if (percentage >= 90) return "text-[#ce81c3]";
    if (percentage >= 80) return "text-[#51f052]";
    if (percentage >= 70) return "text-[#6695b2]";
    return "text-[#b64127]";
  };

  const getStars = () => {
    if (percentage === 100) return 5;
    if (percentage >= 90) return 4;
    if (percentage >= 80) return 3;
    if (percentage >= 70) return 2;
    if (percentage >= 60) return 1;
    return 0;
  };

  useEffect(() => {
    // Trigger confetti and animations
    setShowConfetti(true);
    setAnimateScore(true);
    
    // Animate score counting up
    let currentScore = 0;
    const increment = Math.ceil(score / 30);
    const timer = setInterval(() => {
      currentScore += increment;
      if (currentScore >= score) {
        currentScore = score;
        clearInterval(timer);
      }
      setDisplayScore(currentScore);
    }, 50);

    // Stop confetti after 3 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(confettiTimer);
    };
  }, [score]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ce81c3]/10 via-white to-[#6695b2]/10 py-8 px-4 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#ce81c3] animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center">
        {/* Winner Board Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#ce81c3] to-[#6695b2] p-8 rounded-full shadow-2xl">
                <Crown className="w-16 h-16 text-white" />
              </div>
              {showConfetti && (
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-[#ce81c3] animate-spin" />
                </div>
              )}
            </div>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#ce81c3] to-[#6695b2] bg-clip-text text-transparent animate-bounce"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Congratulations!
          </h1>
          
          <p className={`text-2xl md:text-3xl font-semibold mb-4 ${getPerformanceColor()} animate-fade-in`}>
            {getPerformanceMessage()}
          </p>
        </div>

        {/* Score Display */}
        <Card className="mb-8 shadow-2xl border-4 border-[#ce81c3]/20 bg-gradient-to-br from-white to-[#ce81c3]/5 animate-scale-in">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <Trophy className="w-20 h-20 text-[#ce81c3] animate-pulse" />
              </div>
              
              <div className="text-8xl md:text-9xl font-bold mb-4">
                <span className={`${getPerformanceColor()} ${animateScore ? 'animate-pulse' : ''}`}>
                  {displayScore}
                </span>
                <span className="text-[#a9a9a9]">/{totalQuestions}</span>
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-[#6695b2] mb-6">
                {percentage}%
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < getStars() 
                      ? 'text-[#ce81c3] fill-[#ce81c3] animate-bounce' 
                      : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Achievement Badge */}
            {percentage === 100 && (
              <div className="bg-gradient-to-r from-[#ce81c3] to-[#6695b2] text-white px-8 py-4 rounded-full text-xl font-bold inline-block animate-bounce">
                🏆 PERFECT SCORE! 🏆
              </div>
            )}
            {percentage >= 90 && percentage < 100 && (
              <div className="bg-[#51f052] text-white px-8 py-4 rounded-full text-xl font-bold inline-block animate-bounce">
                ⭐ PYTHON MASTER! ⭐
              </div>
            )}
            {percentage >= 80 && percentage < 90 && (
              <div className="bg-[#6695b2] text-white px-8 py-4 rounded-full text-xl font-bold inline-block animate-bounce">
                🎉 EXCELLENT! 🎉
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-[#ce81c3] hover:bg-[#b871b3] text-white px-8 py-4 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <RotateCcw className="mr-2 w-6 h-6" />
            Take Another Quiz
          </Button>
          
          <Button
            onClick={onBackHome}
            size="lg"
            variant="outline"
            className="border-2 border-[#6695b2] text-[#6695b2] hover:bg-[#6695b2] hover:text-white px-8 py-4 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Home className="mr-2 w-6 h-6" />
            Back to Topics
          </Button>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 text-[#a9a9a9] animate-fade-in">
          <p className="text-lg">
            {percentage >= 80 
              ? "You've demonstrated excellent Python knowledge! Keep coding! 🐍" 
              : "Every question you answered correctly is progress! Keep learning! 💡"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
