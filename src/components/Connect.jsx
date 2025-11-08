import { useState } from "react";
import { SiTelegram } from "react-icons/si";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { GrPinterest } from "react-icons/gr";

const Connect = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success/error message

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Simulate sending success
    setStatus("Your message has been sent!");
    setShowModal(true);
    setFormData({ name: "", email: "", message: "" });

    // Clear status after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="max-w-[1640px] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-5">
      <div className="flex flex-col md:flex-row justify-between my-8">
        {/* Left side text */}
        <div className="w-[50%] mt-[50px] my-7 text-black">
          <h2 className="text-5xl font-bold mb-4 my-5">FEEDBACK</h2>
          <p>For more information, send us an email</p>
          <p>
            {" "}
            <span className="underline decoration-blue-900">
              sherifdress@gmail.com
            </span>
          </p>
          <div className="flex flex-col md:flex-row gap-3 my-8">
            <GrPinterest className='w-9 h-7 rounded-full bg-black/10 hover:bg-black/20 border-gray-400 text-blue-800 hover:text-blue-900 hover:duration-300' />
            <SiTelegram className='w-9 h-7 rounded-full bg-black/10 hover:bg-black/20 border-gray-400 text-blue-800 hover:text-blue-900 hover:duration-300' />
            <BsFacebook className='w-9 h-7 rounded-full bg-black/10 hover:bg-black/20 border-gray-400 text-blue-800 hover:text-blue-900 hover:duration-300' />
            <BsTwitterX className='w-9 h-7 rounded-full bg-black/10 hover:bg-black/20 border-gray-400 text-blue-800 hover:text-blue-900 hover:duration-300' />
            <RiInstagramFill className='w-9 h-7 rounded-full bg-black/10 hover:bg-black/20 border-gray-400 text-blue-800 hover:text-blue-900 hover:duration-300' />
          </div>
            
        </div>

        {/* Right side form */}
        <div className="w-[50%]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-900/50 bg-gray-500/10 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-900/50 bg-gray-500/10 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-black font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full text-black border border-gray-900/50 bg-gray-500/10 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-900 text-white font-medium font-bold py-2 px-4 rounded-full hover:bg-gray-200 hover:border-4 hover:border-blue-900 hover:text-blue-900 hover:duration-300 w-fit"
            >
              Submite Feedback
            </button>

            {/* Status Message */}
            {status && (
              <p className="text-green-600 font-medium text-center mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mr-4">
          <div className="bg-blue-100/75 rounded-lg p-6 w-[90%] sm:w-[400px]">
            <h5 className="text-xl font-semibold mb-2">Feedback Submitted</h5>
            <p className="mb-4">
              Thank you for your message, we'll get back to you shortly.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-gray-200 hover:border-4 hover:border-blue-900 hover:text-blue-900 hover:duration-300"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-gray-200 hover:border-4 hover:border-blue-900 hover:text-blue-900 hover:duration-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Connect;
