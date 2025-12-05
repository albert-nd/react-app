import { useState, useEffect } from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Help = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setStatus("Your message has been sent!");
    setShowModal(true);

    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    let timer;
    if (status) {
      timer = setTimeout(() => setStatus(""), 3000);
    }
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div
      className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 py-10">

        {/* Left Content */}
        <div className="bg-black/50 text-white mt-7 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>

          <p className="text-gray-300">
            Leave your message below and we'll get back to you as soon as possible.
          </p>

          <p className="mt-2">
            For more information, contact us at{" "}
            <span className="underline decoration-orange-500">
              besteats@gmail.com
            </span>
          </p>

          <div className="my-4 flex">
            <h3 className="text-xl font-bold mr-3">Phone Support:</h3>
            <div>
              <p className="text-gray-300">+4328125355455</p>
              <p className="text-gray-300">+4328019131119</p>
              <p className="text-gray-300">+4327072179937</p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a><BsFacebook className="w-9 h-7 text-orange-400 hover:text-orange-700" /></a>
            <a><BsTwitterX className="w-9 h-7 text-orange-400 hover:text-orange-700" /></a>
            <a><RiInstagramFill className="w-9 h-7 text-orange-400 hover:text-orange-700" /></a>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-black/50 p-6 rounded-lg max-w-md mx-auto backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                minLength={2}
                value={formData.name}
                onChange={handleChange}
                className="w-full border bg-gray-300/10 text-white rounded-md px-3 py-2 focus:ring-orange-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border bg-gray-300/10 text-white rounded-md px-3 py-2 focus:ring-orange-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                minLength={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border bg-gray-300/10 text-white rounded-md px-3 py-2 focus:ring-orange-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-black font-medium py-2 px-4 rounded-full hover:bg-black/30 hover:border-4 hover:border-orange-500 hover:text-orange-500 duration-300"
            >
              Send Message
            </button>

            {status && <p className="text-green-500 text-center">{status}</p>}
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white/30 p-6 rounded-lg w-[90%] sm:w-[400px] backdrop-blur-sm">
            <h5 className="text-xl font-semibold mb-2">Feedback Submitted</h5>
            <p className="mb-4">
              Thank you for reaching out, we'll get back to you shortly.
            </p>

            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-orange-500 text-black rounded-full hover:bg-black/50 hover:border-4 hover:border-orange-500 hover:text-orange-500 duration-300"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
