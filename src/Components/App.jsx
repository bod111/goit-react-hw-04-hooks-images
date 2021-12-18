import { useState, useEffect } from "react"
import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Request from "../service/api";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal"

const App = () =>{
  
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState("");

  useEffect(() => {
    
    name !== "" && setLoading(true);
    
     name !== "" && Request( {name, page} )
        .then((hits) =>
          setHits((prev) => [...prev, ...hits.hits] )
        )
        .finally(() => setLoading( false ));
    
  }, [name, page])

  
  const onSubmitForm = (nameOnForm) => {
    setName(nameOnForm)
    setPage(1)
    setHits([])
  };

  const onClick = () => {
    setPage((prev) => prev + 1);
  };
  const handleClick = (imageURL) => setModal( imageURL );

  const onClose = (e) => {
    (e.target === e.currentTarget || e.code === "Escape") &&
      setModal( "" );
  };
  
   
    return (
      <>
        <Searchbar onSubmitForm={onSubmitForm} />
        {!!hits.length && (
          <ImageGallery handleClick={handleClick} hits={hits} />
        )}
        {!!hits.length && <Button onClick={onClick} />}
        {modal && <Modal onClose={onClose} modalImg={modal} />}
        {loading && (
          <Loader className="Loader" type="BallTriangle" color="#00BFFF" height={100} width={100} />
        )}
        <ToastContainer />
      </>
    );
  }


export default App;
