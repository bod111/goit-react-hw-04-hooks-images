import { Component } from "react"
import Loader from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Request from "../service/api";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal"

class App extends Component {
  state = {
    hits: [],
    loading: false,
    name: "",
    page: 1,
    modal: "",
  };
   componentDidUpdate(prevProps, prevState) {
    const { name, page } = this.state;
    if (prevState.name !== name || prevState.page !== page) {
      this.setState({ loading: true });
      Request({ name, page })
        .then((hits) =>
          this.setState((prev) => ({ hits: [...prev.hits, ...hits.hits] }))
        )
        .finally(() => this.setState({ loading: false }));
    }
  }
  onSubmitForm= (nameOnForm) => {
    this.setState({ name: nameOnForm, page: 1, hits: [] });
  };
  onClick = () => {
    this.setState({ page: this.state.page + 1 });
  };
  handleClick = (imageURL) => this.setState({ modal: imageURL });

  onClose = (e) => {
    (e.target === e.currentTarget || e.code === "Escape") &&
      this.setState({ modal: "" });
  };
  render() {
    const { loading, hits, modal } = this.state;
    return (
      <>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        {!!hits.length && (
          <ImageGallery handleClick={this.handleClick} hits={hits} />
        )}
        {!!hits.length && <Button onClick={this.onClick} />}
        {modal && <Modal onClose={this.onClose} modalImg={modal} />}
        {loading && (
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        )}
        <ToastContainer />
      </>
    );
  }
}

export default App;
