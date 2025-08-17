let quizzes = [
  [
    // 🟦 Whole Numbers
    {
      id: 1,
      grade: 5,
      topic: "Whole Numbers",
      question: "Write the number 7,305 in words.",
      options: [
        "Seven thousand fifty-three",
        "Seven thousand three hundred five",
        "Seven hundred three thousand five",
        "Seventy-three thousand five",
      ],
      answer: "Seven thousand three hundred five",
    },
    {
      id: 2,
      grade: 5,
      topic: "Whole Numbers",
      question: "The value of digit 6 in 46,528 is:",
      options: ["6", "60", "600", "6,000"],
      answer: "600",
    },
    {
      id: 3,
      grade: 5,
      topic: "Whole Numbers",
      question: "Round 4,768 to the nearest hundred.",
      options: ["4,700", "4,800", "4,760", "4,770"],
      answer: "4,800",
    },
    {
      id: 4,
      grade: 5,
      topic: "Whole Numbers",
      question: "The predecessor of 10,000 is:",
      options: ["9,000", "9,999", "10,001", "99,999"],
      answer: "9,999",
    },
    {
      id: 5,
      grade: 5,
      topic: "Whole Numbers",
      question: "Round 7,684 to the nearest thousand.",
      options: ["7,000", "7,700", "8,000", "7,600"],
      answer: "8,000",
    },
    // 🟦 Fractions & Decimals
    {
      id: 6,
      grade: 5,
      topic: "Fractions & Decimals",
      question: "Simplify the fraction 18/24.",
      options: ["2/3", "3/4", "4/6", "5/8"],
      answer: "2/3",
    },
    {
      id: 7,
      grade: 5,
      topic: "Fractions & Decimals",
      question: "Convert 3/5 into a decimal.",
      options: ["0.25", "0.3", "0.6", "0.75"],
      answer: "0.6",
    },
    {
      id: 8,
      grade: 5,
      topic: "Fractions & Decimals",
      question: "Which fraction is greater? 5/8 or 3/4.",
      options: ["5/8", "3/4"],
      answer: "3/4",
    },
    {
      id: 9,
      grade: 5,
      topic: "Fractions & Decimals",
      question: "Add: 2/7 + 3/7",
      options: ["4/7", "5/7", "6/7", "7/7"],
      answer: "5/7",
    },
    {
      id: 10,
      grade: 5,
      topic: "Fractions & Decimals",
      question: "Change 1.25 to a fraction.",
      options: ["5/4", "4/5", "125/10", "12/5"],
      answer: "5/4",
    },

    // 🟦 Factors & Multiples
    {
      id: 11,
      grade: 5,
      topic: "Factors & Multiples",
      question: "Find the LCM of 12 and 18.",
      options: ["24", "36", "48", "60"],
      answer: "36",
    },
    {
      id: 12,
      grade: 5,
      topic: "Factors & Multiples",
      question: "Find the HCF of 24 and 36.",
      options: ["6", "8", "12", "18"],
      answer: "12",
    },
    {
      id: 13,
      grade: 5,
      topic: "Factors & Multiples",
      question: "Is 97 a prime or composite number?",
      options: ["Prime", "Composite"],
      answer: "Prime",
    },
    {
      id: 14,
      grade: 5,
      topic: "Factors & Multiples",
      question: "Which of the following is a multiple of 9?",
      options: ["25", "36", "42", "52"],
      answer: "36",
    },
    {
      id: 15,
      grade: 5,
      topic: "Factors & Multiples",
      question: "Find the first 3 multiples of 7.",
      options: ["7, 14, 21", "7, 15, 22", "6, 12, 18", "5, 10, 15"],
      answer: "7, 14, 21",
    },

    // 🟦 Geometry
    {
      id: 16,
      grade: 5,
      topic: "Geometry",
      question: "A triangle has angles 40° and 65°. The third angle is:",
      options: ["55°", "65°", "75°", "85°"],
      answer: "55°",
    },
    {
      id: 17,
      grade: 5,
      topic: "Geometry",
      question:
        "A rectangle has length 12 cm and width 5 cm. Its perimeter is:",
      options: ["17 cm", "24 cm", "34 cm", "60 cm"],
      answer: "34 cm",
    },
    {
      id: 18,
      grade: 5,
      topic: "Geometry",
      question:
        "A quadrilateral with only one pair of parallel sides is called:",
      options: ["Rectangle", "Square", "Parallelogram", "Trapezium"],
      answer: "Trapezium",
    },
    {
      id: 19,
      grade: 5,
      topic: "Geometry",
      question: "What type of triangle has all equal sides?",
      options: ["Isosceles", "Equilateral", "Scalene", "Right-angled"],
      answer: "Equilateral",
    },
    {
      id: 20,
      grade: 5,
      topic: "Geometry",
      question: "The sum of the angles of a quadrilateral is:",
      options: ["180°", "270°", "360°", "540°"],
      answer: "360°",
    },

    {
      id: 21,
      grade: 5,
      topic: "Geometry",
      question: "A square has side 8 cm. Find its area.",
      options: ["16 cm²", "32 cm²", "64 cm²", "128 cm²"],
      answer: "64 cm²",
    },
    {
      id: 22,
      grade: 5,
      topic: "Geometry",
      question:
        "A box has length 5 cm, width 4 cm, and height 3 cm. Find its volume.",
      options: ["12 cm³", "20 cm³", "40 cm³", "60 cm³"],
      answer: "60 cm³",
    },
    {
      id: 23,
      grade: 5,
      topic: "Geometry",
      question: "Convert 3.5 meters to centimeters.",
      options: ["35 cm", "350 cm", "3,500 cm", "0.35 cm"],
      answer: "350 cm",
    },
    {
      id: 24,
      grade: 5,
      topic: "Measurement",
      question:
        "A rectangle has area 45 cm² and length 9 cm. What is its width?",
      options: ["4 cm", "5 cm", "6 cm", "7 cm"],
      answer: "5 cm",
    },
    {
      id: 25,
      grade: 5,
      topic: "Measurement",
      question: "The perimeter of a square is 40 cm. Find its side length.",
      options: ["8 cm", "10 cm", "12 cm", "16 cm"],
      answer: "10 cm",
    },

    // 🟦 Data & Statistics
    {
      id: 26,
      grade: 5,
      topic: "Data & Statistics",
      question:
        "The marks of 5 students are: 20, 15, 25, 10, 30. What is the highest mark?",
      options: ["15", "25", "30", "20"],
      answer: "30",
    },
    {
      id: 27,
      grade: 5,
      topic: "Data & Statistics",
      question: "Find the average of the marks above (20, 15, 25, 10, 30).",
      options: ["18", "20", "21", "22"],
      answer: "20",
    },
    {
      id: 28,
      grade: 5,
      topic: "Data & Statistics",
      question:
        "In a class of 40 students, 24 are boys. What fraction are girls?",
      options: ["24/40", "16/40", "3/5", "2/3"],
      answer: "16/40",
    },
    {
      id: 29,
      grade: 5,
      topic: "Data & Statistics",
      question:
        "The bar chart shows apples sold: Jan=20, Feb=25, Mar=15. Which month had the most sales?",
      options: ["January", "February", "March", "Same in all months"],
      answer: "February",
    },
    {
      id: 30,
      grade: 5,
      topic: "Data & Statistics",
      question: "The mode of the numbers 2, 3, 5, 3, 6, 3, 4 is:",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
  ],
];
let [grade5Quizzes] = quizzes;

document.querySelector(".links a").onclick = function () {
  history.back();
};

window.onload = function() {
  localStorage.removeItem('theAnswer')
}

let theQuestionPart = document.querySelector(".question strong");
let theChoicesPart = document.querySelector(".choices");

let part = 0;
theQuestionPart.textContent = grade5Quizzes[part].question;
theChoicesPart.querySelector("button:nth-child(1)").textContent =
  grade5Quizzes[part].options[0];
theChoicesPart.querySelector("button:nth-child(2)").textContent =
  grade5Quizzes[part].options[1];
theChoicesPart.querySelector("button:nth-child(3)").textContent =
  grade5Quizzes[part].options[2];
theChoicesPart.querySelector("button:nth-child(4)").textContent =
  grade5Quizzes[part].options[3];

document.querySelectorAll(".choice").forEach((option) => {
  option.onclick = function (event) {
    document.querySelectorAll(".choice").forEach((option) => {
      option.classList.remove("choosen");
    });
    option.classList.toggle("choosen");
    localStorage.setItem("theAnswer", event.target.textContent);
  };
});

document.querySelector(".next-btn").onclick = function () {
  if (localStorage.theAnswer) {
    if (localStorage.theAnswer === grade5Quizzes[part].answer) {
      document.querySelector(".choosen").classList.add("correct");
    } else {
      document.querySelector(".choosen").classList.add("incorrect");
      document.querySelectorAll('.choice').forEach(option => {
        if (option.textContent === grade5Quizzes[part].answer) {
          option.classList.add('correct')
        }
      })
    }
    document.querySelectorAll('.choice').forEach(option => {
      option.onclick = function(event) {
        event.preventDefault()
      }
    })
  } else {
    alert('Please Choose An Answer')
  }
};
