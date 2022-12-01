import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

import GridLayout from "../components/GridLayout";
import LayoutEditor from "../components/LayoutEditor";

const Dashboard = ({ data, id, layouts }) => {

  const [data2, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  // const config = {
  //   data2,
  //   xField: 'timePeriod',
  //   yField: 'value',
  //   xAxis: {
  //     range: [0, 1],
  //   },
  // };

  return (
    <div className="dashboard">
      <GridLayout data={data} data2={data2} layouts={layouts} />
      <Route exact path="/:id/layout" component={LayoutEditor} />
    </div>
  );
};

Dashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  layouts: PropTypes.object.isRequired
};

const mapStateToProps = (state, { match: { params: { id } } }) => {
  return {
    data: Object.keys(state.data),
    layouts: { ...state.layouts },
    id
  };
};

export default connect(mapStateToProps, null, null, { pure: false })(Dashboard);
