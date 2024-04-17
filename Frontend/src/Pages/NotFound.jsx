import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <section className="page_404 bg-white py-10">
            <div className="container mx-auto">
                <div className="row">
                <div className="col-sm-12">
                    <div className="col-sm-10 col-sm-offset-1 text-center">
                    <div className="four_zero_four_bg bg-cover bg-center h-[500px]" style={{backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)'}}>
                        <h1 className="text-8xl">404</h1>
                    </div>
                    <div className="contant_box_404 mt-neg-32">
                        <h3 className="text-6xl">Look like you're lost</h3>
                        <p className="mt-4">the page you are looking for not available!</p>
                        <Link to="/" className="link_404 inline-block py-2 px-4 text-white bg-[#d52634ce] mt-8">Go to Home</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NotFound