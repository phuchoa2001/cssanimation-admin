import React from "react";
import { Row } from "antd";
import { useHistory } from "react-router-dom";
import {
  FileImageOutlined,
  AppstoreOutlined,
  ProjectOutlined,
} from "@ant-design/icons";

import Styles from "./index.module.css";
import Card from "../../../../components/Card";
import CardSkeleton from "../../../../components/CardSkeleton";
import { useToTal } from "./queries/queries";

function ListCard() {
  let history = useHistory();

  const { data, isLoading } = useToTal({});
  console.log("data", data);
  return (
    <div className={Styles.ListCard}>
      <Row>
        {!isLoading ? (
          <>
            <Card
              icon={<ProjectOutlined />}
              title="Ứng dụng"
              onClick={() => history.push("/apps")}
              value={"8"}
              color="linear-gradient(rgb(187, 103, 255) 0%, rgb(196, 132, 243) 100%)"
              boxShadow="rgb(224 198 245) 0px 10px 20px 0px"
            />
            <Card
              icon={<FileImageOutlined />}
              title="Hình ảnh"
              onClick={() => history.push("/images")}
              value={"8"}
              color="linear-gradient(rgb(255, 145, 157) 0%, rgb(252, 146, 157) 100%)"
              boxShadow="rgb(253 192 199) 0px 10px 20px 0px"
            />
            <Card
              icon={<AppstoreOutlined />}
              title="Thể lọai"
              onClick={() => history.push("/categorys")}
              value="6"
              color="linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)"
              boxShadow="rgb(249 213 155) 0px 10px 20px 0px"
            />
          </>
        ) : (
          <>
            <CardSkeleton
              icon={<ProjectOutlined />}
              title="Ứng dụng"
              onClick={() => history.push("/apps")}
              value={"8"}
              color="linear-gradient(rgb(187, 103, 255) 0%, rgb(196, 132, 243) 100%)"
              boxShadow="rgb(224 198 245) 0px 10px 20px 0px"
            />
            <CardSkeleton
              icon={<FileImageOutlined />}
              title="Hình ảnh"
              onClick={() => history.push("/images")}
              value={"8"}
              color="linear-gradient(rgb(255, 145, 157) 0%, rgb(252, 146, 157) 100%)"
              boxShadow="rgb(253 192 199) 0px 10px 20px 0px"
            />
            <CardSkeleton
              icon={<AppstoreOutlined />}
              title="Thể lọai"
              onClick={() => history.push("/categorys")}
              value="6"
              color="linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)"
              boxShadow="rgb(249 213 155) 0px 10px 20px 0px"
            />
          </>
        )}
      </Row>
    </div>
  );
}

export default ListCard;
