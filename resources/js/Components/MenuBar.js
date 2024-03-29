import React, {useState} from 'react';
import {Button, Container, Grid, Text, Link, Input} from "@nextui-org/react";
import SeleSVGIcon from "./SeleSVGIcon";
import SeleButton from "./SeleButton";
import SeleLink from "./SeleLink";
import {FiSearch} from "react-icons/all";
import {usePage} from "@inertiajs/inertia-react";

export default function MenuBar({session}) {
    const {url} = usePage();
    const [enableSearch, setEnableSearch] = useState(false);

    return (
        <Container fluid="true">
            <Container fluid="true">
                <Grid.Container fluid="true" gap={2} className="menu-bar" alignItems="center">
                    <Grid xs={8} className="left-side-bar" css={{paddingLeft: '0'}}>
                        <ul className="sele-navbar">
                            <li>
                                <Link href="/">
                                    <SeleSVGIcon path="logos/sele-logo.svg" className="sele-svg-logo"/>
                                </Link>
                            </li>
                            <li className={`sele-navbar-items ${url === '/' ? 'active' : ''}`}>
                                <Link href="/" color="text">
                                    <Text className="sele-navbar-text" color="$mainBlue" size="xs" h6 weight="bold"
                                          transform="uppercase">Home</Text>
                                </Link>
                            </li>
                            <li className="sele-navbar-items">
                                <Link href="/about" color="text">
                                    <Text className="sele-navbar-text" color="$mainBlue" size="xs" h6 weight="bold"
                                          transform="uppercase">About</Text>
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    {url.includes('/login') || (
                        <Grid justify="flex-end" xs={4} className="right-side-bar" alignItems="center"
                              css={{paddingRight: '0'}}>
                            {enableSearch ? (
                                <Input
                                    size="md"
                                    placeholder="Search..."
                                    contentRightStyling={true}
                                    contentRight={<Button css={{padding: '0'}} auto color="white"
                                                          icon={<FiSearch size="1.2rem"/>}/>}
                                    onContentClick={() => setEnableSearch(false)}
                                    css={{marginRight: '1rem'}}
                                />
                            ) : (
                                <Button auto color="white" icon={<FiSearch size="1.5rem"/>}
                                        onClick={() => setEnableSearch(true)}/>
                            )}
                            <SeleLink href="/login" size="sm" color="seleBtnPrimary">
                                <SeleButton size="selePrimary" default color="selePrimary">Login</SeleButton>
                            </SeleLink>
                        </Grid>
                    )}
                </Grid.Container>
            </Container>
        </Container>
    )
}
