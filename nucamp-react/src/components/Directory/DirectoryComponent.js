import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderDirectoryItem(props){
    return(
        <Card>
            <CardImg width="100%" src={props.campsite.image} alt={props.campsite.name} />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
                    
        </Card>
    );
}

function Directory(props){

        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite}/>
                </div>
            );
        });  

        return (
            <div className="container">
                <h1>Directory</h1>
                <div className="row">
                    {directory}
                </div>
            </div> 
        );
    
}

export default Directory;