import React, {Component}  from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function RenderCampsite(campsite){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}


function RenderComments(comments){
    if(comments){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {
                    comments.map(comment => {
                        return (
                           <p>
                               <span> {comment.text}</span> <br />
                               <span>
                                   -- {comment.author},  
                                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}                         
                               </span>
                               
                           </p>                           
                        );
                    }) 
                                  
                }
                 <CommentForm />    
            </div>
        );
    }
}


class CommentForm extends Component{

    constructor(props){
        super(props);
        this.modal = true;
    }

    toggle = () => {
        return this.setState(!this.modal);
    }


    render(){
        return(
            <Button type="submit" color="primary">
                <i className="fa fa-pencil"></i> Submit Comment
            </Button>
        );
    }
}

function CampsiteInfo(props) {
 
    if(props.campsite){
        return(
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                </div>
            </div>
        );
    }
    
    return <div />; 
}


export default CampsiteInfo;