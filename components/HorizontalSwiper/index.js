import React, {Component} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  I18nManager,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import  { whiteColor  } from '../../constants/Colors';

class HorizontalSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      width: 0,
    };
    this.interval = null;
  }
  componentDidMount = () => {
    if (this.props.autoLoop)
      this.interval = setInterval(() => {
        if (this.slider) {
          this.setState(
            {
              currentIndex:
                this.state.currentIndex == this.props.data.length - 1
                  ? 0
                  : this.state.currentIndex + 1,
            },
            () => {
              this.slider.scrollToIndex({
                animated: true,
                index: this.state.currentIndex,
              });
            },
          );
        }
      }, this.props.intervalValue);
  };

  componentWillUnmount = () => {
    if (this.props.autoLoop) clearInterval(this.interval);
  };

  render() {
    return (
      <View style={{}}>
        {this.props.showButtons && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: '43%',
              left: 10,
              zIndex: 15,
              justifyContent: 'center',
            }}
            onPress={() => {
              if (this.state.currentIndex > 0 && this.slider) {
                this.setState(
                  {
                    currentIndex: this.state.currentIndex - 1,
                  },
                  () => {
                    this.slider.scrollToIndex({
                      animated: true,
                      index: this.state.currentIndex,
                    });
                  },
                );
              }
            }}>
            {this.state.currentIndex > 0 && (
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  borderRadius: 15,
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo
                  name={
                    I18nManager.isRTL
                      ? 'chevron-thin-right'
                      : 'chevron-thin-left'
                  }
                  color={whiteColor}
                  size={20}
                />
              </View>
            )}
          </TouchableOpacity>
        )}
        {this.props.showButtons && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: '43%',
              right: 10,
              zIndex: 15,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() => {
              if (
                this.state.currentIndex < this.props.data.length - 1 &&
                this.slider
              ) {
                this.setState(
                  {
                    currentIndex: this.state.currentIndex + 1,
                  },
                  () => {
                    this.slider.scrollToIndex({
                      animated: true,
                      index: this.state.currentIndex,
                    });
                  },
                );
              }
            }}>
            {this.state.currentIndex < this.props.data.length - 1 && (
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  borderRadius: 15,
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Entypo
                  name={
                    I18nManager.isRTL
                      ? 'chevron-thin-left'
                      : 'chevron-thin-right'
                  }
                  color={whiteColor}
                  size={20}
                />
              </View>
            )}
          </TouchableOpacity>
        )}
        <FlatList
          ref={(ref) => (this.slider = ref)}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          data={this.props.data}
          style={{
            flexGrow: 0,
            paddingBottom: 10,
            ...this.props.style,
          }}
          contentContainerStyle={{
            flexGrow: 0,
          }}
          initialNumToRender={this.props.data.length}
          onScroll={(e) => {
            this.onScroll(e);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={this.props.renderItem}
        />
      </View>
    );
  }

  onScroll = (e) => {
    if (I18nManager.isRTL) {
      this.setState(
        {
          currentIndex:
            e.nativeEvent.contentOffset.x / Dimensions.get('screen').width < 0.3
              ? 0
              : this.props.data.length -
                1 -
                Math.round(
                  e.nativeEvent.contentOffset.x /
                    Dimensions.get('screen').width,
                ),
        },
        () => {},
      );
    } else {
      this.setState(
        {
          currentIndex:
            e.nativeEvent.contentOffset.x / Dimensions.get('screen').width < 0.3
              ? 0
              : Math.round(
                  e.nativeEvent.contentOffset.x /
                    Dimensions.get('screen').width,
                ),
        },
        () => {},
      );
    }
  };
}

export default HorizontalSwiper;
