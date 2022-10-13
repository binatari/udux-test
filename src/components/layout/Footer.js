

import { Layout, Row, Col } from "antd";
import bigEyes from "../../assets/images/big-eyes.svg";
import bigRecord from "../../assets/images/big-record.svg";
import bigFile from "../../assets/images/big-file.svg";
import bigHouse from "../../assets/images/big-house.svg";
function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter className="img-style" style={{ background: "#000" }}>
      <Row className="just">
        <Col xs={24}>
          <div className="copyright">
           <img src={bigHouse}/>
           <img src={bigEyes}/>
           <img src={bigRecord}/>
           <img src={bigFile}/>
          </div>
        </Col>
      
      </Row>
    </AntFooter>
  );
}

export default Footer;
