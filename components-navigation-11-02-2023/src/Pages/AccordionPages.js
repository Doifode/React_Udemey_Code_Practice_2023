import React from "react";
import Modal from "../Components/Modal";
import Accordion from "../Components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "kf;lk",
      lable: "Heading 1",
      content: "content any thing  we want   to display will be  here okay ",
    },
    {
      id: "kf;ak",
      lable: "Heading 1",
      content: "content any thing  we want   to display will be  here okay  ",
    },
    {
      id: "kf;al",
      lable: "Heading 1",
      content: "content any thing  we want   to display will be  here okay ",
    },
  ];

  return (
    <div>
      <Modal>
        <label htmlFor="">Name :</label>
        <input type="text" className="form-control" />
      </Modal>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
