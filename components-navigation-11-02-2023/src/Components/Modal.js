import ModalPage from "../Pages/ModalPage";
import Buttons from "../Components/Buttons";
import { useState } from "react";
const Modal = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius quasi nulla. Rem, molestias fugit unde dolore, veniam dignissimos quo ea laboriosam in autem pariatur maiores magnam eaque libero ipsum suscipit cupiditate accusamus. Temporibus magnam quod, sed asperiores itaque nostrum, quis rerum magni ut odio non cupiditate delectus deserunt obcaecati doloribus commodi est fugit blanditiis suscipit sit molestias. Iusto iure modi quas, asperiores blanditiis exercitationem? Omnis beatae, officiis recusandae repellendus nemo laboriosam ipsa iste cum provident ea voluptate, obcaecati facere aspernatur cupiditate mollitia error quod sit vitae qui!</p>
    <Buttons onClick={() => {  setShow(!show);}} primary  >   open modal </Buttons> 
    {show && <ModalPage handleClose={handleClose} >{children} </ModalPage>}

    </div>




  );
};

export default Modal;