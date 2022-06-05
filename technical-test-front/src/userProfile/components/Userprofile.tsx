/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Link } from "react-router-dom";

import {
  BlueBorderBackground,
  BackgroundVideo,
  PageTitle,
  PartTitle,
} from "../../core";
import { useUserProfile } from "../hooks";

export const UserProfile: FC = () => {
  const { processedUserData } = useUserProfile();
  return (
    <>
      <BlueBorderBackground backgroundColor={"transparent"}>
        <BackgroundVideo />
        <PageTitle title="Profile page" />
        <div
          className="container"
          css={css`
            margin-bottom: 0;
            .card {
              background: none;
              margin: -2px 0 3% 0;
              border: 2px solid #364ca1;
            }
            .text-dark {
              align-self: center;
            }
          `}
        >
          <PartTitle title={processedUserData.profile.fullName} alt />
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-secondary">Age</h6>
                  </div>
                  <div className="col-sm-9 text-dark">
                    {processedUserData.profile.age}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-secondary">Email</h6>
                  </div>
                  <div className="col-sm-9 text-dark">
                    {processedUserData.profile.email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-secondary">Phone number</h6>
                  </div>
                  <div className="col-sm-9 text-dark">
                    {processedUserData.profile.phoneNumber}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-secondary">Registered since</h6>
                  </div>
                  <div className="col-sm-9 text-dark">
                    {processedUserData.profile.registrationDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PartTitle title="Address" />
          <div className="col-md ">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-secondary">
                      Street number and name
                    </h6>
                  </div>
                  <div className="col-sm-9 text-dark">
                    {processedUserData.address.streetNumberAndName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 text-secondary">ZIP Code / City</h6>
                  </div>
                  <div className="col-sm-9 text-dark">
                    {processedUserData.address.zipCodeAndCity}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/users">Go back to the table</Link>
        </div>
      </BlueBorderBackground>
    </>
  );
};
