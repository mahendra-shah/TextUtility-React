import React from 'react'

export default function About(props) {
    const style = {
        backgroundColor: props.mode === 'dark' ? '#143D64' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }
    return (
        <>
        <h1 className="my-3">About TextUtils</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                        <button style={style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How It gonna help?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div style={style} className="accordion-body">
                        The Text Utils app is a versatile tool designed to assist users with various text-related tasks. Whether you're a writer, student, or professional, this app aims to streamline your text processing needs. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header">
                        <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Is it free to use?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={style} className="accordion-body">
                        The Text Utils app is a powerful and free tool designed to assist users with a wide array of text-related tasks. Whether you're a writer, student, or professional, this app aims to simplify your text processing needs without any cost.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" style={style}>
                        <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Is it safe to use?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={style} className="accordion-body">
                        Yes, it is completely safe to use. We do not store or share your text or data with anyone. We do not use cookies or any other tracking technology to track your activity on our website.
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
