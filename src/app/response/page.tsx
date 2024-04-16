'use client';
import React, { useState, useEffect } from 'react';

interface Feedback {
  _id: string;
  email: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  additionalFeedback?: string;
  __v: number;
}

interface Props {
  feedbackData: Feedback[];
}

const page: React.FC<Props> = () => {
    const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3400/api/v1/feedback/get');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setFeedbackData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
  return (

    <div className="bg-white -mt-2 min-h-scrren text-black shadow-md rounded my-6 overflow-x-auto">
        <br/>
      <table className="min-w-max w-full table- p-2">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Question 1</th>
            <th className="py-3 px-6 text-left">Question 2</th>
            <th className="py-3 px-6 text-left">Question 3</th>
            <th className="py-3 px-6 text-left">Question 4</th>
            <th className="py-3 px-6 text-left">Additional Feedback</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {feedbackData?.map((feedback) => (
            <tr className="border-b border-gray-200 hover:bg-gray-100" key={feedback._id}>
              <td className="py-3 px-6 text-left whitespace-nowrap">{feedback.email}</td>
              <td className="py-3 px-6 text-left">{feedback.question1}</td>
              <td className="py-3 px-6 text-left">{feedback.question2}</td>
              <td className="py-3 px-6 text-left">{feedback.question3}</td>
              <td className="py-3 px-6 text-left">{feedback.question4}</td>
              <td className="py-3 px-6 text-left">{feedback.additionalFeedback || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
