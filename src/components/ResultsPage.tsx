
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
    if (percentage >= 90) return "text-primary";
    if (percentage >= 80) return "text-success";
    if (percentage >= 70) return "text-primary";
    return "text-destructive";
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
    <div className="min-h-screen bg-background py-8 px-4 relative overflow-hidden animate-fade-in">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary animate-bounce rounded-full"
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
        <div className="mb-8 animate-scale-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-primary p-8 rounded-full material-shadow-lg">
                <Crown className="w-16 h-16 text-primary-foreground" />
              </div>
              {showConfetti && (
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-primary animate-spin" />
                </div>
              )}
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground animate-slide-up">
            Congratulations!
          </h1>
          
          <p className={`text-2xl md:text-3xl font-semibold mb-4 ${getPerformanceColor()} animate-fade-in`}>
            {getPerformanceMessage()}
          </p>
        </div>

        {/* Score Display */}
        <Card className="mb-8 material-shadow-lg border animate-scale-in">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <Trophy className="w-20 h-20 text-primary animate-pulse" />
              </div>
              
              <div className="text-8xl md:text-9xl font-bold mb-4">
                <span className={`${getPerformanceColor()} ${animateScore ? 'animate-pulse' : ''}`}>
                  {displayScore}
                </span>
                <span className="text-muted-foreground">/{totalQuestions}</span>
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-primary mb-6">
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
                      ? 'text-primary fill-primary animate-bounce' 
                      : 'text-muted'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Achievement Badge */}
            {percentage === 100 && (
              <div className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-xl font-bold inline-block animate-bounce material-shadow">
                🏆 PERFECT SCORE! 🏆
              </div>
            )}
            {percentage >= 90 && percentage < 100 && (
              <div className="bg-success text-white px-8 py-4 rounded-full text-xl font-bold inline-block animate-bounce material-shadow">
                ⭐ PYTHON MASTER! ⭐
              </div>
            )}
            {percentage >= 80 && percentage < 90 && (
              <div className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-xl font-bold inline-block animate-bounce material-shadow">
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-xl rounded-xl material-shadow material-ripple transition-all duration-200"
          >
            <RotateCcw className="mr-2 w-6 h-6" />
            Take Another Quiz
          </Button>
          
          <Button
            onClick={onBackHome}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-xl rounded-xl material-shadow material-ripple transition-all duration-200"
          >
            <Home className="mr-2 w-6 h-6" />
            Back to Topics
          </Button>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 text-muted-foreground animate-fade-in">
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
