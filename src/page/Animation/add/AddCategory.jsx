import React, { useState } from "react";
import { Pagination, Spin } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { useCategorys } from "../../Category/queries/queries";

import SelectPageSizeMultiple from "../../../components/form/SelectPageSizeMultiple";
import { categoryApi } from "../../../api/categoryApi";

const AppStyles = styled.div`
  .scroll {
    padding: 10px 0px;
  }
  .box {
    padding-bottom: 10px;
  }
  .text_add {
    padding: 5px 10px;
    color: #1890ff;
    cursor: pointer;
  }
  .icon_plus {
    margin-right: 5px;
  }
`;

function AddCategory({ value, onChange, error }) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading , setLoading] = useState(false);
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
  const { data, isLoading, isPreviousData, isFetching, refetch } = useCategorys(
    {
      ...argument,
      options: {
        ...argument.options,
        select: (data) => {
          return data.data;
        },
      },
    }
  );
  const handleSearch = (text) => {
    setSearch(text);
  };
  const handleScroll = (coordinates) => {
    setCoordinates(coordinates);
  };
  const handlePagination = (page) => {
    setPage(page);
  };
  const handleAddSearch = async () => {
    setLoading(true);
    await categoryApi.add({ name: search });
    refetch();
    setLoading(false);
  };
  return (
    <div>
      <AppStyles>
        {!isLoading ? (
          <SelectPageSizeMultiple
            value={value}
            children={data.data}
            boxnotHidden={
              <>
                <div className={`page${coordinates > 50 && " scroll"}`}>
                  <Pagination
                    simple
                    defaultCurrent={data.meta.current_page}
                    onChange={handlePagination}
                    total={data.meta.total}
                  />
                </div>
                {!!search && !data.data.length && (
                  <div className="text_add" onClick={handleAddSearch}>
                    <PlusSquareOutlined className="icon_plus" />
                    {!loading &&
                    !isLoading &&
                    !isPreviousData &&
                    !isFetching
                      ? "...Hiện tại thể loại bạn tìm không có trong kho của ban. bấm vào đây để thêm mới"
                      : "Đang thêm..."}
                  </div>
                )}
              </>
            }
            textError={error}
            activeStyle={{}}
            onscroll={handleScroll}
            onSearch={handleSearch}
            isLoading={!(!isLoading && !isPreviousData)}
            width={500}
            sticky={true}
            label="Thể loại"
            onClick={(value) => onChange(value)}
          />
        ) : (
          <Spin />
        )}
      </AppStyles>
    </div>
  );
}

export default AddCategory;
