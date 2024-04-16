'use client';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    additionalFeedback: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('https://webx-mini-project-1.onrender.com/api/v1/feedback/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Handle success or show a success message to the user
    })
    .catch(error => {
      console.error('Error submitting feedback:', error);
      // Handle error or show an error message to the user
    });
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <br/><br/><br/>
      <div className="mx-auto p-5 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-12 border">
          <div className="bg-gray-900 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Feedback Form
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Please fill the feedback form. It means a lot to us and we can improve with your suggestions.
            </p>
          </div>
          <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>

            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email Address
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="********@*****.**" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              {/* Add select dropdown for question 1 */}
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-1">
                  Rate College Infrastructure
                </label>
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-1" name="question1" value={formData.question1} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              {/* Add select dropdown for question 2 */}
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-2">
                  Rate Education Quality
                </label>
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-2" name="question2" value={formData.question2} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              {/* Add select dropdown for question 3 */}
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-3">
                  Rate College Placement
                </label>
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-3" name="question3" value={formData.question3} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              {/* Add select dropdown for question 4 */}
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-4">
                  Rate College Canteen
                </label>
                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-4" name="question4" value={formData.question4} onChange={handleChange}>
                  <option value="">Select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            {/* Additional feedback textarea */}
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-feedback-text">
                  Additional Feedback
                </label>
                <textarea rows={3} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-feedback-text" name="additionalFeedback" value={formData.additionalFeedback} onChange={handleChange} placeholder="Provide additional feedback here"></textarea>
              </div>
            </div>
            {/* Submit button */}
            <div className="flex justify-between w-full px-3">
              <button className="shadow mt-4 bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                Send Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
