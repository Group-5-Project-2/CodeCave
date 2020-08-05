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
                    <p className="h6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At distinctio obcaecati doloremque temporibus fugiat enim repudiandae, optio repellat est vitae eius nobis aspernatur sequi laudantium consequuntur? Fugiat totam sunt laboriosam.</p>
                </div>
            </div>
        </div>
    )
}
