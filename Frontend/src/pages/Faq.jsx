import React, { useState } from 'react';
import styled from 'styled-components';
import faqImage from './faqimg.png';


const FaqSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 0;
  }
`;

const FaqImageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 200px); /* adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FaqImage = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  display:flex;
`;

const FaqContentContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;

const FaqTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 48px;
    margin-bottom: 40px;
  }
`;

const FaqList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FaqItem = styled.li`
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const FaqQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const FaqArrow = styled.span`
  font-size: 16px;
  margin-left: 10px;
  transition: transform 0.2s ease;

  ${({ selected }) => selected && `
    transform: rotate(180deg);
  `}
`;

const FaqAnswer = styled.div`
  padding: 20px;
  font-size: 18px;
`;
function FaqSection() {
    const [selectedFaq, setSelectedFaq] = useState(null);
  
    const faqList = [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for all products purchased on our site. If you are not satisfied with your purchase, you can exchange it within 30 days of the purchase date.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Cash on Delivery only.',
      },
      {
        question: 'How long does shipping take?',
        answer: 'We charge $6.99 shipping cost on all orders, which typically takes 3-5 business days. If you need your order sooner, we also offer expedited shipping options for an additional fee.',
      },
      {
        question: 'Do you offer international shipping?',
        answer:
          'Yes, we offer international shipping to most countries. Please note that additional customs fees and taxes may apply depending on your location.',
      },{
        question: 'What if I have a problem with my order?',
        answer:
          'If you have any issues with your order, please contact our customer service team at support@ecommerce.com and we will do our best to resolve the issue as quickly as possible.',
      },
      // add more FAQs here
    ];
  
    const handleFaqClick = (index) => {
      if (selectedFaq === index) {
        setSelectedFaq(null);
      } else {
        setSelectedFaq(index);
      }
    };
  
    return (
      <FaqSectionContainer >
        <FaqImageContainer>
          <FaqImage src={faqImage} alt="FAQ Image" />
        </FaqImageContainer>
        <FaqContentContainer>
        <div className="jumbotron my-0 jumbotron-fluid bg-white text-dark">
        <h1 className="display-4">FAQ Section</h1>

    </div>
          <FaqList>
            {faqList.map((faq, index) => (
              <FaqItem key={index}>
                <FaqQuestion onClick={() => handleFaqClick(index)}>
                  {faq.question}
                  <FaqArrow selected={selectedFaq === index}>▼</FaqArrow>
                </FaqQuestion>
                {selectedFaq === index && <FaqAnswer>{faq.answer}</FaqAnswer>}
              </FaqItem>
            ))}
          </FaqList>
        </FaqContentContainer>
      </FaqSectionContainer>
    );
  }
  
  export default FaqSection;