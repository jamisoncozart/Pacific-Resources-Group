import React from 'react';
import './ProjectsStyles.scss';

function Projects() {

  return(
    <div className='projectWhole'>
      <div className='Project1'> 
        <h3 id='boeingTitle'>Boeing Commercial Airplane Group HQ Campus, at Longacres, Renton WA</h3>
        <p id='boeingProject'>Boeing purchased the Longacres Race Track and converted it to the headquarters of the Commercial Airplane Group. PRG provided consulting services for 13 years as the site was developed to include the Customer Service Training Center, Daycare Center, Headquarters Office Tower and 36 acre storm water management pond and wetland mitigation with paved pedestrian trails. PRG assisted the design team in site planning, landscape design, construction supervision and landscape maintenance contract administration. PRG also served as the contracted Corporate Grounds Manager and consultant to the Boeing Facilities Maintenance Division for several Boeing facilities in the Renton and south Seattle area.</p>
      </div>

      <div className='Project2'>
        <h3 id='nikeTitle'>NIKE World HQ, Tiger Woods Building, Mia Hamm Building, Child Development Center</h3>
        <p id='nikeProject'>PRG assisted the design team in site planning to retain native trees and vegetation for Pacific Northwest themed exhibits including the Park Entrance, Cascade Stream & Pond, Black Bear Ridge, Cascade Crest, Stellar Cove, Eagle Canyon and Connecting pedestrian circulation. This included assessment of trees and other existing vegetation, recommendations on retention, removal and replacement of trees and other native vegetation, recommendations on tree protection and construction techniques to retain desirable vegetation and post construction care of both existing and newly installed native plants over a number of years.</p>
      </div>

      <div className='Project3'>
        <h3 id='daimlerTitle'>Daimler HQ, Swan Island, Portland</h3>
        <p id='daimlerProject'>This site was an existing older commercial development that was to be demolished to construct the Daimler Headquarters, a Daycare Center, Parking, Utility Support building and pedestrian pathway in the Willamette Greenway on the east bank of the Willamette River. PRG’s role was to assess all the trees and the mature landscape on site and recommend retention of those elements that could tolerate the changes in growing conditions and that would not be disturbed, assist the design team with site planning, design tree protection measures, recommend construction techniques and supervise construction near existing trees to be retained and make post construction maintenance practices.</p>
      </div>

      <div className='Project4'>
        <h3 id='zooTitle'>Portland Zoo Entrance Renovation, PNW Exhibit</h3>
        <p id='zooProject'>This is a very large site whose development has expanded over time. PRG has been involved in a number of phases of development over the last 35 years. This included assisting the Design Team in siting buildings, parking and pedestrian improvements, assessing trees and understory vegetation for retention, recommend construction techniques and supervise construction near trees and other vegetation to be retained, recommend and over see post construction care of existing and newly installed landscape design elements.</p>
      </div>
      
      <div className='Project5'>
        <h3 id='universityTitle'>Washington State University, Vancouver Campus </h3>
        <p id='universityProject'>PRG assisted the design team in site planning for the Campus Master Plan, the first phase of construction and subsequent expansion, including assessing the suitability for retention of the forested portions of the site, recommended tree protection and construction techniques to preserve indigenous vegetation and provided recommendations to the facilities staff on post construction landscape maintenance care.</p>
      </div>
    </div>
  )
}

export default Projects;