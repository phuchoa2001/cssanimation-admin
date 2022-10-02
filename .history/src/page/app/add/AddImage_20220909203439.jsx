import React, { useState } from "react";
import { Pagination } from "antd";
import { useImages } from "../../Images/queries/queries";

import SelectPageSize from "../../../components/form/SelectPageSize";

const options = [];

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

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
        console.log("select", data.data);
        return data;
      }
    },
  });
  console.log("data", data);
  const handleSearch = (text) => {};
  const handleScroll = (coordinates) => {
    setCoordinates(coordinates);
  };
  return (
    <div>
      <SelectPageSize
        value={value}
        children={options}
        boxnotHidden={
          <div className={`page${coordinates > 50 && " scroll"}`}>
            <Pagination simple defaultCurrent={1} total={50} />
          </div>
        }
        activeStyle={{}}
        onscroll={handleScroll}
        onSearch={handleSearch}
        sticky={true}
        onClick={(value) => setValue(value)}
      />
    </div>
  );
}

export default AddImage;
