
import { useState } from 'react';
import LandingPage from '../components/LandingPage';
import HomePage from '../components/HomePage';
import QuizPage from '../components/QuizPage';
import ResultsPage from '../components/ResultsPage';

export type QuizTopic = 'python_basics' | 'data_structures' | 'object_oriented_python' | 'web_development_python' | 'advanced_python_concepts';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'home' | 'quiz' | 'results'>('landing');
  const [selectedTopic, setSelectedTopic] = useState<QuizTopic | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [totalQuestions] = useState(10);

  const handleStartQuiz = () => {
    setCurrentPage('home');
  };

  const handleTopicSelect = (topic: QuizTopic) => {
    setSelectedTopic(topic);
    setCurrentPage('quiz');
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setCurrentPage('results');
  };

  const handleBackHome = () => {
    setCurrentPage('home');
    setSelectedTopic(null);
  };

  const handleRestart = () => {
    setCurrentPage('landing');
    setSelectedTopic(null);
    setFinalScore(0);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'landing' && (
        <LandingPage onStartQuiz={handleStartQuiz} />
      )}
      {currentPage === 'home' && (
        <HomePage onTopicSelect={handleTopicSelect} />
      )}
      {currentPage === 'quiz' && selectedTopic && (
        <QuizPage 
          topic={selectedTopic} 
          onComplete={handleQuizComplete}
          onBackHome={handleBackHome}
        />
      )}
      {currentPage === 'results' && (
        <ResultsPage 
          score={finalScore}
          totalQuestions={totalQuestions}
          onRestart={handleRestart}
          onBackHome={handleBackHome}
        />
      )}
    </div>
  );
};

export default Index;
