import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import moment from "moment";
import "./Pages.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/news/")
      .then((result) => {
        setNews(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="news_container">
      <h1>Featured</h1>
      {news.map((data) => {
        let date = data.createdAt;
        return (
          <Fragment>
            <CardContent key={data._id}>
              <Card className="news_card">
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <p>{moment(date).startOf("day").fromNow()}</p>
              </Card>
            </CardContent>
          </Fragment>
        );
      })}
    </div>
  );
};

export default News;
