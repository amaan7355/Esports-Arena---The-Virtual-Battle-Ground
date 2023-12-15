import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='body-home'>
      <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div data-draggable="true" className="" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section
            draggable="false"
            className="overflow-hidden pt-0"
            data-v-271253ee=""
          >
            <section className="container mt-5 mb-10 background-radial-gradient">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n              .background-radial-gradient {\n                background-color: hsl(218, 41%, 15%);\n                background-image: radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%);\n              }\n            "
                }}
              />
              <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
                <div className="row gx-lg-5 align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <h1
                      className="my-5 display-3 fw-bold ls-tight"
                      style={{ color: "hsl(218, 81%, 95%)" }}
                    >
                      {" "}
                      <span>"Enter the Arena: </span> <br />{" "}
                      <span style={{ color: "hsl(218, 81%, 75%)" }}>
                        Your Path to Glory Begins Here!"
                      </span>{" "}
                    </h1>{" "}
                    <Link to='/listtournament'>
                      <button
                        className="m-auto btn btn-light btn-lg py-3 px-5 mb-2 mb-md-0 me-3 mb-4"
                        data-ripple-color="primary"
                        role="button"
                        aria-controls=""
                      >
                        Get started
                      </button>{" "}
                    </Link>
                    <Link to='/signup'>
                      <button
                        className="m-auto btn btn-outline-light btn-lg py-3 px-5"
                        // style={{ backgroundColor: "hsl(218, 100%, 50%)", border: "none" }}
                        role="button"
                        aria-controls="#picker-editor"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="ratio ratio-16x9">
                      {" "}
                      <iframe
                        width={930}
                        height={523}
                        src="https://www.youtube.com/embed/box4SFtGvA0?mute=1&autoplay=1"
                        title="Esports: Inside the relentless training of professional gaming stars"
                        className='rounded-4 shadow-4-strong'
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                      />
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/**/}
        </div>



        <div data-draggable="true" className="" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 text-center text-lg-start">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n              .cascading-right {\n                margin-right: -50px;\n              }\n\n              @media (max-width: 991.98px) {\n                .cascading-right {\n                  margin-right: 0;\n                }\n              }\n            "
                }}
              />{" "}
              {/* Jumbotron */}
              <div className="container py-4">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <div
                      className="card cascading-right"
                      style={{
                        background: "hsla(0, 0%, 100%, 0.88)",
                        backdropFilter: "blur(30px)"
                      }}
                    >
                      <div className="card-body py-5 px-md-5 shadow-5">
                        <h2 className="fw-bold mb-4"><span className='text-primary'> "Gaming Dreams Come True:</span> Win Prizes, Earn Respect"</h2>
                        <h4 className=" mb-4">
                          Enter the Arena: <span className='text-primary'>Your Path to Glory Begins Here!</span>
                        </h4>
                        <div className="row mb-3">
                          <div className="col-lg-4">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-dark me-2" />
                              <span>Best team</span>{" "}
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-dark me-2" />
                              <span>Best quality</span>{" "}
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <p>
                              {" "}
                              <i className="fas fa-check-circle text-dark me-2" />
                              <span>Best experience</span>{" "}
                            </p>
                          </div>
                        </div>
                        <p className="mb-0 lead">
                          "Step into the electrifying world of esports where gaming prowess meets unbridled passion! Our esports game tournaments platform is the ultimate destination for competitive gaming enthusiasts, bringing together players, teams, and spectators from all corners of the globe. Whether you're a seasoned pro looking to test your skills against the very best or a newcomer seeking to make your mark in the esports arena, we have something special for you. <br />
                          Are you ready to embark on an esports adventure like no other? Your path to glory starts here. Register today, assemble your dream team, and immerse yourself in the exhilarating world of competitive gaming. The next esports legend could be you!"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    {" "}
                    <img
                      src="https://thomaslyte.com/wp-content/uploads/2022/04/fifae-world-cup-trophy-lifted-by-winner-962x1300.jpg"
                      className="w-100 rounded-4 shadow-4"
                      alt=""
                      aria-controls="#picker-editor"
                    />{" "}
                  </div>
                </div>
              </div>{" "}
              {/* Jumbotron */}
            </section>
          </section>
          {/**/}
        </div>
      </div>
      <div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 background-radial-gradient">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n              .background-radial-gradient {\n                background-color: hsl(127, 52%, 37%);\n                background-image: radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%);\n              }\n            "
                }}
              />
              <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
                <div className="row gx-lg-5 align-items-center my-5 my-lg-0">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <h1
                      className="mb-5 display-3 fw-bold ls-tight"
                      style={{ color: "hsl(218, 81%, 95%)" }}
                    >
                      {" "}
                      <span>Are you ready</span> <br />{" "}
                      <span style={{ color: "hsl(218, 81%, 75%)" }}>
                        for an adventure?
                      </span>{" "}
                    </h1>
                    <p className="text-white lead mb-xl-0">
                      Dive into the heart of competitive gaming with our esports tournaments! Join thousands of passionate gamers from around the world in the ultimate battle for glory. Whether you're a seasoned pro or a casual player, there's a tournament waiting for you.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    {" "}
                    <img
                      src="https://www.dailygame.net/wp-content/uploads/2022/12/esports.jpg"
                      className="w-100 rounded-4 shadow-5"
                      alt=""
                      aria-controls="#picker-editor"
                    />{" "}
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/**/}
        </div>
      </div>




      <div data-draggable="true" className="" style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 text-center" style={{
            background: "hsla(0, 0%, 100%, 0.80)",
            backdropFilter: "blur(30px)"
          }}>
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 col-xl-8">
                <h1 className="mt-3 mb-5 fw-bold"><span className=''>Players on <span className='text-primary'>Top!</span></span>{" "}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4">
                  {" "}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Faker_2020_interview.jpg/220px-Faker_2020_interview.jpg"
                    className="rounded-circle shadow-1-strong"
                    width={150}
                    height={180}
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <h5 className="mb-3">Lee "Faker" Sang-hyeok</h5>
                {/* <h6 className="text-primary mb-3">Web Developer</h6> */}
                <p className="px-xl-3">
                  {" "}
                  <i className="fas fa-quote-left pe-2" />
                  <span>
                    Faker is widely considered one of the greatest League of Legends players of all time. He has been a member of T1  and has achieved numerous championships and accolades in the League of Legends professional scene.
                  </span>{" "}
                </p>
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-5 mb-md-0">
                <div className="d-flex justify-content-center mb-4">
                  {" "}
                  <img
                    src="https://gumlet.assettype.com/afkgaming%2Fimport%2Fmedia%2Fimages%2F88935-N0tail%20on%20Quitting%20Dota.jpg"
                    className="rounded-circle shadow-1-strong"
                    width={150}
                    height={180}
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <h5 className="mb-3">Johan "N0tail" Sundstein:</h5>
                {/* <h6 className="text-primary mb-3">Graphic Designer</h6> */}
                <p className="px-xl-3">
                  {" "}
                  <i className="fas fa-quote-left pe-2" />
                  <span>
                    N0tail is a Dota 2 player known for his exceptional skills and leadership. He has been a key player for teams like OG and has won multiple The International championships, making him one of the highest-earning esports players.
                  </span>{" "}
                </p>
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star-half-alt fa-sm text-warning" />{" "}
                  </li>
                </ul>
              </div>
              <div className="col-md-4 mb-0">
                <div className="d-flex justify-content-center mb-4">
                  {" "}
                  <img
                    src="https://i.guim.co.uk/img/media/29e2bdbd81f33a5fe1b21642ba990ab86cc54388/0_77_2297_1379/master/2297.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d4f217e96fe1ce0b71a53d66c8e825ed"
                    className="rounded-circle shadow-1-strong"
                    width={150}
                    height={180}
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <h5 className="mb-3">Kyle "Bugha" Giersdorf </h5>
                {/* <h6 className="text-primary mb-3">Marketing Specialist</h6> */}
                <p className="px-xl-3">
                  {" "}
                  <i className="fas fa-quote-left pe-2" />
                  <span>
                    Bugha is an American Fortnite player who made headlines by winning the Fortnite World Cup Solo Championship in 2019. His victory catapulted him to esports stardom, and he is often cited as one of the top players in the competitive Fortnite scene.
                  </span>{" "}
                </p>
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-star fa-sm text-warning" />{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="far fa-star fa-sm text-warning" />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        {/**/}
      </div>

      <div data-draggable="true" className="text-white" style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section draggable="false" className="container pt-5" data-v-271253ee="" >
          <section className="mb-10 text-center background-radial-gradient">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n              .background-radial-gradient {\n                background-color: hsl(218, 41%, 15%);\n                background-image: radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%);\n              }\n            "
              }}
            />
            <div className="d-flex justify-content-center">
              <div className="text-center p-4" style={{ maxWidth: 700 }}>
                <h2 className="fw-bold mb-4 text-center">
                  {" "}
                  <span className="me-2">Why is it so</span>
                  <span className='text-primary'>great?{" "} </span>

                </h2>
                {/* <p className=" mb-5">
                Minus fuga aliquid vero facere ducimus quos, quisquam nemo?
                Molestias ullam provident vitae error aliquam dolorum temporibus?
                Doloremque, quasi
              </p> */}
              </div>
            </div>
            <div className="row gx-lg-5 pb-4">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  {" "}
                  <i
                    className="fas fa-headset fa-lg text-white fa-fw"
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <h5 className="fw-bold mb-3">Support 24/7</h5>
                <p className="p-2 mb-0">
                  We're committed to providing timely and reliable assistance whenever you need it, ensuring your peace of mind and uninterrupted service.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  {" "}
                  <i
                    className="fas fa-shield-alt fa-lg text-white fa-fw"
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <h5 className="fw-bold mb-3">Safe and solid</h5>
                <p className="p-2 mb-0">
                  We're ensuring reliability and security at every level. Trust in our commitment to delivering a robust and secure solution.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  {" "}
                  <i
                    className="fas fa-shipping-fast fa-lg text-white fa-fw"
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <h5 className="fw-bold mb-3">Extremely fast</h5>
                <p className="p-2 mb-0">
                  Experience the thrill of extremely fast performance, as our cutting-edge technology delivers lightning-quick results, setting new speed benchmarks.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  {" "}
                  <i
                    className="fas fa-chart-pie fa-lg text-white fa-fw"
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <h5 className="fw-bold mb-3">Live analytics</h5>
                <p className="p-2 mb-0">
                  Harness the power of live analytics to gain real-time insights and make informed decisions as events unfold.
                </p>
              </div>

            </div>

          </section>
        </section>
        {/**/}
      </div>


      <div data-draggable="true" className="mt-5" style={{ position: "relative" }}>
        <section draggable="false" className="" data-v-271253ee="" style={{
          background: "hsla(0, 0%, 100%, 0.80)",
          backdropFilter: "blur(30px)"
        }}>
          <section className="mb-10 text-center">

            <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
              <MDBContainer className='pt-4'>
                <section className='mb-4'>
                  {/*<MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
             <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>*/}

                  {/* <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          > 
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn> */}

                  <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='mailto: alamamaan334@gmail.com'
                    role='button'
                    target='_blank'
                  >
                    <MDBIcon fab className='fa-google' />
                  </MDBBtn>

                  {/*<MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href=''
            role='button'
          >
             <MDBIcon fab className='fa-instagram' />
          </MDBBtn>*/}

                  <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='https://www.linkedin.com/in/amaan-alam-86b821241'
                    role='button'
                    target='blank'
                  >
                    <MDBIcon fab className='fa-linkedin' />
                  </MDBBtn>

                  <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='https://github.com/amaan7355'
                    role='button'
                    target='blank'
                  >
                    <MDBIcon fab className='fa-github' />
                  </MDBBtn>
                </section>
              </MDBContainer>

              <div className='text-center text-dark p-3'>
                © 2023 Esports Arena
                {/* <a className='text-dark' href='https://mdbootstrap.com/'>
          Esports Arena
        </a> */}
              </div>
            </MDBFooter>



            {/* <div className="p-5">
               <h2 className="mb-5 display-5 fw-bold ls-tight">
                {" "}
                <span>Let's stay in touch</span> <br />{" "}
                {/* <span className="text-primary">Join our social media</span>{" "} 
              </h2>
              <a
                className="btn btn-primary btn-lg me-md-2 mb-3"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i
                  className="fab fa-facebook-f me-2"
                  aria-controls="#picker-editor"
                />
                <span>Facebook</span>
              </a>
              <a
                className="btn btn-primary btn-lg me-md-2 mb-3"
                style={{ backgroundColor: "#ed302f" }}
                href="#!"
                role="button"
              >
                
                <i
                  className="fab fa-youtube me-2"
                  aria-controls="#picker-editor"
                />
                <span>YouTube</span>
              </a>
              
              <a
                className="btn btn-primary btn-lg me-md-2 mb-3"
                style={{ backgroundColor: "#ac2bac" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram me-2" aria-controls="#picker-editor" />
                <span>Instagram</span>
              </a>
            </div>
            <div className='fw-bold pb-3'>
              <i class="fa-solid fa-copyright fa-lg me-1"></i>
              <font className='fw-bold fs-5'>copyright Esports Arena</font>
            </div>*/}
          </section>
        </section>
      </div>



    </div >
  )
}

export default Home;