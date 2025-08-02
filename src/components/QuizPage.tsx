
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuizTopic } from "../pages/Index";
import { quizData, getTopicDisplayName, Question } from "../data/quizData";
import { ChevronLeft, ChevronRight, Home, Trophy } from "lucide-react";

interface QuizPageProps {
  topic: QuizTopic;
  onComplete: (score: number) => void;
  onBackHome: () => void;
}

const QuizPage = ({ topic, onComplete, onBackHome }: QuizPageProps) => {
  const [questions] = useState<Question[]>(quizData[topic]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion.id] || null);
    setShowFeedback(false);
  }, [currentQuestionIndex, answers, currentQuestion.id]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
    
    // Show immediate feedback
    setShowFeedback(true);
    
    // Update score if this is a new correct answer
    const wasCorrectBefore = answers[currentQuestion.id] === currentQuestion.correct_answer;
    const isCorrectNow = answer === currentQuestion.correct_answer;
    
    if (isCorrectNow && !wasCorrectBefore) {
      setScore(prev => prev + 1);
    } else if (!isCorrectNow && wasCorrectBefore) {
      setScore(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    onComplete(score);
  };

  const getOptionStyle = (option: string) => {
    if (!showFeedback) {
      return selectedAnswer === option 
        ? "border-primary bg-primary/10 material-shadow ring-2 ring-primary/20" 
        : "border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200";
    }
    
    if (option === currentQuestion.correct_answer) {
      return "border-success bg-success/10 text-success";
    }
    
    if (selectedAnswer === option && option !== currentQuestion.correct_answer) {
      return "border-destructive bg-destructive/10 text-destructive";
    }
    
    return "border-border opacity-60";
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={onBackHome}
            className="flex items-center gap-2 material-ripple border-border hover:bg-secondary transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Topics
          </Button>
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {getTopicDisplayName(topic)}
            </h1>
            <p className="text-muted-foreground mt-1">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-bold text-primary">
                Score: {score}/{questions.length}
              </div>
              <div className="text-sm text-muted-foreground">
                {Math.round((score / questions.length) * 100)}%
              </div>
            </div>
            <div className="bg-primary/10 p-2 rounded-full">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 material-shadow-lg border animate-scale-in">
          <CardContent className="p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left border-2 rounded-lg material-ripple ${getOptionStyle(option)}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="text-center text-muted-foreground">
            {showFeedback && (
              <div className="animate-slide-up">
                {selectedAnswer === currentQuestion.correct_answer ? (
                  <span className="text-success font-semibold">✓ Correct!</span>
                ) : (
                  <span className="text-destructive font-semibold">✗ Incorrect</span>
                )}
              </div>
            )}
          </div>
          
          {isLastQuestion ? (
            <Button
              onClick={handleSubmitQuiz}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 px-8 material-ripple"
              disabled={!selectedAnswer}
            >
              Submit Quiz
              <Trophy className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 material-ripple"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
