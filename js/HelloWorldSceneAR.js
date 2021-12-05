"use strict";

import React, { Component } from "react";

import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroARImageMarker,
  ViroConstants,
  ViroARTrackingTargets,
  ViroText,
  ViroVideo,
  ViroFlexView,
} from "react-viro";
import CustomComponent from "./customComponent";

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = true;

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  getNoTrackingUI() {
    return (
      <ViroText
        text="toto"
        textAlign="left"
        textAlignVertical="top"
        textLineBreakMode="justify"
        textClipMode="clipToBounds"
        color="#ff0000"
        width={2}
        height={2}
        style={{
          fontFamily: "Arial",
          fontSize: 20,
          fontWeight: 400,
          fontStyle: "italic",
          color: "#0000FF",
        }}
        position={[0, 0, -5]}
      />
    );
  }

  render() {
    console.log("ok");
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        {this.state == true ? (
          <ViroARImageMarker target={"targetOne"} opacity={0.8}>
            <CustomComponent></CustomComponent>
          </ViroARImageMarker>
        ) : (
          this.getNoTrackingUI()
        )}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    console.log(reason);
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState(true);
    } else if (state == ViroConstants.TRACKING_NONE) {
      this.setState(false);
    }
  }
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("./res/canard.jpg"),
    orientation: "Up",
    physicalWidth: 0.1, // real world width in meters
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

module.exports = HelloWorldSceneAR;
