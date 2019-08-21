import React, { Component } from 'react';
import '../../Stylesheets/instructions.scss'

class AvItems extends Component {

  render() {
    return (
      <div>
      <h1 id="instruction-header">What you got?</h1>
        <ul>
          <li id="instruction-li"><strong>PAPER:</strong> If you can, use acid-free folders and boxes. Remove metal clips and staples. Do not fold, glue or laminate. Wash your hands before handling any originals. Store papers away from light, moisture and heat.</li>
          <li id="instruction-li"><strong>VIDEO:</strong> Avoid touching the tape Store fully rewound and vertically Keep away from magnetic forces (electrical appliances) Label your tapes with dates and identifying information. Use archival-quality adhesive labels. Ensure future access by digitizing your collection</li>
          <li id="instruction-li"><strong>FILM:</strong> Handle by the center of the hub (reel to reel), only touch the sides and keep fingers away from the image. Wear cotton gloves if you need to clean and repair Store in low-humidity, low-light, and consistent temperature (preferably low temp) Don't store plastic bags, you may use cardboard boxes or original metal/plastic containers.</li>
          <li id="instruction-li"><strong>PHOTOGRAPHS:</strong> Handle photographs and negatives with gloves. Fingerprints can cause permanent stains on photographs and negatives. Protect from light Place photos in acid free boxes or sleeves. Avoid laminated photo albums. Glue attracts pests and insects. Store in low temperatures</li>
          <li id="instruction-li"><strong>DIGITAL MEDIA:</strong> Migrate data on formats that are obsolete or near-obsolete (i.e. floppys or CDs) Access your files and/or storage every 6 months. Apply the 3-2-1 rule: Make three copies, use two different types of media for storing your copies, store one copy offsite. Make access copies. Note that life expectancy of digital storage varies: <br/> ~ DVD/CDs ~10 yrs <br/> ~ Hard drives, memory cards ~5-10 yrs <br/> ~Cloud storage depends on the company's terms of service (!)</li>

        </ul>
      </div>
    );
  }

}

export default AvItems;
