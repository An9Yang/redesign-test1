// @ts-nocheck
import { FaqList } from './faq-list';

export const Container1 = () => {
  return (
    <>
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about AI Storyboard</p>
        </div>
        <FaqList />
      </div>
    </>
  );
};
