import _ from 'lodash';
import React, {Component, createRef} from 'react';
import {Segment, Rail, Ref, Sticky, Item, Divider, Dropdown, Trigger, Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal, SegmentInline} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';
import Registration from './Registration';


export default class HomeHeader extends Component {
    state = {activateItem: 'none'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render(){
        const options = [
            {
            key: 'user',
            text: (
                <div>
        <Item>    
            <Avatar name="Marcell Joe" size={40} round="20px" align="left" style={{marginRight: '10px'}} />
            <Item.Content>
            <strong>Marcell Jonathan</strong>
            <p>@arcljnthn</p>
            </Item.Content>
        </Item> 
            <p style={{color:"green"}}>Become a member</p>
        </div>
        ),
        disabled: false,
        },
        <Dropdown.Divider/>,
        { key: 'newstory', text: 'New story' },
        { key: 'stories', text: 'Stories' },
        { key: 'stats', text: 'Stats' },
        <Dropdown.Divider/>,
        { key: 'bookmarks', text: 'Bookmarks' },
        { key: 'profile', text: 'Profile' },
        { key: 'settings', text: 'Settings' },
        { key: 'help', text: 'Help' },
        { key: 'signout', text: 'Sign Out' },
        ]

        const DropdownTriggerExample = () => (
            <Dropdown fluid trigger={trigger} options={options} />
        )

        const trigger = (
            <Avatar name="Marcell Joe" size="40px" round="20px"  />
        )

        

        return(
            <Container>
            <Menu secondary>
                <Menu.Item>
                <Link to="/"><Header as='h1' style={{marginLeft:"0px"}}>Medium</Header></Link>
                {/* <Image src="https://medium.com/icons/monogram-mask.svg" style={{width: "35px", height: "35px"}} /> */}
                </Menu.Item>    
                <Menu.Menu position='right'>
                <Menu.Item>
                <Icon name="search"/>
                </Menu.Item>
                <Menu.Item>
                <Icon name="bell"/>
                </Menu.Item>
                <Menu.Item>
                    <Registration />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown trigger={trigger} options={options}/>
                </Menu.Item>
                </Menu.Menu>  
            </Menu>
            </Container>
            ); 
    }
}
