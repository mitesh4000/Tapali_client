import {
  Button,
  Checkbox,
  Column,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TextInput,
} from "@carbon/react";
import React from "react";

const TestingPage = () => {
  return (
    <React.Fragment>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        1
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={8} lg={8} sm={8}>
            <Tabs>
              <TabList aria-label="List of tabs">
                <Tab>Dashboard</Tab>
                <Tab>Monitoring</Tab>
                <Tab>Activity</Tab>
                <Tab disabled>Settings</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>Tab Panel 1</TabPanel>
                <TabPanel>
                  <form
                    style={{
                      margin: "2em",
                    }}
                  >
                    <legend className={`cds--label`}>Validation example</legend>
                    <Checkbox id="cb" labelText="Accept privacy policy" />
                    <Button
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                    <TextInput
                      type="text"
                      labelText="Text input label"
                      helperText="Optional help text"
                      id="text-input-1"
                    />
                  </form>
                </TabPanel>
                <TabPanel>Tab Panel 3</TabPanel>
                <TabPanel>Tab Panel 4</TabPanel>
              </TabPanels>
            </Tabs>
          </Column>
          <Column md={8} lg={8} sm={8}>
            1/4
          </Column>
        </Grid>
      </Column>
    </React.Fragment>
  );
};

export default TestingPage;
