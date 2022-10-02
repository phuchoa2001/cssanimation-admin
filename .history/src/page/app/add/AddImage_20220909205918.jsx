import React, { useState } from "react";
import { Pagination, Spin } from "antd";
import styled from "styled-components";


import { useImages } from "../../Images/queries/queries";

import SelectPageSizeImage from "../../../components/form/SelectPageSizeImage";

const AppStyles = styled.div`
  .scroll {
    padding: 10px 0px;
  }
  .page {
    margin-bottom: 10px;
  }
`;

function AddImage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [coordinates, setCoordinates] = useState(0);
  const argument = {
    params: {
      page,
      search,
      page_size: 10,
    },
    options: {
      keepPreviousData: true,
    },
  };
  const { data, isLoading } = useImages({
    ...argument,
    options: {
      ...argument.options,
      select: (data) => {
        return data.data;
      },
    },
  });
  const handleSearch = (text) => {};
  const handleScroll = (coordinates) => {
    setCoordinates(coordinates);
  };
  return (
    <div>
      <AppStyles>
        {!isLoading ? (
          <SelectPageSizeImage
            value={value}
            children={data.data}
            boxnotHidden={
              <div className={`page${coordinates > 50 && " scroll"}`}>
                <Pagination
                  simple
                  defaultCurrent={data.meta.current_page}
                  total={data.meta.total}
                />
              </div>
            }
            activeStyle={{}}
            onscroll={handleScroll}
            onSearch={handleSearch}
            sticky={true}
            onClick={(value) => setValue(value)}
          />
        ) : (
          <Spin />
        )}
      </AppStyles>
    </div>
  );
}

export default AddImage;
