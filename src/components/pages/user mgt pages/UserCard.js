import React, { useState } from "react";
import "./userCard.css";
import { ReactComponent as ThreeDots } from "../../../img/threeDotsIcon.svg";
import { ReactComponent as UserCardLogoIcon } from "../../../img/userCardIcon.svg";
import CardSideMenu from "./CardSideMenu";

const UserCard = () => {
  const [activeDots, setActiveDots] = useState(false);
  return (
    // <div className="userMgt_user_cardRapper flex align_center justify_spc_btn">
    //   <div className="userMgt_user_card_details flex align_center">
    //     <div className="userMgt_user_card_details_firstSvgPart">
    //       <UserCardLogoIcon fill="#f5f5f5" />
    //     </div>
    //     <div className='flex justify_spc_btn'>
    //       <div className="userMgt_user_card_details_detailsPart">
    //         <h3>user name</h3>
    //         <p>base</p>
    //       </div>
    //     </div>
    //     <div className="userMgt_user_card_details_secondSvgPart">
    //       <ThreeDots
    //         onClick={() => setActiveDots(!activeDots)}
    //         fill="#595959"
    //       />
    //       <div>{activeDots ? <CardSideMenu /> : null}</div>
    //     </div>
    //   </div>
    // </div>
    <div className="cardContainer flex">
      <div className="userMgt_user_card_firstSvgPart flex">
        <UserCardLogoIcon fill="#f5f5f5" />
      </div>
      <div className="userMgt_user_card_Details flex justify_spc_btn align_center">
        <div>
          <h3>user name</h3>
          <p>base</p>
        </div>
        <div
          className="userMgt_user_card_Details_svg"
          onClick={() => setActiveDots(!activeDots)}
        >
          <ThreeDots fill="#595959" />
          <div>{activeDots ? (<CardSideMenu />) : null}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
