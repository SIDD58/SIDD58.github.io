import { useState } from 'react'
import Intro from './components/Intro'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
// import Certifications from './components/Certifications'
// import Post from './components/Post'
import Footer from './components/Footer'

function App() {
  const [category, setCategory] = useState('All');

    return (
      <>
      <div id="wrapper" className="fade-in">
        <Intro/>
        <Header/>
        <Nav activeCategory={category} setCategory={setCategory}/>
        <Main selectedCategory={category}/>
        <Footer></Footer>
      </div>
      </>
  );
}

export default App






/////////////////////////////////////////////////////////////////////////////////////////////////

//   return (
//     <>
// 			<div id="wrapper" className="fade-in">

// 					<div id="intro">
// 						<h1>SIDD <br />
// 						Portfolio</h1>
// 						<p>
// 							Hi, I'm Siddharth, a Master's graduate in Applied Computing (AI stream) from the University of Windsor and a former AI Developer at Agriculture and Agri-Food Canada.
// 							 I specialize in AI development, data science , Web development , Devops , big Data & cloud technologies.I’ve worked across various roles, including AI Developer, Web Developer, and Junior Security Research Analyst. My passion lies in solving real-world problems through data-driven insights and advanced technologies.
// 							 <br />

							 
// 						<p>Check out my blog and youtube for technical insights and tutorials:</p>
// 						<ul className="actions">
// 							<li><a href="https://www.youtube.com/@Azure-AI-102Academy" target="_blank" className="button icon solid solo brands fa-youtube">Visit My Youtube</a></li>
// 							<li><a href="https://medium.com/@siddharthsamber94" target="_blank" className="button icon solid solo fa-blog">Visit My Blog</a></li>
// 							<li><a href="https://www.linkedin.com/in/siddharth-samber-661a281b4/" target="_blank" className="button icon solid solo brands fa-linkedin">Visit My Linkedin</a></li>
// 							<li><a href="https://github.com/SIDD58" target="_blank" className="button icon solid solo brands fa-github">Visit My GitHub</a></li>
// 							<li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
// 						</ul>
// 					</div>


// 					<header id="header">
// 						<a href="index.html" className="logo">SIDD Portfolio</a>
// 					</header>

// 					<nav id="nav">
// 						<ul className="links">
// 							<li className="active"><a href="index.html">Home page</a></li>
// 							<li className="inactive"><a href="webdev.html">Web Development</a></li>
// 							<li className="inactive"><a href="ai.html">AI </a></li>
// 							<li className="inactive"><a href="dataanalyst.html">Data Analysis</a></li>
// 							<li className="inactive"><a href="python.html">Python</a></li>
// 							<li className="inactive"><a href="cybersecurity.html">Cyber Security</a></li>
// 						</ul>
// 						<ul className="icons">
// 							<li><a href="https://www.youtube.com/@Azure-AI-102Academy" target="_blank" className="icon brands alt fa-youtube"><span className="label">YouTube</span></a></li>
// 							<li><a href="https://siddharthsamber94.medium.com/" target="_blank" className="icon brands alt fa-medium"><span className="label">Medium</span></a></li> 
// 							<li><a href="https://www.linkedin.com/in/siddharth-samber-661a281b4/" target="_blank" className="icon brands alt fa-linkedin"><span className="label">Linkedin</span></a></li>
// 							<li><a href="https://github.com/SIDD58" target="_blank" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
// 						</ul>
// 					</nav>

// 					<div id="main">
// 							<section className="certifications">
// 								<h2>Certifications</h2>
// 								<div className="carousel">
// 									<div className="carousel-inner">
// 										<img src="images/cert-ai102.png" alt="AI-102 Certification" />
// 										<img src="images/cert-ai900.png" alt="AI-900 Certification" />
// 										<img src="images/cert-az900.png" alt="AZ-900 Certification" />
// 										<img src="images/cert-datacamp.png" alt="DataCamp Certification" />
// 									</div>
// 									<button className="carousel-btn prev">&lt;</button>
// 									<button className="carousel-btn next">&gt;</button>
// 								</div>
// 							</section>


// 							<section className="posts">
// 								<article>
// 									<header>
										
// 										<h2><a href="https://github.com/SIDD58/ai-job-resume-matcher">AI Job Resume Matcher<br />
// 										</a></h2>
// 									</header>
// 									<a href="https://github.com/SIDD58/ai-job-resume-matcher" className="image fit"><img src="images/ai-5.png" alt="" /></a>
// 									<p>
// 										<b>Technologies:</b> FAST API , Pytest, SqlAlchemy ,openai, langchain, Slack, pydantic <br>
// 										<b>Objective:</b> Develop an AI-powered job resume matcher that compares job descriptions with candidate resumes to find the best matches. <br>
// 										<b>Result:</b> The system efficiently identifies and ranks projects based on their Job descriptions. <br>
// 									</p>									<ul className="actions special">
// 										<li><a href="https://github.com/SIDD58/ai-job-resume-matcher" className="button">View</a></li>
// 									</ul>
// 								</article>
// 								<article>
// 									<header>
										
// 										<h2><a href="https://github.com/SIDD58/DriverRevenueOptimization">Driver Revenue Optimization <br />
// 										</a></h2>
// 									</header>
// 									<a href="https://github.com/SIDD58/DriverRevenueOptimization" className="image fit"><img src="images/pic-python.PNG" alt="" /></a>
// 									<p>
// 										<b>Technologies:</b> Python (Scipy,Matplotlib,Pandas,Seaborn) <br>
// 										<b>Objective:</b> The project aimed to maximize driver revenue by analyzing payment methods. <br>
// 										<b>Result:</b> Hypothesis testing & Analysis revealed credit card payment could lead to higher driver earnings, hence credit card usage should be promoted.<br>
// 									</p>

// 									<ul className="actions special">
// 										<li><a href="https://github.com/SIDD58/DriverRevenueOptimization" className="button">View</a></li>
// 									</ul>
// 								</article>

// 							</section>

// 					</div>

// 					<footer id="footer">
// 						<section className="split contact">

// 							<section>
// 								<h3>Phone</h3>
// 								<p><a href="#">+1 (226) 935-7185</a></p>
// 							</section>
// 							<section>
// 								<h3>Email</h3>
// 								<p><a href="#">siddharthsamber10@gmail.com</a></p>
// 							</section>
// 							<section>
// 								<h3>Social</h3>
// 								<ul className="icons alt">
// 									<li><a href="https://www.youtube.com/@Azure-AI-102Academy" target="_blank" className="icon brands alt fa-youtube"><span className="label">Youtube</span></a></li> 
// 									<li><a href="https://siddharthsamber94.medium.com/" target="_blank" className="icon brands alt fa-medium"><span className="label">Medium</span></a></li> 
// 									<li><a href="https://www.linkedin.com/in/siddharth-samber-661a281b4/"  target="_blank"className="icon brands alt fa-linkedin"><span className="label">Linkedin</span></a></li>
// 									<li><a href="https://github.com/SIDD58"  target="_blank"className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
									
// 								</ul>
// 							</section>
// 						</section>
// 					</footer>
// 			</div>

//     </>
//   )
// }

// export default App
