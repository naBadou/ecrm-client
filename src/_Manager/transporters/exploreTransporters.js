import React, { Component } from "react";
import Axios from "axios";
import { Colors } from "../../design/colors";
import { Dimensions } from "../../design/layout";
import { randomizeBoolean } from "../../utils/mathematics";

import {
  Search as SearchIcon,
  Grid as GridIcon,
  List as ListIcon,
  Sliders as SlidersIcon,
  MoreHorizontal,
  MoreVertical,
} from "react-feather";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const gridCardDimensions = (Dimensions.wrapperWidth - 30) / 4;
const listCardDimensions = (Dimensions.wrapperWidth - 15) / 2;

class ExploreTransporters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transporters: [],
      isGrid: true,
    };
  }
  componentDidMount() {
    Axios.get("https://reqres.in/api/users").then((res) =>
      this.setState({ transporters: res.data.data })
    );
  }

  render() {
    const { transporters, isGrid } = this.state;
    const ar2 = transporters;
    const ar3 = transporters;
    const ar4 = transporters;
    const array = [].concat(transporters, ar2, ar3, ar4);
    const dummy = {
      id: "5e993d412417ce002483f258",
      email: "transporter@ecrm.ma",
      first_name: "Transporteur",
      last_name: "d teb",
      avatar:
        "https://png.pngtree.com/element_origin_min_pic/17/09/15/6d79a9a0f7baac6f913a6306b3246240.jpg",
    };
    array.push(dummy);
    array.reverse();

    const page = {
      barWrapper: {
        boxShadow: Colors.shadows,
        background: Colors.white,
        height: 45,
        margin: "10px 0",
        borderRadius: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      },
      fetchingsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      },
    };

    return (
      <div>
        <h1>Explore</h1>
        <h2>
          Eiusmod id ipsum cillum fugiat. Cupidatat anim aute quis ipsum esse id
          reprehenderit ex proident. Non officia nostrud exercitation ad labore.
          Anim adipisicing sunt eiusmod culpa aliqua labore et reprehenderit ut
          deserunt enim. Tempor excepteur eiusmod quis ex esse culpa voluptate
          nulla aliquip sit velit aute.
        </h2>

        <div style={page.barWrapper}>
          <>
            <SearchIcon size={16} color={Colors.grey} />
            <input style={{ paddingLeft: 20 }} placeholder="searching ..." />
          </>
          <>
            <SlidersIcon size={14} color={Colors.grey} />
          </>
          <>
            <ListIcon
              style={{ marginLeft: 20 }}
              size={20}
              color={!isGrid ? Colors.default : Colors.grey}
              onClick={() => this.setState({ isGrid: false })}
            />
            <GridIcon
              size={15}
              color={isGrid ? Colors.default : Colors.grey}
              style={{ marginLeft: 5 }}
              onClick={() => this.setState({ isGrid: true })}
            />
          </>
        </div>
        <div style={page.fetchingsWrapper}>
          {array.map((transporter) => (
            <Card key={transporter.id} item={transporter} isGrid={isGrid} />
          ))}
        </div>
      </div>
    );
  }
}
const Card = ({ item, isGrid }) => {
  const isConnected = randomizeBoolean();
  const card = {
    wrapper: {
      // background: `url(${item.avatar})`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "contain",
      boxShadow: Colors.shadows,
      background: Colors.white,
      borderRadius: 4,
      width: isGrid ? gridCardDimensions : listCardDimensions,
      marginBottom: 10,
      display: "flex",
      flexDirection: isGrid ? "column" : "row",
      padding: 10,
      justifyContent: "space-between",
    },

    imageHolder: {
      display: "flex",
      flexDirection: "row",
      padding: isGrid ? "10px 10px 0 10px" : null,
      alignItems: "center",
    },
    userData: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: 15,
    },
    rigthIcon: {},

    insights: {
      display: "flex",
      flexDirection: "row",
      margin: isGrid ? "10px 0" : "0 20px",
      alignItems: "center",
    },
    insightsItem: {
      flex: 1,
      padding: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    txt1: { fontWeight: "500" },
    txt2: { fontSize: 13 },
    buttons: {
      display: "flex",
      alignItems: "center",
    },
    button1: {
      borderRadius: !isGrid && 4,
      height: isGrid ? 35 : 75,
      color: Colors.grey,
    },
  };
  return (
    <div style={card.wrapper}>
      <div style={card.imageHolder}>
        <img
          src={item.avatar}
          style={{ borderRadius: 100, height: isGrid ? 40 : 70 }}
        />
        <div style={card.userData}>
          <span style={card.txt1}>
            {item.first_name + " " + item.last_name}
          </span>
          <span style={card.txt2}>city</span>
        </div>
        {/* <div style={card.rigthIcon}>
          <MoreVertical size={20} color={Colors.default} />
        </div> */}
      </div>

      <div style={card.insights}>
        <div style={card.insightsItem} className="def-color">
          <span style={card.txt1}>2</span>
          <span style={card.txt2}>contracts</span>
        </div>
        <div style={card.insightsItem} className="def-color">
          <span style={card.txt1}>1285</span>
          <span style={card.txt2}>orders</span>
        </div>
        <div style={card.insightsItem} className="def-color">
          <span style={card.txt1}>3</span>
          <span style={card.txt2}>months</span>
        </div>
      </div>

      <div style={card.buttons}>
        <Link
          to={"/transporters/" + item.id}
          style={card.button1}
          className="def-bg"
        >
          View profil
        </Link>
      </div>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "green",
          height: gridCardDimensions * (3 / 4),
        }}
      >
        <div style={{ background: "red" }}>
          <div>ico</div>
          <div>ico</div>
          <div>ico</div>
        </div>
        <div style={{ background: "yellow" }}>
          <img
            src={item.avatar}
            alt=""
            style={{ borderRadius: 100, height: 100 }}
          />
          <div style={{ fontWeight: "700", fontSize: 16 }}>
            {item.first_name + " " + item.last_name}
          </div>
        </div>
      </div> */}

      {/* <div style={{}}>bullshit data : zones, ancienté, </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreTransporters);
