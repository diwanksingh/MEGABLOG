import React from 'react';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl flex items-center">
            {/* Image section */}
            <div className="w-1/2 sm:w-2/5 relative">
                <img className="w-full h-full object-cover rounded-lg" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
            </div>

            {/* Text card section */}
            <div className="w-1/2 sm:w-3/5 px-4 py-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl opacity-70 h-full">
                    <h2 className="text-4xl font-bold sm:text-5xl text-gray-900 mb-4">
                        About
                    </h2>
                    <p className="text-xl leading-relaxed">
                        <span className="block text-2xl font-semibold underline mb-4">I am Diwank,</span>
                        I have meticulously crafted a blog-writing web app that completely transforms the way users create and manage their blogs. This powerful platform allows you to effortlessly create, edit, update, delete, and securely store your blog posts with just a few clicks. With its sleek, user-friendly interface, the app empowers users to maintain full control over their content, ensuring that every blog is perfectly tailored, easily accessible, and organized with unparalleled ease. It’s not just a blog app, it’s a game-changer in the world of blogging.
                    </p>
                </div>
            </div>
        </div>
    );
}
