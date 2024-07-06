import React from 'react'

export default function AboutUs(props) {
    return (
        <div style={{ color: props.mode === "dark" ? "white" : "black"}}>
            <h2>About Us</h2>
            <p>Welcome to my Word Count Project!</p>
            <p>
                Hi, I'm Yash Shisode, and this project is a part of my learning journey in web development. I understand the importance of words and how they shape our communication. Whether you are a student, a professional writer, or someone who enjoys crafting words, this tool is designed to make your text analysis seamless and efficient.
            </p>
            
            <h3>My Mission</h3>
            <p>
                My mission is to provide a user-friendly and accurate tool for counting words, characters, and providing insightful text analysis. I believe in the power of clear and concise communication, and this tool is here to support that belief. By offering features that go beyond basic word counting, I aim to help you understand your text better and improve your writing skills.
            </p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Word and Character Count</strong>: Instantly see the number of words and characters in your text.</li>
                <li><strong>Text Transformation</strong>: Easily convert your text to uppercase or lowercase.</li>
                <li><strong>Vowel Counting</strong>: Analyze the number of vowels in your text to enhance your linguistic understanding.</li>
                <li><strong>User-Friendly Interface</strong>: A clean and intuitive design ensures that you can focus on your text without distractions.</li>
                <li><strong>Dark Mode Support</strong>: Switch between light and dark modes to suit your preference and reduce eye strain.</li>
            </ul>
            
            <h3>Why Choose This Tool?</h3>
            <p>
                I'm passionate about words and dedicated to providing a tool that meets your writing needs. My commitment to continuous improvement means that I'm always looking for ways to enhance the features and provide you with the best possible experience.
            </p>
            
            <h3>Get in Touch</h3>
            <p>
                I love hearing from users! If you have any feedback, suggestions, or questions, please do not hesitate to contact me. Your input is invaluable in helping me grow and improve.
            </p>
            
            <p>
                Thank you for using my Word Count Project. I'm excited to be a part of your writing journey and look forward to supporting you with all your text analysis needs.
            </p>
        </div>
    )
}
