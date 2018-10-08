import React, { Component } from "react";
//import Data from "../data.json"
import { Button,  Modal } from "react-bootstrap";
import "./ImageCard.css"




export class ImageCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			isHovering: false
		}
	}

	handleClose() {
    	this.setState({ show: false });
  	}

  	handleShow() {
    	this.setState({ show: true });
  	}


	render() {
		return(
			<div>
				<img height={this.props.height} width={this.props.width} alt={this.props.card.photo} 
				  src={this.props.card.photo} onClick={ () => this.handleShow() }
		
				    />
				<Modal bsSize="large" show={this.state.show} onHide={() => this.handleClose()} keyboard closeButton="true">
					<ModalCard {...this.props}/>
          		</Modal>

          	</div>
    	)
	}
}

export default ImageCard;

const ModalCard = (props) => (
	<React.Fragment>
		<Modal.Header closeButton>
          	<Modal.Title>
          		<img src={props.card.source} alt={props.card.photo} height="50px" width="50px" />
          	</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         	<div className="modal-body">
				<div className="modal-left">
					<img src={props.card.photo} alt={props.card.photo} height="480px" width="480px" />
				</div>
				<div className="modal-right">
					<p>Created by: <img src={props.card.user_avatar} alt={props.card.photo} height="25px" width="25px" /></p>
					<p>Created On: {props.card.timestamp}</p>
					<p>Likes: { props.card.likes}</p>
					<p>Comments: { props.card.comments}</p>
					<p>Desciption: {props.card.description}</p>
				</div>
			</div>
        </Modal.Body>

        <Modal.Footer>
          	<Button bsSize="large" bsStyle="primary">Tag Products</Button>
        </Modal.Footer>
    </React.Fragment>
)
