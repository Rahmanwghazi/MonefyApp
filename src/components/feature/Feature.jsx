import './Feature.css'
import easyImg from '../../assets/easy.png'
import ideaImg from '../../assets/idea.png'
import strategyImg from '../../assets/strategy.png'

const Feature = () => {
  return (
    <><div class="content container-xxl mx-auto p-0  position-relative" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div class="text-center title-text">
        <h1 class="text-title text-white">Why Monefy ?</h1>
        <p class="text-caption">
          You can easily manage your money
        </p>
      </div>
      <div class="grid-padding text-center">
        <div class="row">
          <div class="col-lg-4 column">
            <div class="icon">
              <img src={easyImg} style={{width:70}}
                alt="" />
            </div>
            <h3 class="icon-title text-white">Easy to Operate</h3>
            <p class="icon-caption">
              It's simple to use<br />
              for all ages
            </p>
          </div>
          <div class="col-lg-4 column">
            <div class="icon">
              <img src={strategyImg} style={{width:70}}
                alt="" />
            </div>
            <h3 class="icon-title text-white">Better Future Plans</h3>
            <p class="icon-caption">
              With Monefy, You can <br />
              plan your spending better
            </p>
          </div>
          <div class="col-lg-4 column">
            <div class="icon">
              <img src={ideaImg} style={{width:80}}
                alt="" />
            </div>
            <h3 class="icon-title text-white">Budget Recommendation</h3>
            <p class="icon-caption">
              we will give you some tips <br />
              & recommendations for budgeting
            </p>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
      <div class="content container-md p-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div class="text-center title-text">
          <h1 class="text-title text-white">About</h1>
        </div>
        <div class="grid-padding text-center">
          <p class="text-caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque officiis, veniam soluta amet odit aut quasi, quam mollitia fugit earum iusto sunt totam at quidem quaerat libero velit nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum necessitatibus sapiente quae quis perspiciatis tenetur doloremque hic ratione optio dolores voluptatibus id totam reprehenderit eaque, amet voluptates? Molestiae, tempora inventore.
          </p>
        </div>
      </div></>
  )
}

export default Feature