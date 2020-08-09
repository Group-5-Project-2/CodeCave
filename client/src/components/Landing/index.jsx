import React from 'react';
import Cave from "./Cave.jpg";

export default function Landing() {
    return (
        <div
            style={{
                backgroundImage: `url(${Cave})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                color: '#f5f5f5'
            }}
        >
            <div className="container">
                <div
                    className="row"
                    style={{
                        margin: '0',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <h1 className="h1">Welcome to CodeCave</h1>
                    <p className="h6">an exclusive place Full Stack Bootcamp Coding students and graduates can go to share tips, ask questions, look at job opportunities, or connect through events, activities.</p>
                </div>
            </div>
        </div>
    )
}
