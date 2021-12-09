import React from "react";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";

import { home, prev } from "../components/styles";

import "../styles/Pages.css";
import { Link } from "react-router-dom";

function PageFive() {
  return (
    <div className="page">
      <article className="article">
        <Scroll />
        <div>
          <Header title="References" />
          <ul className='reference-list'>
        <li>Akar, G., & Clifton, K. (2009). Influence of individual perceptions and bicycle infrastructure on decision to bike. <i>Transportation Research Record, 2140</i>(1), 165-172.</li>
        <li>Beck, M., & Hensher, D. (2020). Insights into the impact of COVID-19 on household travel and activities in Australia- The early days of easing restrictions. <i>Transport Policy</i>, 99, 95-119.</li>
        <li>Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. Qualitative <i>Research in Psychology</i>, 3(2), 77-101. <span className='ref'>https://doi.org/10.1191/1478088706qp063oa</span></li>
        <li>Cao, X., & Yang, W. (2017). Examining the effects of the built environment and residential self-selection on commuting trips and the related CO2 emissions: An empirical study in Guangzhou, China. <i>Transportation Research Part D: Transport and Environment, 52</i>, 480-494.</li>
        <li>Cherry, C., Riggs, W., Appleyard, B., Dhakal, N., Frost, A., & Jeffers, S. (2018). New and unique aspects of university campus transportation data to improve planning methods. <i>Transportation Research Record. 2672</i>(8), 742-753. <span className='ref'>https://doi.org/10.1177/ 0361198118781659</span></li>
        <li>Coventry City Council. (2021). <i>Population and demographics</i>. <span className='ref'>https://www.coventry.gov.uk/info/195/facts_about_coventry/2435/population_and_demographics</span></li>
        <li>Coventry University. (2018). <i>Coventry University travel plan 2015 – 2020: 2018 interim update</i>. <span className='ref'>https://www.coventry.ac.uk/globalassets/media/global/06-life-on-campus-section-assets/the-university/green-campus/environmental-policies-pdf-documents/coventry-university-travel-plan-2018.pdf</span></li>
        <li>Coventry University. (n.d). <i>About Coventry University</i>. <span className='ref'>https://www.coventry.ac.uk/the-university/about-coventry-university/coventry-university-group-explained/</span></li>
        <li>Daisy, N., Hafezi, M., Liu, L., & Millward, H. (2018). Understanding and modelling the activity-travel behaviour of university commuters at a large Canadian university. <i>Journal of Urban Planning and Development, 144</i>(2), 04018006.</li>
        <li>De Haas, M., Faber, R., & Hamersma, M. (2020). How COVID-19 and the Dutch ‘intelligent lockdown’ change activities, work, and travel behaviour: Evidence from longitudinal data in the Netherlands. <i>Transportation Research Interdisciplinary Perspectives, 6</i>, 100150.</li>
        <li>De Vos, J. (2020). The effect of COVID-19 and subsequent social distancing on travel behaviour. <i>Transportation Research Interdisciplinary Perspectives, 5</i>, 100121.</li>
        <li>Dell’Olio, L., Cordera, R., Ibeas, A., Barreda, R., Alonso, B., & Moura, J. (2019). A methodology based on parking policy to promote sustainable mobility in college campuses. <i>Transport Policy, 80</i>, 148-156.</li>
        <li>Fioreze, T., de Gruijter, M., & Geurs, K. (2019). On the likelihood of using Mobility-as-a-Service: A case study on innovative mobility services among residents in the Netherlands. <i>Case Studies on Transport Policy</i>, 7(4), 790–801. <span className='ref'>https://doi.org/10.1016/j.cstp.2019.08.002</span></li>
        <li>Gürel, E. (2017). Swot analysis: A theoretical review. <i>Journal of International Social Research</i>, 10(51), 994-1006. <span className='ref'>https://doi.org/10.17719/jisr.2017.1832</span></li>
        <li>Ho, C., Mulley, C., & Hensher, D.  (2020). Public preferences for mobility as a service: Insights from stated preference surveys. <i>Transportation Research Part A: Policy and Practice, 131</i>, 70–90. <span className='ref'>https://doi.org/10.1016/j.tra.2019.09.031</span></li>
        <li>Jia, N., Li, L., Ling, S., Ma, S., & Yao, W. (2018). Influence of attitudinal and low-carbon factors on behavioural intention of commuting mode choice–A cross-city study in China. <i>Transportation Research part A: policy and practice, 111</i>, 108-118.</li>
        <li>Johansson, M., Heldt, T., & Johansson, P. (2006). The effects of attitudes and personality traits on mode choice. <i>Transportation Research Part A: Policy and Practice, 40</i>(6), 507-525.</li>
        <li>Limanond, T., Butsingkorn, T., & Chermkhunthod, C. (2011). Travel behaviour of university students who live on campus: a case study of a rural university in Asia. <i>Transport Policy, 18</i>(1), 163-171.</li>
        <li>Liu, D., Du, H., Southworth, F., & Ma, S. (2017). The influence of social-psychological factors on the intention to choose low-carbon travel modes in Tianjin, China. <i>Transportation Research Part A: Policy and Practice, 105</i>, 42-53.</li>
        
        <li>Nikitas, A., Avineri, E., & Parkhurst, G. (2018). Understanding the public acceptability of road pricing and the roles of older age, social norms, pro-social values and trust for urban policy making: The case of Bristol. <i>Cities, 79</i>, 78-91. <span className='ref'>https://doi.org/10.1016/j.cities.2018.02.024</span></li>
        <li>Nkurunziza, A., Zuidgeest, M., Brussel, M., & Van Maarseveen, M. (2012). Examining the potential for modal change: Motivators and barriers for bicycle commuting in Dar-es-Salaam. <i>Transport Policy, 24</i>, 249-259.</li>
        <li>Orozco-Fontalvo, M., Arévalo-Támara, A., Guerrero-Barbosa, T., & Gutiérrez-Torres, M. (2018). Bicycle choice modeling: A study of university trips in a small Colombian city. <i>Journal of Transport & Health, 9</i>, 264-274.</li>
        <li>Saunders, M., Thornhill, A., & Lewis, P. (2019). <i>Research methods for business students</i> (8th ed.). Pearson.</li>
        <li>Tirachini, A., Hensher, D., & Rose, J. (2013). Crowding in public transport systems: Effects on users, operation, and implications for the estimation of demand. <i>Transportation Research Part A: Policy and Practice, 53</i>, 36–52. <span className='ref'>https://doi.org/10.1016/j.tra.2013.06.005</span></li>

        
        <li>Vedel, S., Bredahl Jacobsen, J., & Skov-Petersen, H. (2017). Bicyclists’ preferences for route characteristics and crowding in Copenhagen – A choice experiment study of commuters. <i>Transportation Research Part A: Policy and Practice, 100</i>, 53-64. <span className='ref'>https://doi.org/10.1016/j.tra.2017.04.006</span></li>
        <li>Wardman, M., & Whelan, G. (2011). Twenty years of rail crowding valuation studies: Evidence and lessons from British experience. <i>Transport Reviews, 31</i>(3), 379-398. <span className='ref'>https://doi.org/10.1080/01441647.2010.519127</span></li>
        <li>Zhou, J. (2016). Proactive sustainable university transportation: Marginal effects, intrinsic values, and university students’ mode choice. <i>International Journal of Sustainable Transportation, 10</i>(9), 815-824.</li>

        </ul>
          
          
          
          </div>
      </article>
      <div className="buttons">
        <div className="home-button">
          <Link to="/page-four">
            <Button
              style={prev}
            >
              previous
            </Button>
          </Link>
        </div>

        <div className="home-button">
          <Link to="/">
            <Button size='large' color="primary" variant="contained" style={home}>
              Home
            </Button>
          </Link>
        </div>

        <div className="next-btn">
          <Button
            variant="contained"
            disabled
          >
            next
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageFive;
