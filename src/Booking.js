import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MenuItem, InputBase, FormControl, InputLabel, withStyles, Select } from '@material-ui/core';
import { Button } from '@material-ui/core';


export default class Booking extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            counter: 0,
            data: [{ name: "The Oval" }, { name: "PMO" }, { name: "The Corner" }],
            currentForm: {}
        }
    }
    handleSubmit = () => {

    };

    render() {
        const { value, data, currentForm } = this.state;
        return (
            <React.Fragment>
                <div className="design_container">
                    <section className="design_list_container">
                        <Typography variant="h4" className="design_list_container_header">
                            14:00 -> 16:00
                            </Typography>
                        <Divider />

                        <List>
                            {data.map((room, index) => (
                                <React.Fragment>

                                    <ListItem button key={room.name} >
                                        <div className="room_icon"></div>
                                        <ListItemText primary={room.name} />

                                    </ListItem>
                                    <Divider />
                                </React.Fragment>
                            ))}
                        </List>


                    </section>
                    <div className="container">

                        <div className="tab_container">


                        </div>
                        <div className="tab_content_container">
                            <Paper square style={{ height: "400px" }}>
                                <div className="details_design">
                                    <div className="image_wrapper">
                                        <span className="subtitle2 image_heading">
                                            Image
                                </span>
                                        {/* <image src={CoverImage} /> */}
                                        <div className="image">
                                            <div className="inner_image">
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form">
                                        <span className="subtitle2 image_heading">
                                            Date & Time of Booking:
                                        </span>

                                    </div>
                                </div>
                            </Paper>

                        </div>
                        <div className="submit_bttn_wrapper">
                            <Button className="submit_bttn" variant="contained" color="primary" onClick={(e) => this.handleSubmit(e)}>
                                Book
                        </Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

