import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <br/><br/><br/>
  <div className=" mx-auto p-5 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-12 border">
      <div className="bg-gray-900 md:col-span-4 p-10 text-white">
        <p className="mt-4 text-sm leading-7 font-regular uppercase">
          Feedback Form
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
          Get In <span className="text-indigo-600">Touch</span>
        </h3>
        <p className="mt-4 leading-7 text-gray-200">
          Please fill the feedback form . It means a lot to use and we can imporve with your suggestions
        </p>
      </div>
      <form className="md:col-span-8 p-10">
  <div className="flex flex-wrap -mx-3">
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
        Email Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 ">
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-1">
        Feedback Question 1
      </label>
      <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 ">
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-1">
        Feedback Question 2
      </label>
      <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3">
    <div className="w-full px-3 mb-6">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-1">
        Feedback Question 3
      </label>
      <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 ">
    <div className="w-full px-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="feedback-question-1">
        Feedback Question 4
      </label>
      <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="feedback-question-1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-feedback-text">
        Additional Feedback
      </label>
      <textarea rows={3} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-feedback-text" placeholder="Provide additional feedback here"></textarea>
    </div>
  </div>
  <div className="flex justify-between w-full px-3">
   
    <button className="shadow mt-4 bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
      Send Feedback
    </button>
  </div>
</form>

    </div>
  </div>
</div>

  )
}

export default page