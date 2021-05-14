import React, { Component } from 'react';

import {Container, Tab, Nav, Row, Col} from 'react-bootstrap/';

export default class About extends Component {
		render() {
			return (
					<Container>

						<Tab.Container id="left-tabs-example" defaultActiveKey="first">

						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column mt-2">
									<Nav.Item>
										<Nav.Link eventKey="first">Skate</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="second">Graffity</Nav.Link>
									</Nav.Item>

									<Nav.Item>
										<Nav.Link eventKey="third">BOMJ</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>

							<Col sm={9}>
								<Tab.Content className="mt-2">

									<Tab.Pane eventKey="first">
										<img className="TabImg"
											src="https://wallpapercave.com/wp/wp2593165.jpg"
										/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Architecto possimus recusandae deserunt nesciunt, excepturi commodi dolores labore vero, maxime libero.</p>
									</Tab.Pane>

									<Tab.Pane eventKey="second">
										<img className="TabImg"
											src="https://get.wallhere.com/photo/white-black-monochrome-photography-graffiti-street-art-mural-ART-tree-streetview-noiretblanc-photoderue-urbanarte-paris13-photopascalcolin-traveler-black-and-white-monochrome-photography-font-voyageur-witheandblack-visual-arts-human-behavior-832801.jpg"
										/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Architecto possimus recusandae deserunt nesciunt, excepturi commodi dolores labore vero, maxime libero.</p>
									</Tab.Pane>	

									<Tab.Pane eventKey="third">
										<img className="TabImg"
											src="https://i.ytimg.com/vi/V_L3o1xofV4/maxresdefault.jpg"
										/>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Architecto possimus recusandae deserunt nesciunt, excepturi commodi dolores labore vero, maxime libero.</p>
									</Tab.Pane>		

								</Tab.Content>	
							</Col>
						</Row>	

						</Tab.Container>	

					</Container>		
				)
		}
}