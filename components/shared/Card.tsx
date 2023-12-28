import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function ServiceList() {
  const rednerServices = [
    {
      img: "",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
    {
      img: "",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
    {
      img: "",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
    {
      img: "",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
    {
      img: "",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
    {
      img: "",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
    {
      img: "",
      name: "Mobile Application",
      desription:
        "Diginsy has the finest website developers in United States than can create compelling and highly functional websites for your brand.",
      title: "learn more",
    },
  ];
  return (
    <>
      <div className="absolute top-[800px] grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-10 mx-20 items-center">
        {rednerServices.map((service) => (
          <Card
            className=" w-[325px]  h-[230px] rounded-2xl"
            key={service.name}
          >
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.desription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{service.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
