import React, { useEffect, useState } from "react";
import useApi from "../../Api";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "../../App";
import {
  Bottom,
  Button,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  PriceDiv,
  CardOffer,
  CardPrice,
} from "./styles";
import { url } from "../../utils/constant";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Products = () => {
  const { data, isLoading, isError } = useApi(url);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const products = searchResults.length > 0 ? searchResults : data;

  return (
    <>
      <div className="search">
        <Input
          type="text"
          placeholder="Search Product by Title"
          value={searchTerm}
          onChange={handleChange}
          suffix={<SearchOutlined />}
          size="medium"
          style={{
            borderColor: "#fff",
            boxShadow: "0 0 0 1px #FFD4BA",
            marginTop: 5,
          }}
        />
      </div>

      <div className="container">
        <Row gutter={[20, 30]} align-items="stretch">
          {products.map((item) => {
            var price = item.discountedPrice
              ? item.discountedPrice
              : item.price;
            var offerPrice = item.discountedPrice;
            if (offerPrice) {
              var offerPercentage =
                ((item.price - offerPrice) / item.price) * 100;
              if (offerPercentage.toFixed(0) > 0) {
                price = (
                  <span>
                    <span
                      style={{
                        textDecoration: "line-through",
                        marginRight: "5px",
                      }}
                    >
                      {item.price}
                    </span>
                    <span style={{ color: "#FAC514", fontWeight: "bold" }}>
                      {offerPrice}
                    </span>
                  </span>
                );
              }
            }

            return (
              <Col xs={24} sm={12} md={12} lg={8} xl={6} key={item.id}>
                <Card key={item.id}>
                  <CardImage>
                    <img src={item.imageUrl} alt={item.title} />
                  </CardImage>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>
                    {item.description.slice(0, 30) + " ..."}
                  </CardDescription>
                  <PriceDiv>
                    <CardPrice>$ {price}</CardPrice>
                    {offerPercentage > 0 && (
                      <CardOffer>{offerPercentage.toFixed(0)}% OFF</CardOffer>
                    )}{" "}
                  </PriceDiv>
                  <Bottom>
                    <Link to={`/product/${item.id}`}>
                      <Button>View</Button>
                    </Link>
                  </Bottom>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Products;
