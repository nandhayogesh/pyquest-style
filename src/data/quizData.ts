
import { QuizTopic } from "../pages/Index";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct_answer: string;
}

export const quizData: Record<QuizTopic, Question[]> = {
  python_basics: [
    {
      id: 1,
      question: "What is the output of print(type([]) == list)?",
      options: ["True", "False", "Error", "None"],
      correct_answer: "True"
    },
    {
      id: 2,
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "func", "define"],
      correct_answer: "def"
    },
    {
      id: 3,
      question: "What is the correct way to create a comment in Python?",
      options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "-- This is a comment"],
      correct_answer: "# This is a comment"
    },
    {
      id: 4,
      question: "Which of the following is a mutable data type?",
      options: ["tuple", "string", "list", "int"],
      correct_answer: "list"
    },
    {
      id: 5,
      question: "What does the len() function return?",
      options: ["The memory size of an object", "The number of elements in a sequence", "The type of an object", "The value of an object"],
      correct_answer: "The number of elements in a sequence"
    },
    {
      id: 6,
      question: "Which operator is used for floor division in Python?",
      options: ["/", "//", "%", "**"],
      correct_answer: "//"
    },
    {
      id: 7,
      question: "What is the output of print(3 ** 2)?",
      options: ["6", "9", "5", "Error"],
      correct_answer: "9"
    },
    {
      id: 8,
      question: "Which method is used to add an element to the end of a list?",
      options: ["add()", "append()", "insert()", "extend()"],
      correct_answer: "append()"
    },
    {
      id: 9,
      question: "What is the correct syntax for a while loop?",
      options: ["while (condition):", "while condition:", "while condition {}", "while (condition) {}"],
      correct_answer: "while condition:"
    },
    {
      id: 10,
      question: "Which function is used to get input from the user?",
      options: ["get()", "input()", "read()", "scan()"],
      correct_answer: "input()"
    }
  ],
  
  data_structures: [
    {
      id: 1,
      question: "Which data structure is ordered and mutable?",
      options: ["Tuple", "List", "Set", "Dictionary"],
      correct_answer: "List"
    },
    {
      id: 2,
      question: "What is the time complexity of accessing an element in a dictionary?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct_answer: "O(1)"
    },
    {
      id: 3,
      question: "Which method removes and returns the last element of a list?",
      options: ["remove()", "delete()", "pop()", "clear()"],
      correct_answer: "pop()"
    },
    {
      id: 4,
      question: "What does set1.intersection(set2) return?",
      options: ["Elements in set1 but not set2", "Elements in set2 but not set1", "Elements common to both sets", "All elements from both sets"],
      correct_answer: "Elements common to both sets"
    },
    {
      id: 5,
      question: "Which data structure does not allow duplicate elements?",
      options: ["List", "Tuple", "Set", "Dictionary"],
      correct_answer: "Set"
    },
    {
      id: 6,
      question: "How do you access the value associated with a key in a dictionary?",
      options: ["dict.get(key)", "dict[key]", "Both A and B", "dict.key"],
      correct_answer: "Both A and B"
    },
    {
      id: 7,
      question: "What is the output of list([1, 2, 3] * 2)?",
      options: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "[1, 2, 3, 2]", "Error"],
      correct_answer: "[1, 2, 3, 1, 2, 3]"
    },
    {
      id: 8,
      question: "Which method adds multiple elements to a list?",
      options: ["append()", "insert()", "extend()", "add()"],
      correct_answer: "extend()"
    },
    {
      id: 9,
      question: "What is a tuple?",
      options: ["A mutable ordered collection", "An immutable ordered collection", "An unordered collection", "A key-value pair collection"],
      correct_answer: "An immutable ordered collection"
    },
    {
      id: 10,
      question: "How do you create an empty dictionary?",
      options: ["{}", "dict()", "Both A and B", "[]"],
      correct_answer: "Both A and B"
    }
  ],
  
  object_oriented_python: [
    {
      id: 1,
      question: "What keyword is used to define a class?",
      options: ["def", "class", "obj", "func"],
      correct_answer: "class"
    },
    {
      id: 2,
      question: "What is the purpose of the __init__ method?",
      options: ["To destroy an object", "To initialize an object", "To inherit from another class", "To define class variables"],
      correct_answer: "To initialize an object"
    },
    {
      id: 3,
      question: "What does 'self' refer to in a method?",
      options: ["The class", "The current instance of the class", "The parent class", "The module"],
      correct_answer: "The current instance of the class"
    },
    {
      id: 4,
      question: "Which keyword is used for inheritance?",
      options: ["inherits", "extends", "class ChildClass(ParentClass)", "inherit"],
      correct_answer: "class ChildClass(ParentClass)"
    },
    {
      id: 5,
      question: "What is encapsulation?",
      options: ["Creating objects", "Hiding internal details", "Inheriting properties", "Overriding methods"],
      correct_answer: "Hiding internal details"
    },
    {
      id: 6,
      question: "How do you make an attribute private in Python?",
      options: ["private attribute", "_attribute", "__attribute", "attribute_private"],
      correct_answer: "__attribute"
    },
    {
      id: 7,
      question: "What is polymorphism?",
      options: ["Having multiple forms", "Creating multiple objects", "Using multiple inheritance", "Defining multiple classes"],
      correct_answer: "Having multiple forms"
    },
    {
      id: 8,
      question: "Which method is called when an object is created?",
      options: ["__new__", "__init__", "__create__", "__start__"],
      correct_answer: "__init__"
    },
    {
      id: 9,
      question: "What is method overriding?",
      options: ["Creating new methods", "Redefining parent class methods in child class", "Calling multiple methods", "Deleting methods"],
      correct_answer: "Redefining parent class methods in child class"
    },
    {
      id: 10,
      question: "What is a class variable?",
      options: ["A variable inside a method", "A variable shared by all instances", "A variable in __init__", "A local variable"],
      correct_answer: "A variable shared by all instances"
    }
  ],
  
  web_development_python: [
    {
      id: 1,
      question: "Which framework is commonly used for web development in Python?",
      options: ["React", "Django", "Angular", "Vue"],
      correct_answer: "Django"
    },
    {
      id: 2,
      question: "What does HTTP stand for?",
      options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transport Protocol", "High Text Transfer Protocol"],
      correct_answer: "HyperText Transfer Protocol"
    },
    {
      id: 3,
      question: "Which HTTP method is used to retrieve data?",
      options: ["POST", "PUT", "DELETE", "GET"],
      correct_answer: "GET"
    },
    {
      id: 4,
      question: "What is Flask?",
      options: ["A database", "A micro web framework", "A testing tool", "A deployment tool"],
      correct_answer: "A micro web framework"
    },
    {
      id: 5,
      question: "In Django, what is a model?",
      options: ["A template file", "A database table representation", "A URL pattern", "A view function"],
      correct_answer: "A database table representation"
    },
    {
      id: 6,
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
      correct_answer: "Application Programming Interface"
    },
    {
      id: 7,
      question: "Which status code indicates a successful HTTP request?",
      options: ["404", "500", "200", "301"],
      correct_answer: "200"
    },
    {
      id: 8,
      question: "What is the purpose of Django's urls.py file?",
      options: ["To store database models", "To define URL routing", "To handle forms", "To manage templates"],
      correct_answer: "To define URL routing"
    },
    {
      id: 9,
      question: "Which method is used to render templates in Django?",
      options: ["template()", "render()", "display()", "show()"],
      correct_answer: "render()"
    },
    {
      id: 10,
      question: "What is CSRF protection?",
      options: ["Database encryption", "Cross-Site Request Forgery protection", "Code syntax checking", "Cache management"],
      correct_answer: "Cross-Site Request Forgery protection"
    }
  ],
  
  advanced_python_concepts: [
    {
      id: 1,
      question: "What is a decorator in Python?",
      options: ["A design pattern", "A function that modifies another function", "A type of variable", "An error handler"],
      correct_answer: "A function that modifies another function"
    },
    {
      id: 2,
      question: "What does the 'yield' keyword do?",
      options: ["Stops execution", "Creates a generator", "Raises an exception", "Returns multiple values"],
      correct_answer: "Creates a generator"
    },
    {
      id: 3,
      question: "What is a lambda function?",
      options: ["A named function", "An anonymous function", "A class method", "A built-in function"],
      correct_answer: "An anonymous function"
    },
    {
      id: 4,
      question: "What is the Global Interpreter Lock (GIL)?",
      options: ["A security feature", "A mechanism that prevents true parallelism", "A memory manager", "A debugging tool"],
      correct_answer: "A mechanism that prevents true parallelism"
    },
    {
      id: 5,
      question: "What does 'async' keyword indicate?",
      options: ["Synchronous function", "Asynchronous function", "Generator function", "Static method"],
      correct_answer: "Asynchronous function"
    },
    {
      id: 6,
      question: "What is a context manager?",
      options: ["A memory manager", "An object that defines runtime context", "A database connection", "A file handler"],
      correct_answer: "An object that defines runtime context"
    },
    {
      id: 7,
      question: "Which decorator is used to create a static method?",
      options: ["@static", "@staticmethod", "@classmethod", "@method"],
      correct_answer: "@staticmethod"
    },
    {
      id: 8,
      question: "What is metaclass in Python?",
      options: ["A parent class", "A class of a class", "An instance of a class", "A method in a class"],
      correct_answer: "A class of a class"
    },
    {
      id: 9,
      question: "What does 'await' keyword do?",
      options: ["Waits for a condition", "Pauses execution until coroutine completes", "Stops the program", "Creates a delay"],
      correct_answer: "Pauses execution until coroutine completes"
    },
    {
      id: 10,
      question: "What is list comprehension?",
      options: ["A way to understand lists", "A concise way to create lists", "A list method", "A debugging technique"],
      correct_answer: "A concise way to create lists"
    }
  ]
};

export const getTopicDisplayName = (topic: QuizTopic): string => {
  const displayNames: Record<QuizTopic, string> = {
    python_basics: 'Python Basics',
    data_structures: 'Data Structures',
    object_oriented_python: 'Object-Oriented Python',
    web_development_python: 'Web Development',
    advanced_python_concepts: 'Advanced Concepts'
  };
  return displayNames[topic];
};
