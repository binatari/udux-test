/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from "react";

import { Col, Row, Typography } from "antd";

import omah from "../assets/images/omah.svg";
import udux from "../assets/images/udux.svg";

import burna from "../assets/images/burna-boy.png";
import adekunle from "../assets/images/adekunle.png";

function Home() {
  const items = [
    {
      header: "Daily Vibes 1 ",
      body: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... ",
      image: burna,
    },
    {
      header: "Daily Vibes 2 ",
      body: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... ",
      image: adekunle,
    },
    {
      header: "Daily Vibes 1 ",
      body: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... ",
      image: burna,
    },
    {
      header: "Daily Vibes 2 ",
      body: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... ",
      image: adekunle,
    },

    {
      header: "Daily Vibes 1 ",
      body: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... ",
      image: burna,
    },
    {
      header: "Daily Vibes 2 ",
      body: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd.... ",
      image: adekunle,
    },
    {
      header: "Daily Vibes 1 ",
      body: "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage..... ",
      image: burna,
    },
  ];
  return (
    <div className="relative">
      <Row className="rowgap-vbox" gutter={[24, 0]}>
        <Col
          style={{ paddingLeft: "41px", paddingRight: "41px" }}
          xs={24}
          sm={24}
          className="mb-24 bg-header relative h-hero"
        >
          <img src={udux} className="top-right no-display" />
          <img src={omah} className="bottom-right no-display" />
        </Col>
      </Row>
      <h3 className="home-text">Welcome Back!</h3>
      <div xs={24} sm={24} className="mb-24 card-row">
        {items.map(({ header, body, image }) => (
          <div className="music-card">
            <img src={image} />
            <p>
              {header}
              <span>{body}</span>
            </p>
          </div>
        ))}
      </div>
      <h3 className="home-text">Cheers to the Weekend </h3>
      <div xs={24} sm={24} className="mb-24 card-row">
      {items.map(({ header, body, image }) => (
          <div className="music-card">
            <img src={image} />
            <p>
              {header}
              <span>{body}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}></Row>
      </div>
    </div>
  );
}

export default Home;
