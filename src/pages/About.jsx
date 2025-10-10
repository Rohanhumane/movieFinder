import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about/about.jpeg";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-3 text-lg text-blue-100">
          Learn more about who we are and what drives us forward.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={aboutImg}
            alt="About"
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We started with a simple mission — to make information and
              technology accessible to everyone. Over the years, we’ve grown
              into a passionate team committed to creating meaningful digital
              experiences that inspire and empower.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              MovieFinder data forms the backbone of our analytics infrastructure. It
              is a rich, stable, and consistent source of title and talent
              metadata that is invaluable to our data transformation work within
              the rapidly evolving film industry.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                We love exploring new technologies and turning ideas into
                impactful solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 text-sm">
                Great things happen when creative minds come together to solve
                problems.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600 text-sm">
                We value honesty, transparency, and long-term relationships with
                our users and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-2xl font-semibold mb-4">Want to work with us?</h2>
        <p className="mb-6 text-blue-100">
          We’d love to hear from you. Let’s create something amazing together.
        </p>
        <Link
          to="/contact"
          className="bg-yellow-400 text-gray-800 px-5 py-2 rounded font-semibold hover:bg-yellow-300 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};
