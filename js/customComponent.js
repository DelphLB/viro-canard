import React, { Component } from "react";
import { Button } from "react-native";

import { ViroBox, ViroFlexView, ViroText } from "react-viro";
import { StyleSheet } from "react-native";
export default class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
  }

  render() {
    return (
      <ViroFlexView
        position={[0.15, 0, 0]}
        rotation={[-90, 0, 0]}
        backgroundColor="red"
        height={0.2}
        width={0.2}
        onScroll={this._onScroll}
        padding={0}
      >
        <ViroText
          textLineBreakMode="CharWrap"
          textClipMode="ClipToBounds"
          text={this.state.text}
          textAlign="left"
          scale={[0.1, 0.1, 0.1]}
          style={styles.boldFont}
          padding={0}
          margin={0}
          width={1.5}
          height={1.5}
        />
      </ViroFlexView>
    );
  }

  _onScroll() {
    this.setState = {
      text: "the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
  }
}
var styles = StyleSheet.create({
  boldFont: {
    fontSize: 11,
  },
});

module.exports = CustomComponent;
