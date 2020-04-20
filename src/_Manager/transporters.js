import React, { Component } from "react";
import "./transporters.css";
import {
  MessageCircle,
  PhoneCall,
  Tag,
  Search,
  Filter,
  Truck,
  X,
} from "react-feather";
import { Pie } from "react-chartjs-2";
import WelcomeCharts from "./undraw_statistic_chart.svg";
import { __TRANSPORTERS } from "../_Database/TRANSPORTERS";

const thisManager = {
  id: 999,
  name: "Naoufal Badou",
  city: "Taounat",
  transporters: [100, 300, 400, 500, 600],
  orders: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
};

export default class Transporters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transporters: [],
      transporter: null,
      loading: false,

      filtersBar: false,
      isSearching: "",
    };
  }
  componentDidMount() {
    // filtering array from array - method 1
    // const y = Trans.filter(
    //   (x) => thisManager.transporters.indexOf(x.id) !== -1
    // );
    // filtering array from array - method 2
    const y = __TRANSPORTERS.filter(({ id }) =>
      thisManager.transporters.includes(id)
    );

    this.setState({ transporters: y });
  }

  _switchFiltersBar() {
    this.state.filtersBar
      ? this.setState({ filtersBar: false })
      : this.setState({ filtersBar: true });
  }

  // _onSearch(e) {
  //   const keyword = !e.target.value ? null : keyword;
  //   const arr = this.state.transporters.filter(
  //     (i) => i.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
  //   );
  //   this.setState({ transporters: arr });
  // }

  onCardClick = (item) => {
    this.setState({ loading: true });
    this.setState({ transporter: item });
    this.setState({ loading: false });
  };
  render() {
    const { transporters, transporter, loading } = this.state;
    const { isSearching, filtersBar } = this.state;

    const transportersFiltred = transporters.filter(
      (tr) => tr.name.toLowerCase().indexOf(isSearching.toLowerCase()) !== -1
    );
    return (
      <>
        <div className="searchBar">
          <Filter
            color={filtersBar ? "#1d799c" : "#333"}
            size={18}
            onClick={() => this._switchFiltersBar()}
            style={{ marginRight: 15 }}
          />

          <input
            placeholder="Trouver un livreur"
            value={isSearching}
            onChange={(e) => this.setState({ isSearching: e.target.value })}
          />
          {!this.state.isSearching ? (
            <Search size={18} />
          ) : (
            <X
              size={18}
              color="red"
              onClick={(e) => this.setState({ isSearching: "" })}
            />
          )}
        </div>
        {filtersBar && <div className="filtersBar">Hi</div>}

        <div className="SliderHolder">
          {transportersFiltred.map((item) => {
            return (
              <MyTransporter
                key={item.id}
                item={item}
                press={() => this.onCardClick(item)}
              />
            );
          })}
        </div>
        {loading && <div className="welcome">loading</div>}
        {!transporter && (
          <div className="welcome">
            <img src={WelcomeCharts} alt="React Logo" height="190px" />
          </div>
        )}
        {!loading && transporter ? (
          <>
            <CardOfInformations item={transporter} />
            <CardOfDeliveries item={transporter} />
          </>
        ) : null}

        <div></div>
      </>
    );
  }
}

const MyTransporter = ({ item, press }) => {
  return (
    <div className="thing1" onClick={press}>
      <div
        className="thing1Image"
        style={{
          backgroundImage: "url('" + item.image + "')",
        }}
      ></div>

      <div className="thing1Right">
        <div className="thing1Right-name">{item.name}</div>
        <div className="thing1Right-city">{item.city}</div>
        <div className="thing1Right-buttons">
          <span className="thing1Right-btn">
            <Tag size={18} />
          </span>
          <span className="thing1Right-btn">
            <MessageCircle size={18} />
          </span>
          <span className="thing1Right-btn">
            <PhoneCall size={18} />
          </span>
        </div>
      </div>
    </div>
  );
};

const CardOfInformations = ({ item }) => {
  return (
    <div className="card">
      <div className="cardHead">
        <div className="cardHead-title">
          <Tag size={18} width="50px" />
          <span> Informations</span>
        </div>
      </div>
      <div className="cardBody" style={{ flexDirection: "column" }}>
        <div className="row1">
          <label>Nom complet</label>
          <span>{item.name}</span>
        </div>
        <div className="row1">
          <label>Téléphone</label>
          <span>06.02.88.40.45</span>
        </div>
        <div className="row1">
          <label>Ville</label>
          <span>{item.city}</span>
        </div>
      </div>
    </div>
  );
};

const CardOfDeliveries = ({ item }) => {
  const total = item.delivered + item.awaiting + item.canceled;
  const delivered_per = (item.delivered * 100) / total;
  const awaiting_per = (item.awaiting * 100) / total;
  const canceled_per = (item.canceled * 100) / total;

  return (
    <div className="card">
      <div className="cardHead">
        <div className="cardHead-title">
          <Truck size={18} width="50px" />
          <span> Total des livraisons </span>
        </div>
        <div className="cardHead-right">
          <span> {total}</span>
        </div>
      </div>
      <div className="cardBody">
        <div className="col3">
          <div className="row2">
            <label>Commandes livrées</label>
            <span>{delivered_per.toFixed(1) + "%"}</span>
            <span>{item.delivered}</span>
          </div>
          <div className="row2">
            <label>Commandes en attante</label>
            <span>{awaiting_per.toFixed(1) + "%"}</span>
            <span>{item.awaiting}</span>
          </div>
          <div className="row2">
            <label>Commandes annulé</label>
            <span>{canceled_per.toFixed(1) + "%"}</span>
            <span>{item.canceled}</span>
          </div>
          <div className="socialRow"></div>
        </div>
        <div className="col4">
          <DeliveryPie
            delivered={item.delivered}
            awaiting={item.awaiting}
            canceled={item.canceled}
          />
        </div>
      </div>
    </div>
  );
};

const DeliveryPie = ({ delivered, awaiting, canceled }) => {
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    const Delivered_bg = ctx.createLinearGradient(20, 0, 220, 0);
    Delivered_bg.addColorStop(0, "#8bc34a");
    Delivered_bg.addColorStop(0.5, "green");
    Delivered_bg.addColorStop(1, "#8bc34a");

    const Awaiting_bg = ctx.createLinearGradient(20, 0, 220, 0);
    Awaiting_bg.addColorStop(0, "#ffc107");
    Awaiting_bg.addColorStop(0.5, "orange");
    Awaiting_bg.addColorStop(1, "#ffc107");

    const Canceled_bg = ctx.createLinearGradient(20, 0, 220, 0);
    Canceled_bg.addColorStop(0, "#f44336");
    Canceled_bg.addColorStop(0.5, "red");
    Canceled_bg.addColorStop(1, "#f44336");

    return {
      labels: ["Delivered", "Awaiting", "Canceled"],
      datasets: [
        {
          color: "white",
          data: [delivered, awaiting, canceled],
          label: "Commandes",
          backgroundColor: [Delivered_bg, Awaiting_bg, Canceled_bg],
        },
      ],
    };
  };
  return (
    <Pie
      data={data}
      width={80}
      height={80}
      options={{
        layout: {
          padding: {
            left: 15,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        legend: {
          display: false,
          align: "center",
          position: "bottom",
          labels: {
            boxWidth: 10,
            usePointStyle: {
              radius: 50,
            },
          },
        },
        maintainAspectRatio: false,
        // cutoutPercentage: 0,
        // circumference: Math.PI,
      }}
    />
  );
};
