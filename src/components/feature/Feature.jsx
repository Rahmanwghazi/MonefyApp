import './Feature.css'
import easyImg from '../../assets/easy.png'
import ideaImg from '../../assets/idea.png'
import strategyImg from '../../assets/strategy.png'
import wantsImg from '../../assets/wants.svg'
import needsImg from '../../assets/needs.svg'
import savingsImg from '../../assets/savings.svg'
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from 'react'

const Feature = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (
    <>
      <div id="feature" className="content container-xxl mx-auto p-0  position-relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="text-center title-text">
          <h1 className="text-title text-white">Why Monefy ?</h1>
          <p className="text-caption">
            You can easily manage your money
          </p>
        </div>
        <div data-aos="fade-up" className="grid-padding text-center">
          <div className="row">
            <div className="col-lg-4 column">
              <div className="icon">
                <img src={easyImg} style={{ width: 70 }}
                  alt="" />
              </div>
              <h3 className="icon-title text-white">Easy to Operate</h3>
              <p className="icon-caption">
                It's simple to use<br />
                for all ages
              </p>
            </div>
            <div className="col-lg-4 column">
              <div className="icon">
                <img src={strategyImg} style={{ width: 70 }}
                  alt="" />
              </div>
              <h3 className="icon-title text-white">Better Future Plans</h3>
              <p className="icon-caption">
                With Monefy, You can <br />
                plan your spending better
              </p>
            </div>
            <div className="col-lg-4 column">
              <div className="icon">
                <img src={ideaImg} style={{ width: 80 }}
                  alt="" />
              </div>
              <h3 className="icon-title text-white">Budget Recommendation</h3>
              <p className="icon-caption mb-5">
                we will give you some tips <br />
                & recommendations for budgeting
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="tips" className="content container-xxl mx-auto p-0  position-relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="text-center title-text mt-5">
          <h1 className="text-title text-white">Tips</h1>
          <p className="text-caption">
            The 50/30/20 Rule of Thumb for Budgeting
          </p>
        </div>
        <div  data-aos="fade-up" className="grid-padding text-center">
          <div className="row">
            <div className="col-lg-4 column">
              <div className="icon">
                <img src={needsImg} style={{ height: 150, marginBottom: 30 }}
                  alt="" />
              </div>
              <h3 className="icon-title text-white">50% to Needs</h3>
              <p className="icon-caption">
                Needs are what you can’t live without, <br />
                or at least very easily
              </p>
            </div>
            <div className="col-lg-4 column">
              <div className="icon">
                <img src={wantsImg} style={{ height: 150, marginBottom: 30 }}
                  alt="" />
              </div>
              <h3 className="icon-title text-white">30% to Wants</h3>
              <p className="icon-caption">
                Wants are what you desire <br />
                but don’t actually need to survive
              </p>
            </div>
            <div className="col-lg-4 column">
              <div className="icon">
                <img src={savingsImg} style={{ height: 150, marginBottom: 30 }}
                  alt="" />
              </div>
              <h3 className="icon-title text-white">20% to Financial Goals</h3>
              <p className="icon-caption">
                All savings, such as retirement contributions, <br />
                saving for a house, and setting money
              </p>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div id="about" className="content container-md p-0 mt-5 mb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="text-center title-text">
          <h1 className="text-title text-white">About</h1>
        </div>
        <div data-aos="fade-up"  className="grid-padding text-center">
          <p className="text-caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque officiis, veniam soluta amet odit aut quasi, quam mollitia fugit earum iusto sunt totam at quidem quaerat libero velit nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus sapiente quae quis perspiciatis tenetur doloremque hic ratione optio dolores voluptatibus id totam reprehenderit eaque, amet voluptates? Molestiae, tempora inventore.
          </p>
        </div>
      </div></>
  )
}

export default Feature