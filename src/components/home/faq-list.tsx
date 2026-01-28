import { useState } from 'react';

const faqData = [
  {
    question: "Is AI Storyboard really free?",
    answer: "Yes, AI Storyboard is completely free to use. There are no hidden costs, no premium tiers, and no limitations on usage."
  },
  {
    question: "Do I need to create an account?",
    answer: "No, you don't need to create an account or log in. Simply visit app.ai-storyboard.com and start creating immediately."
  },
  {
    question: "Where is my data stored?",
    answer: "All your projects and data are stored locally in your browser using localStorage. Your data never leaves your device."
  },
  {
    question: "Do you collect my personal information?",
    answer: "No, we don't collect any personal information. Since you don't need to create an account, we don't have your email, name, or any other personal data."
  },
  {
    question: "How many frames can I create per project?",
    answer: "There's no limit on the number of frames you can create in a project. Create as many frames as your storyboard requires."
  }
];

export const FaqList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <h3 onClick={() => toggleItem(index)}>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};
