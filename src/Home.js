import _ from 'lodash';
import React,{Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import {Segment, Rail, Ref, Sticky, Item, Divider, Dropdown, Trigger, Container, Menu, Form, Input, Grid, Image, Button, Header, Icon, Modal, SegmentInline} from 'semantic-ui-react';
import {FaBell, FaSearch, FaUserCircle} from 'react-icons/fa';
import './App.css';
import Items from './CategoryHome';
import Populars from './CategoryPopular';
import Rests from './CategoryRest';

export default class Home extends Component {
    state = {activateItem: 'none'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render(){
        const {activeItem} = this.state
        const options = [
            {
            key: 'user',
            text: (
            
        <span >
            <FaUserCircle /> <strong>Jon Snow</strong>
        </span>
        ),
        disabled: true,
        },
        { key: 'newstory', text: 'New story' },
        { key: 'stories', text: 'Stories' },
        { key: 'stats', text: 'Stats' }, 
        { key: 'bookmarks', text: 'Bookmarks' },
        { key: 'profile', text: 'Profile' },
        { key: 'settings', text: 'Settings' },
        { key: 'help', text: 'Help' },
        { key: 'signout', text: 'Sign Out' },
        ]

        const DropdownTriggerExample = () => (
            <Dropdown trigger={trigger} options={options} />
        )

        const trigger = (
            <FaUserCircle name="user"  />
        )

    //    const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        return (
            <div>
            <Container>
            <Menu secondary>
                <Menu.Item>
                <Header as='h1'>Medium</Header>
                </Menu.Item>    
                <Menu.Menu position='right'>
                <Menu.Item>
                <FaSearch name="search" onClick={this.handleItemClick} />
                </Menu.Item>
                <Menu.Item>
                <FaBell name="bell" onClick={this.handleItemClick} />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown trigger={trigger} options={options}/>
                </Menu.Item>
                </Menu.Menu>  
            </Menu>
                <nav>
                    <Menu secondary style={{overflowX: "scroll"}}>
                        {Items.map((MenuItem =>(
                            <Menu.Item name={MenuItem.name} active={activeItem===(MenuItem.name)} onClick={this.handleItemClick}/>
                        )))}
                    </Menu>
                </nav>
            </Container>
            <Grid padded="vertically" divided='vertically'>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src='https://cdn-images-1.medium.com/focal/416/151/48/80/1*0ZpcP733_k58miSe85JyRg.jpeg'height="150px" />    
                                <Header as='h2'>Twitter Users Are Brilliantly Taking Revenge on Bots That Steal Artwork</Header>
                            <p>Battling the 'I'd love to have this on a shirt!' bots.</p><br/>
                            Zulie Rane in One Zero
                            <p>Dec 4, 4 min read ⋆</p>
                        </Grid.Column>
                    <Grid.Column>
                        <Item.Group>
                            <Item stretched="vertically">
                                <Item.Image src="https://cdn-images-1.medium.com/focal/100/100/49/23/1*AGk6h5cP38POcq5tRHSvsA.jpeg" style={{height: '100px', width:'100px'}}/>
                                <Item.Content>
                                    <Header as="h4">Addiction Isn't a Sin, It's an Adaptation</Header>
                                    <Item.Content verticalAlign="bottom">
                                    <p>Anna Austin Ronan in Human Parts<br/>Nov 14, 5 min read ⋆</p>
                                    </Item.Content>
                                </Item.Content>
                            </Item>
                            <Item stretched="vertically">
                                <Item.Image src="https://cdn-images-1.medium.com/focal/100/100/55/56/1*3E0ohnwHzQtIdub4ZKriwQ.png" style={{height: '100px', width:'100px'}}/>
                                <Item.Content>
                                    <Header as="h4">I'm Dead Broke but Also Dead Set on Buying a Pair of Safety Yellow...</Header>
                                    <Item.Content verticalAlign="bottom">
                                    <p>Maylin Tu in Human Parts<br/>Nov 22, 4 min read ⋆</p>
                                    </Item.Content>
                                </Item.Content>
                            </Item>
                            <Item stretched="vertically">
                                <Item.Image src="https://cdn-images-1.medium.com/focal/100/100/52/54/1*yYP8rlvTuCML1_N9AlQOTg.jpeg" style={{height: '100px', width:'100px'}}/>
                                <Item.Content>
                                    <Header as="h4">How to Totally Escape Ad Tracking at Home</Header>
                                    <Item.Content verticalAlign="bottom">
                                    <p>Owen Williams in OneZero<br/>Dec 10, 5 min read ⋆</p>
                                    </Item.Content>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                    <Grid.Column>
                            <Image src='https://cdn-images-1.medium.com/focal/504/222/49/52/1*PWGpuXNpkASi6_Sbio7WaQ.jpeg' height="150px" />
                            <Header as='h2'>How the PlayStation Took Over the World</Header>
                            <p>Will the strategies that have powered S...</p><br/>
                            Eric Ravenscraft in OneZero
                            <p>Dec 10, 7 min read ⋆</p>
                        </Grid.Column>
                </Grid.Row>
                <div style={{display: "inlineBlock", textAlign: "right"}}><a href="###" >SEE ALL FEATURED ></a></div>

                <Grid.Row columns={3}>
                <Grid.Column width={6}>
                <div style={{position: "sticky", top: "0"}}><br/>
                    <Header as="h3">Popular on Medium</Header>
                    <Item.Group>
                            {Populars.map((Popular =>(
                            <Item stretched="vertically">
                            <Header as="h2" floated="left">{Popular.no}</Header>
                            <Item.Content>
                            <Header as="h4">{Popular.title}</Header>
                                <Item.Content verticalAlign="bottom">
                                <p>{Popular.source}<br/>{Popular.date}</p>
                                </Item.Content>
                            </Item.Content>
                            </Item>
                            )))} 
                        </Item.Group>
                        </div>
                        </Grid.Column>
                        
                    <Grid.Column width={10}>
                        <Item.Group><br/>
                            {Rests.map((Rest => (
                                <Item stretched="vertically">                            
                                <Item.Content>
                                <p>{Rest.tag}</p>
                                <Header as="h2">{Rest.title}</Header>
                                <p>{Rest.subtitle}</p>
                                <Item.Description verticalAlign="bottom">
                                <p>{Rest.source}<br/>{Rest.date}</p>    
                                </Item.Description>
                                </Item.Content>
                                <Item.Image src={Rest.img} style={{height: "150px", width: "150px"}} />
                            </Item>
                            )))}
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        );
    }
}