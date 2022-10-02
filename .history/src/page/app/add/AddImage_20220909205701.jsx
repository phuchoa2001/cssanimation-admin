import React, { useState } from "react";
import { Pagination, Spin } from "antd";
import { useImages } from "../../Images/queries/queries";

import SelectPageSizeImage from "../../../components/form/SelectPageSizeImage";

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
    </div>
  );
}

export default AddImage;
