import { Notification, Settings, User } from "@carbon/icons-react";
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  Link,
  SideNav,
  SideNavItem,
  SkipToContent,
} from "@carbon/react";
import React, { MouseEventHandler } from "react";
import "./navbar.scss";

const Navbar = () => {
  var sidebarStatus = false;
  let openSidebar = () => {
    sidebarStatus != sidebarStatus;
  };

  return (
    <React.Fragment>
      <HeaderContainer
        render={({
          isSideNavExpanded,
          onClickSideNavExpand,
        }: {
          isSideNavExpanded: boolean;
          onClickSideNavExpand: MouseEventHandler;
        }) => (
          <Header aria-label="Carbon tutoreal">
            <SkipToContent />

            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            >
              button
            </HeaderMenuButton>
            <HeaderName href="/" prefix="welcome" onClick={openSidebar}>
              {" "}
              User
            </HeaderName>

            <HeaderNavigation aria-label="hi man">
              <HeaderMenuItem href="/">dashboard</HeaderMenuItem>
              <HeaderMenuItem href="/emails">emails</HeaderMenuItem>
              <HeaderMenuItem href="/campaigns">campaigns</HeaderMenuItem>
              <HeaderMenuItem href="/testing-page">testing-page</HeaderMenuItem>
            </HeaderNavigation>
            <SideNav
              aria-label="side navigation"
              expanded={false}
              isPersistent={false}
            >
              <SideNavItem>
                <HeaderSideNavItems>
                  <Link href="/repos" passHref legacyBehavior>
                    <HeaderMenuItem>Repositories</HeaderMenuItem>
                  </Link>
                </HeaderSideNavItems>
              </SideNavItem>
            </SideNav>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="notification"
                tooltipAlignment="center"
                className="action-icons"
              >
                <Notification></Notification>
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center"
                className="action-icons"
              >
                <User></User>
              </HeaderGlobalAction>

              <HeaderGlobalAction
                aria-label="User Avatar"
                tooltipAlignment="center"
                className="action-icons"
              >
                <Settings></Settings>
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>
        )}
      ></HeaderContainer>
    </React.Fragment>
  );
};

export default Navbar;
